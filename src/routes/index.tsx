import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Coins, Phone, Leaf, Heart, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/hero-spread.jpg";
import interiorImg from "@/assets/Inside-1.jpg";
import { menu, featuredImages } from "@/data/menu";
import { restaurant } from "@/data/restaurant";

export const Route = createFileRoute("/")({
  component: Home,
});

const featured = [
  { name: "Pad Thai", desc: "Rice noodles, tofu, peanuts, lime", price: "kr 2,790", img: featuredImages.padthai },
  { name: "Vegan Pho", desc: "Aromatic broth, rice noodles, basil", price: "kr 2,690", img: featuredImages.pho },
  { name: "Coconut Curry", desc: "Yellow curry with tofu and rice", price: "kr 2,990", img: featuredImages.curry },
  { name: "Bibimbap Bowl", desc: "Rice, tofu, pickled veg, gochujang", price: "kr 2,890", img: featuredImages.ricebowl },
  { name: "Spring Rolls", desc: "Crispy rolls, peanut dip", price: "kr 1,590", img: featuredImages.springrolls },
  { name: "Loving Hut Burger", desc: "Plant patty, cheese, fries", price: "kr 2,990", img: featuredImages.burger },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[color:var(--cream)]" />
        <div className="container-page grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <Leaf className="h-3.5 w-3.5" /> 100% Plant-Based
            </span>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
              Vegan food in the <span className="text-primary">heart</span> of Reykjavík
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Fresh, comforting, Asian-inspired plant-based dishes served at Loving Hut Iceland on Laugavegur — for vegans, tourists, locals, and anyone hungry for something good.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
                View Menu
              </Link>
              <a href={restaurant.mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary">
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
              <a href={restaurant.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90">
                <Phone className="h-4 w-4" /> Call Us
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              100% vegan · Laugavegur 164 · Open Mon–Sat 11:30–21:00, Sun 16:00–21:00
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[5/6] overflow-hidden rounded-3xl bg-warm shadow-[0_30px_80px_-30px_rgba(60,40,20,0.35)] md:aspect-[4/5]">
              <img src={heroImg} alt="Vegan Asian food spread at Loving Hut Iceland" className="h-full w-full object-cover" width={1600} height={1200} />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-background p-4 shadow-xl ring-1 ring-border sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-accent/10 text-accent">
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <div className="text-lg font-extrabold leading-none">4.7 ★</div>
                  <div className="text-xs text-muted-foreground">468+ Google reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="container-page -mt-6 grid gap-4 pb-6 sm:grid-cols-2">
        {[
          { icon: MapPin, title: "Location", body: "Laugavegur 164, 105 Reykjavík" },
          { icon: Clock, title: "Opening hours", body: "Mon–Sat 11:30–21:00 · Sun 16:00–21:00" },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
              <c.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-base font-bold">{c.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
          </div>
        ))}
      </section>

      {/* FEATURED DISHES */}
      <section className="container-page py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Popular</span>
            <h2 className="mt-2 font-display text-4xl font-extrabold md:text-5xl">Dishes guests love</h2>
          </div>
          <Link to="/menu" className="text-sm font-semibold text-primary hover:underline">View full menu →</Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((d) => (
            <article key={d.name} className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={d.img} alt={d.name} loading="lazy" width={1000} height={750} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-extrabold">{d.name}</h3>
                  <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-bold">{d.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="bg-secondary/50">
        <div className="container-page grid gap-12 py-20 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-3xl">
            <img src={interiorImg} alt="Loving Hut Iceland restaurant interior" loading="lazy" width={450} height={300} className="h-full w-full object-cover" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Why Loving Hut</span>
            <h2 className="mt-2 font-display text-4xl font-extrabold md:text-5xl">Plant-based, comforting, full of flavor.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Loving Hut Iceland serves vegan dishes inspired by Asian flavors — made for everyone. Vegans, vegetarians, tourists, locals, and anyone looking for a warm, fresh meal in central Reykjavík.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Leaf, t: "100% plant-based" },
                { icon: Heart, t: "Friendly service" },
                { icon: Coins, t: "Affordable meals" },
                { icon: Sparkles, t: "Fresh ingredients" },
              ].map((v) => (
                <li key={v.t} className="flex items-center gap-3 rounded-xl bg-background p-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary">
                    <v.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold">{v.t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="container-page py-20 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Loved by locals & visitors</span>
        <h2 className="mt-2 font-display text-4xl font-extrabold md:text-5xl">The word on Laugavegur</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="flex items-center justify-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <p className="mt-4 text-4xl font-extrabold">4.7</p>
            <p className="text-sm text-muted-foreground">Google · 468+ reviews</p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="flex items-center justify-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <p className="mt-4 text-4xl font-extrabold">4.7</p>
            <p className="text-sm text-muted-foreground">Tripadvisor · 60+ reviews</p>
          </div>
        </div>
        <div className="mt-10">
          <a href={restaurant.mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Come visit us on Laugavegur
          </a>
        </div>
      </section>

      {/* MAP */}
      <section className="container-page pb-24">
        <div className="grid gap-8 overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-2">
          <div className="p-8 md:p-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Find us</span>
            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">On Laugavegur, central Reykjavík</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>{restaurant.address.street}, {restaurant.address.postal}, {restaurant.address.country}</span></li>
              <li className="flex gap-3"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><a className="hover:text-primary" href={restaurant.phoneHref}>{restaurant.phone}</a></li>
              <li className="flex gap-3"><Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>Mon–Sat 11:30–21:00 · Sun 16:00–21:00</span></li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={restaurant.mapsUrl} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">Open in Google Maps</a>
              <Link to="/contact" className="rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-semibold hover:bg-secondary">More contact info</Link>
            </div>
          </div>
          <div className="min-h-[320px] bg-secondary">
            <iframe
              title="Map to Loving Hut Iceland"
              src={restaurant.mapsEmbed}
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
