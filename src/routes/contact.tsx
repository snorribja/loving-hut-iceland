import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Car } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Opening Hours | Loving Hut Iceland Reykjavík" },
      { name: "description", content: "Find Loving Hut Iceland at Laugavegur 164, Reykjavík. Opening hours, phone, email, map and directions." },
      { property: "og:title", content: "Contact | Loving Hut Iceland" },
      { property: "og:description", content: "Address, phone, email, opening hours and directions to Loving Hut Iceland on Laugavegur." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <section className="bg-[color:var(--cream)]">
        <div className="container-page py-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</span>
          <h1 className="mt-2 font-display text-5xl font-extrabold md:text-6xl">Come say hi.</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            We're on Laugavegur, the main street of Reykjavík. Walk-ins welcome. Free parking available (Frítt bílastæði).
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="space-y-6 md:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {restaurant.address.street}<br />
                    {restaurant.address.postal}<br />
                    {restaurant.address.country}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <h3 className="font-bold">Opening hours</h3>
                  <ul className="mt-2 space-y-1 text-sm">
                    {restaurant.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4">
                        <span className="text-muted-foreground">{h.day}</span>
                        <span className="font-semibold">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold">Phone & Email</h3>
                  <p className="mt-1 space-y-1 text-sm">
                    <a href={restaurant.phoneHref} className="block hover:text-primary">{restaurant.phone}</a>
                    <a href={`mailto:${restaurant.email}`} className="block hover:text-primary">{restaurant.email}</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={restaurant.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
                <Phone className="h-4 w-4" /> Call now
              </a>
              <a href={restaurant.mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90">
                <MapPin className="h-4 w-4" /> Get directions
              </a>
              <a href={`mailto:${restaurant.email}`} className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-semibold hover:bg-secondary">
                <Mail className="h-4 w-4" /> Email us
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a href={restaurant.social.instagram} aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full bg-secondary transition hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={restaurant.social.facebook} aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-full bg-secondary transition hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-secondary/60 p-4 text-sm">
              <Car className="h-5 w-5 shrink-0 text-primary" />
              <span><strong>Free parking</strong> available (Frítt bílastæði).</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border md:col-span-3">
            <iframe
              title="Map to Loving Hut Iceland"
              src={restaurant.mapsEmbed}
              className="h-full min-h-[500px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
