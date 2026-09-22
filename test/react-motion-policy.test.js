import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("React hybrid shell motion policy", () => {
  it("keeps turn-chip pulse off by default and only enables infinite pulse in explicit legacy opt-in", () => {
    const css = readFileSync("public/styles.css", "utf8");

    expect(css).toContain(".elm-board-turn-chip {");
    expect(css).toContain("animation: none;");

    expect(css).toContain("@media (prefers-reduced-motion: no-preference)");
    expect(css).toContain(
      'body[data-enable-legacy-motion="true"] .elm-board-turn-chip',
    );
    expect(css).toContain(
      "animation: turn-chip-pulse 1.5s ease-in-out infinite;",
    );
  });
});
