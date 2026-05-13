import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/custom")({
  head: () => ({
    meta: [
      { title: "Custom Designer — Nisarg" },
      { name: "description", content: "Design your own oversized tee. Pick colour, add your art, we print." },
    ],
  }),
  component: Custom,
});

const COLORS = [
  { name: "Cream", hex: "#f5ecd5" },
  { name: "Black", hex: "#0f0f0f" },
  { name: "Yellow", hex: "#f4c430" },
  { name: "Olive", hex: "#6b7a3a" },
  { name: "White", hex: "#ffffff" },
  { name: "Navy", hex: "#1a2440" },
];

function Custom() {
  const [color, setColor] = useState(COLORS[0]);
  const [size, setSize] = useState("M");
  const [text, setText] = useState("YOUR TEXT");

  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
      <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">Custom designer</div>
      <h1 className="text-display font-black text-5xl sm:text-6xl mt-2">Design your tee.</h1>
      <p className="mt-3 text-muted-foreground max-w-xl">Pick a colour, drop your text or upload art, and we'll print it on premium 240 GSM cotton.</p>

      <div className="mt-12 grid lg:grid-cols-[1fr_360px] gap-10">
        <div className="aspect-square rounded-3xl flex items-center justify-center" style={{ backgroundColor: color.hex }}>
          <div
            className="text-center px-6 text-display font-black text-3xl sm:text-5xl"
            style={{ color: color.name === "Black" || color.name === "Navy" || color.name === "Olive" ? "#fff" : "#111" }}
          >
            {text || "YOUR TEXT"}
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <div className="text-sm font-semibold mb-3">Colour — {color.name}</div>
            <div className="flex flex-wrap gap-2">
              {COLORS.map((c) => (
                <button key={c.name} onClick={() => setColor(c)} aria-label={c.name}
                  className={`h-11 w-11 rounded-full border-2 transition ${color.name === c.name ? "border-ink" : "border-border"}`}
                  style={{ backgroundColor: c.hex }} />
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Size</div>
            <div className="flex flex-wrap gap-2">
              {["S", "M", "L", "XL", "XXL"].map((s) => (
                <button key={s} onClick={() => setSize(s)} className={`h-11 w-12 rounded-full border text-sm font-semibold ${size === s ? "bg-ink text-background border-ink" : "bg-background border-border"}`}>{s}</button>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Your text</div>
            <input value={text} onChange={(e) => setText(e.target.value.slice(0, 24))} maxLength={24}
              className="w-full rounded-2xl border border-border bg-background px-5 py-3.5 outline-none focus:border-ink" />
          </div>
          <div className="rounded-2xl bg-cream p-5">
            <div className="text-sm text-muted-foreground">Custom tee · {color.name} · {size}</div>
            <div className="text-display font-extrabold text-3xl mt-1">₹1,199</div>
          </div>
          <button className="w-full rounded-full bg-ink text-background py-4 text-sm font-bold">Add custom tee to bag</button>
        </div>
      </div>
    </div>
  );
}
