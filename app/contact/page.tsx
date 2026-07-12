import type { Metadata } from "next";
import Script from "next/script";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";

// TODO: replace with your real Calendly scheduling link once you create an
// account (Calendly → Event Types → copy the link, e.g.
// "https://calendly.com/your-handle/lesson").
const CALENDLY_URL = "https://calendly.com/your-r-academy-handle/lesson";

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
                  <a
                    href="mailto:rohanagarwalacademy@gmail.com"
                    className="transition-colors hover:text-court-700"
                  >
                    rohanagarwalacademy@gmail.com
                  </a>
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

              <div
                className="calendly-inline-widget mt-4 overflow-hidden rounded-2xl"
                data-url={CALENDLY_URL}
                style={{ minWidth: "320px", height: "700px" }}
              />
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
