import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import {
  ShareControls,
  buildReactBoardShareUrl,
  buildReactBoardQrSrc,
  copyBoardLink,
} from "../src/react/components/ShareControls.jsx";

function renderShareControls(props) {
  return renderToStaticMarkup(React.createElement(ShareControls, props));
}

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

describe("React board sharing controls", () => {
  it("builds share URL from current location origin and React board route", () => {
    expect(
      buildReactBoardShareUrl("ROOM123", {
        locationLike: {
          href: "https://traceball.example/elm?board=OLD999",
        },
      }),
    ).toBe("https://traceball.example/react?board=ROOM123");
  });

  it("uses navigator.clipboard.writeText when available", async () => {
    const writeText = vi.fn(async () => {});

    const result = await copyBoardLink({
      boardCode: "ROOM123",
      locationLike: { href: "https://traceball.example/react" },
      navigatorLike: { clipboard: { writeText } },
      documentLike: null,
    });

    expect(writeText).toHaveBeenCalledWith(
      "https://traceball.example/react?board=ROOM123",
    );
    expect(result).toEqual({
      ok: true,
      text: "https://traceball.example/react?board=ROOM123",
    });
  });

  it("uses the textarea execCommand fallback when clipboard API is unavailable", async () => {
    const textarea = {
      value: "",
      setAttribute: vi.fn(),
      style: {},
      select: vi.fn(),
      focus: vi.fn(),
      remove: vi.fn(),
    };
    const appendChild = vi.fn();
    const removeChild = vi.fn();
    const execCommand = vi.fn(() => true);

    const result = await copyBoardLink({
      boardCode: "ROOM123",
      locationLike: { href: "https://traceball.example/react" },
      navigatorLike: {},
      documentLike: {
        body: { appendChild, removeChild },
        createElement: vi.fn(() => textarea),
        execCommand,
      },
    });

    expect(execCommand).toHaveBeenCalledWith("copy");
    expect(appendChild).toHaveBeenCalledWith(textarea);
    expect(removeChild).toHaveBeenCalledWith(textarea);
    expect(result).toEqual({
      ok: true,
      text: "https://traceball.example/react?board=ROOM123",
    });
  });

  it("returns a controlled failure when clipboard and fallback copy both fail", async () => {
    const result = await copyBoardLink({
      boardCode: "ROOM123",
      locationLike: { href: "https://traceball.example/react" },
      navigatorLike: {
        clipboard: {
          writeText: vi.fn(async () => {
            throw new Error("clipboard denied");
          }),
        },
      },
      documentLike: {
        body: null,
        createElement: vi.fn(),
        execCommand: vi.fn(() => false),
      },
    });

    expect(result).toEqual({
      ok: false,
      error: "Could not copy link. Copy it manually.",
    });
  });

  it("builds QR src with the encoded absolute React board URL", () => {
    expect(
      buildReactBoardQrSrc("ROOM123", {
        locationLike: { href: "https://traceball.example/react" },
      }),
    ).toBe(
      "/api/qr?url=https%3A%2F%2Ftraceball.example%2Freact%3Fboard%3DROOM123",
    );
  });

  it("does not render Share section without a board code", () => {
    expect(
      ShareControls({
        boardCode: "",
        locationLike: { href: "https://traceball.example/react" },
      }),
    ).toBeNull();
  });

  it("renders share URL and QR image when a board code exists", () => {
    const html = renderShareControls({
      boardCode: "ROOM123",
      locationLike: { href: "https://traceball.example/react" },
    });

    expect(html).toContain("Share");
    expect(html).toContain("https://traceball.example/react?board=ROOM123");
    expect(html).toContain(
      "/api/qr?url=https%3A%2F%2Ftraceball.example%2Freact%3Fboard%3DROOM123",
    );
    expect(html).toContain("Copy Link");
  });

  it("clicks Copy Link and sends the success toast through the callback", async () => {
    const onToast = vi.fn();
    const writeText = vi.fn(async () => {});
    const element = ShareControls({
      boardCode: "ROOM123",
      locationLike: { href: "https://traceball.example/react" },
      navigatorLike: { clipboard: { writeText } },
      documentLike: null,
      onToast,
    });

    const [copyButton] = collectHostElements(element, "button");
    await copyButton.props.onClick();

    expect(writeText).toHaveBeenCalledWith(
      "https://traceball.example/react?board=ROOM123",
    );
    expect(onToast).toHaveBeenCalledWith("Link copied to clipboard.");
  });
});
