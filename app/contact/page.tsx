import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact R Academy | Book Tennis Lessons in the Bay Area",
  description:
    "Get in touch with R Academy to book private or group tennis lessons in San Jose, Palo Alto, Mountain View, or Sunnyvale.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-court-950 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-ace">
            Contact
          </p>
          <h1 className="mt-4 font-display text-5xl tracking-tight text-chalk sm:text-6xl">
            Let's get you on court
          </h1>
          <p className="mt-5 font-body text-lg text-chalk/70">
            Send a message with your goals and availability, or grab a time
            directly on the calendar below.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr,1.1fr] lg:px-10">
          <FadeIn>
            <h2 className="font-display text-2xl text-court-950">
              Send a message
            </h2>
            <p className="mt-2 font-body text-sm text-court-950/60">
              We typically reply within one business day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="rounded-2xl bg-court-50 p-8">
              <h2 className="font-display text-2xl text-court-950">
                Reach us directly
              </h2>
              <ul className="mt-5 space-y-4 font-body text-sm text-court-950/75">
                <li>
                  <span className="block font-semibold text-court-950">
                    Phone
                  </span>
                  669 204 8666
                </li>
                <li>
                  <span className="block font-semibold text-court-950">
                    Email
                  </span>
                  agarwalrohan@gmail.com
                </li>
                <li>
                  <span className="block font-semibold text-court-950">
                    Coaching locations
                  </span>
                  San Jose, Palo Alto, Mountain View, Sunnyvale, Cupertino
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="font-display text-2xl text-court-950">
                Book a time instantly
              </h2>
              <p className="mt-2 font-body text-sm text-court-950/60">
                Prefer to pick a slot yourself? Use the scheduler below.
              </p>

              {/*
                Calendly embed placeholder.
                Replace the div below with Calendly's inline embed once you
                have an account, e.g.:

                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/your-r-academy-handle/lesson"
                  style={{ minWidth: "320px", height: "700px" }}
                />
                and load the Calendly widget script in app/layout.tsx or
                via next/script on this page.
              */}
              <div className="mt-4 flex h-[420px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-court-950/15 bg-court-50 text-center">
                <p className="font-body text-sm font-semibold uppercase tracking-wide text-court-950/50">
                  Calendly Scheduler
                </p>
                <p className="mt-2 max-w-xs font-body text-sm text-court-950/60">
                  Embed placeholder — connect your Calendly link here to let
                  players book lessons directly.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
