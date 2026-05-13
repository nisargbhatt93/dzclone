import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nisarg" },
      { name: "description", content: "Nisarg is a premium streetwear label crafted in India." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-4xl px-5 lg:px-8 py-20">
      <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">About</div>
      <h1 className="text-display font-black text-5xl sm:text-6xl mt-2">Wear your nature.</h1>
      <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
        Nisarg is a premium streetwear label crafted in India. We make heavyweight oversized tees, custom prints, and limited drops — using 240 GSM bio-washed cotton that gets softer with every wash.
      </p>
      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
        Every piece is designed and printed in our Surat studio. We believe what you wear should feel as honest as it looks — so we keep the supply chain short, the quality uncompromising, and the prices fair.
      </p>

      <div className="mt-16 grid sm:grid-cols-3 gap-6">
        {[
          ["240 GSM", "Heavyweight, bio-washed"],
          ["Made in India", "Surat studio"],
          ["7-day returns", "No-questions-asked"],
        ].map(([n, l]) => (
          <div key={n} className="rounded-2xl bg-cream p-6">
            <div className="text-display font-extrabold text-2xl">{n}</div>
            <div className="text-sm text-muted-foreground mt-1">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
