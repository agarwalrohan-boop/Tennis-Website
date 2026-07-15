import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { PinIcon, KidsIcon, AdultIcon } from "@/components/icons";
import { scheduleClasses } from "@/lib/data";

export const metadata: Metadata = {
  title: "Class Schedule | R Academy Tennis Coaching",
  description:
    "See current class times and locations for R Academy's kids and adult tennis programs in the Bay Area.",
};

export default function SchedulePage() {
  const kidsClasses = scheduleClasses.filter((c) => c.ageGroup === "Kids");
  const adultClasses = scheduleClasses.filter((c) => c.ageGroup === "Adults");

  return (
    <>
      <section className="bg-court-950 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-ace">
            Schedule
          </p>
          <h1 className="mt-4 font-display text-5xl tracking-tight text-chalk sm:text-6xl">
            Current class times
          </h1>
          <p className="mt-5 font-body text-lg text-chalk/70">
            New classes are added as levels fill up — contact us if you don't
            see a time that works for you.
          </p>
        </div>
      </section>

      <section className="bg-court-50 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <FadeIn className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-court-800 text-ace">
              <KidsIcon className="h-8 w-8" />
            </div>
            <h2 className="font-display text-3xl tracking-tight text-court-950 sm:text-4xl">
              Kids Classes
            </h2>
          </FadeIn>

          <div className="mt-8 space-y-4">
            {kidsClasses.map((c, i) => (
              <FadeIn key={`${c.ageGroup}-${c.level}-${i}`} delay={i * 80}>
                <div className="grid gap-4 rounded-2xl border border-court-950/10 bg-white p-6 sm:grid-cols-[1fr,auto,auto] sm:items-center sm:gap-6">
                  <div>
                    <p className="font-display text-xl text-court-950">
                      {c.level}
                    </p>
                    <p className="mt-1 font-body text-sm text-court-950/60">
                      {c.days}
                    </p>
                  </div>
                  <p className="font-mono text-base font-semibold text-court-800">
                    {c.time}
                  </p>
                  <div className="flex items-center gap-2 text-court-950/70">
                    <PinIcon className="h-5 w-5 shrink-0 text-clay" />
                    <span className="font-body text-sm">{c.location}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <FadeIn className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-court-800 text-ace">
              <AdultIcon className="h-8 w-8" />
            </div>
            <h2 className="font-display text-3xl tracking-tight text-court-950 sm:text-4xl">
              Adult Classes
            </h2>
          </FadeIn>

          <div className="mt-8 space-y-4">
            {adultClasses.map((c, i) => (
              <FadeIn key={`${c.ageGroup}-${c.level}-${i}`} delay={i * 80}>
                <div className="grid gap-4 rounded-2xl border border-court-950/10 bg-court-50 p-6 sm:grid-cols-[1fr,auto,auto] sm:items-center sm:gap-6">
                  <div>
                    <p className="font-display text-xl text-court-950">
                      {c.level}
                    </p>
                    <p className="mt-1 font-body text-sm text-court-950/60">
                      {c.days}
                    </p>
                  </div>
                  <p className="font-mono text-base font-semibold text-court-800">
                    {c.time}
                  </p>
                  <div className="flex items-center gap-2 text-court-950/70">
                    <PinIcon className="h-5 w-5 shrink-0 text-clay" />
                    <span className="font-body text-sm">{c.location}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to reserve a spot?"
        subheading="Class sizes are kept small — let us know which level and time works for you."
        buttonLabel="Book Your Spot"
      />
    </>
  );
}
