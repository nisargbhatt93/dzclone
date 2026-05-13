import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-model.jpg";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nisarg — Wear Your Nature" },
      { name: "description", content: "Premium 240 GSM oversized tees, custom prints and limited drops." },
      { property: "og:title", content: "Nisarg — Wear Your Nature" },
    ],
  }),
  component: Home,
});

const marqueeItems = ["COD AVAILABLE", "7-DAY EASY RETURNS", "PREMIUM 240 GSM COTTON", "MADE IN INDIA", "DESIGNED BY YOU", "FREE SHIPPING OVER ₹999"];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-background/70 backdrop-blur px-4 py-1.5 text-xs font-medium border border-border">
              <Sparkles className="h-3.5 w-3.5 text-yellow" /> New drop · Festival collection live
            </span>
            <h1 className="mt-6 text-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
              Wear Your <br />
              <span className="underline-yellow">Nature.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-md">
              Custom prints that speak your style. Premium oversized tees, anime drops, couple sets and design-it-yourself fits — printed in India, made for the world.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/custom" className="group inline-flex items-center gap-2 rounded-full bg-ink text-background px-6 py-3.5 text-sm font-semibold">
                Design your tee <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link to="/shop" className="inline-flex items-center rounded-full bg-background border border-border px-6 py-3.5 text-sm font-semibold">
                Shop collection
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[["50K+", "Happy customers"], ["2K+", "Designs printed"], ["4.9★", "Average rating"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-display font-extrabold text-2xl">{n}</div>
                  <div className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-yellow-soft shadow-soft">
              <img src={heroImg} alt="Model wearing Nisarg cream oversized tee" className="h-full w-full object-cover" />
            </div>
            <div className="hidden sm:flex absolute -left-4 top-12 items-center gap-3 rounded-full bg-background pl-2 pr-5 py-2 shadow-soft border border-border">
              <div className="h-9 w-9 rounded-full bg-yellow" />
              <div>
                <div className="text-sm font-semibold leading-tight">Premium 240 GSM</div>
                <div className="text-xs text-muted-foreground">Bio-washed cotton</div>
              </div>
            </div>
            <div className="hidden sm:flex absolute -right-4 bottom-10 items-center gap-3 rounded-full bg-background pl-2 pr-5 py-2 shadow-soft border border-border">
              <div className="flex">
                <div className="h-9 w-9 rounded-full bg-yellow" />
                <div className="h-9 w-9 rounded-full bg-yellow-soft -ml-3 border-2 border-background" />
              </div>
              <div>
                <div className="text-sm font-semibold leading-tight">2,341 just ordered</div>
                <div className="text-xs text-muted-foreground">Today</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-background overflow-hidden py-5">
        <div className="marquee">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((t, i) => (
            <div key={i} className="text-sm font-semibold tracking-[0.18em] uppercase flex items-center gap-3">
              <span className="text-yellow">✦</span> {t}
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES / PRODUCTS */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">Categories</div>
            <h2 className="text-display font-black text-4xl sm:text-5xl mt-2">Find your fit.</h2>
          </div>
          <Link to="/shop" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold">
            View all <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-12">
        <div className="rounded-3xl bg-ink text-background p-10 sm:p-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-display font-black text-4xl sm:text-5xl">Design your own.</h3>
            <p className="mt-4 text-background/70 max-w-md">
              Drop your art, pick your colour, and we'll print it on premium cotton — shipped in 4 days.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Link to="/custom" className="inline-flex items-center gap-2 rounded-full bg-yellow text-ink px-7 py-4 text-sm font-bold">
              Open the designer <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
