export function websocketUrl(
  locationLike = globalThis.window?.location || globalThis.location,
) {
  const protocol = locationLike?.protocol === "https:" ? "wss:" : "ws:";
  const host = locationLike?.host || "localhost";
  return `${protocol}//${host}/ws`;
}

export function connectBoardSocket({
  roomId,
  clientId,
  onMessage,
  onStatus,
  WebSocketImpl = globalThis.window?.WebSocket || globalThis.WebSocket,
  socketUrl = websocketUrl(),
} = {}) {
  if (typeof WebSocketImpl !== "function") {
    throw new Error("WebSocket unavailable.");
  }

  const socket = new WebSocketImpl(socketUrl);

  socket.onopen = () => {
    onStatus?.("connected");
    socket.send(
      JSON.stringify({
        type: "watch",
        roomId: String(roomId || "").trim(),
        clientId: String(clientId || "").trim(),
      }),
    );
  };

  socket.onmessage = (event) => {
    try {
      onMessage?.(JSON.parse(event.data));
    } catch {
      onMessage?.({ type: "error", error: "malformed websocket message" });
    }
  };

  socket.onerror = () => {
    onStatus?.("error");
  };

  socket.onclose = () => {
    onStatus?.("disconnected");
  };

  return {
    socket,
    send(command) {
      socket.send(JSON.stringify(command));
    },
    close() {
      socket.close?.();
    },
  };
}
