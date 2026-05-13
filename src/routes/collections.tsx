import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/lib/products";

export const Route = createFileRoute("/collections")({
  head: () => ({ meta: [{ title: "Collections — Nisarg" }] }),
  component: Collections,
});

const collections = [
  { name: "Oversized Essentials", tag: "Oversized", blurb: "Heavyweight everyday tees." },
  { name: "Anime Drop", tag: "Anime", blurb: "Limited graphic prints." },
  { name: "Solids", tag: "Solid", blurb: "One colour, done right." },
];

function Collections() {
  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
      <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">Collections</div>
      <h1 className="text-display font-black text-5xl sm:text-6xl mt-2">Curated drops.</h1>
      <div className="mt-12 space-y-16">
        {collections.map((c) => {
          const items = products.filter((p) => p.category === c.tag).slice(0, 3);
          return (
            <section key={c.name}>
              <div className="flex items-end justify-between mb-6">
                <div>
                  <h2 className="text-display font-black text-3xl sm:text-4xl">{c.name}</h2>
                  <p className="text-muted-foreground mt-1">{c.blurb}</p>
                </div>
                <Link to="/shop" className="text-sm font-semibold">View all →</Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((p) => (
                  <Link key={p.id} to="/product/$id" params={{ id: p.id }} className="group">
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-cream">
                      <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="mt-3 flex justify-between text-sm">
                      <span className="font-semibold">{p.name}</span>
                      <span className="font-display font-bold">₹{p.price}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
