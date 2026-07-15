export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "private-lessons",
    name: "Private Lessons",
    tagline: "One-on-one, all court time is yours",
    description:
      "Fully individualized coaching built around your swing, your footwork, and your goals. Every drill, every rep, every correction is about you and nobody else.",
    price: "$100/hr",
    bullets: [
      "Video swing analysis and stroke correction",
      "Custom game plan for tournaments or club ladders",
      "Flexible scheduling, day or evening",
      "Best for players who want fast, focused progress",
    ],
  },
  {
    slug: "group-lessons",
    name: "Group Lessons",
    tagline: "3–6 players, same court, shared energy",
    description:
      "Small-group coaching that keeps the price down and the intensity up. You get live-ball drills, point play, and the kind of feedback that only comes from hitting with real opponents.",
    price: "$40/person",
    bullets: [
      "Groups capped at 6 for real coaching attention",
      "Matched by level, not just by availability",
      "Live-ball drills, situational points, doubles strategy",
      "A social, sweat-together way to keep improving",
    ],
  },
  {
    slug: "kids-academy",
    name: "Kids Academy",
    tagline: "Ages 5–18, from first swing to first tournament",
    description:
      "A structured pathway for junior players: red, orange, and green ball stages for beginners, and full-speed technical and tactical training for competitive juniors.",
    price: "Contact for packages",
    bullets: [
      "Age- and stage-appropriate ball, court, and racquet sizing",
      "Footwork, coordination, and racquet-skill foundations",
      "Confidence, sportsmanship, and on-court discipline",
      "Pathway support for USTA junior tournament play",
    ],
  },
  {
    slug: "adult-clinics",
    name: "Adult Clinics",
    tagline: "Beginner to advanced, fitness and fundamentals",
    description:
      "Clinics for adults who want a real workout alongside real stroke work — whether you picked up a racquet last month or you're chasing a higher NTRP rating.",
    price: "Contact for packages",
    bullets: [
      "Beginner clinics: grips, footwork, rally consistency",
      "Advanced clinics: spin, pace, point construction",
      "Cardio-forward drilling for on-court fitness",
      "A standing weekly slot with a consistent group",
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "As a former top-level high school tennis player (4.0), I can say that Rohan has the technique, expertise, and skill to teach the critical basics and mental game and strategies of tennis — forehand, backhand, footwork, serve, pronation, overheads, serve and volley, slices, dropshots, lobs, situational awareness, etc! Thank you!",
    name: "Aadit Rai",
    role: "Google review",
  },
  {
    quote:
      "Coach Rohan is awesome! He is very patient when teaching and very flexible with schedules. He is easy-going, so lessons are fun and engaging. My son loves it! I highly recommend!",
    name: "Ana Bastos",
    role: "Google review",
  },
  {
    quote:
      "Rohan has been teaching my son tennis and has really helped my son's game. Rohan gives good attention and helps correct mistakes early and is very patient. Would highly recommend Rohan for anyone looking to pick up tennis for the first time.",
    name: "Ashwinram Suresh",
    role: "Google review",
  },
  {
    quote:
      "We've had a great experience with our tennis coach Rohan working with my kids. He is patient, encouraging, and does a great job making lessons both fun and focused on fundamentals.",
    name: "Victor Nee",
    role: "Google review",
  },
  {
    quote:
      "Rohan is a great coach with a passion to help everyone achieve their best. He works really hard and is a great competitive player. Would highly recommend Bay Area Tennis!",
    name: "Vikas Sharma",
    role: "Google review",
  },
];

export type Location = {
  city: string;
  detail: string;
};

export const locations: Location[] = [
  { city: "San Jose", detail: "Private lessons, adult clinics, junior groups" },
  { city: "Palo Alto", detail: "Private lessons, kids academy" },
  { city: "Mountain View", detail: "Group lessons, adult clinics" },
  { city: "Sunnyvale", detail: "Private lessons, junior groups" },
];

export type Level = {
  name: string;
  description: string;
};

export const kidsLevels: Level[] = [
  {
    name: "Beginner 1",
    description:
      "First-time players. Grip, ready position, and basic footwork, plus getting comfortable rallying with a racquet and ball.",
  },
  {
    name: "Beginner 2",
    description:
      "Consistent rallying from both sides, an introduction to serving, and the basics of keeping score.",
  },
  {
    name: "Intermediate 1",
    description:
      "Reliable groundstrokes and footwork patterns, with players starting to play out full points and rallies.",
  },
  {
    name: "Intermediate 2",
    description:
      "Adding spin and pace across all strokes, plus tactical basics like shot selection and court positioning.",
  },
  {
    name: "Advanced",
    description:
      "Competitive juniors training for USTA tournament play — high-intensity drilling, match strategy, and mental toughness.",
  },
];

export const adultLevels: Level[] = [
  {
    name: "Beginner 1",
    description:
      "New to tennis or returning after years away. Proper grips, basic strokes, and rally consistency in a relaxed, supportive setting.",
  },
  {
    name: "Beginner 2",
    description:
      "Rally with confidence and start keeping score, with a focus on footwork and the basics of serving and returning.",
  },
  {
    name: "Intermediate 1",
    description:
      "For players comfortable rallying who want to sharpen groundstrokes, add spin, and start playing situational points.",
  },
  {
    name: "Intermediate 2",
    description:
      "Refine shot selection, court positioning, and doubles strategy for players in club ladders or league play.",
  },
  {
    name: "Advanced",
    description:
      "High-intensity clinics for strong players chasing a higher NTRP rating — live-ball drills and match-play strategy.",
  },
];

export type ScheduleClass = {
  ageGroup: "Kids" | "Adults";
  level: string;
  days: string;
  time: string;
  location: string;
};

export const scheduleClasses: ScheduleClass[] = [
  {
    ageGroup: "Kids",
    level: "Beginner 1",
    days: "Monday, Wednesday, Friday",
    time: "5:30 PM",
    location: "Lincoln High School",
  },
  {
    ageGroup: "Adults",
    level: "Beginner 1",
    days: "Monday, Wednesday, Friday",
    time: "6:30 PM",
    location: "Lincoln High School",
  },
];
