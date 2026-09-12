import { existsSync, readFileSync } from "node:fs";

const required = [
  "public/styles.css",
  "public/icon.svg",
  "public/manifest.webmanifest",
  "public/sw.js",
  "public/elm.html",
  "public/elm.js",
  "public/react.html",
  "public/react-build/main.js",
  "src/server.js",
  "src/game.js",
  "src/elm/Main.elm",
  "src/elm/BoardIsland.elm",
  "src/elm/Board/Decode.elm",
  "src/elm/Board/View.elm",
  "src/elm/Board/Types.elm",
  "src/elm/Protocol.elm",
  "elm.json",
  "railway.json",
];
for (const file of required) {
  if (!existsSync(file)) throw new Error(`Missing ${file}`);
}

const elmHtml = readFileSync("public/elm.html", "utf8");
const elmBundle = readFileSync("public/elm.js", "utf8");
const reactHtml = readFileSync("public/react.html", "utf8");
const reactBundle = readFileSync("public/react-build/main.js", "utf8");
const elmMain = readFileSync("src/elm/Main.elm", "utf8");
const boardIsland = readFileSync("src/elm/BoardIsland.elm", "utf8");
const elmDecode = readFileSync("src/elm/Board/Decode.elm", "utf8");
const elmView = readFileSync("src/elm/Board/View.elm", "utf8");
const elmTypes = readFileSync("src/elm/Board/Types.elm", "utf8");
const elmProtocol = readFileSync("src/elm/Protocol.elm", "utf8");
const gameSource = readFileSync("src/game.js", "utf8");
const serverSource = readFileSync("src/server.js", "utf8");

if (
  !elmHtml.includes('id="elm-root"') ||
  !elmHtml.includes("/elm.js") ||
  !elmHtml.includes("<title>Traceball Arena</title>") ||
  elmHtml.includes('id="react-root"') ||
  elmHtml.includes("/react-build/main.js")
) {
  throw new Error("Elm shell must mount #elm-root and load /elm.js.");
}

if (
  !reactHtml.includes('id="react-root"') ||
  !reactHtml.includes('type="module"') ||
  !reactHtml.includes("/react-build/main.js") ||
  reactHtml.includes('id="elm-root"') ||
  reactHtml.includes("/elm.js")
) {
  throw new Error(
    "React shell must mount #react-root and load the built /react-build/main.js bundle.",
  );
}

if (
  !reactBundle.includes('getElementById("react-root")') ||
  !reactBundle.includes("React product shell")
) {
  throw new Error(
    "Built React bundle must target #react-root and render the hybrid shell stub.",
  );
}

if (
  !elmBundle.includes("mountElmRuntime") ||
  !elmBundle.includes("outgoingClientCommand") ||
  !elmBundle.includes("incomingBoardCreated")
) {
  throw new Error("public/elm.js must provide the Elm runtime bridge.");
}

if (
  !elmMain.includes("type alias Model") ||
  !elmMain.includes("type Msg") ||
  !elmMain.includes("incoming.version <= model.version")
) {
  throw new Error(
    "Elm Main must define model/update/view and stale-version handling.",
  );
}

if (
  !boardIsland.includes("port boardSnapshot") ||
  !boardIsland.includes("port boardMoveClicked") ||
  !boardIsland.includes("ReceiveBoardSnapshot") ||
  !boardIsland.includes("BoardClicked") ||
  !boardIsland.includes("viewBoard") ||
  !boardIsland.includes('"boardMoveClick"')
) {
  throw new Error(
    "BoardIsland must define the passive board snapshot input port and board move-click output port.",
  );
}

if (
  !elmDecode.includes("boardDecoder") ||
  !elmDecode.includes("boardFromPublicGameDecoder")
) {
  throw new Error(
    "Elm board decoder must support canonical board and raw public game payloads.",
  );
}

if (!elmView.includes("viewBoard")) {
  throw new Error("Elm board view must expose viewBoard.");
}

if (
  !elmTypes.includes("type BoardState") ||
  !elmTypes.includes("type alias Board")
) {
  throw new Error("Elm board types must define board state and board model.");
}

if (
  !elmProtocol.includes("type alias StateMessage") ||
  !elmProtocol.includes("boardFromPublicGameDecoder")
) {
  throw new Error("Elm protocol must decode raw server game payloads.");
}

if (
  !gameSource.includes("export function publicGame") ||
  !gameSource.includes("waitingList") ||
  !gameSource.includes("canBeFreed")
) {
  throw new Error(
    "Game public payload must include waiting-list and disconnect metadata.",
  );
}

if (
  !/app\.get\((['\"])\/elm\1/.test(serverSource) ||
  !/app\.get\((['\"])\/react\1/.test(serverSource) ||
  !/app\.get\((['\"])\/room\/:roomId\1/.test(serverSource) ||
  !serverSource.includes("statePayloadFromGame") ||
  !serverSource.includes("game: publicGame(game)")
) {
  throw new Error(
    "Server must preserve Elm rollback routes, add the /react shell, and broadcast raw public game payloads.",
  );
}

if (
  serverSource.includes("/legacy") ||
  serverSource.includes("TRACEBALL_FRONTEND")
) {
  throw new Error("Legacy frontend routes/toggles must be removed.");
}

const elmJson = JSON.parse(readFileSync("elm.json", "utf8"));
if (elmJson["source-directories"]?.[0] !== "src/elm") {
  throw new Error("elm.json must compile from src/elm.");
}

const railway = JSON.parse(readFileSync("railway.json", "utf8"));
if (railway.deploy.healthcheckPath !== "/api/health") {
  throw new Error("Railway healthcheck must be /api/health.");
}

const css = readFileSync("public/styles.css", "utf8");
for (const marker of [
  ".elm-legal-target",
  ".elm-board-legend",
  ".elm-board-list",
  ".elm-board-recovery",
  ".elm-disconnect-recovery",
  ".elm-board-turn-overlay",
]) {
  if (!css.includes(marker)) {
    throw new Error(
      `public/styles.css missing required Elm UI marker: ${marker}`,
    );
  }
}

const manifest = JSON.parse(
  readFileSync("public/manifest.webmanifest", "utf8"),
);
if (manifest.name !== "Traceball Arena" || manifest.display !== "standalone") {
  throw new Error(
    "PWA manifest must define Traceball Arena as a standalone app.",
  );
}

const icon = readFileSync("public/icon.svg", "utf8");
if (!icon.includes("<svg")) {
  throw new Error("PWA icon.svg is required.");
}

const sw = readFileSync("public/sw.js", "utf8");
if (
  !sw.includes("CACHE_NAME") ||
  !sw.includes("/elm.js") ||
  !sw.includes("/elm.html") ||
  !sw.includes("/react") ||
  !sw.includes("/react-build/main.js")
) {
  throw new Error(
    "Service worker must cache Elm shell and additive React shell assets.",
  );
}

if (
  !/url\.pathname\s*===\s*["']\/react-build\/main\.js["']/.test(sw) ||
  !/url\.pathname\.startsWith\(\s*["']\/react["']\s*\)/.test(sw)
) {
  throw new Error(
    "Service worker must use React-specific fallbacks instead of defaulting JS module requests to /.",
  );
}

console.log("Static build checks passed.");
