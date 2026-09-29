import { spawn } from "node:child_process";
import { once } from "node:events";
import { describe, expect, it } from "vitest";

const HOST = "127.0.0.1";

function expectElmShellContract(html) {
  expect(html).toContain('id="elm-root"');
  expect(html).toContain('src="/elm-runtime.js"');
  expect(html).toContain('src="/elm.js"');
}

function expectReactShellContract(html) {
  expect(html).toContain('id="react-root"');
  expect(html).toContain('src="/board-island-runtime.js"');
  expect(html).toContain('type="module"');
  expect(html).toContain('src="/react-build/main.js"');
  expect(html).not.toContain('id="elm-root"');
}

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

describe("frontend routes", () => {
  it("serves React hybrid shell on /", async () => {
    const server = await startServer(randomPort());
    try {
      const root = await fetch(`${server.baseUrl}/`);
      const rootHtml = await root.text();
      expect(root.status).toBe(200);
      expectReactShellContract(rootHtml);
    } finally {
      await stopServer(server.child);
    }
  });

  it("serves the same React hybrid shell on /react", async () => {
    const server = await startServer(randomPort());
    try {
      const react = await fetch(`${server.baseUrl}/react`);
      const reactHtml = await react.text();
      expect(react.status).toBe(200);
      expectReactShellContract(reactHtml);
    } finally {
      await stopServer(server.child);
    }
  });

  it("keeps / and /react on the same React shell contract", async () => {
    const server = await startServer(randomPort());
    try {
      const root = await fetch(`${server.baseUrl}/`);
      const react = await fetch(`${server.baseUrl}/react`);
      const rootHtml = await root.text();
      const reactHtml = await react.text();

      expect(root.status).toBe(200);
      expect(react.status).toBe(200);
      expectReactShellContract(rootHtml);
      expectReactShellContract(reactHtml);
      expect(rootHtml).toBe(reactHtml);
    } finally {
      await stopServer(server.child);
    }
  });

  it("serves the React shell contract on /?board=ROOM123", async () => {
    const server = await startServer(randomPort());
    try {
      const root = await fetch(`${server.baseUrl}/?board=ROOM123`);
      const rootHtml = await root.text();
      expect(root.status).toBe(200);
      expectReactShellContract(rootHtml);
    } finally {
      await stopServer(server.child);
    }
  });

  it("serves Elm rollback shell on /elm", async () => {
    const server = await startServer(randomPort());
    try {
      const elm = await fetch(`${server.baseUrl}/elm`);
      const elmHtml = await elm.text();
      expect(elm.status).toBe(200);
      expectElmShellContract(elmHtml);
    } finally {
      await stopServer(server.child);
    }
  });

  it("serves the same Elm rollback shell contract on /elm?board=ROOM123", async () => {
    const server = await startServer(randomPort());
    try {
      const elm = await fetch(`${server.baseUrl}/elm?board=ROOM123`);
      const elmHtml = await elm.text();
      expect(elm.status).toBe(200);
      expectElmShellContract(elmHtml);
    } finally {
      await stopServer(server.child);
    }
  });

  it("serves the generated React bundle from the running server", async () => {
    const server = await startServer(randomPort());
    try {
      const bundle = await fetch(`${server.baseUrl}/react-build/main.js`);
      const bundleText = await bundle.text();
      expect(bundle.status).toBe(200);
      expect(bundleText).toContain("React product shell");
      expect(bundleText).toContain("react-root");
    } finally {
      await stopServer(server.child);
    }
  });

  it("serves the generated Elm runtime and bridge assets from the running server", async () => {
    const server = await startServer(randomPort());
    try {
      const runtime = await fetch(`${server.baseUrl}/elm-runtime.js`);
      const runtimeText = await runtime.text();
      expect(runtime.status).toBe(200);
      expect(runtimeText).toContain("_Platform_export");

      const bridge = await fetch(`${server.baseUrl}/elm.js`);
      const bridgeText = await bridge.text();
      expect(bridge.status).toBe(200);
      expect(bridgeText).toContain("mountElmRuntime");
    } finally {
      await stopServer(server.child);
    }
  });

  it("redirects /room/:roomId to the React default shell board query", async () => {
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

  it("redirects /elm/room/:roomId to the Elm rollback board query", async () => {
    const server = await startServer(randomPort());
    try {
      const response = await fetch(`${server.baseUrl}/elm/room/ROOM123`, {
        redirect: "manual",
      });
      expect(response.status).toBe(302);
      expect(response.headers.get("location")).toBe("/elm?board=ROOM123");
    } finally {
      await stopServer(server.child);
    }
  });

  it("does not expose removed /legacy routes", async () => {
    const server = await startServer(randomPort());
    try {
      const legacy = await fetch(`${server.baseUrl}/legacy`, {
        redirect: "manual",
      });
      expect(legacy.status).toBe(404);

      const legacyRoom = await fetch(`${server.baseUrl}/legacy/room/ROOM123`, {
        redirect: "manual",
      });
      expect(legacyRoom.status).toBe(404);
    } finally {
      await stopServer(server.child);
    }
  });
});
