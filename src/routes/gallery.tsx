import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-spread.jpg";
import interior from "@/assets/interior.jpg";
import { featuredImages } from "@/data/menu";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Loving Hut Iceland" },
      { name: "description", content: "Photos of the food, interior and atmosphere at Loving Hut Iceland — a 100% vegan restaurant on Laugavegur in Reykjavík." },
      { property: "og:title", content: "Gallery | Loving Hut Iceland" },
      { property: "og:description", content: "A visual look at Loving Hut Iceland — vegan Asian-inspired dishes and our restaurant on Laugavegur." },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const items = [
  { src: hero, alt: "Loving Hut Iceland vegan food spread", span: "md:col-span-2 md:row-span-2" },
  { src: featuredImages.padthai, alt: "Vegan Pad Thai", span: "" },
  { src: featuredImages.pho, alt: "Vegan Pho soup", span: "" },
  { src: interior, alt: "Restaurant interior", span: "md:col-span-2" },
  { src: featuredImages.curry, alt: "Coconut curry with rice", span: "" },
  { src: featuredImages.burger, alt: "Vegan burger and fries", span: "" },
  { src: featuredImages.springrolls, alt: "Crispy spring rolls with peanut sauce", span: "" },
  { src: featuredImages.ricebowl, alt: "Bibimbap style rice bowl", span: "md:col-span-2" },
];

function GalleryPage() {
  return (
    <div>
      <section className="bg-[color:var(--cream)]">
        <div className="container-page py-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Gallery</span>
          <h1 className="mt-2 font-display text-5xl font-extrabold md:text-6xl">Come hungry.</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            A visual taste of Loving Hut Iceland — from the food on your plate to the room around it.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((it, i) => (
            <figure key={i} className={`overflow-hidden rounded-2xl bg-secondary ${it.span}`}>
              <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
