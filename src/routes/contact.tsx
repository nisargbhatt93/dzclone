import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nisarg" },
      { name: "description", content: "Get in touch with the Nisarg team." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message required").max(1000),
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      setErr(parsed.error.issues[0].message);
      return;
    }
    setErr(null);
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <div className="mx-auto max-w-2xl px-5 lg:px-8 py-20">
      <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">Contact</div>
      <h1 className="text-display font-black text-5xl sm:text-6xl mt-2">Say hello.</h1>
      <p className="mt-4 text-muted-foreground">We reply within 24 hours. For orders, mention your order number.</p>

      <form onSubmit={onSubmit} className="mt-10 space-y-5">
        <div>
          <label className="text-sm font-semibold">Name</label>
          <input name="name" required maxLength={100} className="mt-2 w-full rounded-2xl border border-border bg-background px-5 py-3.5 outline-none focus:border-ink" />
        </div>
        <div>
          <label className="text-sm font-semibold">Email</label>
          <input name="email" type="email" required maxLength={255} className="mt-2 w-full rounded-2xl border border-border bg-background px-5 py-3.5 outline-none focus:border-ink" />
        </div>
        <div>
          <label className="text-sm font-semibold">Message</label>
          <textarea name="message" required maxLength={1000} rows={5} className="mt-2 w-full rounded-2xl border border-border bg-background px-5 py-3.5 outline-none focus:border-ink resize-none" />
        </div>
        {err && <p className="text-sm text-destructive">{err}</p>}
        {sent && <p className="text-sm text-foreground">Thanks — we'll get back to you shortly.</p>}
        <button type="submit" className="rounded-full bg-ink text-background px-7 py-4 text-sm font-bold">Send message</button>
      </form>
    </div>
  );
}
