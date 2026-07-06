import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Heart, Coins, Sparkles, MapPin, Users } from "lucide-react";
import interiorImg from "@/assets/interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Loving Hut Iceland" },
      { name: "description", content: "Loving Hut Iceland is a 100% vegan restaurant on Laugavegur in Reykjavík, part of a global family of vegan restaurants." },
      { property: "og:title", content: "About Loving Hut Iceland" },
      { property: "og:description", content: "A 100% vegan restaurant in central Reykjavík serving Asian-inspired plant-based food." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Leaf, t: "100% plant-based", d: "Every dish, every sauce — no exceptions." },
  { icon: Heart, t: "Friendly service", d: "A warm welcome for vegans and curious first-timers." },
  { icon: Coins, t: "Affordable meals", d: "Honest prices for a filling meal in central Reykjavík." },
  { icon: Sparkles, t: "Fresh ingredients", d: "Made to order with vegetables, tofu, herbs and grains." },
  { icon: Users, t: "For everyone", d: "Great for vegans, non-vegans, families and travelers alike." },
  { icon: MapPin, t: "Central location", d: "On Laugavegur — the main street of Reykjavík." },
];

function AboutPage() {
  return (
    <div>
      <section className="bg-[color:var(--cream)]">
        <div className="container-page grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Our story</span>
            <h1 className="mt-2 font-display text-5xl font-extrabold md:text-6xl">A vegan home on Laugavegur.</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Loving Hut Iceland is a 100% vegan restaurant located on Laugavegur in Reykjavík, serving plant-based dishes inspired by Asian flavors. We cook food that comforts, satisfies, and welcomes everyone — no matter your diet.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img src={interiorImg} alt="Loving Hut Iceland interior" loading="lazy" width={1400} height={1000} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Global family</span>
          <h2 className="mt-2 font-display text-4xl font-extrabold md:text-5xl">Part of a worldwide vegan community</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Loving Hut is a global vegan restaurant family with individually owned locations. Every restaurant sets its own menu, so what you eat in Reykjavík is proudly local to us.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.t} className="rounded-3xl border border-border bg-card p-6 transition hover:shadow-md">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-xl font-extrabold">{v.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
            See what's on the menu
          </Link>
        </div>
      </section>
    </div>
  );
}
