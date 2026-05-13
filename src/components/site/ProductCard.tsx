import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/product/$id"
      params={{ id: product.id }}
      className="group block"
    >
      <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-cream">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <div className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">{product.category}</div>
          <div className="font-semibold mt-0.5">{product.name}</div>
        </div>
        <div className="font-display font-bold">₹{product.price}</div>
      </div>
    </Link>
  );
}
