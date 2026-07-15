import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About R Academy | Meet Coach Rohan Agarwal",
  description:
    "Meet Rohan Agarwal, a Top 50 Northern California-ranked competitive tennis player turned coach, offering private and group lessons for all ages and levels in the Bay Area.",
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
              Meet Coach Rohan Agarwal
            </h2>
            <div className="mt-6 space-y-5 font-body text-[15px] leading-relaxed text-court-950/75">
              <p>
                Rohan Agarwal grew up playing competitive tennis and earned a
                Top 50 ranking in Northern California, building a strong
                foundation through years of tournament experience.
              </p>
              <p>
                For the past 2–3 years, Rohan has been coaching players of
                all ages and skill levels, helping them improve their
                technique, confidence, and love for the game. His coaching
                philosophy focuses on building strong fundamentals while
                creating a positive, motivating environment where every
                player can reach their full potential.
              </p>
              <p>
                Alongside coaching, Rohan is returning to competitive tennis,
                bringing fresh tournament experience and a high-performance
                mindset to his students.
              </p>
              <p>
                Rohan is now launching his own tennis academy and is excited
                to welcome children and adults of all skill levels. The
                academy offers both private lessons and group training,
                tailored to beginners, intermediate players, and competitive
                athletes looking to elevate their game.
              </p>
              <p>
                Whether you're picking up a racket for the first time or
                striving to compete at the next level, Rohan is dedicated to
                helping every student achieve their goals and enjoy the
                journey.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border-l-4 border-ace bg-court-50 p-6">
              <p className="font-body text-sm font-semibold uppercase tracking-wide text-court-950">
                Now hiring coaches
              </p>
              <p className="mt-2 font-body text-sm leading-relaxed text-court-950/75">
                The academy is expanding and looking for passionate tennis
                coaches committed to developing players in a supportive,
                energetic environment.{" "}
                <a
                  href="/contact"
                  className="font-semibold text-clay underline-offset-2 hover:underline"
                >
                  Get in touch
                </a>
                .
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
