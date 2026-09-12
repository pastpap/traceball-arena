function requireFetch(fetchImpl) {
  if (typeof fetchImpl !== "function") {
    throw new Error("Fetch API unavailable.");
  }
  return fetchImpl;
}

async function readJson(response) {
  return response.json();
}

export async function fetchBoardList(
  clientId,
  { fetchImpl = globalThis.fetch } = {},
) {
  const fetcher = requireFetch(fetchImpl);
  const response = await fetcher(
    `/api/rooms?clientId=${encodeURIComponent(String(clientId || "").trim())}`,
    { cache: "no-store" },
  );
  if (!response.ok) {
    throw new Error(`Board list request failed: ${response.status}`);
  }
  return readJson(response);
}

export async function createBoard(
  { clientId, moveTimeLimitSeconds },
  { fetchImpl = globalThis.fetch } = {},
) {
  const fetcher = requireFetch(fetchImpl);
  const seconds = Number(moveTimeLimitSeconds);
  const payload = {
    clientId: String(clientId || "").trim(),
    moveTimeLimitSeconds: Number.isFinite(seconds) ? seconds : 15,
  };
  const response = await fetcher("/api/rooms", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error(`Board creation failed: ${response.status}`);
  }
  return readJson(response);
}

export async function deleteBoard(
  { roomId, clientId },
  { fetchImpl = globalThis.fetch } = {},
) {
  const fetcher = requireFetch(fetchImpl);
  const response = await fetcher(
    `/api/rooms/${encodeURIComponent(String(roomId || "").trim())}?clientId=${encodeURIComponent(String(clientId || "").trim())}`,
    { method: "DELETE" },
  );
  if (!response.ok) {
    let message = `Board delete failed: ${response.status}`;
    try {
      const body = await response.json();
      if (typeof body?.error === "string" && body.error) message = body.error;
    } catch {}
    throw new Error(message);
  }
  return readJson(response);
}
