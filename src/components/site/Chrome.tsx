import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone } from "lucide-react";
const logoAsset = "/images/logo.png";

const NAV = [
  { label: "Home", to: "/", hash: undefined as string | undefined },
  { label: "Our Story", to: "/", hash: "story" },
  { label: "Craft", to: "/", hash: "craft" },
  { label: "Products", to: "/products", hash: undefined },
  { label: "The Essence", to: "/", hash: "essence" },
  { label: "Enquiry", to: "/enquiry", hash: undefined },
  { label: "Contact", to: "/", hash: "contact" },

];

export function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 text-gold">
      <span className="h-px w-16 bg-gold/60" />
      <svg width="34" height="12" viewBox="0 0 34 12" fill="none" aria-hidden="true">
        <path
          d="M1 6c5-6 10 6 16 0s11 6 16 0"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      </svg>
      <span className="h-px w-16 bg-gold/60" />
    </div>
  );
}

export function Logo({ className = "h-12" }: { className?: string }) {
  return <img src={logoAsset} alt="MojRasa" className={`${className} mix-blend-multiply`} />;
}

export function Header({ active: _active }: { active?: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="shrink-0">
          <Logo className="h-11 w-auto md:h-14" />
        </Link>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-[0.68rem] tracking-[0.18em] uppercase md:text-[0.72rem]">
          {NAV.map((item) => {
            return (
              <Link
                key={item.label}
                to={item.to}
                {...(item.hash ? { hash: item.hash } : {})}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <p className="hidden font-display text-[0.7rem] tracking-[0.3em] text-rose lg:block">
          GOA · CASHEW · LOVE
        </p>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/70 bg-muted/60">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-6 py-12 md:grid-cols-3 md:items-center">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Logo className="h-14 w-auto" />
          <p className="font-display text-[0.7rem] tracking-[0.22em] text-muted-foreground uppercase">
            The Essence of Love.
            <br />
            The Spirit of Goa.
          </p>
        </div>

        <div className="text-center">
          <h3 className="font-display text-sm tracking-[0.24em] uppercase">Contact Us</h3>
          <div className="mt-4 space-y-2 font-sans text-sm text-muted-foreground">
            <a
              href="mailto:cc@mojrasa.com"
              className="flex items-center justify-center gap-2 transition-colors hover:text-primary"
            >
              <Mail className="size-4 text-rose" /> cc@mojrasa.com
            </a>
            <a
              href="tel:9488725557"
              className="flex items-center justify-center gap-2 transition-colors hover:text-primary"
            >
              <Phone className="size-4 text-rose" /> 9488725557
            </a>
          </div>
        </div>

        <div className="text-center md:text-right">
          <h3 className="font-display text-sm tracking-[0.24em] uppercase">Follow Us</h3>
          <div className="mt-4 flex justify-center gap-3 md:justify-end">
            <a
              href="https://www.instagram.com/moj_rasa?igsi=d2x5N3RjY2VzdXFx"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow MojRasa on Instagram"
              className="flex size-9 items-center justify-center rounded-full border border-border bg-cream text-primary transition-colors hover:bg-accent"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>
      </div>
      <p className="pb-8 text-center font-sans text-xs text-muted-foreground">
        © 2025 MojRasa. All rights reserved.
      </p>
    </footer>
  );
}
