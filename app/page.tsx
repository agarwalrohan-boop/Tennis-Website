import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/FadeIn";
import { RacquetIcon, GroupIcon, KidsIcon, AdultIcon, PinIcon } from "@/components/icons";
import { services, testimonials, locations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tennis Coach San Jose & Bay Area | Private & Group Lessons",
  description:
    "Elevate your game with R Academy — private and group tennis lessons in San Jose, Palo Alto, Mountain View, and Sunnyvale. Book your first lesson today.",
};

const serviceIcons: Record<string, ReactNode> = {
  "private-lessons": <RacquetIcon />,
  "group-lessons": <GroupIcon />,
  "kids-academy": <KidsIcon />,
  "adult-clinics": <AdultIcon />,
};

const serviceImages: Record<string, string> = {
  "private-lessons": "/images/coaching-4.jpg",
  "group-lessons":
    "https://images.unsplash.com/flagged/photo-1576972405668-2d020a01cbfa?auto=format&fit=crop&w=1200&q=80",
  "kids-academy":
    "https://images.unsplash.com/photo-1643236943728-2745b38cbcf7?auto=format&fit=crop&w=1200&q=80",
  "adult-clinics": "/images/coaching-1.jpg",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-court-950">
        <div className="absolute inset-0">
          <Image
            src="/images/coaching-4.jpg"
            alt="R Academy coach mid-forehand on a Bay Area tennis court"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-court-950 via-court-950/85 to-court-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-court-950 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-36 lg:px-10">
          <div className="max-w-xl">
            <p className="font-body text-sm font-semibold uppercase tracking-widest2 text-ace">
              San Jose &middot; Palo Alto &middot; Mountain View &middot; Sunnyvale
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight text-chalk sm:text-6xl lg:text-6xl">
              Elevate Your <span className="text-ace">Tennis</span> Game
            </h1>
            <p className="mt-6 max-w-md font-body text-lg text-chalk/75">
              Private &amp; group tennis coaching in the Bay Area — built
              around your swing, your schedule, and your goals.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-ace px-8 py-4 font-body text-sm font-semibold uppercase tracking-wide text-court-950 transition-transform hover:scale-105"
              >
                Book Your First Lesson
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-chalk/30 px-8 py-4 font-body text-sm font-semibold uppercase tracking-wide text-chalk transition-colors hover:border-ace hover:text-ace"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-court-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-clay">
              Programs
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-court-950 sm:text-5xl">
              Coaching for every level
            </h2>
            <p className="mt-4 font-body text-court-950/65">
              From your very first rally to competitive tournament prep, R
              Academy has a program built for where you are right now.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 90}>
                <ServiceCard
                  icon={serviceIcons[service.slug]}
                  image={serviceImages[service.slug]}
                  name={service.name}
                  tagline={service.tagline}
                  description={service.description}
                  price={service.price}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-clay">
              Pricing
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-court-950 sm:text-5xl">
              Simple, straightforward rates
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <FadeIn>
              <div className="flex h-full flex-col rounded-2xl border border-court-950/10 p-8 text-center">
                <p className="font-body text-sm font-semibold uppercase tracking-wide text-court-950/60">
                  Private Lessons
                </p>
                <p className="mt-4 font-display text-4xl text-court-950">
                  $100<span className="text-lg font-body">/hr</span>
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={90}>
              <div className="flex h-full flex-col rounded-2xl border-2 border-ace bg-court-950 p-8 text-center">
                <p className="font-body text-sm font-semibold uppercase tracking-wide text-ace">
                  Group Lessons
                </p>
                <p className="mt-4 font-display text-4xl text-chalk">
                  $40<span className="text-lg font-body">/person</span>
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={180}>
              <div className="flex h-full flex-col justify-center rounded-2xl border border-court-950/10 p-8 text-center">
                <p className="font-body text-sm font-semibold uppercase tracking-wide text-court-950/60">
                  Kids &amp; Adult Packages
                </p>
                <p className="mt-4 font-display text-2xl text-court-950">
                  Contact for packages
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-court-950 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-ace">
              Testimonials
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-chalk sm:text-5xl">
              What players &amp; parents say
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <FadeIn key={t.name} delay={i * 90}>
                <TestimonialCard {...t} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-clay">
              On the Court
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-court-950 sm:text-5xl">
              Real players, real progress
            </h2>
          </FadeIn>

          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { src: "/images/coaching-4.jpg", alt: "Adult player striking a forehand" },
              {
                src: "https://images.unsplash.com/flagged/photo-1576972405668-2d020a01cbfa?auto=format&fit=crop&w=1200&q=80",
                alt: "Group of adult players in a doubles match",
              },
              {
                src: "https://images.unsplash.com/photo-1643236943728-2745b38cbcf7?auto=format&fit=crop&w=1200&q=80",
                alt: "Junior player mid-swing",
              },
              { src: "/images/coaching-1.jpg", alt: "Player gathering balls between drills" },
            ].map((photo, i) => (
              <FadeIn key={photo.src} delay={i * 90}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-court-50 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-clay">
              Where We Play
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-court-950 sm:text-5xl">
              Serving the Bay Area
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {locations.map((loc, i) => (
              <FadeIn key={loc.city} delay={i * 80}>
                <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm shadow-court-950/5">
                  <PinIcon className="mt-1 h-6 w-6 shrink-0 text-clay" />
                  <div>
                    <p className="font-display text-xl text-court-950">
                      {loc.city}
                    </p>
                    <p className="font-body text-sm text-court-950/60">
                      {loc.detail}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Start Your Training Today"
        subheading="Spots fill up by season — reserve your first lesson and see where your game can go."
        buttonLabel="Schedule a Lesson"
      />
    </>
  );
}
