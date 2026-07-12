import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="bg-court-950 text-chalk">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <p className="font-display text-2xl tracking-widest2">
            R <span className="text-ace">ACADEMY</span>
          </p>
          <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-chalk/70">
            Private and group tennis coaching across San Jose, Palo Alto,
            Mountain View, and Sunnyvale.
          </p>
        </div>

        <div>
          <h3 className="font-body text-xs font-semibold uppercase tracking-widest2 text-ace">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-sm text-chalk/75 transition-colors hover:text-ace"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-body text-xs font-semibold uppercase tracking-widest2 text-ace">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 font-body text-sm text-chalk/75">
            <li>(669) 204-8666</li>
            <li>
              <a
                href="mailto:rohanagarwalacademy@gmail.com"
                className="transition-colors hover:text-ace"
              >
                rohanagarwalacademy@gmail.com
              </a>
            </li>
            <li>San Jose, CA</li>
          </ul>
        </div>

        <div>
          <h3 className="font-body text-xs font-semibold uppercase tracking-widest2 text-ace">
            Follow
          </h3>
          <ul className="mt-4 space-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-chalk/75 transition-colors hover:text-ace"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-chalk/10">
        <p className="mx-auto max-w-7xl px-6 py-6 font-body text-xs text-chalk/50 lg:px-10">
          © {new Date().getFullYear()} R Academy Tennis Coaching. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
