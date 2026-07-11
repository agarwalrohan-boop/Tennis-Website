import Link from "next/link";
import FadeIn from "./FadeIn";

type CTASectionProps = {
  heading: string;
  subheading?: string;
  buttonLabel: string;
  buttonHref?: string;
};

export default function CTASection({
  heading,
  subheading,
  buttonLabel,
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-court-950 py-20">
      <div className="court-lines-bg pointer-events-none absolute inset-0" />
      <FadeIn className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <h2 className="font-display text-4xl tracking-tight text-chalk sm:text-5xl">
          {heading}
        </h2>
        {subheading && (
          <p className="mt-4 max-w-xl font-body text-base text-chalk/70">
            {subheading}
          </p>
        )}
        <Link
          href={buttonHref}
          className="mt-8 inline-block rounded-full bg-ace px-9 py-4 font-body text-sm font-semibold uppercase tracking-wide text-court-950 transition-transform hover:scale-105"
        >
          {buttonLabel}
        </Link>
      </FadeIn>
    </section>
  );
}
