import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  Sparkles,
  MapPin,
  HeartHandshake,
  Wine,
  GlassWater,
  PenLine,
  KeyRound,
  ScrollText,
  Hourglass,
  Milk as Bottle,
  Droplets,
  Compass,
  Snowflake,
  NotebookPen,
  PackageOpen,
  Gift,
  Heart,
} from "lucide-react";
import { Header, Footer, Ornament } from "@/components/site/Chrome";
import bottleAsset from "@/assets/bottle.png";
import giftsetAsset from "@/assets/giftset.png";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Our Products — MojRasa Cashew Feni & Premium Gift Set" },
      {
        name: "description",
        content:
          "MojRasa Cashew Feni 750ml at 42.8% ABV and the MojRasa Premium Gift Set with bottle, glass, pen, keychain and a personalized message.",
      },
      { property: "og:title", content: "Our Products — MojRasa" },
      {
        property: "og:description",
        content:
          "Two expressions of love. One timeless essence. Explore MojRasa Cashew Feni and the Premium Gift Set.",
      },
      { property: "og:image", content: `https://mojrasa.lovable.app${bottleAsset.url}` },
      { name: "twitter:image", content: `https://mojrasa.lovable.app${bottleAsset.url}` },
    ],
  }),
  component: Products,
});

const FENI_FEATURES = [
  {
    icon: Award,
    title: "Premium Cashew Feni",
    text: "Made from the choicest cashews, double distilled for exceptional purity.",
  },
  {
    icon: Sparkles,
    title: "Smooth & Elegant",
    text: "A refined taste with a soft, warm finish that lingers.",
  },
  {
    icon: MapPin,
    title: "Crafted in Goa",
    text: "Rooted in Goan heritage, crafted with love and tradition.",
  },
  {
    icon: HeartHandshake,
    title: "Perfect for Every Moment",
    text: "Celebrate love, success and special moments.",
  },
];

const GIFT_FEATURES = [
  {
    icon: Wine,
    title: "MojRasa Cashew Feni (750 ml)",
    text: "Our signature cashew feni crafted with perfection.",
  },
  {
    icon: GlassWater,
    title: "Premium Glass",
    text: "Elegant branded glass for a perfect sipping experience.",
  },
  {
    icon: PenLine,
    title: "Premium Pen",
    text: "A sleek pen that adds a touch of class to every thought.",
  },
  {
    icon: KeyRound,
    title: "Bottle Opener Keychain",
    text: "Custom branded keychain for memorable moments.",
  },
  {
    icon: ScrollText,
    title: "Personalized Message",
    text: "A heartfelt space to write your love and emotions.",
  },
];

const FENI_DETAILS = [
  { icon: Hourglass, label: "Category", value: "Cashew Feni" },
  { icon: Bottle, label: "Volume", value: "750 ml" },
  { icon: Droplets, label: "Alcohol by Volume", value: "42.8% ABV" },
  { icon: Compass, label: "Origin", value: "Goa, India" },
  { icon: Snowflake, label: "Best Served", value: "Neat / Chilled" },
  { icon: NotebookPen, label: "Tasting Notes", value: "Smooth · Rich · Nutty · Warm" },
];

const GIFT_DETAILS = [
  { icon: PackageOpen, label: "Set Includes", value: "5 Premium Items" },
  { icon: Bottle, label: "Bottle Size", value: "750 ml" },
  { icon: Droplets, label: "Alcohol by Volume", value: "42.8% ABV" },
  { icon: Gift, label: "Packaging", value: "Luxury Gift Box" },
  { icon: Heart, label: "Ideal For", value: "Gifting & Celebrations" },
  { icon: Compass, label: "Crafted In", value: "Goa, India" },
];

type Detail = { icon: typeof Heart; label: string; value: string };

