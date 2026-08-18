import { existsSync, readFileSync } from 'node:fs';

const required = ['public/index.html', 'public/app.js', 'public/styles.css', 'public/icon.svg', 'public/manifest.webmanifest', 'public/sw.js', 'public/elm.html', 'public/elm.js', 'src/server.js', 'src/game.js', 'src/elm/Main.elm', 'src/elm/Board/Decode.elm', 'src/elm/Board/View.elm', 'src/elm/Board/Types.elm', 'src/elm/Protocol.elm', 'elm.json', 'railway.json'];
for (const file of required) {
  if (!existsSync(file)) throw new Error(`Missing ${file}`);
}

const elmHtml = readFileSync('public/elm.html', 'utf8');
const elmBundle = readFileSync('public/elm.js', 'utf8');
const elmMain = readFileSync('src/elm/Main.elm', 'utf8');
const elmDecode = readFileSync('src/elm/Board/Decode.elm', 'utf8');
const elmView = readFileSync('src/elm/Board/View.elm', 'utf8');
const elmTypes = readFileSync('src/elm/Board/Types.elm', 'utf8');
const elmProtocol = readFileSync('src/elm/Protocol.elm', 'utf8');
const gameSource = readFileSync('src/game.js', 'utf8');
const serverSource = readFileSync('src/server.js', 'utf8');
if (!elmHtml.includes('id="elm-root"') || !elmHtml.includes('/elm.js') || !elmHtml.includes('<title>Traceball Arena</title>') || !elmHtml.includes('name="theme-color"') || !elmHtml.includes('rel="apple-touch-icon"') || elmHtml.includes('Elm Shell')) {
  throw new Error('Elm route HTML must mount #elm-root, load /elm.js, and use the production Traceball Arena PWA shell metadata.');
}
if (!elmBundle.includes('TraceballElmShell') || !elmBundle.includes('board-active-session.json')) {
  throw new Error('public/elm.js must provide the minimal Elm-shell runtime and load a Phase 1 fixture.');
}
if (!elmBundle.includes('createSocketBridge') || !/type:\s*["']watch["']/.test(elmBundle) || !elmBundle.includes('traceballElmClientId') || !elmBundle.includes('websocketUrl')) {
  throw new Error('public/elm.js must bridge the Elm shell to WebSocket watch flow with stable clientId handoff.');
}
if (!elmBundle.includes('createBoardAsBlue') || !/type:\s*["']claimSeat["']/.test(elmBundle) || !/type:\s*["']joinWaitingList["']/.test(elmBundle) || !/type:\s*["']leaveWaitingList["']/.test(elmBundle) || !elmBundle.includes('Leave seat / forfeit') || elmBundle.includes('Join Game')) {
  throw new Error('public/elm.js must expose Phase 5 board-centric seating/waiting-list actions without a generic Join Game flow.');
}
if (/autoJoinSingleVacantSeat\(bridge\)/.test(elmBundle)) {
  throw new Error('Watching a board must stay seatless; Elm shell must not auto-claim the only vacant seat.');
}
if (!elmBundle.includes('renderReadOnlyBoard') || !elmBundle.includes('data-elm-board-svg') || !elmBundle.includes('viewBox="0 0 900 1300"') || !elmBundle.includes('data-elm-legal-move') || !elmBundle.includes('data-elm-segment') || !elmBundle.includes('Phase 6C board')) {
  throw new Error('public/elm.js must render the Phase 6C SVG board with traced segments and context-aware legal-move targets.');
}
if (!elmBundle.includes('data-elm-legal-context') || !elmBundle.includes('data-elm-legal-playable') || !elmBundle.includes('own-turn') || !elmBundle.includes('opponent-turn') || !elmBundle.includes('Watching: legal moves are preview only.')) {
  throw new Error('public/elm.js must expose Phase 6B legal-move context markers for own turn, opponent turn, and watcher previews.');
}
if (!elmBundle.includes('submitMoveFromLegalTarget') || !elmBundle.includes('wireBoardMoveTargets') || !/type:\s*["']move["']/.test(elmBundle) || !elmBundle.includes('data-elm-pending-move')) {
  throw new Error('public/elm.js must support Phase 6C own-turn legal-target move submission with pending-move markers.');
}
if (!elmBundle.includes('renderRoundResult') || !elmBundle.includes('data-elm-round-result') || !elmBundle.includes('data-elm-round-actions') || !/type:\s*["']reset["']/.test(elmBundle) || !elmBundle.includes('Continue / New Round')) {
  throw new Error('public/elm.js must support Phase 6D between-round result UI and new-round reset command.');
}
if (!elmBundle.includes('renderDisconnectedSeatRecovery') || !elmBundle.includes('data-elm-disconnected-seat') || !elmBundle.includes('data-elm-disconnect-actions') || !/type:\s*["']freeSeat["']/.test(elmBundle) || !elmBundle.includes('Make seat available')) {
  throw new Error('public/elm.js must support Phase 7 disconnected-seat recovery UI and freeSeat command.');
}
if (!elmBundle.includes('renderBoardList') || !elmBundle.includes('loadBoardList') || !elmBundle.includes('data-elm-board-list') || !elmBundle.includes('data-elm-board-recovery') || !elmBundle.includes('/api/rooms')) {
  throw new Error('public/elm.js must support Phase 8 board list and expired/not-found recovery UI.');
}
if (!gameSource.includes('export const BOARD_TTL_MS') || !gameSource.includes('export function boardExpiresAt') || !gameSource.includes('export function isBoardExpired')) {
  throw new Error('src/game.js must expose Phase 8 board expiry helpers.');
}
if (!serverSource.includes('cleanupExpiredRooms') || !serverSource.includes('elmUrl') || !serverSource.includes('expiresAt') || !serverSource.includes('lastActivityAt')) {
  throw new Error('src/server.js must cleanup expired rooms and expose Phase 8 board-list metadata.');
}
if (!gameSource.includes('export function markPlayerDisconnected') || !gameSource.includes('export function freeDisconnectedSeat') || !gameSource.includes('disconnect-forfeit')) {
  throw new Error('Game model must support Phase 7 disconnected seat reservation and free-after-grace forfeit handling.');
}
if (!gameSource.includes('export function joinWaitingList') || !gameSource.includes('export function leaveWaitingList') || !gameSource.includes('removeWaitingClient')) {
  throw new Error('Game model must support explicit waiting-list join/leave and remove clients from waiting when seated.');
}
if (!elmMain.includes('type alias Model') || !elmMain.includes('type Msg') || !elmMain.includes('update') || !elmMain.includes('view')) {
  throw new Error('Elm Main module must establish Model, Msg, update, and view.');
}
if (!elmMain.includes('incoming.version <= model.version') || !elmMain.includes('ignoredStaleVersion')) {
  throw new Error('Elm Main module must explicitly ignore stale incoming state versions.');
}
if (!elmTypes.includes('type BoardState') || !elmTypes.includes('type SeatState') || !elmTypes.includes('type alias Board')) {
  throw new Error('Elm board types must model board and seat states.');
}
if (!elmDecode.includes('boardDecoder') || !elmDecode.includes('waitingList') || !elmDecode.includes('watchers')) {
  throw new Error('Elm decoder module must target Phase 1 board payloads including watchers and explicit waiting list.');
}
if (!elmView.includes('viewBoard') || !elmView.includes('Waiting list') || !elmView.includes('Watchers')) {
  throw new Error('Elm view module must render a board shell with watchers and waiting list sections.');
}
if (!elmProtocol.includes('type alias StateMessage') || !elmProtocol.includes('version') || !elmProtocol.includes('boardCode')) {
  throw new Error('Elm protocol module must model Phase 1 state messages with boardCode and version.');
}
const elmJson = JSON.parse(readFileSync('elm.json', 'utf8'));
if (elmJson['source-directories']?.[0] !== 'src/elm') throw new Error('elm.json must compile from src/elm.');

const railway = JSON.parse(readFileSync('railway.json', 'utf8'));
if (railway.deploy.healthcheckPath !== '/api/health') throw new Error('Railway healthcheck must be /api/health');

const css = readFileSync('public/styles.css', 'utf8');
if (!css.includes('.elm-legal-own-turn') || !css.includes('.elm-legal-opponent-turn') || !css.includes('.elm-legal-watcher') || !css.includes('.elm-board-legend')) {
  throw new Error('public/styles.css must style Phase 6B legal-move readability states and legend.');
}
if (!css.includes('.elm-round-result') || !css.includes('.elm-primary:disabled')) {
  throw new Error('public/styles.css must style Phase 6D between-round result panel and pending new-round button.');
}
if (!css.includes('.elm-disconnect-recovery') || !css.includes('.elm-disconnected-seat')) {
  throw new Error('public/styles.css must style Phase 7 disconnected-seat recovery panels.');
}
if (!css.includes('.elm-board-list') || !css.includes('.elm-board-card') || !css.includes('.elm-board-recovery')) {
  throw new Error('public/styles.css must style Phase 8 board list and expired-board recovery panels.');
}
if (!css.includes('aspect-ratio: 720 / 920')) throw new Error('Board canvas must preserve its 720/920 aspect ratio.');
if (!css.includes('max-width: 720px')) throw new Error('Board canvas must be capped so it does not over-stretch on wide screens.');
if (css.includes('object-fit: contain')) throw new Error('Canvas must not use object-fit: contain because it letterboxes the visual bitmap inside a larger click box.');
if (/#board\s*\{[^}]*max-height:/s.test(css)) throw new Error('Canvas itself must not be max-height constrained; constrain the board-stage width instead so hit testing and pixels share one box.');
if (!css.includes('--board-fit-width: min(100%, 720px, calc((100dvh - 315px) * 720 / 920))')) {
  throw new Error('Mobile/tablet board-stage must shrink by available height while preserving the 720/920 clickable box.');
}
if (!css.includes('@media (max-width: 640px)')) throw new Error('Mobile layout breakpoint is required.');
if (!css.includes('@media (max-width: 1024px)') || !css.includes('body[data-mobile-page="play"] .board-card')) {
  throw new Error('Tablet-sized screens must use the same mobile tab/page topology as phones.');
}
if (!css.includes('.mobile-page { display: none !important; }')) throw new Error('Mobile pages must be split into tabbed panels.');
if (!css.includes('grid-template-columns: repeat(4, minmax(0, 1fr))') || !css.includes('.mobile-tab { min-width: 0;') || !css.includes('white-space: nowrap;')) {
  throw new Error('Mobile page tabs must fit Home/Boards/Play/Match on one row inside the nav card without wrapping or overflowing.');
}
if (!css.includes('overflow: hidden;') || !css.includes('border-radius: 24px')) {
  throw new Error('Mobile navigation/card shells must clip their tab contents inside rounded cards.');
}
if (!css.includes('.inline-form input { flex: 1 1 320px; min-width: 260px; }') || !css.includes('.inline-form .primary { flex: 0 0 auto; width: auto; min-width: 170px; }')) {
  throw new Error('Desktop invite-link input must keep usable width beside the Join game button.');
}
if (!css.includes('@media (max-width: 640px)') || !css.includes('.inline-form input { min-width: 0; }')) {
  throw new Error('Mobile invite-link input must reset min-width so the form can stack cleanly.');
}
if (!css.includes('.inline-form input { flex: 0 1 auto; min-width: 0; min-height: 0; }')) {
  throw new Error('Mobile invite-link input must reset desktop flex-basis so it does not become a tall text box.');
}
if (!css.includes('.mobile-page.hidden { display: none !important; }')) {
  throw new Error('Hidden Home cards must stay hidden on mobile even when they also have mobile-page active.');
}
if (!css.includes('body[data-mobile-page="play"] .board-card')) throw new Error('Mobile play page must prioritize the board viewport.');

const html = readFileSync('public/index.html', 'utf8');
if (!html.includes('data-page-target="play"') || !html.includes('data-mobile-page="invite"') || !html.includes('data-mobile-page="match"')) {
  throw new Error('Mobile page navigation markup is required.');
}
const homeTab = html.indexOf('>Home</button>');
const playTab = html.indexOf('data-page-target="play"');
const matchTab = html.indexOf('data-page-target="match"');
if (!(homeTab >= 0 && homeTab < playTab && playTab < matchTab)) throw new Error('Mobile tabs must be ordered Home, Play, Match.');
if (html.includes('>Invite</button>')) throw new Error('Invite tab must be renamed to Home.');
if (!html.includes('board-replay replay')) throw new Error('Replay controls must live with the board.');
if (!html.includes('id="playLeaveSeat"')) {
  throw new Error('Play board page must include its own Leave / forfeit button.');
}
if (!html.includes('class="boards-kicker"') || !html.includes('Server lobby') || !html.includes('Join, watch, or leave a live board.')) {
  throw new Error('Boards page header copy must be concise and polished.');
}
if (html.includes('Pick a board to watch, or claim an open Blue/Red seat.')) {
  throw new Error('Boards page must not use the old awkward wrapping helper text.');
}
if (html.includes('class="board-help"')) throw new Error('Play page must not spend vertical board space on a separate bottom helper message.');
if (/\.play-status\s*\{[^}]*display:\s*block/s.test(css)) throw new Error('Play page must use one visible top status line, not a separate play-status banner.');
if (!css.includes('white-space: nowrap') || !css.includes('text-overflow: ellipsis')) {
  throw new Error('The single board status line must stay compact and one-line.');
}
if (!html.includes('score-strip') || !html.includes('p1Score') || !html.includes('p2Score')) {
  throw new Error('Match card must render the traced name/score/name layout.');
}
if (html.includes('modeSelect') || html.includes('Choose game type') || html.includes('How do you want to play?')) {
  throw new Error('Do not render a separate choose-game-type explainer card.');
}
if (html.includes('id="startLocalSetup"') || html.includes('>Start local game</button>')) {
  throw new Error('Top-level Start local game button must be removed; Local belongs in the Home selector.');
}
const heroStart = html.indexOf('<section class="hero">');
const navStart = html.indexOf('<nav class="mobile-nav"');
const heroHtml = html.slice(heroStart, navStart);
if (heroHtml.includes('Create online game') || heroHtml.includes('Start local game') || heroHtml.includes('class="actions"')) {
  throw new Error('Hero/top area must not contain Create online game or Start local game buttons.');
}
const navEnd = html.indexOf('</nav>', navStart);
const modeToggle = html.indexOf('id="homeModeToggle"');
const joinPanel = html.indexOf('id="joinPanel"');
const localPanel = html.indexOf('id="localPanel"');
if (!(navEnd < modeToggle && modeToggle < joinPanel && joinPanel < localPanel)) {
  throw new Error('Home Online/Local selector must sit directly under the Home/Play/Match navigation and above the swapped cards.');
}
if (!html.includes('data-home-mode="online"') || !html.includes('data-home-mode="local"')) {
  throw new Error('Home selector must offer Online and Local options.');
}
if (!html.includes('id="onlineActionToggle"') || !html.includes('data-online-action="new"') || !html.includes('data-online-action="incoming"')) {
  throw new Error('Online card must split New game and Incoming game into linked sub-tabs.');
}
if (!html.includes('id="playerNameInput"') || !html.includes('id="newGamePanel"') || !html.includes('id="existingGamePanel"')) {
  throw new Error('Online card must have one generic persisted player-name input shared by both online tabs.');
}
if (!html.includes('id="generateRoom"') || !html.includes('>Generate</button>')) {
  throw new Error('New game tab must contain a Generate button that creates an online room.');
}
if (!html.includes('id="joinGeneratedRoom"') || !html.includes('>Join generated game</button>')) {
  throw new Error('New game tab must reintroduce an explicit Join button after Generate so invite copying stays on Home.');
}
if (!html.includes('id="winnerOverlay"') || !html.includes('class="winner-card"') || !html.includes('Winner')) {
  throw new Error('Play board must include a golden winner modal overlay.');
}
if (!html.includes('id="existingRoomForm"') || !html.includes('id="existingRoomInput"') || !html.includes('>Join game</button>')) {
  throw new Error('Online card must allow safely joining an existing game by pasted invite link or room code.');
}
if (html.includes('id="newRoom"') || html.includes('id="joinForm"')) {
  throw new Error('Online actions must not use the old mixed New game/Join form layout.');
}
if (!html.includes('localPanel') || !html.includes('startLocal')) {
  throw new Error('Local selector must reveal the local setup card.');
}
if (!html.includes('localP1Name') || !html.includes('localP2Name')) {
  throw new Error('Local PvP setup must collect both face-to-face player names.');
}
if (!html.includes('copyInviteCard')) throw new Error('Copy invite button must live inside the Join this match card.');
if (html.includes('id="copyInvite"')) throw new Error('Top-level copy invite button must be removed.');
if (!serverSource.includes("app.get('/elm'") || !serverSource.includes("elm.html")) {
  throw new Error('Server must expose the Elm shell at /elm for direct compatibility links.');
}
if (!serverSource.includes('TRACEBALL_FRONTEND') || !serverSource.includes("app.get('/legacy'") || !serverSource.includes("app.get('/legacy/room/:roomId'") || !serverSource.includes("app.get('/room/:roomId'") || !serverSource.includes('redirect(302, `/?board=${encodeURIComponent(roomId)}`)') || !serverSource.includes('return `${base}/?board=${encodeURIComponent(roomId)}`;')) {
  throw new Error('Phase 9 must make the Elm shell the default app route, preserve /legacy fallback routes, redirect old room links to root board links, and keep a TRACEBALL_FRONTEND=legacy rollback flag.');
}
if (!html.includes('rel="icon" href="/icon.svg"') || !html.includes('rel="manifest" href="/manifest.webmanifest"')) {
  throw new Error('Favicon and PWA manifest links are required.');
}

const app = readFileSync('public/app.js', 'utf8');
if (!app.includes('playLeaveSeat: document.querySelector') || !app.includes("els.playLeaveSeat?.addEventListener('click', leaveOnlineSeat)") || !app.includes('els.playLeaveSeat?.classList.toggle')) {
  throw new Error('Play-page Leave / forfeit button must be selected, wired, and visibility-synced with the Match leave button.');
}
if (!html.includes('id="playClaimP1"') || !html.includes('id="playClaimP2"') || !app.includes('playClaimP1: document.querySelector') || !app.includes("els.playClaimP1?.addEventListener('click', () => claimOnlineSeat('p1'))") || !app.includes('els.playClaimP1?.classList.toggle')) {
  throw new Error('Play board must expose Join Blue/Join Red controls for mobile watchers, not only the Match tab.');
}
if (!app.includes('let leavingSeat = false') || !app.includes('leavingSeat = true') || !app.includes('if (leavingSeat) return') || !app.includes('wantsPlayerSession = false;')) {
  throw new Error('Explicit Leave must keep the browser as a watcher and block auto-rejoin until the user presses a join button.');
}
const openLobbyStart = app.indexOf('function openLobbyBoard(nextRoomId)');
const openLobbyEnd = app.indexOf('function claimOnlineSeat', openLobbyStart);
const openLobbySection = openLobbyStart >= 0 && openLobbyEnd > openLobbyStart ? app.slice(openLobbyStart, openLobbyEnd) : '';
if (!app.includes('cachedBoards = rooms') || !openLobbySection.includes('Board opened for watching. Choose an open seat when you want to play.') || openLobbySection.includes('claimOnlineSeat(')) {
  throw new Error('Lobby Watch board must open the board as a watcher only; explicit Join Blue/Join Red buttons claim seats.');
}
if (!app.includes('sessionTimeText(entry)') || !app.includes('entry.finalScore') || !app.includes('formatHistoryDate(entry.endedAt') || !app.includes('formatHistoryDate(entry.startedAt')) {
  throw new Error('Server board session history must show saved session score plus start/end date-times.');
}
if (!app.includes('ctx.rect(innerLeft, insetTop, innerRight - innerLeft, insetBottom - insetTop)') || !app.includes('ctx.clip()')) {
  throw new Error('Goal net mesh must be clipped inside the gate side frames.');
}
if (!app.includes('const dirX = p.x ? 1 : -1') || !app.includes('Math.hypot(poleVector.x, poleVector.y)') || !app.includes('ctx.moveTo(baseA.x, baseA.y)') || !app.includes('ctx.lineTo(baseB.x, baseB.y)') || !app.includes('flagNormal.x * dirX < 0')) {
  throw new Error('Corner flags must keep the original outward-leaning pole positions and hang on the outside face of the angled pole.');
}
if (!app.includes('function isGateMouthBouncePoint') || !app.includes("gateBounce ? '#050505'") || !html.includes('black gate-mouth dot') || !html.includes('already a bounce point')) {
  throw new Error('Gate-mouth center bounce dots must be visually black and explained in the rules.');
}
if (!app.includes('const MOVE_HINT_ALPHA = 1') || !app.includes('const MOVE_HINT_FADE_IN_MS = 650') || !app.includes('legalMoveHintStartedAt') || !app.includes('startLegalMoveHintFade') || !app.includes('legalMoveHintColor') || !app.includes("gameMode === 'local' ? currentPlayerColor(game.turn) : '#ffe66d'")) {
  throw new Error('Legal-move hint circles must fade in once, use blue/red only in local same-screen mode, and keep yellow hints online.');
}
if (app.includes('MOVE_HINT_PULSE_MS') || app.includes('animateLegalMoveHints') || app.includes('requestLegalMoveHintFrame') || app.includes('now % MOVE_HINT')) {
  throw new Error('Legal-move hint circles must not pulse continuously after they have appeared.');
}
if (!html.includes('>Incoming game</button>') || html.includes('>Existing game</button>') || !app.includes("setOnlineAction('incoming')") || !app.includes('prefillIncomingInviteFromUrl') || !app.includes('generateRandomPlayerName') || !app.includes('updateInviteVisibility')) {
  throw new Error('Home Online flow must use Incoming game naming, deep-link to Incoming with prefilled invite input, randomize empty player names, and hide invites outside New game.');
}
if (!app.includes('const TURN_MARKER_JUMP_MS = 1400') || !app.includes('const TURN_MARKER_MAX_SCALE = 1.55') || !app.includes('const scale = 1 + Math.sin(Math.PI * t)') || !app.includes('drawTurnMarker(x, y, color, scale)') || !app.includes('startTurnMarkerJump') || !app.includes('drawTurnMarkerJump') || !app.includes('mixPlayerColors')) {
  throw new Error('Turn gate ball must arc more slowly and grow toward mid-board before shrinking at the other gate.');
}
if (!app.includes('const CONFETTI_MS = 4800') || app.includes('confettiUntil = Date.now() + 3200')) {
  throw new Error('Celebration/confetti animation must be slower so players can understand the result.');
}
if (!app.includes("els.inviteLink.addEventListener('focus', copyInviteFromField)") || !app.includes("els.inviteLink.addEventListener('pointerdown', copyInviteFromField)")) {
  throw new Error('Invite link field must copy on focus/press.');
}
if (!app.includes("playerId === 'p2'") || !app.includes('applyBoardTransform') || !app.includes('ctx.rotate(Math.PI)') || !app.includes('boardSpacePoint')) {
  throw new Error('Board view must rotate the renderer and invert click hit-testing for the second player.');
}
if (!app.includes('drawTurnGateBall') || !app.includes('ownGateMarginY') || !app.includes('Math.max(leftPost.x, rightPost.x) + 34')) {
  throw new Error('Current-turn gate ball marker must be drawn on the right side of the active gate.');
}
if (!html.includes('id="onlineMoveTimer"') || !html.includes('id="localMoveTimer"') || !html.includes('5 seconds') || !html.includes('30 seconds')) {
  throw new Error('Move timer setup must offer off, 5, 10, 15, 20, and 30 second levels for online and local games.');
}
if (!app.includes('function drawMoveClock') || !app.includes('function drawSevenSegmentDigit') || !app.includes('turnClockSpot') || !app.includes('Math.min(leftPost.x, rightPost.x) - 54')) {
  throw new Error('Move timer must render as a retro digital clock on the opposite side of the active gate marker.');
}
if (!app.includes('selectedMoveTimerSeconds') || !app.includes('moveTimeLimitSeconds') || !app.includes('expireLocalTurnIfNeeded')) {
  throw new Error('Client must create rooms/local games with configurable move timers and enforce local timeouts.');
}
if (!html.includes('id="pauseOverlay"') || !html.includes('id="playPauseGame"') || !html.includes('⏸') || !css.includes('.board-stage.paused #board') || !css.includes('.play-pause-button.ghost {') || !css.includes('width: fit-content;')) {
  throw new Error('Pause UI must include a compact visible Play-page pause control and a blurred board overlay.');
}
if (!css.includes('grid-template-columns: repeat(2, minmax(0, 1fr));') || !css.includes('.play-pause-button.ghost { grid-column: 1 / -1;') || !css.includes('max-width: 180px;') || !css.includes('overflow: hidden;')) {
  throw new Error('Mobile Play Join Blue/Join Red/Pause controls must use a two-column grid with a centered compact Pause button that cannot overflow.');
}
if (!html.includes('id="appMenuButton"') || !html.includes('id="appMenuDropdown"') || !html.includes('id="appContentOverlay"') || !html.includes('data-menu-view="history"') || !html.includes('data-menu-view="rules"') || !html.includes('id="appMenuHistory"') || !html.includes('id="appMenuRules"') || html.includes('id="historyList"') || css.includes('.play-pause-button { display: block;') || !app.includes('openAppContent')) {
  throw new Error('Mobile app menu must be a dropdown first, then open separate History/Rules content windows outside the Match tab.');
}
if (!css.includes('align-items: start;') || !css.includes('padding-top: max(14px, env(safe-area-inset-top));') || css.includes('.app-content-overlay { padding: 10px; align-items: end; }')) {
  throw new Error('Mobile Rules/History content overlay must open near the top safe area, not as a bottom-aligned sheet.');
}
if (!app.includes('scheduleLocalTurnTimeout') || !app.includes('localTimeoutTimer') || !app.includes('Both players timed out. Game paused.')) {
  throw new Error('Local mode must schedule idle timeout auto-pause without waiting for a board click.');
}
if (!html.includes('If time expires, no line is drawn') || !html.includes('each move or bounce gets a fresh clock')) {
  throw new Error('Rules must explain timer resets and timeout turn-passing.');
}
if (!app.includes('drawGatePlayerLabels') || !app.includes('drawGoalMesh') || !app.includes("game.score?.[id]")) {
  throw new Error('Gate labels, light in-gate mesh, and room score rendering are required.');
}
if (!app.includes('traceballClientId') || !app.includes('clientId });')) {
  throw new Error('Client join messages must include a stable browser client id for reconnects.');
}
if (!app.includes('function setReplay(index)') || !app.includes('if (replayIndex === null) {') || !app.includes('syncClockAnimation();') || !app.includes('startLegalMoveHintFade')) {
  throw new Error('Returning replay to live must restart clock animation and legal-move hint drawing immediately.');
}
if (!app.includes('replayIndex >= game.moves.length') || !app.includes('replayIndex = null;')) {
  throw new Error('Incoming live/new-round state must clear replay mode when the replay cursor is at or beyond the live end.');
}
const drawMoveClockBody = app.slice(app.indexOf('function drawMoveClock()'), app.indexOf('function drawSevenSegmentNumber'));
const shouldAnimateClockBody = app.slice(app.indexOf('function shouldAnimateClock()'), app.indexOf('function showInvite'));
const drawLegalMovesBody = app.slice(app.indexOf('function drawLegalMoves()'), app.indexOf('function legalMoveHintColor'));
if (drawMoveClockBody.includes('replayIndex !== null') || shouldAnimateClockBody.includes('replayIndex === null') || drawLegalMovesBody.includes('replayIndex !== null')) {
  throw new Error('Live countdown and legal-move hints must remain visible/animated while only the board path is replayed.');
}
if (!gameSource.includes('remainingMs') || !gameSource.includes('Math.max(0, game.moveTimeLimitMs - elapsed)') || !gameSource.includes('now - (game.moveTimeLimitMs - remainingMs)')) {
  throw new Error('Pause/resume must preserve the remaining turn time instead of resetting the timer.');
}
if (!app.includes('pause.remainingMs') || !app.includes('resumeLocalTurnClock')) {
  throw new Error('Local pause/resume must preserve remaining timer time.');
}
if (!app.includes('resumeRoomSession') || !app.includes('wakeConnection') || !app.includes('visibilitychange')) {
  throw new Error('PWA/iPhone lifecycle events must reconnect and rejoin the player session.');
}
if (!app.includes("navigator.serviceWorker.register('/sw.js')")) throw new Error('PWA service worker registration is required.');
const serviceWorker = readFileSync('public/sw.js', 'utf8');
if (!serviceWorker.includes("url.protocol !== 'http:' && url.protocol !== 'https:'") || !serviceWorker.includes('url.origin !== self.location.origin')) {
  throw new Error('Service worker must ignore extension/cross-origin requests before fetch/cache handling.');
}
if (!serviceWorker.includes("response.type !== 'basic'") || !serviceWorker.includes('event.waitUntil(caches.open(CACHE_NAME)')) {
  throw new Error('Service worker may only persist safe same-origin responses and must keep cache writes alive.');
}
if (!app.includes('setOnlineAction') || !app.includes('joinOnlinePlayer') || !app.includes("setMobilePage('play')")) {
  throw new Error('Client must switch online sub-tabs and navigate final online actions to Play.');
}
if (!app.includes('joinGeneratedRoom') || !app.includes('joinGeneratedGame') || app.includes("createRoom(data.roomId") || !app.includes("setMobilePage('invite')")) {
  throw new Error('Generate must stay on Home and only the explicit generated-room Join action may navigate to Play.');
}
if (!app.includes('updateWinnerOverlay') || !app.includes('drawWinnerGateConfetti') || !app.includes('confettiUntil') || !app.includes('requestAnimationFrame')) {
  throw new Error('Client must show a winner overlay and animate confetti over the winner gate.');
}
if (!html.includes('id="winnerNewRound"') || !app.includes('winnerNewRound: document.querySelector') || !app.includes("els.winnerNewRound.addEventListener('click', resetRound)") || !css.includes('.winner-new-round') || !css.includes('pointer-events: auto')) {
  throw new Error('Winner banner must include a clickable New Round button wired to resetRound.');
}
if (!html.includes('class="board-stage"') || !html.includes('id="winnerClose"') || !app.includes('winnerClose: document.querySelector') || !app.includes("els.winnerClose.addEventListener('click', dismissWinnerOverlay)") || !app.includes('dismissedWinnerKey') || !app.includes('function dismissWinnerOverlay')) {
  throw new Error('Winner modal must be dismissable and centered over the board stage instead of the whole card.');
}
for (const marker of ['.board-stage {', 'position: relative', '.winner-close', 'max-height: min(58%, 430px)', 'overflow-y: auto', 'overflow-wrap: anywhere']) {
  if (!css.includes(marker)) throw new Error(`Winner modal must stay centered and bounded for long winner names: missing ${marker}`);
}
if (!app.includes('function winnerOwnGateY') || !app.includes("return winnerId === 'p1' ? 12 : 0") || app.includes("const winnerGateY = game.winner === 'p1' ? 0 : 12")) {
  throw new Error('Winner confetti must anchor to the winner’s own gate, not the gate they scored into.');
}
if (!app.includes('persistPlayerName') || !app.includes('traceballPlayerName') || !app.includes('playerNameInput.value = playerName')) {
  throw new Error('Generic player name must be initialized from and persisted to localStorage.');
}
if (!app.includes('parseRoomInput') || !app.includes('joinExistingRoom') || !app.includes('/api/rooms/') || !app.includes('input.length > 200')) {
  throw new Error('Client must safely parse pasted invite links/codes, cap input length, and check room existence before navigation.');
}
if (!app.includes('url.origin !== location.origin') || !app.includes('/^[A-Za-z0-9_-]{6,32}$/')) {
  throw new Error('Pasted room links must be same-origin and room codes must use a strict allowlist.');
}
if (!app.includes("gameMode = 'local'") || !app.includes('setHomeMode') || !app.includes('startLocalGame') || !app.includes('makeLocalMove')) {
  throw new Error('Client app must support an Online/Local Home selector and local same-screen PvP without WebSockets.');
}
if (!app.includes("return gameMode !== 'local' && playerId === 'p2'")) {
  throw new Error('Local same-screen PvP must keep a static board; only online red-player view may rotate.');
}
if (app.includes("gameMode === 'local' ? game?.turn === 'p2'")) {
  throw new Error('Local PvP must not rotate the pitch by active turn.');
}
if (!app.includes('Local same-screen PvP') || !app.includes('Players face each other')) {
  throw new Error('Local PvP UI copy must explain static face-to-face same-screen play.');
}

const manifest = JSON.parse(readFileSync('public/manifest.webmanifest', 'utf8'));
if (manifest.name !== 'Traceball Arena' || manifest.display !== 'standalone') throw new Error('PWA manifest must define Traceball Arena as a standalone app.');
if (!manifest.icons?.some((icon) => icon.src === '/icon.svg' && icon.purpose.includes('maskable'))) {
  throw new Error('PWA manifest must reuse the Traceball icon as a maskable app icon.');
}
const icon = readFileSync('public/icon.svg', 'utf8');
if (!icon.includes('<svg') || !icon.includes('Traceball Arena icon')) throw new Error('Traceball SVG icon is required.');
const sw = readFileSync('public/sw.js', 'utf8');
if (!sw.includes('self.addEventListener') || !sw.includes('CACHE_NAME')) throw new Error('PWA service worker shell cache is required.');
if (!sw.includes('traceball-arena-v34') || !sw.includes('SKIP_WAITING') || !sw.includes('/history.js') || !sw.includes('/elm.js') || !sw.includes('/elm.html') || !sw.includes("cached || caches.match('/')")) throw new Error('PWA service worker must force a Phase 9 app-shell refresh, cache the Elm default shell, preserve legacy assets, and fall back to the cached default route.');

for (const marker of ['.online-form-stack', 'padding: 18px', '.invite {', 'padding: 16px', '.online-action-toggle {', 'margin-top: 2px']) {
  if (!css.includes(marker)) throw new Error(`Home form spacing must let name/action/invite sections breathe: missing ${marker}`);
}
for (const marker of ['.blue-score { text-align: right; }', '.red-score { text-align: left; }', 'font-variant-numeric: tabular-nums', 'justify-self: stretch']) {
  if (!css.includes(marker)) throw new Error(`Match score numbers must justify inward around the center dash: missing ${marker}`);
}

const readme = readFileSync('README.md', 'utf8');
for (const marker of ['## Gameplay', '## Technologies', '## Game-dev evolution', '## Screenshots', 'docs/screenshots/traceball-home.svg', 'docs/screenshots/traceball-play.svg']) {
  if (!readme.includes(marker)) throw new Error(`README must document gameplay, technology, evolution, and screenshots: missing ${marker}`);
}
for (const shot of ['docs/screenshots/traceball-home.svg', 'docs/screenshots/traceball-play.svg']) {
  if (!existsSync(shot)) throw new Error(`Missing README screenshot asset ${shot}`);
}

const server = readFileSync('src/server.js', 'utf8');
if (!server.includes("app.get('/api/rooms/:roomId'") || !server.includes('safeRoomId')) {
  throw new Error('Server must expose a safe direct room lookup for pasted links/codes.');
}
if (!server.includes('applyTurnTimeout') || !server.includes('scheduleRoomTimeout') || !server.includes('moveTimeLimitSeconds')) {
  throw new Error('Server must enforce online move timers authoritatively and accept room timer configuration.');
}

console.log('Static build checks passed.');
