import type { Metadata } from "next";
import type { ReactNode } from "react";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { KidsIcon, AdultIcon } from "@/components/icons";
import { kidsLevels, adultLevels, type Level } from "@/lib/data";

export const metadata: Metadata = {
  title: "Player Levels | Kids & Adult Tennis Programs",
  description:
    "See R Academy's player levels for kids and adults — Beginner 1, Beginner 2, Intermediate 1, Intermediate 2, and Advanced — and find the right starting point.",
};

function LevelGroup({
  heading,
  icon,
  levels,
}: {
  heading: string;
  icon: ReactNode;
  levels: Level[];
}) {
  return (
    <div>
      <FadeIn className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-court-800 text-ace">
          {icon}
        </div>
        <h2 className="font-display text-3xl tracking-tight text-court-950 sm:text-4xl">
          {heading}
        </h2>
      </FadeIn>

      <div className="mt-8 space-y-4">
        {levels.map((level, i) => (
          <FadeIn key={level.name} delay={i * 80}>
            <div className="flex flex-col gap-2 rounded-2xl border border-court-950/10 bg-white p-6 sm:flex-row sm:items-baseline sm:gap-6">
              <p className="shrink-0 font-display text-xl text-court-950 sm:w-44">
                {level.name}
              </p>
              <p className="font-body text-sm leading-relaxed text-court-950/70">
                {level.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

export default function LevelsPage() {
  return (
    <>
      <section className="bg-court-950 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-ace">
            Player Levels
          </p>
          <h1 className="mt-4 font-display text-5xl tracking-tight text-chalk sm:text-6xl">
            Find your level
          </h1>
          <p className="mt-5 font-body text-lg text-chalk/70">
            Kids and adults each move through the same five-level pathway —
            not sure where you fit? Reach out and we'll help you place
            correctly the first time.
          </p>
        </div>
      </section>

      <section className="bg-court-50 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <LevelGroup heading="Kids Levels" icon={<KidsIcon className="h-8 w-8" />} levels={kidsLevels} />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <LevelGroup heading="Adult Levels" icon={<AdultIcon className="h-8 w-8" />} levels={adultLevels} />
        </div>
      </section>

      <CTASection
        heading="Not sure which level fits?"
        subheading="Tell us your experience and we'll recommend the right class to start in."
        buttonLabel="Ask R Academy"
      />
    </>
  );
}
