import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Oswald, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.racdemy.com"),
  title: {
    default: "R Academy | Tennis Coach San Jose & Bay Area",
    template: "%s | R Academy Tennis",
  },
  description:
    "R Academy offers private and group tennis lessons across the Bay Area — San Jose, Palo Alto, Mountain View, and Sunnyvale. Coaching for kids and adults, beginner to advanced.",
  keywords: [
    "tennis coach San Jose",
    "tennis lessons Bay Area",
    "private tennis lessons Palo Alto",
    "tennis lessons Mountain View",
    "tennis lessons Sunnyvale",
    "kids tennis academy",
    "adult tennis clinics",
  ],
  openGraph: {
    title: "R Academy | Tennis Coach San Jose & Bay Area",
    description:
      "Private and group tennis coaching across San Jose, Palo Alto, Mountain View, and Sunnyvale. All ages, beginner to advanced.",
    url: "https://www.racdemy.com",
    siteName: "R Academy",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${oswald.variable} ${manrope.variable} ${plexMono.variable}`}>
      <body className="font-body">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ace focus:px-4 focus:py-2 focus:text-court-950"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
