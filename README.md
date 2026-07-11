# R Academy — Tennis Coaching Website

A production-ready marketing site for R Academy, a Bay Area tennis coaching
business (San Jose, Palo Alto, Mountain View, Sunnyvale), built with
Next.js App Router + Tailwind CSS.

## Design direction

- **Hard-court blue** (`court-950/800`) as the primary surface, **chalk
  white** for lines/text, a muted **tennis-ball chartreuse** (`ace`) as the
  single accent, and a sparing **clay** red used like a baseline marking.
- Display type is a condensed athletic grotesque (Oswald) — scoreboard in
  spirit — paired with Manrope for body copy and IBM Plex Mono for prices
  and numeric details.
- The signature element is the hero's animated court diagram: the court
  lines and a serve trajectory arc draw in on load, with a ball traveling
  the path — a nod to the sport itself rather than a generic gradient hero.

## Tech stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS (custom design tokens in `tailwind.config.ts`)
- No external UI or icon libraries — icons are hand-drawn inline SVGs in
  `components/icons.tsx` to keep the bundle lean

## Project structure

```
r-academy/
├── app/
│   ├── layout.tsx          # Root layout, fonts, global metadata
│   ├── page.tsx            # Home page
│   ├── globals.css
│   ├── sitemap.ts          # Auto-generated sitemap.xml
│   ├── robots.ts           # Auto-generated robots.txt
│   ├── services/page.tsx   # Services page
│   ├── about/page.tsx      # About page
│   ├── contact/page.tsx    # Contact page
│   └── api/contact/route.ts # Contact form submission handler (stub)
├── components/
│   ├── Navbar.tsx           # Sticky nav + mobile hamburger menu
│   ├── Footer.tsx
│   ├── FadeIn.tsx           # Scroll-reveal wrapper (IntersectionObserver)
│   ├── ServeGraphic.tsx     # Signature animated hero SVG
│   ├── ServiceCard.tsx
│   ├── TestimonialCard.tsx
│   ├── CTASection.tsx
│   ├── ContactForm.tsx
│   └── icons.tsx
├── lib/
│   └── data.ts              # Services, testimonials, locations content
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── next.config.mjs
└── package.json
```

## Running locally

Requires Node.js 18.17+ (Node 20 LTS recommended).

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open the site
# http://localhost:3000
```

To build for production:

```bash
npm run build
npm start
```

## Connecting the contact form

`components/ContactForm.tsx` posts JSON to `app/api/contact/route.ts`,
which currently just logs the submission. Before going live, wire it to a
real email/CRM provider. Example using [Resend](https://resend.com):

```bash
npm install resend
```

```ts
// app/api/contact/route.ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

// inside POST, after validating body:
await resend.emails.send({
  from: "R Academy Website <noreply@racademytennis.com>",
  to: "hello@racademytennis.com",
  subject: `New inquiry from ${name}`,
  text: message,
  replyTo: email,
});
```

Add `RESEND_API_KEY` to a `.env.local` file (already git-ignored).

## Connecting Calendly

`app/contact/page.tsx` has a clearly marked placeholder div for the
scheduler. To go live:

1. Create a Calendly event type and copy its booking link.
2. Replace the placeholder `div` with:
   ```tsx
   <div
     className="calendly-inline-widget"
     data-url="https://calendly.com/your-handle/lesson"
     style={{ minWidth: "320px", height: "700px" }}
   />
   ```
3. Load Calendly's widget script once, e.g. in `app/layout.tsx`:
   ```tsx
   import Script from "next/script";
   // inside <body>, near the end:
   <Script
     src="https://assets.calendly.com/assets/external/widget.js"
     strategy="lazyOnload"
   />
   ```

## Content & copy

All service descriptions, pricing, testimonials, and locations live in
`lib/data.ts` — edit that one file to update copy across the whole site.
Placeholder phone/email (`(408) 555-0142`, `hello@racademytennis.com`) live
in `components/Footer.tsx` and `app/contact/page.tsx` — replace with real
contact details before launch.

## SEO

- Per-page `metadata` (title/description) is set in each `page.tsx` using
  the App Router `Metadata` API, targeting "tennis coach San Jose", "tennis
  lessons Bay Area", and "private tennis lessons Palo Alto".
- `app/sitemap.ts` and `app/robots.ts` auto-generate `/sitemap.xml` and
  `/robots.txt`.
- Update `metadataBase` in `app/layout.tsx` to your real production domain
  before deploying.
- Semantic HTML is used throughout (`header`, `nav`, `main`, `section`,
  `footer`, heading hierarchy).

## Accessibility & motion

- Visible focus rings on all interactive elements.
- A "Skip to content" link for keyboard users.
- `prefers-reduced-motion` is respected globally in `app/globals.css`.

## Deployment

The project deploys as-is to [Vercel](https://vercel.com) (recommended for
Next.js) or any Node hosting that supports Next.js 14. For Vercel:

```bash
npm install -g vercel
vercel
```
