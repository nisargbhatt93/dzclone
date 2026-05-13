import { Link } from "@tanstack/react-router";
import { Search, User, Heart, ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";

const nav = [
  { to: "/shop", label: "Shop" },
  { to: "/custom", label: "Custom Designer" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
];

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border/50">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-yellow flex items-center justify-center text-display font-black text-ink text-xl">N</div>
          <div className="leading-tight">
            <div className="text-display font-extrabold text-lg">Nisarg</div>
            <div className="text-[10px] tracking-[0.18em] text-muted-foreground uppercase">Wear your nature</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to as never}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-sm font-semibold text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted transition" aria-label="Search">
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted transition" aria-label="Account">
            <User className="h-[18px] w-[18px]" />
          </button>
          <button className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted transition" aria-label="Wishlist">
            <Heart className="h-[18px] w-[18px]" />
          </button>
          <Link
            to="/cart"
            className="relative h-11 w-11 flex items-center justify-center rounded-full bg-ink text-background hover:opacity-90 transition"
            aria-label="Cart"
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 rounded-full bg-yellow text-ink text-[11px] font-bold flex items-center justify-center">
              {count}
            </span>
          </Link>
          <button className="lg:hidden h-10 w-10 flex items-center justify-center rounded-full hover:bg-muted" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-5 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to as never} className="py-2 font-medium" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
