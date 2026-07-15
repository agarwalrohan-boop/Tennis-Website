import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About R Academy | Bay Area Tennis Coaching",
  description:
    "Meet R Academy: professional tennis coaching in the Bay Area for all ages and levels, focused on building sound technique and real on-court confidence.",
};

const values = [
  {
    title: "All ages welcome",
    body: "From a 5-year-old's first swing to a lifelong player sharpening a doubles game in their 60s, every session is built for the person in front of the coach.",
  },
  {
    title: "Beginner to advanced",
    body: "Whether you've never rallied or you're chasing a higher tournament seed, the coaching adjusts to your level rather than running a one-size drill.",
  },
  {
    title: "Technique and confidence",
    body: "Clean mechanics matter, but so does believing in your shot under pressure. Every lesson works on both at once.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-court-950 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-ace">
            About R Academy
          </p>
          <h1 className="mt-4 font-display text-5xl tracking-tight text-chalk sm:text-6xl">
            Built by a coach, for players
          </h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <FadeIn>
            <h2 className="font-display text-3xl tracking-tight text-court-950 sm:text-4xl">
              Our story
            </h2>
            <div className="mt-6 space-y-5 font-body text-[15px] leading-relaxed text-court-950/75">
              <p>
                R Academy started with a simple frustration: too many players
                in the Bay Area were stuck between overcrowded group clinics
                that never touched their specific weaknesses, and private
                coaching that felt more like a status symbol than actual
                instruction.
              </p>
              <p>
                R Academy was founded by a coach with years on court —
                teaching juniors their first forehand, helping adult
                beginners fall in love with the game, and preparing
                competitive players for tournament play. That range is what
                shaped the philosophy here: tennis is not one skill, it's a
                different conversation with every player.
              </p>
              <p>
                Today, R Academy runs private lessons, small group sessions,
                a full kids academy, and adult clinics across San Jose, Palo
                Alto, Mountain View, and Sunnyvale — always kept small enough
                that every player actually gets seen.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/coaching-1.jpg"
                alt="Coach and player working through drills on court"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-court-50 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { src: "/images/coaching-4.jpg", alt: "Adult player striking a forehand" },
              { src: "/images/coaching-3.jpg", alt: "Junior player about to serve" },
              { src: "/images/coaching-2.jpg", alt: "Group of players after a session" },
            ].map((photo, i) => (
              <FadeIn key={photo.src} delay={i * 90}>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={270} className="mt-14">
            <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 text-center shadow-sm shadow-court-950/5">
              <h3 className="font-display text-2xl text-court-950">
                Coaching philosophy
              </h3>
              <p className="mt-4 font-body text-[15px] leading-relaxed text-court-950/75">
                Good technique should feel natural under pressure, not just
                on a quiet practice court. That's why every lesson — private,
                group, junior, or adult — pairs stroke mechanics with
                situational play: real points, real pressure, real feedback.
              </p>
              <p className="mt-4 font-body text-[15px] leading-relaxed text-court-950/75">
                Confidence is built the same way footwork is: repetition,
                honest correction, and enough encouragement to keep taking
                the next swing.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl tracking-tight text-court-950 sm:text-5xl">
              What every program shares
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-court-950/10 bg-court-50 p-8">
                  <h3 className="font-display text-xl text-court-950">
                    {v.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-court-950/70">
                    {v.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to work together?"
        subheading="Book a first lesson and let's build a plan around your game."
        buttonLabel="Get Started"
      />
    </>
  );
}
