import { useState } from "react";

const PRESETS = [
  "olive",
  "red",
  "green",
  "blue",
  "purple",
  "pink",
  "yellow",
  "gray",
  "black",
  "white",
  "#0ea5e9",   // sky-500
  "#0f172a",   // slate-900
];

function App() {
  const [color, setColor] = useState("olive");

  // If current color isn't hex, give the color input a safe fallback.
  const hexOrFallback = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(color) ? color : "#808000"; // olive hex

  return (
    <div className="relative min-h-screen">
      {/* Full-page background via YOUR approach */}
      <div
        className="fixed inset-0 -z-10 transition-colors duration-300"
        style={{ backgroundColor: color }}
      />

      {/* Centerpiece title */}
      <main className="relative z-10 flex min-h-screen items-center justify-center">
        <h1 className="rainbow-text text-7xl md:text-8xl font-extrabold tracking-tight">
          Hassan
        </h1>

      </main>

      {/* Control bar */}
      <footer className="fixed inset-x-0 bottom-6 px-4 z-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/20 bg-white/15 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-wrap items-center gap-4 p-4 justify-between">
            <div className="text-white/90 text-sm md:text-base">
              Background:&nbsp;
              <span className="font-semibold">{color}</span>
            </div>

            {/* Swatches */}
            <div className="flex flex-wrap items-center gap-2">
              {PRESETS.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  title={c}
                  aria-label={`Set background to ${c}`}
                  className={`h-9 w-9 rounded-full ring-2 ring-white/40 focus:outline-none focus:ring-4 transition ${color === c ? "ring-4 ring-white" : ""
                    }`}
                  style={{ backgroundColor: c }}
                />
              ))}

              {/* Color picker */}
              <label className="ml-2 flex items-center gap-2 rounded-xl bg-white/20 px-3 py-1 text-white/90">
                <span className="text-sm">Pick</span>
                <input
                  type="color"
                  value={hexOrFallback}
                  onChange={(e) => setColor(e.target.value)}
                  className="h-8 w-8 cursor-pointer border-0 bg-transparent p-0"
                />
              </label>
            </div>
          </div>

          {/* Manual entry + quick actions */}
          <div className="flex items-center gap-2 border-t border-white/20 p-3">
            <input
              type="text"
              placeholder="e.g. #0ea5e9 or tomato"
              className="flex-1 rounded-lg bg-white/90 px-3 py-2 text-sm md:text-base"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const v = e.currentTarget.value.trim();
                  if (v) setColor(v);
                }
              }}

            />
            <button
              className="rounded-lg bg-black/60 px-3 py-2 text-white hover:bg-black/70"
              onClick={() => setColor("black")}
            >
              Black
            </button>
            <button
              className="rounded-lg bg-white/80 px-3 py-2 text-black hover:bg-white"
              onClick={() => setColor("white")}
            >
              White
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
