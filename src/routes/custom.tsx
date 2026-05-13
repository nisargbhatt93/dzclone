import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";

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
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
      <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">Custom designer</div>
      <h1 className="text-display font-black text-5xl sm:text-6xl mt-2">Design your tee.</h1>
      <p className="mt-3 text-muted-foreground max-w-xl">Pick a colour, drop your text or upload art, and we'll print it on premium 240 GSM cotton.</p>

      <div className="mt-12 grid lg:grid-cols-[1fr_360px] gap-10">
        {/* T-Shirt Preview */}
        <div className="aspect-square rounded-3xl flex items-center justify-center bg-[#f0ece4] p-6">
          <div className="relative w-full h-full flex items-center justify-center">
            <svg
              viewBox="0 0 400 420"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-xl"
            >
              {/* Shadow / depth */}
              <ellipse cx="200" cy="410" rx="120" ry="10" fill="rgba(0,0,0,0.10)" />

              {/* T-shirt body */}
              <path
                d="
                  M 100 60
                  C 100 60 130 80 200 80
                  C 270 80 300 60 300 60
                  L 370 120
                  L 330 155
                  L 310 140
                  L 310 370
                  Q 310 385 295 385
                  L 105 385
                  Q 90 385 90 370
                  L 90 140
                  L 70 155
                  L 30 120
                  Z
                "
                fill={color.hex}
                stroke="rgba(0,0,0,0.12)"
                strokeWidth="2"
                strokeLinejoin="round"
              />

              {/* Collar */}
              <path
                d="M 155 68 Q 200 110 245 68"
                fill="none"
                stroke="rgba(0,0,0,0.18)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Sleeve left shading */}
              <path
                d="M 30 120 L 70 155 L 90 140 L 90 110 Z"
                fill="rgba(0,0,0,0.06)"
              />
              {/* Sleeve right shading */}
              <path
                d="M 370 120 L 330 155 L 310 140 L 310 110 Z"
                fill="rgba(0,0,0,0.06)"
              />
              {/* Body fold shading (subtle) */}
              <path
                d="M 90 200 Q 200 215 310 200 L 310 210 Q 200 225 90 210 Z"
                fill="rgba(0,0,0,0.04)"
              />

              {/* User image printed on chest */}
              {image && (
                <image
                  href={image}
                  x="130"
                  y="150"
                  width="140"
                  height="160"
                  preserveAspectRatio="xMidYMid meet"
                  style={{ pointerEvents: 'none' }}
                />
              )}

              {/* User text printed on chest */}
              {!image && (
                <text
                  x="200"
                  y="255"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="'Inter', 'Arial Black', sans-serif"
                  fontWeight="900"
                  fontSize={text && text.length > 12 ? "22" : "28"}
                  letterSpacing="1"
                  fill={
                    color.name === "Black" || color.name === "Navy" || color.name === "Olive"
                      ? "#ffffff"
                      : "#111111"
                  }
                  style={{ userSelect: "none" }}
                >
                  {text || "YOUR TEXT"}
                </text>
              )}
            </svg>
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
            <input value={text} onChange={(e) => setText(e.target.value.slice(0, 24))} maxLength={24} disabled={!!image}
              className="w-full rounded-2xl border border-border bg-background px-5 py-3.5 outline-none focus:border-ink disabled:opacity-50" />
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Your art</div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageUpload}
            />
            <div className="flex gap-2">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 rounded-2xl border border-border bg-background px-5 py-3.5 text-sm font-semibold transition hover:bg-muted"
              >
                {image ? "Change Image" : "Upload Image"}
              </button>
              {image && (
                <button
                  onClick={() => setImage(null)}
                  className="rounded-2xl border border-red-200 bg-red-50 text-red-600 px-5 py-3.5 text-sm font-semibold transition hover:bg-red-100"
                >
                  Remove
                </button>
              )}
            </div>
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
