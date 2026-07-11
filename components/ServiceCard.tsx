import { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  name: string;
  tagline: string;
  description: string;
  price: string;
};

export default function ServiceCard({
  icon,
  name,
  tagline,
  description,
  price,
}: ServiceCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-court-800/10 bg-white p-8 shadow-sm shadow-court-950/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-court-950/10">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-court-800 text-ace transition-colors duration-300 group-hover:bg-ace group-hover:text-court-950">
        {icon}
      </div>
      <h3 className="mt-6 font-display text-2xl tracking-tight text-court-950">
        {name}
      </h3>
      <p className="mt-1 font-body text-sm font-medium uppercase tracking-wide text-clay">
        {tagline}
      </p>
      <p className="mt-4 font-body text-[15px] leading-relaxed text-court-950/70">
        {description}
      </p>
      <div className="mt-6 pt-6 border-t border-court-950/10 font-mono text-sm font-semibold text-court-800">
        {price}
      </div>
    </div>
  );
}
