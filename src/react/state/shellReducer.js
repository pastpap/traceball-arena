export function createInitialShellState({
  clientId = "",
  playerName = "",
  connectionStatus = "idle",
  currentBoardCode = "",
  boardState = null,
  boardList = [],
  mainTab = "home",
  mode = "online",
  toast = null,
  onlineMoveTimer = 15,
  localMoveTimer = 15,
  historyPanelOpen = false,
  rulesPanelOpen = false,
} = {}) {
  return {
    clientId,
    playerName,
    connectionStatus,
    currentBoardCode,
    boardState,
    boardList,
    mainTab,
    mode,
    toast,
    onlineSetup: {
      moveTimeLimitSeconds: onlineMoveTimer,
    },
    localSetup: {
      moveTimeLimitSeconds: localMoveTimer,
    },
    historyPanelOpen,
    rulesPanelOpen,
  };
}

function shouldAcceptBoardState(
  currentBoardCode,
  currentBoardState,
  nextBoardState,
) {
  if (!nextBoardState || typeof nextBoardState !== "object") return false;

  const activeBoardCode = String(currentBoardCode || "").trim();
  const nextCode = String(nextBoardState.boardCode || "").trim();
  if (activeBoardCode && nextCode && activeBoardCode !== nextCode) return false;

  if (!currentBoardState || typeof currentBoardState !== "object") return true;

  const currentCode = String(currentBoardState.boardCode || "").trim();
  if (!currentCode || currentCode !== nextCode) return true;

  const currentVersion = Number(currentBoardState.version);
  const nextVersion = Number(nextBoardState.version);
  if (!Number.isFinite(currentVersion)) return true;
  if (!Number.isFinite(nextVersion)) return false;

  return nextVersion > currentVersion;
}

export function shellReducer(state, action) {
  if (!action || typeof action !== "object") return state;

  switch (action.type) {
    case "hydrateShell":
      return { ...state, ...action.payload };

    case "setPlayerName":
      return { ...state, playerName: String(action.playerName || "") };

    case "setConnectionStatus":
      return { ...state, connectionStatus: String(action.status || "idle") };

    case "setCurrentBoardCode":
      return { ...state, currentBoardCode: String(action.boardCode || "") };

    case "receiveBoardState": {
      if (
        !shouldAcceptBoardState(
          state.currentBoardCode,
          state.boardState,
          action.boardState,
        )
      ) {
        return state;
      }
      return {
        ...state,
        boardState: action.boardState,
        currentBoardCode: String(
          action.boardState?.boardCode || state.currentBoardCode || "",
        ),
      };
    }

    case "receiveBoardList":
      return {
        ...state,
        boardList: Array.isArray(action.boardList)
          ? action.boardList
          : Array.isArray(action.boardList?.rooms)
            ? action.boardList.rooms
            : [],
      };

    case "setMainTab":
      return { ...state, mainTab: String(action.mainTab || state.mainTab) };

    case "setMode":
      return { ...state, mode: String(action.mode || state.mode) };

    case "setToast":
      return { ...state, toast: action.toast ?? null };

    case "setHistoryPanelOpen":
      return { ...state, historyPanelOpen: Boolean(action.open) };

    case "setRulesPanelOpen":
      return { ...state, rulesPanelOpen: Boolean(action.open) };

    case "setOnlineMoveTimer":
      return {
        ...state,
        onlineSetup: {
          ...state.onlineSetup,
          moveTimeLimitSeconds: Number(action.seconds),
        },
      };

    case "setLocalMoveTimer":
      return {
        ...state,
        localSetup: {
          ...state.localSetup,
          moveTimeLimitSeconds: Number(action.seconds),
        },
      };

    default:
      return state;
  }
}
