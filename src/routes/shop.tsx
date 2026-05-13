import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Nisarg" },
      { name: "description", content: "Browse all premium oversized tees and limited drops." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? products : products.filter((p) => p.category === cat);
  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
      <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">The collection</div>
      <h1 className="text-display font-black text-5xl sm:text-6xl mt-2">Shop everything.</h1>
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              cat === c ? "bg-ink text-background border-ink" : "bg-background border-border hover:bg-muted"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-10">
        {list.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
