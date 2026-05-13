import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { products, type Product } from "./products";

export type CartItem = { productId: string; size: string; qty: number };

type CartCtx = {
  items: CartItem[];
  add: (productId: string, size: string, qty?: number) => void;
  remove: (productId: string, size: string) => void;
  setQty: (productId: string, size: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  detailed: (CartItem & { product: Product })[];
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("nisarg-cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem("nisarg-cart", JSON.stringify(items)); } catch {}
  }, [items]);

  const add = (productId: string, size: string, qty = 1) => {
    setItems((prev) => {
      const i = prev.findIndex((x) => x.productId === productId && x.size === size);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + qty };
        return next;
      }
      return [...prev, { productId, size, qty }];
    });
  };

  const remove = (productId: string, size: string) =>
    setItems((p) => p.filter((x) => !(x.productId === productId && x.size === size)));

  const setQty = (productId: string, size: string, qty: number) =>
    setItems((p) => p.map((x) => (x.productId === productId && x.size === size ? { ...x, qty: Math.max(1, qty) } : x)));

  const clear = () => setItems([]);

  const detailed = items
    .map((i) => {
      const product = products.find((p) => p.id === i.productId);
      return product ? { ...i, product } : null;
    })
    .filter(Boolean) as (CartItem & { product: Product })[];

  const count = items.reduce((s, i) => s + i.qty, 0);
  const subtotal = detailed.reduce((s, i) => s + i.product.price * i.qty, 0);

  return (
    <Ctx.Provider value={{ items, add, remove, setQty, clear, count, subtotal, detailed }}>
      {children}
    </Ctx.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart outside CartProvider");
  return ctx;
};
