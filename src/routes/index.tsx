import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play, CircleCheck } from "lucide-react";
import { Header, Footer, Ornament } from "@/components/site/Chrome";
import { EnquiryForm } from "@/components/site/EnquiryForm";

import heroAsset from "@/assets/hero.png";
import storyAsset from "@/assets/story.png";
import bottleAsset from "@/assets/bottle.png";
import bottleCutAsset from "@/assets/bottle-cut.png";
import giftsetAsset from "@/assets/giftset.png";
import m1 from "@/assets/moment1.png";
import m2 from "@/assets/moment2.png";
import m3 from "@/assets/moment3.png";
import m4 from "@/assets/moment4.png";
import m5 from "@/assets/moment5.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MojRasa Cashew Feni — The Essence of Love, The Spirit of Goa" },
      {
        name: "description",
        content:
          "MojRasa is a premium Goan cashew feni, double distilled from handpicked cashews. Discover our heart bottle and premium gift set.",
      },
      { property: "og:title", content: "MojRasa — The Essence of Love, The Spirit of Goa" },
      {
        property: "og:description",
        content:
          "Premium cashew feni from Goa, crafted with love. Explore MojRasa Cashew Feni and the Premium Gift Set.",
      },
      { property: "og:image", content: `https://mojrasa.lovable.app${heroAsset}` },
      { name: "twitter:image", content: `https://mojrasa.lovable.app${heroAsset}` },
    ],
  }),
  component: Home,
});

const CRAFT = [
  {
    title: "Finest Cashews",
    text: "Handpicked from the best orchards of Goa.",
  },
  { title: "Double Distilled", text: "Traditional distillation for purity and smoothness." },
  { title: "Premium Quality", text: "Carefully matured for rich taste & aroma." },
  { title: "Made With Love", text: "Crafted to celebrate precious moments." },
];

