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
      "My son went from barely finishing a rally to competing in USTA 12-and-under events in about eight months. Coaching is patient but genuinely demanding.",
    name: "Priya M.",
    role: "Parent, Palo Alto",
  },
  {
    quote:
      "I'm 41 and picked up tennis for the first time last year. The private lessons were the fastest I've ever improved at a sport — clear feedback every single session.",
    name: "David C.",
    role: "Adult beginner, San Jose",
  },
  {
    quote:
      "The group clinic is the highlight of my week. It's serious enough to actually improve my game but still fun and social with people I look forward to seeing.",
    name: "Renee T.",
    role: "Adult clinic, Mountain View",
  },
  {
    quote:
      "Our daughter's forehand and footwork completely changed in a semester. What stands out most is how much emphasis is put on discipline and match manners, not just strokes.",
    name: "Alan & Grace K.",
    role: "Parents, Sunnyvale",
  },
  {
    quote:
      "I've worked with three coaches in the Bay Area and this is the first one who actually built a plan around my weaknesses instead of running generic drills.",
    name: "Marcus O.",
    role: "Adult 4.0 player, San Jose",
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
