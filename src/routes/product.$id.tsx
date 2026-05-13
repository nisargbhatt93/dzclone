import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { Check, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/product/$id")({
  component: ProductPage,
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name ?? "Product"} — Nisarg` },
      { name: "description", content: loaderData?.product.description ?? "" },
    ],
  }),
});

const SIZES = ["S", "M", "L", "XL", "XXL"];

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [size, setSize] = useState("M");
  const [added, setAdded] = useState(false);

  const onAdd = () => {
    add(product.id, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10">
      <Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground">← Back to shop</Link>
      <div className="mt-6 grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-cream">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col">
          <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{product.category}</div>
          <h1 className="text-display font-black text-4xl sm:text-5xl mt-2">{product.name}</h1>
          <div className="mt-4 text-2xl font-display font-bold">₹{product.price}</div>
          <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>

          <div className="mt-8">
            <div className="text-sm font-semibold mb-3">Size</div>
            <div className="flex flex-wrap gap-2">
              {SIZES.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`h-11 w-12 rounded-full border text-sm font-semibold transition ${
                    size === s ? "bg-ink text-background border-ink" : "bg-background border-border hover:bg-muted"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={onAdd}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-ink text-background px-7 py-4 text-sm font-bold hover:opacity-90 transition"
          >
            {added ? <><Check className="h-4 w-4" /> Added to cart</> : <><ShoppingBag className="h-4 w-4" /> Add to cart</>}
          </button>

          <ul className="mt-10 space-y-3 text-sm text-muted-foreground border-t border-border pt-6">
            <li>✦ 240 GSM bio-washed premium cotton</li>
            <li>✦ Oversized drop-shoulder fit</li>
            <li>✦ 7-day easy returns · COD available</li>
            <li>✦ Ships in 3–4 working days</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
