type IconProps = {
  className?: string;
};

export function RacquetIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <ellipse cx="20" cy="16" rx="13" ry="14" stroke="currentColor" strokeWidth="2.5" />
      <path d="M20 2v28M9 8l22 16M9 24l22-16M12 5l16 22M28 5L12 27" stroke="currentColor" strokeWidth="1.1" opacity="0.6" />
      <path d="M20 30l10 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M27 40c0 2.5 1.8 4.5 4.5 4.5S36 42.5 36 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function GroupIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="33" cy="18" r="5" stroke="currentColor" strokeWidth="2.5" />
      <path d="M6 40c0-7 4.5-12 10-12s10 5 10 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M27 40c0.5-5.5 4-9.5 9-9.5S44.5 34.5 45 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function KidsIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="10" r="5" stroke="currentColor" strokeWidth="2.5" />
      <path d="M12 40l4-16c1-4 4-6 8-6s7 2 8 6l4 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="38" cy="30" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M38 34v6M35 44l3-4 3 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function AdultIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="18" cy="10" r="5" stroke="currentColor" strokeWidth="2.5" />
      <path d="M8 40l3-15c1-4 4-6 7-6s6 2 7 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 12h6l4 8-4 3-3-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 23l3 17M40 23l1 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function PinIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 22s7-7.58 7-13a7 7 0 10-14 0c0 5.42 7 13 7 13z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function QuoteIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M0 32V19.5C0 8.73 6.4 1.87 16.6 0l1.9 4.6C11.9 6.4 8.6 10.9 8.3 16.5H16V32H0zm24.4 0V19.5c0-10.77 6.4-17.63 16.6-19.5l1.9 4.6c-6.6 1.8-9.9 6.3-10.2 11.9H40V32H24.4z"
        fill="currentColor"
      />
    </svg>
  );
}
