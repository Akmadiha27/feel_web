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
  { id: "a", name: "Dr. H Care", description: "Easy home services for all your healthcare needs", icon: "/stalls/st1.jpeg" },
  { id: "b", name: "Prinkwellness", description: "PrinkWellness :  is a women’s health startup dedicated to providing safe, plant-based solutions for women wellness. Our flagship product is a clinically validated and regulatory-approved vaginal suppository designed to relieve menstrual cramps naturally, without the side effects of conventional medications.", icon: "/stalls/st2.jpeg" },
  { id: "c", name: "Xcellia Perfumes", description: "Timeless fragrances", icon: "/stalls/st3.png" },
  { id: "d", name: "Premier Senior", description: "PREMIER SENIOR IS AN ELDER CARE CENTRE , IN TELANGANA PIONEERING GERIATRIC CARE, OFFERING HOLISTIC AND PERSONALISED CARE FOR A HEALTHIER TOMORROW FOR SENIORS. COMPREHENSIVE HEALTH ASSESSMENT, EFFECTIVE DAYCARE AND REHABILITATION PROGRAMS COME TOGETHER AT PREMIER SENIOR TO PROVIDE UNPARALLELED CARE FOR THE ELDERLY.", icon: "/stalls/st4.jpeg" },
  { id: "e", name: "Germanten Hospitals", description: "Germanten Hospital is a Multispecialty healthcare service that combines the legacy of healthcare expertise and German precision. We follow a patient-centric approach and are focused on ensuring clinical excellence, patients’ safety, and accessibility of quality care to every patient. By bringing in the best healthcare practices from across the world. Germanten Hospital got the most prestigious and coveted NABH Pre- accredited from the highest body of accreditation in India.", icon: "/stalls/st5.jpg" },
  // { id: "f", name: "Creative Studio", description: "Art, design, and creative workshops for all skill levels and interests.", icon: "/partners/p6.png" },
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


