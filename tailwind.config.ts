import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        court: {
          950: "#0B1F33", // deepest hard-court blue, near-navy
          900: "#123152",
          800: "#1B3A5C", // primary hard-court blue
          700: "#234a73",
          600: "#2E5D8F",
          100: "#E7EEF4",
          50: "#F4F7FA",
        },
        chalk: "#FBFBF8", // line-white, slightly warm
        ace: {
          DEFAULT: "#C9D94A", // muted tennis-ball chartreuse
          dark: "#A9B93A",
          light: "#E1EB8F",
        },
        clay: "#B5603F", // used sparingly, like a clay baseline
        ink: "#101418",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.28em",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drawServe: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        ballTravel: {
          "0%": { offsetDistance: "0%", opacity: "0" },
          "8%": { opacity: "1" },
          "95%": { opacity: "1" },
          "100%": { offsetDistance: "100%", opacity: "0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both",
        drawServe: "drawServe 2.2s cubic-bezier(0.65,0,0.35,1) forwards",
        ballTravel: "ballTravel 2.2s cubic-bezier(0.65,0,0.35,1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
