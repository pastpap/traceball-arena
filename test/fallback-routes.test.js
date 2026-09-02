import { spawn } from "node:child_process";
import { once } from "node:events";
import { describe, expect, it } from "vitest";

const HOST = "127.0.0.1";

function randomPort() {
  return 5300 + Math.floor(Math.random() * 1200);
}

async function startServer(port, extraEnv = {}) {
  const child = spawn(process.execPath, ["src/server.js"], {
    cwd: process.cwd(),
    env: { ...process.env, PORT: String(port), ...extraEnv },
    stdio: ["ignore", "pipe", "pipe"],
  });

  let output = "";
  child.stdout.on("data", (chunk) => {
    output += chunk.toString();
  });
  child.stderr.on("data", (chunk) => {
    output += chunk.toString();
  });

  const baseUrl = `http://${HOST}:${port}`;
  for (let i = 0; i < 80; i += 1) {
    if (child.exitCode != null) {
      throw new Error(`server exited early: ${output}`);
    }
    try {
      const response = await fetch(`${baseUrl}/api/health`);
      if (response.ok) return { child, baseUrl };
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 50));
  }

  child.kill("SIGTERM");
  throw new Error(`server did not become ready: ${output}`);
}

async function stopServer(child) {
  if (!child || child.exitCode != null) return;
  child.kill("SIGTERM");
  await Promise.race([
    once(child, "exit"),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]);
  if (child.exitCode == null) child.kill("SIGKILL");
}

describe("legacy frontend fallback routes", () => {
  it("serves Elm shell on / and legacy shell on /legacy by default", async () => {
    const server = await startServer(randomPort());
    try {
      const root = await fetch(`${server.baseUrl}/`);
      const rootHtml = await root.text();
      expect(root.status).toBe(200);
      expect(rootHtml).toContain('id="elm-root"');

      const legacy = await fetch(`${server.baseUrl}/legacy`);
      const legacyHtml = await legacy.text();
      expect(legacy.status).toBe(200);
      expect(legacyHtml).toContain('id="playerNameInput"');
    } finally {
      await stopServer(server.child);
    }
  });

  it("forces legacy shell on / when TRACEBALL_FRONTEND=legacy", async () => {
    const server = await startServer(randomPort(), {
      TRACEBALL_FRONTEND: "legacy",
    });
    try {
      const root = await fetch(`${server.baseUrl}/`);
      const rootHtml = await root.text();
      expect(root.status).toBe(200);
      expect(rootHtml).toContain('id="playerNameInput"');
      expect(rootHtml).not.toContain('id="elm-root"');
    } finally {
      await stopServer(server.child);
    }
  });

  it("redirects /room/:roomId to board query in Elm mode", async () => {
    const server = await startServer(randomPort());
    try {
      const response = await fetch(`${server.baseUrl}/room/ROOM123`, {
        redirect: "manual",
      });
      expect(response.status).toBe(302);
      expect(response.headers.get("location")).toBe("/?board=ROOM123");
    } finally {
      await stopServer(server.child);
    }
  });

  it("serves legacy room shell on /room/:roomId and /legacy/room/:roomId in legacy mode", async () => {
    const server = await startServer(randomPort(), {
      TRACEBALL_FRONTEND: "legacy",
    });
    try {
      const room = await fetch(`${server.baseUrl}/room/ROOM123`);
      const roomHtml = await room.text();
      expect(room.status).toBe(200);
      expect(roomHtml).toContain('id="playerNameInput"');

      const legacyRoom = await fetch(`${server.baseUrl}/legacy/room/ROOM123`);
      const legacyRoomHtml = await legacyRoom.text();
      expect(legacyRoom.status).toBe(200);
      expect(legacyRoomHtml).toContain('id="playerNameInput"');
    } finally {
      await stopServer(server.child);
    }
  });
});
