import React, { useEffect, useMemo, useRef } from "react";

function resolveElmRuntime(explicitRuntime) {
  if (explicitRuntime && typeof explicitRuntime === "object") {
    return explicitRuntime;
  }
  if (typeof window === "undefined") return null;
  return window;
}

export function buildBoardIslandFlags({
  snapshot,
  ownSeat = null,
  replayIndex = null,
  flipVertical = false,
} = {}) {
  const base =
    snapshot && typeof snapshot === "object" && !Array.isArray(snapshot)
      ? { ...snapshot }
      : {};

  return {
    ...base,
    boardCode: String(base.boardCode || ""),
    version: Number.isFinite(Number(base.version)) ? Number(base.version) : 0,
    ownSeat,
    replayIndex,
    flipVertical: Boolean(flipVertical),
  };
}

export function mountElmBoardIsland({
  node,
  snapshot,
  ownSeat,
  replayIndex,
  flipVertical,
  onMoveClick,
  elmRuntime,
} = {}) {
  const runtime = resolveElmRuntime(elmRuntime);
  const init = runtime?.Elm?.BoardIsland?.init;
  if (typeof init !== "function" || !node) {
    return {
      app: null,
      sendSnapshotUpdate: () => {},
      cleanup: () => {},
    };
  }

  const flags = buildBoardIslandFlags({
    snapshot,
    ownSeat,
    replayIndex,
    flipVertical,
  });

  const app = init({ node, flags });
  const movePort = app?.ports?.boardMoveClicked;
  const snapshotPort = app?.ports?.boardSnapshot;

  const moveHandler = (payload) => {
    if (typeof onMoveClick === "function") onMoveClick(payload);
  };

  if (typeof movePort?.subscribe === "function") {
    movePort.subscribe(moveHandler);
  }

  const sendSnapshotUpdate = (next) => {
    if (typeof snapshotPort?.send !== "function") return;
    snapshotPort.send(buildBoardIslandFlags(next));
  };

  const cleanup = () => {
    if (typeof movePort?.unsubscribe === "function") {
      movePort.unsubscribe(moveHandler);
    }
    if (typeof app?.unmount === "function") app.unmount();
  };

  return { app, sendSnapshotUpdate, cleanup };
}

export default function ElmBoard({
  snapshot,
  ownSeat,
  replayIndex,
  flipVertical,
  onMoveClick,
}) {
  const hostRef = useRef(null);
  const runtimeRef = useRef(null);
  const onMoveClickRef = useRef(onMoveClick);

  onMoveClickRef.current = onMoveClick;

  const seamProps = useMemo(
    () => ({ snapshot, ownSeat, replayIndex, flipVertical }),
    [snapshot, ownSeat, replayIndex, flipVertical],
  );

  useEffect(() => {
    runtimeRef.current = mountElmBoardIsland({
      node: hostRef.current,
      ...seamProps,
      onMoveClick: (payload) => onMoveClickRef.current?.(payload),
    });

    return () => {
      runtimeRef.current?.cleanup?.();
      runtimeRef.current = null;
    };
    // Mount once; snapshot updates flow through the dedicated boardSnapshot port.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    runtimeRef.current?.sendSnapshotUpdate?.(seamProps);
  }, [seamProps]);

  return <div ref={hostRef} data-testid="elm-board-island-host" />;
}
