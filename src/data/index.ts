export type Speaker = {
  id: string;
  name: string;
  title: string;
  image: string;
};

export const speakers: Speaker[] = [
  { id: "1", name: "Alex Carter", title: "Chief Experience Officer, Flux", image: "/speakers/s1.svg" },
  { id: "2", name: "Mia Patel", title: "Head of Events, Orbit", image: "/speakers/s2.svg" },
  { id: "3", name: "Liam Chen", title: "Creative Director, Nova", image: "/speakers/s3.svg" },
  { id: "4", name: "Sara López", title: "Product Strategist, Vibe", image: "/speakers/s4.svg" },
];

export type Stall = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export const stalls: Stall[] = [
  { id: "a", name: "AR Playground", description: "Hands-on demos with augmented reality.", icon: "sparkles" },
  { id: "b", name: "Maker Lab", description: "Rapid prototyping and DIY builds.", icon: "cpu" },
  { id: "c", name: "Wellness Zone", description: "Mindfulness and recharge activities.", icon: "heart" },
  { id: "d", name: "Food Alley", description: "Local culinary pop-ups and tastings.", icon: "utensils" },
];

export type Partner = { id: string; name: string; logo: string };

export const partners: Partner[] = [
  { id: "p1", name: "Vercel", logo: "/partners/p1.svg" },
  { id: "p2", name: "Supabase", logo: "/partners/p2.svg" },
  { id: "p3", name: "Notion", logo: "/partners/p3.svg" },
  { id: "p4", name: "Linear", logo: "/partners/p4.svg" },
  { id: "p5", name: "Figma", logo: "/partners/p5.svg" },
];

export type AgendaItem = {
  time: string;
  title: string;
  speaker?: string;
  day: string;
  description?: string;
};

export const agenda: AgendaItem[] = [
  { day: "Day 1", time: "09:00", title: "Registration & Coffee" },
  { day: "Day 1", time: "10:00", title: "Opening Keynote", speaker: "Alex Carter" },
  { day: "Day 1", time: "11:30", title: "Designing Immersive Events", speaker: "Mia Patel" },
  { day: "Day 1", time: "14:00", title: "Stalls Walkthrough" },
  { day: "Day 2", time: "09:30", title: "Community Panel", speaker: "Liam Chen" },
  { day: "Day 2", time: "11:00", title: "Prototyping Workshop", speaker: "Sara López" },
  { day: "Day 2", time: "16:00", title: "Closing Ceremony" },
];

export const throwbackGallery: { id: string; type: "image" | "video"; src: string }[] = [
  { id: "t1", type: "image", src: "/throwback/t1.svg" },
  { id: "t2", type: "image", src: "/throwback/t2.svg" },
  { id: "t3", type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: "t4", type: "image", src: "/throwback/t3.svg" },
];


