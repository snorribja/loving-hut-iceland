import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Flame, Leaf, Star, Wheat } from "lucide-react";
import { menu } from "@/data/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Loving Hut Iceland Vegan Restaurant" },
      { name: "description", content: "The full Loving Hut Iceland menu: vegan starters, soups, noodles, rice dishes, curries, burgers, and desserts — all 100% plant-based in Reykjavík." },
      { property: "og:title", content: "Menu | Loving Hut Iceland" },
      { property: "og:description", content: "Explore our full vegan menu — Asian-inspired plant-based dishes on Laugavegur, Reykjavík." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

const FILTERS = [
  { id: "all", label: "All", icon: null },
  { id: "popular", label: "Popular", icon: Star },
  { id: "spicy", label: "Spicy", icon: Flame },
  { id: "gluten-free", label: "Gluten-free", icon: Wheat },
  { id: "kids", label: "Kids-friendly", icon: Leaf },
] as const;

function MenuPage() {
  const [filter, setFilter] = useState<string>("all");
  const [lang, setLang] = useState<"en" | "is">("en");

  const filtered = useMemo(() => {
    if (filter === "all") return menu;
    return menu
      .map((c) => ({ ...c, items: c.items.filter((i) => i.tags?.includes(filter)) }))
      .filter((c) => c.items.length > 0);
  }, [filter]);

  return (
    <div>
      <section className="bg-[color:var(--cream)]">
        <div className="container-page py-16 md:py-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Fully vegan</span>
          <h1 className="mt-2 font-display text-5xl font-extrabold md:text-6xl">
            {lang === "en" ? "Our Menu" : "Matseðill"}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            {lang === "en"
              ? "Asian-inspired, plant-based comfort food — freshly made in Reykjavík. Prices in Icelandic króna."
              : "Asískt innblásinn plöntumatur — ferskur og heimatilbúinn í Reykjavík. Verð í íslenskum krónum."}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="inline-flex rounded-full border border-border bg-background p-1">
              {(["en", "is"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {l === "en" ? "English" : "Íslenska"}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => {
                const Icon = f.icon;
                const active = filter === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-semibold transition ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground/70 hover:border-foreground/30"}`}
                  >
                    {Icon && <Icon className="h-3.5 w-3.5" />}
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="container-page py-16 space-y-16">
        {filtered.map((cat) => (
          <section key={cat.id} id={cat.id}>
            <div className="flex items-baseline gap-4 border-b border-border pb-4">
              <h2 className="font-display text-3xl font-extrabold md:text-4xl">
                {lang === "en" ? cat.title : cat.titleIs}
              </h2>
              <span className="text-sm text-muted-foreground">{cat.items.length} dishes</span>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {cat.items.map((item) => (
                <article key={item.name} className="group flex gap-5 rounded-2xl border border-border bg-card p-4 transition hover:shadow-md">
                  {item.image ? (
                    <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl">
                      <img src={item.image} alt={item.name} loading="lazy" width={400} height={400} className="h-full w-full object-cover transition group-hover:scale-105" />
                    </div>
                  ) : (
                    <div className="grid h-28 w-28 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                      <Leaf className="h-8 w-8" />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-extrabold leading-tight">
                        {lang === "en" ? item.name : item.nameIs ?? item.name}
                      </h3>
                      <span className="shrink-0 text-sm font-bold text-primary">{item.price}</span>
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {lang === "en" ? item.description : item.descriptionIs ?? item.description}
                    </p>
                    {item.tags && item.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.tags.map((t) => (
                          <span key={t} className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-secondary-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