const MOMENTS = [
  { src: m1, label: "Celebrations" },
  { src: m2, label: "Togetherness" },
  { src: m3, label: "Relaxation" },
  { src: m4, label: "Gifts of Love" },
  { src: m5, label: "Goa Heritage" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header active="Home" />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={storyAsset}
          alt="Goan coastline at sunset"
          className="h-[520px] w-full scale-110 object-cover object-center blur-[3px] md:h-[620px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream from-0% via-cream/75 via-20% to-cream/35" />
        <img
          src={bottleCutAsset}
          alt="MojRasa Cashew Feni heart-shaped bottle with cashew apples and blossoms"
          className="pointer-events-none absolute right-[3%] bottom-0 h-[86%] w-auto opacity-95 md:right-[10%] md:h-[92%]"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1400px] px-6">
            <div className="max-w-md">
              <Ornament />
              <h1 className="mt-5 font-display leading-[1.05]">
                <span className="block text-[0.95rem] tracking-[0.34em] text-foreground/80 uppercase">
                  The Essence of
                </span>
                <span className="block text-5xl tracking-wide md:text-6xl">LOVE.</span>
                <span className="mt-2 block text-[0.95rem] tracking-[0.34em] text-foreground/80 uppercase">
                  The Spirit of
                </span>
                <span className="block text-5xl tracking-wide md:text-6xl">GOA.</span>
              </h1>
              <p className="mt-5 max-w-xs font-sans text-sm leading-relaxed text-muted-foreground">
                Born from Goa's rich heritage and the finest cashews, crafted with love to create
                moments that last forever.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <Link to="/products" className="btn-crimson hover:btn-crimson-hover">
                  Explore MojRasa <ArrowRight className="size-4" />
                </Link>
                <button className="flex items-center gap-3 font-sans text-[0.7rem] tracking-[0.2em] text-primary uppercase">
                  <span className="flex size-9 items-center justify-center rounded-full border border-primary/50">
                    <Play className="size-3 fill-primary" />
                  </span>
                  Our Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="mx-auto max-w-[1400px] px-4 py-6">
        <div className="panel grid items-center gap-8 overflow-hidden p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-4xl">
              A Love Story
              <br />
              from Goa.
            </h2>
            <p className="mt-5 max-w-sm font-sans text-sm leading-relaxed text-muted-foreground">
              MojRasa is more than a drink — it's a feeling. A celebration of love, tradition, and
              the timeless spirit of Goa. Inspired by the land, crafted for the heart.
            </p>
            <Link
              to="/products"
              className="mt-6 inline-flex items-center gap-2 border-b border-primary/50 pb-1 font-sans text-[0.7rem] tracking-[0.22em] text-primary uppercase"
            >
              Know More <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <img
            src={storyAsset}
            alt="Illustrated Goan coastline with church, palms and blossoms"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      </section>

      {/* CRAFT */}
      <section id="craft" className="mx-auto max-w-[1400px] px-4 py-6">
        <div className="panel px-8 py-12">
          <h2 className="text-center text-3xl">Crafted with Passion</h2>
          <div className="mt-3 flex justify-center">
            <Ornament />
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-4 md:divide-x md:divide-border/70">
            {CRAFT.map((c) => (
              <div key={c.title} className="px-4 text-center">
                <h3 className="font-display text-sm tracking-[0.18em] text-rose uppercase">
                  {c.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="mx-auto max-w-[1400px] px-4 py-6">
        <div className="panel px-6 py-12 md:px-10">
          <h2 className="text-center text-3xl">Our Products</h2>
          <div className="mt-3 flex justify-center">
            <Ornament />
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {[
              {
                img: bottleAsset,
                alt: "MojRasa Cashew Feni heart-shaped bottle",
                title: ["MojRasa", "Cashew Feni"],
                sub: "The Essence of Love",
                text: "A premium cashew feni that captures the essence of Goa in every drop.",
                bullets: ["Smooth & Refined", "Rich Aroma", "Pure Goa Heritage"],
                cta: "Discover More",
              },
              {
                img: giftsetAsset,
                alt: "MojRasa Premium Gift Set with bottle, glass, pen and keychain",
                title: ["MojRasa", "Premium Gift Set"],
                sub: "Perfect for Every Occasion",
                text: "A thoughtfully curated set for your loved ones.",
                bullets: [
                  "Premium Bottle",
                  "Signature Glass",
                  "Luxury Pen",
                  "Exclusive Keychain",
                ],
                cta: "Explore Gift Set",
              },
            ].map((p) => (
              <div
                key={p.cta}
                className="grid items-center gap-6 rounded-xl border border-border/70 bg-muted/40 p-5 sm:grid-cols-2"
              >
                <img
                  src={p.img}
                  alt={p.alt}
                  className="h-64 w-full rounded-lg object-cover sm:h-72"
                />
                <div>
                  <h3 className="font-display text-2xl leading-tight">
                    {p.title[0]}
                    <br />
                    {p.title[1]}
                  </h3>
                  <p className="mt-2 font-display text-[0.7rem] tracking-[0.2em] text-rose uppercase">
                    {p.sub}
                  </p>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                  <ul className="mt-4 space-y-2 font-sans text-sm text-foreground/80">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <CircleCheck className="size-4 text-rose" /> {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/products" className="btn-crimson hover:btn-crimson-hover mt-6">
                    {p.cta} <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESSENCE */}
      <section id="essence" className="mx-auto max-w-[1400px] px-4 py-6 pb-14">
        <div className="panel px-6 py-12">
          <h2 className="text-center text-3xl">The Essence in Every Moment</h2>
          <div className="mt-3 flex justify-center">
            <Ornament />
          </div>
          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-5">
            {MOMENTS.map((m) => (
              <figure key={m.label}>
                <img
                  src={m.src}
                  alt={m.label}
                  loading="lazy"
                  className="h-32 w-full rounded-lg object-cover md:h-36"
                />
                <figcaption className="mt-3 text-center font-display text-[0.68rem] tracking-[0.2em] text-primary uppercase">
                  {m.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <EnquiryForm />

      <Footer />

    </div>
  );
}
