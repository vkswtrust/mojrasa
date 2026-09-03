import { useEffect, useState } from "react";
import { ShieldCheck, Wine } from "lucide-react";
import { Logo, Ornament } from "@/components/site/Chrome";
import heroAsset from "@/assets/hero.png";

const STORAGE_KEY = "mojrasa:age-verified";
type Status = "checking" | "gate" | "verified" | "denied";

function useAgeStatus() {
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "yes") setStatus("verified");
      else if (stored === "no") setStatus("denied");
      else setStatus("gate");
    } catch {
      setStatus("gate");
    }
  }, []);

  const verify = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "yes");
    } catch {
      /* ignore */
    }
    setStatus("verified");
  };

  const deny = () => {
    setStatus("denied");
  };

  const reconsider = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setStatus("gate");
  };

  return { status, verify, deny, reconsider };
}

export function AgeGate({ children }: { children: React.ReactNode }) {
  const { status, verify, deny, reconsider } = useAgeStatus();

  // Server render + initial client render ("checking"): render nothing to avoid hydration mismatch.
  if (status === "verified") return <>{children}</>;
  if (status === "checking") return null;
  if (status === "denied") return <AgeDeniedScreen onReconsider={reconsider} />;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-background px-4 py-8">
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <img
          src={heroAsset.url}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center blur-[2px]"
        />
        <div className="absolute inset-0 bg-cream/70" />
      </div>

      <div className="panel relative z-10 w-full max-w-lg p-8 text-center md:p-12">
        <div className="flex justify-center">
          <Logo className="h-16 w-auto" />
        </div>
        <div className="mt-5 flex justify-center">
          <Ornament />
        </div>

        <h1 className="mt-6 text-2xl leading-tight md:text-3xl">
          Welcome to MojRasa
        </h1>
        <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
          MojRasa is a premium cashew feni from Goa. To enter our world, please
          confirm you are of legal drinking age.
        </p>

        <div className="mt-7 flex items-center justify-center gap-3 font-display text-[0.7rem] tracking-[0.22em] text-rose uppercase">
          <ShieldCheck className="size-4" />
          Are you 18 or older?
        </div>

        <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={verify}
            className="btn-crimson hover:btn-crimson-hover justify-center"
          >
            Yes, I'm 18+
          </button>
          <button
            onClick={deny}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-cream px-6 py-[0.85rem] font-sans text-[0.75rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
          >
            No, I'm under 18
          </button>
        </div>

        <p className="mt-7 flex items-center justify-center gap-2 font-sans text-[0.68rem] tracking-[0.12em] text-muted-foreground/80 uppercase">
          <Wine className="size-3.5 text-rose" />
          Enjoy the essence · Don't drink and drive
        </p>
      </div>
    </div>
  );
}

export function AgeDeniedScreen({ onReconsider }: { onReconsider: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background px-4">
      <div className="panel relative z-10 w-full max-w-md p-10 text-center">
        <div className="flex justify-center">
          <Logo className="h-14 w-auto" />
        </div>
        <h1 className="mt-6 text-2xl">We're Sorry</h1>
        <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
          You must be at least 18 years old to visit MojRasa. Please come back
          once you have reached the legal drinking age. Until then, we look
          forward to welcoming you.
        </p>
        <button
          type="button"
          onClick={onReconsider}
          className="btn-crimson hover:btn-crimson-hover mt-7 justify-center"
        >
          Go back
        </button>
        <div className="mt-6 flex justify-center">
          <Ornament />
        </div>
        <p className="mt-6 font-sans text-[0.68rem] tracking-[0.12em] text-muted-foreground/80 uppercase">
          MojRasa · The Essence of Love, The Spirit of Goa
        </p>
      </div>
    </div>
  );
}

export { useAgeStatus, STORAGE_KEY };
