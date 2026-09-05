import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

const sources = [
  "elm.json",
  "src/elm/Main.elm",
  "src/elm/Board/Types.elm",
  "src/elm/Board/Decode.elm",
  "src/elm/Board/View.elm",
  "src/elm/Protocol.elm",
  "public/elm.js",
];

for (const source of sources) {
  if (!existsSync(source))
    throw new Error(`Missing Elm shell source: ${source}`);
}

const compiler =
  process.env.ELM_COMPILER ||
  (existsSync("node_modules/.bin/elm") ? "node_modules/.bin/elm" : "");
if (!compiler) {
  console.log(
    "Elm compiler is not available on this platform; keeping checked-in Phase 2 Elm shell runtime.",
  );
  process.exit(0);
}

const result = spawnSync(
  compiler,
  ["make", "src/elm/Main.elm", "--output=/tmp/traceball-elm-compile-check.js"],
  { stdio: "inherit" },
);
if (result.status !== 0) {
  throw new Error("Elm compiler check failed.");
}
const runtimeBuild = spawnSync(
  compiler,
  ["make", "src/elm/Main.elm", "--output=public/elm-runtime.js"],
  { stdio: "inherit" },
);
if (runtimeBuild.status !== 0) {
  throw new Error("Elm runtime bundle build failed.");
}
console.log("Elm source compile check passed.");
console.log("Elm runtime bundle generated at public/elm-runtime.js.");
