import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";
import { Minus, Plus, Trash2 } from "lucide-react";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Your bag — Nisarg" }] }),
  component: CartPage,
});

function CartPage() {
  const { detailed, setQty, remove, subtotal, clear } = useCart();
  const shipping = subtotal > 999 || subtotal === 0 ? 0 : 79;
  const total = subtotal + shipping;

  if (detailed.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="text-display font-black text-5xl">Your bag is empty.</h1>
        <p className="mt-4 text-muted-foreground">Find something you love.</p>
        <Link to="/shop" className="mt-8 inline-flex rounded-full bg-ink text-background px-7 py-4 text-sm font-bold">Browse the collection</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
      <h1 className="text-display font-black text-5xl">Your bag.</h1>
      <div className="mt-10 grid lg:grid-cols-[1fr_380px] gap-12">
        <div className="space-y-6">
          {detailed.map((i) => (
            <div key={i.productId + i.size} className="flex gap-5 border-b border-border pb-6">
              <Link to="/product/$id" params={{ id: i.productId }} className="h-32 w-28 rounded-xl overflow-hidden bg-cream shrink-0">
                <img src={i.product.image} alt={i.product.name} className="h-full w-full object-cover" />
              </Link>
              <div className="flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold">{i.product.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">Size {i.size}</div>
                  </div>
                  <div className="font-display font-bold">₹{i.product.price * i.qty}</div>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="inline-flex items-center border border-border rounded-full">
                    <button onClick={() => setQty(i.productId, i.size, i.qty - 1)} className="h-9 w-9 flex items-center justify-center"><Minus className="h-3.5 w-3.5" /></button>
                    <span className="w-8 text-center text-sm font-semibold">{i.qty}</span>
                    <button onClick={() => setQty(i.productId, i.size, i.qty + 1)} className="h-9 w-9 flex items-center justify-center"><Plus className="h-3.5 w-3.5" /></button>
                  </div>
                  <button onClick={() => remove(i.productId, i.size)} className="text-muted-foreground hover:text-foreground" aria-label="Remove"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
            </div>
          ))}
          <button onClick={clear} className="text-sm text-muted-foreground hover:text-foreground">Clear bag</button>
        </div>

        <aside className="bg-cream rounded-3xl p-8 h-fit">
          <h2 className="text-display font-bold text-2xl">Summary</h2>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between"><dt className="text-muted-foreground">Subtotal</dt><dd className="font-semibold">₹{subtotal}</dd></div>
            <div className="flex justify-between"><dt className="text-muted-foreground">Shipping</dt><dd className="font-semibold">{shipping === 0 ? "Free" : `₹${shipping}`}</dd></div>
            <div className="border-t border-border pt-3 flex justify-between text-base"><dt className="font-semibold">Total</dt><dd className="font-display font-extrabold">₹{total}</dd></div>
          </dl>
          <button className="mt-6 w-full rounded-full bg-ink text-background py-4 text-sm font-bold hover:opacity-90">Proceed to checkout</button>
          <p className="mt-3 text-[11px] text-center text-muted-foreground">Free shipping over ₹999 · COD available</p>
        </aside>
      </div>
    </div>
  );
}
