import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Clock, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { submitEnquiry } from "@/lib/enquiry.functions";
import { Ornament } from "@/components/site/Chrome";

const INFO = [
  { icon: Mail, title: "Email", lines: ["cc@mojrasa.com", "+91 94887 25557"] },
  { icon: MapPin, title: "Address", lines: ["MojRasa Distillery", "Goa, India"] },
  { icon: Clock, title: "Hours", lines: ["Mon – Sat: 10:00 AM – 7:00 PM"] },
];

const EMPTY = { name: "", email: "", phone: "", message: "" };

export function EnquiryForm() {
  const send = useServerFn(submitEnquiry);
  const [form, setForm] = useState(EMPTY);
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return; // prevent duplicate submissions

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (name.length < 2) {
      toast.error("Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (message.length < 5) {
      toast.error("Please write a short message.");
      return;
    }

    setBusy(true);
    try {
      await send({ data: { name, email, phone: form.phone.trim(), message } });
      toast.success("Thank you! Your enquiry has been received — our team will reply shortly.");
      setForm(EMPTY);
    } catch {
      toast.error("Could not send your enquiry. Please try again or email cc@mojrasa.com.");
    } finally {
      setBusy(false);
    }
  };

  const field =
    "mt-2 w-full rounded-lg border border-border bg-cream/60 px-4 py-3 font-sans text-sm text-foreground outline-none transition focus:border-rose";

  return (
    <section id="enquiry" className="mx-auto max-w-[1400px] px-4 py-6 pb-14">
      <div className="panel px-6 py-12">
        <h2 className="text-center text-3xl">Customer Enquiry</h2>
        <div className="mt-3 flex justify-center">
          <Ornament />
        </div>
        <p className="mx-auto mt-5 max-w-xl text-center font-sans text-sm text-muted-foreground">
          Questions about our feni, gifting or distribution? Send us a message and our team will get
          back to you.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {INFO.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-xl border border-border bg-cream/50 p-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-rose">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-sm tracking-[0.2em] uppercase">{item.title}</h3>
                  {item.lines.map((l) => (
                    <p key={l} className="font-sans text-sm text-muted-foreground">
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-border bg-cream/50 p-6 md:p-8"
          >
            <h3 className="font-display text-base tracking-[0.2em] uppercase">Send a Message</h3>
            <div className="mt-6 space-y-5">
              <label className="block font-sans text-sm text-muted-foreground">
                Name
                <input
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={field}
                />
              </label>
              <label className="block font-sans text-sm text-muted-foreground">
                Email
                <input
                  required
                  type="email"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={field}
                />
              </label>
              <label className="block font-sans text-sm text-muted-foreground">
                Message
                <textarea
                  required
                  rows={5}
                  maxLength={2000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={field}
                />
              </label>
              <button
                type="submit"
                disabled={busy}
                className="btn-crimson hover:btn-crimson-hover w-full justify-center disabled:opacity-60"
              >
                <Send className="size-4" /> {busy ? "Sending…" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
