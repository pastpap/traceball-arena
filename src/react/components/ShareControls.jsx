import React from "react";

const sectionStyle = {
  marginTop: "20px",
  padding: "18px",
  borderRadius: "20px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)",
};

const headingStyle = {
  margin: 0,
  fontSize: "1.1rem",
};

const leadStyle = {
  margin: "8px 0 0",
  color: "#567062",
  lineHeight: 1.5,
};

const linkCardStyle = {
  marginTop: "14px",
  padding: "12px 14px",
  borderRadius: "14px",
  background: "#ffffff",
  border: "1px solid rgba(16, 42, 26, 0.08)",
  overflowWrap: "anywhere",
};

const linkStyle = {
  color: "#0a5f20",
  fontWeight: 700,
  textDecoration: "none",
};

const buttonRowStyle = {
  display: "flex",
  gap: "10px",
  marginTop: "14px",
  flexWrap: "wrap",
  alignItems: "flex-start",
};

const buttonStyle = {
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: "#f7fbf7",
  color: "#102a1a",
  fontWeight: 700,
  cursor: "pointer",
};

const qrLinkStyle = {
  display: "inline-flex",
  flexDirection: "column",
  gap: "8px",
  alignItems: "center",
  textDecoration: "none",
  color: "#102a1a",
  fontWeight: 700,
};

const qrImageStyle = {
  width: "112px",
  height: "112px",
  borderRadius: "14px",
  background: "#ffffff",
  border: "1px solid rgba(16, 42, 26, 0.08)",
  padding: "6px",
  objectFit: "contain",
};

function defaultLocation() {
  return globalThis.window?.location ?? globalThis.location ?? null;
}

function defaultNavigator() {
  return globalThis.window?.navigator ?? globalThis.navigator ?? null;
}

function defaultDocument() {
  return globalThis.window?.document ?? globalThis.document ?? null;
}

function normalizeBoardCode(boardCode) {
  return String(boardCode || "").trim();
}

function locationHref(locationLike) {
  if (!locationLike) return "";
  if (typeof locationLike.href === "string" && locationLike.href) {
    return locationLike.href;
  }
  return `${locationLike.origin || ""}${locationLike.pathname || "/react"}${locationLike.search || ""}${locationLike.hash || ""}`;
}

export function buildReactBoardShareUrl(
  boardCode,
  { locationLike = defaultLocation() } = {},
) {
  const normalizedCode = normalizeBoardCode(boardCode);
  const href = locationHref(locationLike);
  if (!normalizedCode || !href) return "";

  const url = new URL(href);
  url.pathname = "/react";
  url.search = "";
  url.hash = "";
  url.searchParams.set("board", normalizedCode);
  return url.toString();
}

export function buildReactBoardQrSrc(
  boardCode,
  { locationLike = defaultLocation() } = {},
) {
  const shareUrl = buildReactBoardShareUrl(boardCode, { locationLike });
  if (!shareUrl) return "";
  return `/api/qr?url=${encodeURIComponent(shareUrl)}`;
}

function fallbackCopyText(text, documentLike) {
  if (!documentLike?.body || typeof documentLike.createElement !== "function") {
    return false;
  }

  const textarea = documentLike.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute?.("readonly", "readonly");
  textarea.style.position = "fixed";
  textarea.style.top = "-1000px";
  textarea.style.opacity = "0";
  documentLike.body.appendChild(textarea);

  try {
    textarea.focus?.();
    textarea.select?.();
    return documentLike.execCommand?.("copy") === true;
  } finally {
    if (typeof documentLike.body.removeChild === "function") {
      documentLike.body.removeChild(textarea);
    } else {
      textarea.remove?.();
    }
  }
}

export async function copyBoardLink({
  boardCode,
  locationLike = defaultLocation(),
  navigatorLike = defaultNavigator(),
  documentLike = defaultDocument(),
} = {}) {
  const text = buildReactBoardShareUrl(boardCode, { locationLike });
  if (!text) {
    return { ok: false, error: "Share link unavailable." };
  }

  if (typeof navigatorLike?.clipboard?.writeText === "function") {
    try {
      await navigatorLike.clipboard.writeText(text);
      return { ok: true, text };
    } catch {}
  }

  if (fallbackCopyText(text, documentLike)) {
    return { ok: true, text };
  }

  return { ok: false, error: "Could not copy link. Copy it manually." };
}

export function ShareControls({
  boardCode,
  locationLike = defaultLocation(),
  navigatorLike = defaultNavigator(),
  documentLike = defaultDocument(),
  onToast,
}) {
  const normalizedCode = normalizeBoardCode(boardCode);
  if (!normalizedCode) return null;

  const shareUrl = buildReactBoardShareUrl(normalizedCode, { locationLike });
  const qrSrc = buildReactBoardQrSrc(normalizedCode, { locationLike });

  return (
    <section style={sectionStyle} aria-label="Share board link">
      <h2 style={headingStyle}>Share</h2>
      <p style={leadStyle}>
        Copy the React board link or scan the QR code to open this board in the
        product shell.
      </p>

      <div style={linkCardStyle}>
        <a href={shareUrl} style={linkStyle}>
          {shareUrl}
        </a>
      </div>

      <div style={buttonRowStyle}>
        <button
          type="button"
          style={buttonStyle}
          onClick={async () => {
            const result = await copyBoardLink({
              boardCode: normalizedCode,
              locationLike,
              navigatorLike,
              documentLike,
            });
            onToast?.(
              result.ok
                ? "Link copied to clipboard."
                : result.error || "Could not copy link. Copy it manually.",
            );
          }}
        >
          Copy Link
        </button>

        <a href={shareUrl} style={qrLinkStyle}>
          <img
            src={qrSrc}
            alt={`QR code for board ${normalizedCode}`}
            style={qrImageStyle}
          />
          Open board link
        </a>
      </div>
    </section>
  );
}

export default ShareControls;
