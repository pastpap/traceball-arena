# Elm compile/deployed-source checkpoint

Verified 2026-10-02. Scope: staging only; production unchanged.

## Verified source and build

- Branch: feature/full-elm-ui-replace.
- Revision: f82af633dd8373164157b577422924abb9b11aec (includes application changes through a34df80).
- Deployment: 2d61fde9-a0ef-48ed-939b-77748e98eef4.
- Railway createdAt: 2026-10-02T21:35:25.170Z; status SUCCESS, instance RUNNING.
- Build logs: npm run build executed; Elm dependency verification succeeded; `Success! Compiled 21 modules.`
- Elm make produced /tmp/traceball-elm-compile-check.js, then public/elm-runtime.js.
- Logs explicitly report `Elm source compile check passed.` and `Elm runtime bundle generated at public/elm-runtime.js.`

## Verified deployed artifact

URL: https://traceball-arena-elm-staging-staging.up.railway.app

- SSH read-back of RAILWAY_GIT_COMMIT_SHA matches f82af633dd8373164157b577422924abb9b11aec.
- Container SHA-256 of public/elm-runtime.js matches the externally fetched asset:
  `128b8412961705e8fe5fd2cb83d7966c1e8359120c420251fa34b67f0b75af6a`.
- Externally served runtime: 716413 bytes; contains compiled Game.Screen.viewMobileTopCard symbol.
- / and /elm both return HTTP 200 and load /elm-runtime.js before /elm.js.
- /api/health, /elm.js, /elm-runtime.js return HTTP 200.
- Live /ws WebSocket handshake passes (no room creation/mutation).

This establishes current revision -> successful actual Elm compilation -> generated runtime -> exact publicly served asset. No compile defect or fallback deployment was found; no build/deployment configuration change was required for this checkpoint. The build script still permits a compiler-missing fallback, so future deploys must inspect compile evidence; current success does not enforce future compiler presence.

## Remaining device smoke / blocker

Desktop/mobile gameplay smoke is NOT verified by the HTTP, hash, or WebSocket checks above. Tried Playwright using Debian ARM64 Chromium under local proot (normal and single-process/no-zygote launch). Browser closed before page creation in both attempts. No page interaction or screenshot succeeded. Temporary exploratory script removed; no staging container package installation or production changes performed.

Before calling the full checkpoint complete, run on a supported browser environment or actual devices:
- local and online play, legal move rendering;
- pause/resume ownership;
- replay navigation;
- seat join/leave;
- timer controls;
- winner and new round flows;
- desktop and mobile layouts.

Do not proceed to E9b automatically from this evidence-only task. The compile/artifact portion is verified; device smoke remains outstanding.
