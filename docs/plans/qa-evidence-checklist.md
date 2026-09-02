# QA Evidence Checklist for Production Trial Smoke

Date: 2026-09-02

Use this checklist during the manual browser pass. Capture one screenshot per row for each device/browser under test, then attach the files to the final decision note.

## Device matrix

- Desktop Chrome
- Desktop Safari
- iPhone Safari
- Android Chrome

## Evidence by scenario

| Scenario              | Desktop Chrome | Desktop Safari | iPhone Safari | Android Chrome | Notes                                              |
| --------------------- | -------------- | -------------- | ------------- | -------------- | -------------------------------------------------- |
| Home tab loads        |                |                |               |                | Capture home page with persisted player name.      |
| Boards tab loads      |                |                |               |                | Show board list and refresh state.                 |
| Create/open board     |                |                |               |                | Show room created and board code visible.          |
| Play tab active board |                |                |               |                | Show board, turn, and player labels.               |
| Match tab metadata    |                |                |               |                | Show match details panel with role/watcher state.  |
| Pause ownership       |                |                |               |                | Show pause overlay visible only to pause owner.    |
| Timeout behavior      |                |                |               |                | Show board after first timeout, then paused state. |
| Replay controls       |                |                |               |                | Show replay step-through and return to live board. |
| Winner overlay        |                |                |               |                | Show winner banner and new-round button.           |
| PWA refresh behavior  |                |                |               |                | Show version/cache proof and refreshed shell.      |
| Legacy fallback       |                |                |               |                | Show /legacy and TRACEBALL_FRONTEND=legacy route.  |

## Screenshot naming convention

Use filenames like:

- `qa-home-desktop-chrome.png`
- `qa-home-iphone-safari.png`
- `qa-match-android-chrome.png`
- `qa-winner-desktop-safari.png`

## Acceptance rule

The trial can proceed only if each row above has a matching screenshot or an explicit reason why that browser/device is not available for the current pass. Unavailable devices must be called out as a risk, not silently skipped.
