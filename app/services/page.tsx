import type { Metadata } from "next";
import type { ReactNode } from "react";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { RacquetIcon, GroupIcon, KidsIcon, AdultIcon } from "@/components/icons";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tennis Coaching Programs | Private, Group, Kids & Adult",
  description:
    "Explore R Academy's tennis programs: private lessons, group lessons, kids academy, and adult clinics for beginner to advanced players across the Bay Area.",
};

const icons: Record<string, ReactNode> = {
  "private-lessons": <RacquetIcon className="h-9 w-9" />,
  "group-lessons": <GroupIcon className="h-9 w-9" />,
  "kids-academy": <KidsIcon className="h-9 w-9" />,
  "adult-clinics": <AdultIcon className="h-9 w-9" />,
};

const whoItsFor: Record<string, string> = {
  "private-lessons":
    "Players who want the fastest possible progress, players prepping for a specific tournament or tryout, and anyone who prefers one-on-one attention over a group setting.",
  "group-lessons":
    "Friends, coworkers, or club members who want a social, budget-friendly way to train together while still getting real coaching, not just casual hitting.",
  "kids-academy":
    "Kids ages 5–18, from first-time players who've never held a racquet to competitive juniors chasing their first USTA ranking points.",
  "adult-clinics":
    "Adults of any level — including total beginners — who want structured instruction plus the cardio benefit of a full group workout on court.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-court-950 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-ace">
            Programs
          </p>
          <h1 className="mt-4 font-display text-5xl tracking-tight text-chalk sm:text-6xl">
            Coaching built around you
          </h1>
          <p className="mt-5 font-body text-lg text-chalk/70">
            Every program at R Academy is designed around one idea: technique
            and confidence grow together. Here's how each one works.
          </p>
        </div>
      </section>

      <div className="divide-y divide-court-950/5">
        {services.map((service, i) => (
          <section
            key={service.slug}
            id={service.slug}
            className={i % 2 === 0 ? "bg-white" : "bg-court-50"}
          >
            <FadeIn className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[auto,1fr] lg:gap-16 lg:px-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-court-800 text-ace lg:h-20 lg:w-20">
                {icons[service.slug]}
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <h2 className="font-display text-3xl tracking-tight text-court-950 sm:text-4xl">
                    {service.name}
                  </h2>
                  <span className="font-mono text-base font-semibold text-clay">
                    {service.price}
                  </span>
                </div>
                <p className="mt-2 font-body text-sm font-semibold uppercase tracking-wide text-court-950/50">
                  {service.tagline}
                </p>
                <p className="mt-5 max-w-2xl font-body text-[15px] leading-relaxed text-court-950/70">
                  {service.description}
                </p>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="font-body text-xs font-semibold uppercase tracking-widest2 text-clay">
                      Benefits
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {service.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-3 font-body text-sm text-court-950/75"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ace" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-body text-xs font-semibold uppercase tracking-widest2 text-clay">
                      Who it's for
                    </h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-court-950/75">
                      {whoItsFor[service.slug]}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>
        ))}
      </div>

      <CTASection
        heading="Not sure which program fits?"
        subheading="Tell us your level and goals — we'll recommend the right starting point."
        buttonLabel="Ask R Academy"
      />
    </>
  );
}
