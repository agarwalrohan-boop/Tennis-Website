import { QuoteIcon } from "./icons";
import type { Testimonial } from "@/lib/data";

export default function TestimonialCard({ quote, name, role }: Testimonial) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl bg-court-900 p-8">
      <QuoteIcon className="h-7 w-9 text-ace/70" />
      <blockquote className="mt-6 font-body text-[15px] leading-relaxed text-chalk/90">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-chalk/10 pt-4">
        <p className="font-body text-sm font-semibold text-chalk">{name}</p>
        <p className="font-body text-xs uppercase tracking-wide text-ace/80">
          {role}
        </p>
      </figcaption>
    </figure>
  );
}