function DetailStrip({ items }: { items: Detail[] }) {
  return (
    <div className="mt-8 rounded-xl border border-border/70 bg-muted/40 px-4 py-6">
      <p className="text-center font-display text-[0.68rem] tracking-[0.28em] text-rose uppercase">
        Details
      </p>
      <div className="mt-5 grid grid-cols-2 gap-y-6 sm:grid-cols-3 md:grid-cols-6 md:divide-x md:divide-border/70">
        {items.map((d) => (
          <div key={d.label} className="px-2 text-center">
            <d.icon className="mx-auto size-5 text-rose" strokeWidth={1.4} />
            <p className="mt-3 font-display text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase">
              {d.label}
            </p>
            <p className="mt-1 font-sans text-xs text-foreground/85">{d.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Header active="Products" />

      <section className="mx-auto max-w-[1500px] px-4 pt-12 pb-6">
        <div className="flex justify-center">
          <Ornament />
        </div>
        <h1 className="mt-5 text-center text-4xl md:text-5xl">Our Products</h1>
        <p className="mt-3 text-center font-sans text-sm text-muted-foreground">
          Two expressions of love. One timeless essence.
        </p>

        <div className="mt-10 grid gap-8 xl:grid-cols-2">
          {/* CASHEW FENI */}
          <article className="panel p-7 md:p-9">
            <div className="grid gap-6 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="font-display text-3xl leading-tight">
                  MojRasa
                  <br />
                  Cashew Feni
                </h2>
                <div className="mt-4 flex items-center gap-3">
                  <span className="h-px w-14 bg-gold/70" />
                  <Heart className="size-3 fill-rose text-rose" />
                  <span className="h-px w-14 bg-gold/70" />
                </div>
                <p className="mt-3 text-center font-display text-3xl text-gold md:text-left">₹1,499</p>
                <p className="text-center font-sans text-[0.65rem] text-muted-foreground md:text-left">
                  inclusive of all taxes
                </p>
                <p className="mt-4 font-display text-[0.72rem] tracking-[0.2em] text-rose uppercase">
                  The Essence of Love
                </p>
                <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
                  A luxurious cashew feni crafted from the finest handpicked cashews of Goa. Smooth,
                  elegant and rich with the spirit of celebration.
                </p>
                <ul className="mt-7 space-y-5">
                  {FENI_FEATURES.map((f) => (
                    <li key={f.title} className="flex gap-3">
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-cream">
                        <f.icon className="size-4 text-rose" strokeWidth={1.5} />
                      </span>
                      <div>
                        <h3 className="font-display text-[0.8rem] tracking-[0.06em] text-rose">
                          {f.title}
                        </h3>
                        <p className="mt-1 font-sans text-xs leading-relaxed text-muted-foreground">
                          {f.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <img
                src={bottleAsset.url}
                alt="MojRasa Cashew Feni heart-shaped bottle with cashew apples and blossoms"
                className="w-full rounded-xl object-cover"
              />
            </div>
            <DetailStrip items={FENI_DETAILS} />
          </article>

          {/* GIFT SET */}
          <article className="panel p-7 md:p-9">
            <div className="grid gap-6 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="font-display text-3xl leading-tight">
                  MojRasa
                  <br />
                  Premium Gift Set
                </h2>
                <div className="mt-4 flex items-center gap-3">
                  <span className="h-px w-14 bg-gold/70" />
                  <Heart className="size-3 fill-rose text-rose" />
                  <span className="h-px w-14 bg-gold/70" />
                </div>
                <p className="mt-3 text-center font-display text-3xl text-gold md:text-left">₹2,499</p>
                <p className="text-center font-sans text-[0.65rem] text-muted-foreground md:text-left">
                  inclusive of all taxes
                </p>
                <p className="mt-4 font-display text-[0.72rem] tracking-[0.2em] text-rose uppercase">
                  A Gift That Speaks from the Heart
                </p>
                <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
                  A thoughtfully curated gift set that celebrates love, memories and unforgettable
                  moments.
                </p>
                <ul className="mt-6 space-y-4">
                  {GIFT_FEATURES.map((f) => (
                    <li key={f.title} className="flex gap-3">
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-cream">
                        <f.icon className="size-4 text-rose" strokeWidth={1.5} />
                      </span>
                      <div>
                        <h3 className="font-display text-[0.8rem] tracking-[0.06em] text-rose">
                          {f.title}
                        </h3>
                        <p className="mt-1 font-sans text-xs leading-relaxed text-muted-foreground">
                          {f.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <img
                src={giftsetAsset.url}
                alt="MojRasa Premium Gift Set with copper bottle, glass, pen, keychain and love note"
                className="w-full rounded-xl object-cover"
              />
            </div>
            <DetailStrip items={GIFT_DETAILS} />
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}
