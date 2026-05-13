import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-cream">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-11 w-11 rounded-full bg-yellow flex items-center justify-center text-display font-black text-ink text-xl">N</div>
            <div>
              <div className="text-display font-extrabold text-lg">Nisarg</div>
              <div className="text-[10px] tracking-[0.18em] text-muted-foreground uppercase">Wear your nature</div>
            </div>
          </div>
          <p className="text-muted-foreground max-w-md">
            Premium 240 GSM oversized tees, custom prints and limited drops. Printed in India, made for the world.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/shop">All Products</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/custom">Custom Designer</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Nisarg. All rights reserved.</span>
          <span>Made with care in India</span>
        </div>
      </div>
    </footer>
  );
}
