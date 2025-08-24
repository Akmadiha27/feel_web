import Image from "next/image";

export default function PartnersPage() {
  // Define all partners with their details
  const partners = [
    {
      id: 1,
      name: "T-Hub",
      src: "/partners/p1.png",
      alt: "T-Hub",
      description: [
        "India's largest startup incubator based in Hyderabad.",
        "Provides mentorship, workspace, and funding access to early-stage startups.",
        "A global hub connecting entrepreneurs with investors and corporates."
      ]
    },
    {
      id: 2,
      name: "TGIC (Telangana Global Innovation Center)",
      src: "/partners/p2.png",
      alt: "TGIC",
      description: [
        "Focuses on building innovation-driven ecosystems in Telangana.",
        "Supports emerging tech startups through resources and collaborations.",
        "Acts as a bridge between entrepreneurs, academia, and industry leaders."
      ]
    },
    {
      id: 3,
      name: "WE Hub",
      src: "/partners/p3.png",
      alt: "WE Hub",
      description: [
        "India's first state-led incubator exclusively for women entrepreneurs.",
        "Offers mentoring, networking, and funding opportunities.",
        "Empowers women-led startups across various industries."
      ]
    },
    {
      id: 4,
      name: "Focus Solutions",
      src: "/partners/p4.png",
      alt: "Focus Solutions",
      description: [
        "Provides IT consulting and digital transformation services.",
        "Specializes in cloud, AI, and enterprise solutions.",
        "Partners with businesses to streamline operations and drive efficiency."
      ]
    },
    {
      id: 5,
      name: "Crazy RC",
      src: "/partners/p5.png",
      alt: "Crazy RC",
      description: [
        "Hobby-based company focusing on remote control cars and gadgets.",
        "Engages youth in tech-driven sports and entertainment.",
        "Brings creativity and innovation to experiential learning."
      ]
    },
    {
      id: 6,
      name: "Lakhotia College of Design",
      src: "/partners/p6.png",
      alt: "Lakhotia College of Design",
      description: [
        "One of Hyderabad's leading design institutions.",
        "Offers programs in fashion, interior, and graphic design.",
        "Encourages creativity, innovation, and industry-ready skills."
      ]
    },
    {
      id: 7,
      name: "Jauhari Jewellers",
      src: "/partners/p7.jpeg",
      alt: "Jauhari Jewellers",
      description: [
        "A trusted jewelry brand known for craftsmanship.",
        "Specializes in traditional and contemporary jewelry.",
        "Popular for heritage-inspired collections in Hyderabad."
      ]
    },
    {
      id: 8,
      name: "Explus",
      src: "/partners/p8.png",
      alt: "Explus",
      description: [
        "Provides event and exhibition management solutions.",
        "Known for creating impactful brand experiences.",
        "Works with corporates, startups, and creative industries."
      ]
    },
    {
      id: 9,
      name: "Meanbuy",
      src: "/partners/p9.png",
      alt: "Meanbuy",
      description: [
        "Hyderabad-based e-commerce platform.",
        "Offers unique \"Try Now, Buy Later\" shopping model.",
        "Focused on affordability and convenience for online buyers."
      ]
    },
    {
      id: 10,
      name: "Hairstory",
      src: "/partners/p10.png",
      alt: "Hairstory",
      description: [
        "Premium salon and haircare brand.",
        "Offers professional styling, treatments, and grooming.",
        "Known for innovative and personalized customer service."
      ]
    },
    {
      id: 11,
      name: "SDIF (Social Development & Innovation Foundation)",
      src: "/partners/p11.png",
      alt: "SDIF",
      description: [
        "NGO working for social and economic empowerment.",
        "Focuses on youth, education, and entrepreneurship.",
        "Encourages innovation for community development."
      ]
    },
    {
      id: 12,
      name: "Global Shapers Community Hyderabad",
      src: "/partners/p12.jpeg",
      alt: "Global Shapers Community Hyderabad",
      description: [
        "A network of young changemakers under World Economic Forum.",
        "Drives social impact through community projects.",
        "Focuses on sustainability, inclusion, and innovation."
      ]
    },
    {
      id: 13,
      name: "KGN Xerox",
      src: "/partners/p13.jpeg",
      alt: "KGN Xerox",
      description: [
        "Local business offering printing, xerox, and document solutions.",
        "Supports students, startups, and professionals.",
        "Affordable and accessible printing hub in Hyderabad."
      ]
    },
    {
      id: 14,
      name: "The Hacking School",
      src: "/partners/p14.png",
      alt: "The Hacking School",
      description: [
        "India's first coding bootcamp based in Hyderabad.",
        "Specializes in full-stack development and startup tech skills.",
        "Helps students and professionals become industry-ready."
      ]
    },
    {
      id: 15,
      name: "Intellixaa",
      src: "/partners/p15.jpeg",
      alt: "Intellixaa",
      description: [
        "Business intelligence and consulting firm.",
        "Offers analytics, data strategy, and digital transformation.",
        "Works with enterprises to optimize decision-making."
      ]
    },
    {
      id: 16,
      name: "Bioreform",
      src: "/partners/p16.jpeg",
      alt: "Bioreform",
      description: [
        "Startup working on eco-friendly and biodegradable solutions.",
        "Innovates sustainable alternatives to plastics.",
        "Contributes to Telangana's green-tech ecosystem."
      ]
    },
    {
      id: 17,
      name: "SuperAccountant",
      src: "/partners/p17.png",
      alt: "SuperAccountant",
      description: [
        "Cloud-based accounting and finance management platform.",
        "Simplifies bookkeeping for SMEs and startups.",
        "Focuses on automation and cost-effective solutions."
      ]
    },
    {
      id: 18,
      name: "Mughal Constructions",
      src: "/partners/p18.png",
      alt: "Mughal Constructions",
      description: [
        "Real estate and construction company in Hyderabad.",
        "Specializes in residential and commercial projects.",
        "Known for reliable and quality-driven developments."
      ]
    },
    {
      id: 19,
      name: "Pista House",
      src: "/partners/p19.png",
      alt: "Pista House",
      description: [
        "Iconic Hyderabadi food brand famous for Haleem.",
        "Offers bakery, sweets, and multi-cuisine dishes.",
        "Represents Hyderabad's rich food culture globally."
      ]
    },
    {
      id: 20,
      name: "Code for India Foundation",
      src: "/partners/p20.jpeg",
      alt: "Code for India Foundation",
      description: [
        "Nonprofit that uses technology for social good.",
        "Engages developers to build impactful civic-tech projects.",
        "Aims to solve grassroots problems through open-source innovation."
      ]
    },
    {
      id: 21,
      name: "EdVenture Park",
      src: "/partners/p21.png",
      alt: "EdVenture Park",
      description: [
        "Student-focused startup incubator in Hyderabad.",
        "Helps young entrepreneurs launch and scale ventures.",
        "Provides mentorship, resources, and networking opportunities."
      ]
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Partners</h1>
      <div className="mt-8 space-y-6">
        {partners.map((partner) => (
          <div key={partner.id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-black/10 dark:border-white/10">
            <div className="flex items-start gap-6">
              <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-black/10 dark:border-white/10 shrink-0 bg-white p-2">
                <Image src={partner.src} alt={partner.alt} fill className="object-contain" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">{partner.name}</h3>
                <div className="space-y-2">
                  {partner.description.map((desc, index) => (
                    <p key={index} className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Section - Moved to bottom */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">Partner Highlights</h2>
        <div className="max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex gap-8 animate-scroll">
              {[
                "/partners/p1.png", "/partners/p2.png", "/partners/p3.png", "/partners/p4.png",
                "/partners/p5.png", "/partners/p6.png", "/partners/p7.jpeg"
              ].map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-40 h-32 bg-white rounded-lg p-3 border border-gray-200 shadow-md">
                  <img 
                    src={logo} 
                    alt={`Partner Highlight ${index + 1}`} 
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final Register CTA Section */}
      <section className="py-16 text-center bg-gradient-to-r from-[#ffd5ac]/20 via-[#70c7d9]/20 to-[#9174ea]/20 mt-16" aria-labelledby="final-register">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="final-register" className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Still thinking? Just join us — and truly FEEL it.
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
            Register Here
          </h3>
          <a
            href="https://pages.razorpay.com/pl_QsPAqay3600bdQ/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block  bg-purple-600 hover:bg-purple-800  text-white rounded px-8 py-4  transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
}


