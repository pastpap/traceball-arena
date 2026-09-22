import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import App from "../src/react/App.jsx";
import { AppMenu } from "../src/react/components/AppMenu.jsx";
import { RulesPanel } from "../src/react/components/RulesPanel.jsx";
import { HistoryPanel } from "../src/react/components/HistoryPanel.jsx";
import { createInitialShellState } from "../src/react/state/shellReducer.js";

function collectHostElements(node, type, results = []) {
  if (Array.isArray(node)) {
    node.forEach((child) => collectHostElements(child, type, results));
    return results;
  }

  if (!node || typeof node !== "object") return results;

  if (node.type === type) {
    results.push(node);
  }

  const children = node.props?.children;
  const list = Array.isArray(children) ? children : [children];
  list.forEach((child) => collectHostElements(child, type, results));
  return results;
}

function buttonByText(element, text) {
  return collectHostElements(element, "button").find((button) => {
    const children = button.props?.children;
    const label = Array.isArray(children)
      ? children.join("")
      : String(children || "");
    return label.trim().toLowerCase() === text.trim().toLowerCase();
  });
}

describe("React shell menu + panels", () => {
  it("opens lightweight menu choices from the menu button", () => {
    const onToggle = vi.fn();

    const closedMenu = AppMenu({
      menuOpen: false,
      onToggle,
      onSelectRules: vi.fn(),
      onSelectHistory: vi.fn(),
    });

    const toggleButton = collectHostElements(closedMenu, "button")[0];
    toggleButton.props.onClick();

    expect(onToggle).toHaveBeenCalledWith(true);

    const openMarkup = renderToStaticMarkup(
      React.createElement(AppMenu, {
        menuOpen: true,
        onToggle: vi.fn(),
        onSelectRules: vi.fn(),
        onSelectHistory: vi.fn(),
      }),
    );

    expect(openMarkup).toContain("Rules");
    expect(openMarkup).toContain("History");
  });

  it("opens Rules panel content only after choosing Rules and includes core rules", () => {
    const onSelectRules = vi.fn();

    const menu = AppMenu({
      menuOpen: true,
      onToggle: vi.fn(),
      onSelectRules,
      onSelectHistory: vi.fn(),
    });

    const rulesButton = buttonByText(menu, "Rules");
    rulesButton.props.onClick();
    expect(onSelectRules).toHaveBeenCalledTimes(1);

    const html = renderToStaticMarkup(
      React.createElement(RulesPanel, {
        open: true,
        onClose: vi.fn(),
      }),
    );

    expect(html).toContain("one-step movement");
    expect(html).toContain("cannot reuse a segment");
    expect(html).toContain("bounce");
    expect(html).toContain("visited");
    expect(html).toContain("opponent gate");
    expect(html).toContain("Own goal");
    expect(html).toContain("No legal moves");
    expect(html).toContain("server-authoritative");
  });

  it("opens History panel after choosing History", () => {
    const onSelectHistory = vi.fn();

    const menu = AppMenu({
      menuOpen: true,
      onToggle: vi.fn(),
      onSelectRules: vi.fn(),
      onSelectHistory,
    });

    const historyButton = buttonByText(menu, "History");
    historyButton.props.onClick();

    expect(onSelectHistory).toHaveBeenCalledTimes(1);

    const html = renderToStaticMarkup(
      React.createElement(HistoryPanel, {
        open: true,
        localHistoryCount: 2,
        onClose: vi.fn(),
      }),
    );

    expect(html).toContain("History replay will move here next");
    expect(html).toContain("Local snapshots available: 2");
  });

  it("keeps both panels closeable", () => {
    const onCloseRules = vi.fn();
    const onCloseHistory = vi.fn();

    const rulesPanel = RulesPanel({
      open: true,
      onClose: onCloseRules,
    });
    const rulesClose = buttonByText(rulesPanel, "Close");
    rulesClose.props.onClick();

    const historyPanel = HistoryPanel({
      open: true,
      localHistoryCount: 0,
      onClose: onCloseHistory,
    });
    const historyClose = buttonByText(historyPanel, "Close");
    historyClose.props.onClick();

    expect(onCloseRules).toHaveBeenCalledTimes(1);
    expect(onCloseHistory).toHaveBeenCalledTimes(1);
  });

  it("does not dump full rules content before selecting Rules", () => {
    const html = renderToStaticMarkup(
      React.createElement(App, {
        initialState: createInitialShellState({
          clientId: "traceball-elm-abc123",
          playerName: "Ada",
          onlineMoveTimer: 25,
          mainTab: "play",
        }),
      }),
    );

    expect(html).toContain("Menu");
    expect(html).not.toContain("one-step movement");
    expect(html).not.toContain("cannot reuse a segment");
    expect(html).not.toContain("server-authoritative");
  });
});
