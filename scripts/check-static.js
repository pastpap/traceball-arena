import { existsSync, readFileSync } from "node:fs";

const required = [
  "public/index.html",
  "public/app.js",
  "public/styles.css",
  "public/icon.svg",
  "public/manifest.webmanifest",
  "public/sw.js",
  "public/elm.html",
  "public/elm.js",
  "src/server.js",
  "src/game.js",
  "src/elm/Main.elm",
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
const elmMain = readFileSync("src/elm/Main.elm", "utf8");
const elmDecode = readFileSync("src/elm/Board/Decode.elm", "utf8");
const elmView = readFileSync("src/elm/Board/View.elm", "utf8");
const elmTypes = readFileSync("src/elm/Board/Types.elm", "utf8");
const elmProtocol = readFileSync("src/elm/Protocol.elm", "utf8");
const gameSource = readFileSync("src/game.js", "utf8");
const serverSource = readFileSync("src/server.js", "utf8");

// ── elm.html must mount the Elm app ───────────────────────────────────────────
if (
  !elmHtml.includes('id="elm-root"') ||
  !elmHtml.includes("/elm.js") ||
  !elmHtml.includes("<title>Traceball Arena</title>") ||
  !elmHtml.includes('name="theme-color"') ||
  !elmHtml.includes('rel="apple-touch-icon"') ||
  elmHtml.includes("Elm Shell")
) {
  throw new Error(
    "Elm route HTML must mount #elm-root, load /elm.js, and use the production Traceball Arena PWA shell metadata.",
  );
}

// ── elm.js must be the slim Elm runtime bridge ────────────────────────────────
if (
  !elmBundle.includes("mountElmRuntime") ||
  !elmBundle.includes("outgoingClientCommand")
) {
  throw new Error("public/elm.js must provide the mountElmRuntime Elm bridge.");
}
if (
  !elmBundle.includes("websocketUrl") ||
  !elmBundle.includes("incomingSocketMessage") ||
  !/type:\s*["']watch["']/.test(elmBundle)
) {
  throw new Error("public/elm.js must wire WebSocket lifecycle to Elm ports.");
}
if (
  !elmBundle.includes("fetchBoardList") ||
  !elmBundle.includes("createBoard") ||
  !elmBundle.includes("updateUrl") ||
  !elmBundle.includes("persistPlayerName") ||
  !elmBundle.includes("persistOnlineMoveTimer")
) {
  throw new Error(
    "public/elm.js must handle fetchBoardList, createBoard, updateUrl, persistPlayerName, and persistOnlineMoveTimer commands.",
  );
}
if (
  !elmBundle.includes("traceballElmClientId") ||
  !elmBundle.includes("traceballPlayerName") ||
  !elmBundle.includes("traceballElmLocalRuntime")
) {
  throw new Error(
    "public/elm.js must manage client identity and local runtime snapshots via localStorage.",
  );
}
if (!elmBundle.includes("incomingBoardCreated")) {
  throw new Error(
    "public/elm.js must push incomingBoardCreated to Elm when a board is created.",
  );
}
if (!elmBundle.includes("serviceWorker")) {
  throw new Error("public/elm.js must register the service worker.");
}

// ── Elm Main module ────────────────────────────────────────────────────────────
if (
  !elmMain.includes("type alias Model") ||
  !elmMain.includes("type Msg") ||
  !elmMain.includes("update") ||
  !elmMain.includes("view")
) {
  throw new Error(
    "Elm Main module must establish Model, Msg, update, and view.",
  );
}
if (
  !elmMain.includes("incoming.version <= model.version") ||
  !elmMain.includes("ignoredStaleVersion")
) {
  throw new Error(
    "Elm Main module must explicitly ignore stale incoming state versions.",
  );
}
if (!elmMain.includes("boardList") || !elmMain.includes("onlineMoveTimer")) {
  throw new Error(
    "Elm Main model must track board list and online move timer.",
  );
}
if (
  !elmMain.includes("incomingBoardList") ||
  !elmMain.includes("incomingBoardCreated")
) {
  throw new Error(
    "Elm Main must subscribe to incomingBoardList and incomingBoardCreated ports.",
  );
}
if (
  !elmMain.includes("fetchBoardList") ||
  !elmMain.includes("createBoard") ||
  !elmMain.includes("updateUrl")
) {
  throw new Error(
    "Elm Main must emit fetchBoardList, createBoard, and updateUrl commands.",
  );
}

// ── Elm board types / decoders / view ─────────────────────────────────────────
if (
  !elmTypes.includes("type BoardState") ||
  !elmTypes.includes("type SeatState") ||
  !elmTypes.includes("type alias Board")
) {
  throw new Error("Elm board types must model board and seat states.");
}
if (
  !elmDecode.includes("boardDecoder") ||
  !elmDecode.includes("waitingList") ||
  !elmDecode.includes("watchers")
) {
  throw new Error(
    "Elm decoder module must target Phase 1 board payloads including watchers and explicit waiting list.",
  );
}
if (!elmView.includes("viewBoard") || !elmView.includes("viewBoard")) {
  throw new Error(
    "Elm view module must render a board shell with watchers and waiting list sections.",
  );
}
if (
  !elmProtocol.includes("type alias StateMessage") ||
  !elmProtocol.includes("version") ||
  !elmProtocol.includes("boardCode")
) {
  throw new Error(
    "Elm protocol module must model Phase 1 state messages with boardCode and version.",
  );
}

// ── elm.json / railway.json ───────────────────────────────────────────────────
const elmJson = JSON.parse(readFileSync("elm.json", "utf8"));
if (elmJson["source-directories"]?.[0] !== "src/elm")
  throw new Error("elm.json must compile from src/elm.");

const railway = JSON.parse(readFileSync("railway.json", "utf8"));
if (railway.deploy.healthcheckPath !== "/api/health")
  throw new Error("Railway healthcheck must be /api/health");

// ── CSS guards ────────────────────────────────────────────────────────────────
const css = readFileSync("public/styles.css", "utf8");
if (
  !css.includes(".elm-legal-target") ||
  !css.includes(".elm-legal-own-turn") ||
  !css.includes(".elm-legal-hit-area") ||
  !css.includes(".elm-legal-dot") ||
  !css.includes(".elm-board-legend")
) {
  throw new Error(
    "public/styles.css must style legal-move targets and board legend.",
  );
}
if (
  !css.includes(".elm-round-result") ||
  !css.includes(".elm-primary:disabled")
) {
  throw new Error(
    "public/styles.css must style Phase 6D between-round result panel and pending new-round button.",
  );
}
if (!css.includes("--elm-board-badge-gate-corridor-y")) {
  throw new Error(
    "Board player badges must be positioned in the gate corridor.",
  );
}
if (
  !/\.match-action-row\s*\+\s*\.match-details\s*{[\s\S]*margin-top:/.test(css)
) {
  throw new Error("Match details must have spacing below action buttons.");
}
if (
  !css.includes(".elm-disconnect-recovery") ||
  !css.includes(".elm-disconnected-seat")
) {
  throw new Error(
    "public/styles.css must style Phase 7 disconnected-seat recovery panels.",
  );
}
if (
  !css.includes(".elm-board-list") ||
  !css.includes(".elm-board-card") ||
  !css.includes(".elm-board-recovery")
) {
  throw new Error(
    "public/styles.css must style Phase 8 board list and expired-board recovery panels.",
  );
}
if (!css.includes("aspect-ratio: 720 / 920"))
  throw new Error("Board canvas must preserve its 720/920 aspect ratio.");
if (!css.includes("max-width: 720px"))
  throw new Error(
    "Board canvas must be capped so it does not over-stretch on wide screens.",
  );
if (css.includes("object-fit: contain"))
  throw new Error("Canvas must not use object-fit: contain.");
if (/#board\s*\{[^}]*max-height:/s.test(css))
  throw new Error("Canvas itself must not be max-height constrained.");
if (
  !css.includes(
    "--board-fit-width: min(100%, 720px, calc((100dvh - 315px) * 720 / 920))",
  )
) {
  throw new Error("Mobile/tablet board-stage must shrink by available height.");
}
if (!css.includes("@media (max-width: 640px)"))
  throw new Error("Mobile layout breakpoint is required.");
if (
  !css.includes("@media (max-width: 1024px)") ||
  !css.includes('body[data-mobile-page="play"] .board-card')
) {
  throw new Error(
    "Tablet-sized screens must use the mobile tab/page topology.",
  );
}
if (
  !/\.mobile-page\s*\{[\s\S]*?display:\s*none\s*!important;[\s\S]*?\}/.test(css)
)
  throw new Error("Mobile pages must be split into tabbed panels.");
if (
  !/grid-template-columns:\s*repeat\(4,\s*minmax\(0,\s*1fr\)\)/.test(css) ||
  !/\.mobile-tab\s*\{[\s\S]*?min-width:\s*0;[\s\S]*?\}/.test(css) ||
  !/\.mobile-tab[\s\S]*?white-space:\s*nowrap;/.test(css)
) {
  throw new Error("Mobile page tabs must fit on one row without wrapping.");
}
if (
  !css.includes("overflow: hidden;") ||
  !css.includes("border-radius: 24px")
) {
  throw new Error(
    "Mobile navigation/card shells must clip inside rounded cards.",
  );
}
if (
  !/\.inline-form\s+input\s*\{[\s\S]*?flex:\s*1\s+1\s+320px;[\s\S]*?min-width:\s*260px;[\s\S]*?\}/.test(
    css,
  ) ||
  !/\.inline-form\s+\.primary\s*\{[\s\S]*?flex:\s*0\s+0\s+auto;[\s\S]*?width:\s*auto;[\s\S]*?min-width:\s*170px;[\s\S]*?\}/.test(
    css,
  )
) {
  throw new Error(
    "Desktop invite-link input must keep usable width beside the Join game button.",
  );
}
if (
  !css.includes("@media (max-width: 640px)") ||
  !/\.inline-form\s+input\s*\{[\s\S]*?min-width:\s*0;[\s\S]*?\}/.test(css)
) {
  throw new Error("Mobile invite-link input must reset min-width.");
}
if (
  !/\.inline-form\s+input\s*\{[\s\S]*?flex:\s*0\s+1\s+auto;[\s\S]*?min-width:\s*0;[\s\S]*?min-height:\s*0;[\s\S]*?\}/.test(
    css,
  )
) {
  throw new Error("Mobile invite-link input must reset desktop flex-basis.");
}
if (
  !/\.mobile-page\.hidden\s*\{[\s\S]*?display:\s*none\s*!important;[\s\S]*?\}/.test(
    css,
  )
) {
  throw new Error("Hidden Home cards must stay hidden on mobile.");
}
if (!css.includes('body[data-mobile-page="play"] .board-card'))
  throw new Error("Mobile play page must prioritize the board viewport.");
if (
  !css.includes(".elm-round-result") ||
  !css.includes(".elm-primary:disabled") ||
  !css.includes(".board-stage.paused #board") ||
  !css.includes(".play-pause-button.ghost {") ||
  !css.includes("width: fit-content;")
) {
  throw new Error(
    "Pause UI must include a compact visible pause control and a blurred board overlay.",
  );
}
if (
  !/\.play-board-actions\s*\{[\s\S]*?display:\s*none;[\s\S]*?\}/.test(css) ||
  !/\.play-board-actions\s*\{[\s\S]*?display:\s*grid;[\s\S]*?grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\);[\s\S]*?\}/.test(
    css,
  ) ||
  !/\.play-leave-button\.ghost\s*\{[\s\S]*?border-color:\s*rgba\(255,\s*59,\s*48,\s*0\.82\);[\s\S]*?background:\s*rgba\(255,\s*59,\s*48,\s*0\.18\);[\s\S]*?\}/.test(
    css,
  ) ||
  !/\.play-board-actions\s+\.ghost\s*\{[\s\S]*?overflow:\s*hidden;[\s\S]*?\}/.test(
    css,
  )
) {
  throw new Error(
    "Mobile Play Leave/Forfeit and Pause controls must be compact and visibly red-accented.",
  );
}
if (!/\.blue-score\s*\{[\s\S]*?text-align:\s*right;[\s\S]*?\}/.test(css)) {
  throw new Error(
    "Match score numbers must justify inward: missing .blue-score text alignment.",
  );
}
if (!/\.red-score\s*\{[\s\S]*?text-align:\s*left;[\s\S]*?\}/.test(css)) {
  throw new Error(
    "Match score numbers must justify inward: missing .red-score text alignment.",
  );
}
for (const marker of [
  "font-variant-numeric: tabular-nums",
  "justify-self: stretch",
]) {
  if (!css.includes(marker))
    throw new Error(
      `Match score numbers must justify inward: missing ${marker}`,
    );
}
for (const marker of [
  ".online-form-stack",
  "padding: 18px",
  ".invite {",
  "padding: 16px",
  ".online-action-toggle {",
  "margin-top: 2px",
]) {
  if (!css.includes(marker))
    throw new Error(
      `Home form spacing must let sections breathe: missing ${marker}`,
    );
}
for (const marker of [
  ".board-stage {",
  "position: relative",
  ".winner-close",
  "max-height: min(58%, 430px)",
  "overflow-y: auto",
  "overflow-wrap: anywhere",
]) {
  if (!css.includes(marker))
    throw new Error(
      `Winner modal must stay centered and bounded: missing ${marker}`,
    );
}

// ── game.js guards ────────────────────────────────────────────────────────────
if (
  !gameSource.includes("export const BOARD_TTL_MS") ||
  !gameSource.includes("export function boardExpiresAt") ||
  !gameSource.includes("export function isBoardExpired")
) {
  throw new Error("src/game.js must expose Phase 8 board expiry helpers.");
}
if (
  !gameSource.includes("export function markPlayerDisconnected") ||
  !gameSource.includes("export function freeDisconnectedSeat") ||
  !gameSource.includes("disconnect-forfeit")
) {
  throw new Error(
    "Game model must support Phase 7 disconnected seat reservation.",
  );
}
if (
  !gameSource.includes("export function joinWaitingList") ||
  !gameSource.includes("export function leaveWaitingList") ||
  !gameSource.includes("removeWaitingClient")
) {
  throw new Error("Game model must support explicit waiting-list join/leave.");
}
if (
  !gameSource.includes("remainingMs") ||
  !gameSource.includes("Math.max(0, game.moveTimeLimitMs - elapsed)") ||
  !gameSource.includes("now - (game.moveTimeLimitMs - remainingMs)")
) {
  throw new Error("Pause/resume must preserve the remaining turn time.");
}

// ── server.js guards ──────────────────────────────────────────────────────────
if (
  !serverSource.includes("cleanupExpiredRooms") ||
  !serverSource.includes("elmUrl") ||
  !serverSource.includes("expiresAt") ||
  !serverSource.includes("lastActivityAt")
) {
  throw new Error(
    "src/server.js must cleanup expired rooms and expose Phase 8 board-list metadata.",
  );
}
if (
  !serverSource.includes("TRACEBALL_FRONTEND") ||
  !serverSource.includes("app.get('/legacy'") ||
  !serverSource.includes("app.get('/room/:roomId'") ||
  !serverSource.includes(
    "redirect(302, `/?board=${encodeURIComponent(roomId)}`)",
  )
) {
  throw new Error(
    "Server must expose legacy fallback routes and redirect old room links.",
  );
}
if (
  !serverSource.includes("app.get('/elm'") ||
  !serverSource.includes("elm.html")
) {
  throw new Error("Server must expose the Elm shell at /elm.");
}
if (
  !serverSource.includes("app.get('/api/rooms/:roomId'") ||
  !serverSource.includes("safeRoomId")
) {
  throw new Error("Server must expose a safe direct room lookup.");
}
if (
  !serverSource.includes("applyTurnTimeout") ||
  !serverSource.includes("scheduleRoomTimeout") ||
  !serverSource.includes("moveTimeLimitSeconds")
) {
  throw new Error("Server must enforce online move timers authoritatively.");
}

// ── app.js (legacy frontend) guards ──────────────────────────────────────────
const app = readFileSync("public/app.js", "utf8");
if (
  !app.includes("playLeaveSeat: document.querySelector") ||
  !app.includes(
    "els.playLeaveSeat?.addEventListener('click', leaveOnlineSeat)",
  ) ||
  !app.includes("els.playLeaveSeat?.classList.toggle")
) {
  throw new Error(
    "Play-page Leave / forfeit button must be selected, wired, and visibility-synced.",
  );
}
if (
  !app.includes("let leavingSeat = false") ||
  !app.includes("leavingSeat = true") ||
  !app.includes("if (leavingSeat) return") ||
  !app.includes("wantsPlayerSession = false;")
) {
  throw new Error(
    "Explicit Leave must block auto-rejoin until the user presses a join button.",
  );
}
if (!app.includes("cachedBoards = rooms")) {
  throw new Error("Lobby Watch board must cache boards.");
}
if (
  !app.includes("const TURN_MARKER_JUMP_MS = 1400") ||
  !app.includes("const TURN_MARKER_MAX_SCALE = 1.55") ||
  !app.includes("startTurnMarkerJump")
) {
  throw new Error("Turn gate ball must arc with the correct animation.");
}
if (
  !app.includes("const CONFETTI_MS = 4800") ||
  app.includes("confettiUntil = Date.now() + 3200")
) {
  throw new Error("Confetti animation must be slower.");
}
if (
  !app.includes("persistPlayerName") ||
  !app.includes("traceballPlayerName")
) {
  throw new Error("Generic player name must be persisted to localStorage.");
}
if (!app.includes("traceballClientId") || !app.includes("clientId });")) {
  throw new Error(
    "Client join messages must include a stable browser client id.",
  );
}
if (
  !app.includes("updateWinnerOverlay") ||
  !app.includes("drawWinnerGateConfetti")
) {
  throw new Error("Client must show a winner overlay and animate confetti.");
}
if (
  !app.includes("resumeRoomSession") ||
  !app.includes("wakeConnection") ||
  !app.includes("visibilitychange")
) {
  throw new Error(
    "PWA/iPhone lifecycle events must reconnect and rejoin the player session.",
  );
}
if (!/navigator\.serviceWorker\.register\((['"])\/sw\.js\1\)/.test(app))
  throw new Error("PWA service worker registration is required in app.js.");

// ── index.html guards ─────────────────────────────────────────────────────────
const html = readFileSync("public/index.html", "utf8");
if (
  !html.includes('rel="icon" href="/icon.svg"') ||
  !html.includes('rel="manifest" href="/manifest.webmanifest"')
) {
  throw new Error("Favicon and PWA manifest links are required.");
}

// ── manifest / icon / sw guards ───────────────────────────────────────────────
const manifest = JSON.parse(
  readFileSync("public/manifest.webmanifest", "utf8"),
);
if (manifest.name !== "Traceball Arena" || manifest.display !== "standalone")
  throw new Error(
    "PWA manifest must define Traceball Arena as a standalone app.",
  );
if (
  !manifest.icons?.some(
    (icon) => icon.src === "/icon.svg" && icon.purpose.includes("maskable"),
  )
) {
  throw new Error(
    "PWA manifest must reuse the Traceball icon as a maskable app icon.",
  );
}
const icon = readFileSync("public/icon.svg", "utf8");
if (!icon.includes("<svg") || !icon.includes("Traceball Arena icon"))
  throw new Error("Traceball SVG icon is required.");
const sw = readFileSync("public/sw.js", "utf8");
if (!sw.includes("self.addEventListener") || !sw.includes("CACHE_NAME"))
  throw new Error("PWA service worker shell cache is required.");
if (
  !/traceball-arena-v\d+/.test(sw) ||
  !sw.includes("SKIP_WAITING") ||
  !sw.includes("/elm.js") ||
  !sw.includes("/elm.html") ||
  !/cached\s*\|\|\s*caches\.match\((['"])\/\1\)/.test(sw)
)
  throw new Error(
    "PWA service worker must force a refresh and cache the Elm default shell.",
  );
const serviceWorker = readFileSync("public/sw.js", "utf8");
if (
  !/url\.protocol\s*!==\s*["']http:["']\s*&&\s*url\.protocol\s*!==\s*["']https:["']/.test(
    serviceWorker,
  ) ||
  !/url\.origin\s*!==\s*self\.location\.origin/.test(serviceWorker)
) {
  throw new Error(
    "Service worker must ignore extension/cross-origin requests.",
  );
}

// ── README guards ─────────────────────────────────────────────────────────────
const readme = readFileSync("README.md", "utf8");
for (const marker of [
  "## Gameplay",
  "## Technologies",
  "## Game-dev evolution",
  "## Screenshots",
  "docs/screenshots/traceball-home.svg",
  "docs/screenshots/traceball-play.svg",
]) {
  if (!readme.includes(marker))
    throw new Error(
      `README must document gameplay, technology, evolution, and screenshots: missing ${marker}`,
    );
}
for (const shot of [
  "docs/screenshots/traceball-home.svg",
  "docs/screenshots/traceball-play.svg",
]) {
  if (!existsSync(shot))
    throw new Error(`Missing README screenshot asset ${shot}`);
}

console.log("Static build checks passed.");
