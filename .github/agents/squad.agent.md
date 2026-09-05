---
name: squad
description: Traceball Arena AI development squad entry point. Route work through the Traceball Orchestrator and specialist agents.
---

# Traceball Arena Squad

This is the repo-local entry point for agent-assisted Traceball Arena development.

Start here when you want help from the project squad inside an IDE.

## Squad roster

- **Traceball Orchestrator** — `.github/agents/traceball-orchestrator.agent.md`
  - Point of entry for Stefan's tasks and questions.
  - Breaks work into phases and routes specialist review.

- **State Architect** — `.github/agents/traceball-state-architect.agent.md`
  - Board/session/seat lifecycle and invariants.

- **Elm Frontend** — `.github/agents/traceball-elm-frontend.agent.md`
  - Elm app architecture, decoders, views, frontend state.

- **Realtime Backend** — `.github/agents/traceball-realtime-backend.agent.md`
  - Node backend, WebSocket protocol, timers, reconnects.

- **QA Mobile** — `.github/agents/traceball-qa-mobile.agent.md`
  - Tests, smoke checks, mobile/iOS regressions, staging verification.

## Required project docs

All agents should ground decisions in:

- `docs/architecture/board-state-machine.md`
- `docs/architecture/elm-rewrite-phases.md`
- `docs/architecture/realtime-protocol-phase1.md`

## How to use this squad

For normal development, ask the Orchestrator first. Example prompts:

```text
Use the Traceball Orchestrator. I want to implement Phase 1 protocol fixtures. Make a plan before editing.
```

```text
Use the State Architect to review this proposed leave/disconnect behavior against the board state machine.
```

```text
Use the QA Mobile agent to design WebSocket smoke tests for disconnect grace and waiting-list opt-in.
```

## Working agreement

- Prefer plans before multi-file changes.
- Keep changes small and reviewable.
- Update architecture docs when product state rules change.
- Run tests/build before claiming done.
- Use staging for `elm-rewrite` verification.
- Do not treat watchers as waiting-list members unless they explicitly opt in.
