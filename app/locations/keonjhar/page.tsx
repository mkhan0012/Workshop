import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Pickaxe, Phone, ChevronRight, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bharathydraulics.site"),
  alternates: {
    canonical: "/locations/keonjhar",
  },
  title: "Mining Hydraulic Hose Repair in Keonjhar & Barbil | Bharat Hydraulics",
  description: "Specialized hydraulic hose repair, crimping, and spares for mining earthmovers in Keonjhar, Barbil, Joda, and Koira. Heavy-duty hoses for excavators, dumpers, and rock breakers.",
  keywords: "hydraulic repair Keonjhar, hydraulic hose Barbil, hydraulic repair Joda, mining equipment hydraulic service Koira, excavator hydraulic hose Odisha, hydraulic breaker hose replacement, JCB hose repair Keonjhar",
  openGraph: {
    title: "Mining Hydraulic Hose Repair & Assemblies in Keonjhar | Bharat Hydraulics",
    description: "Heavy-duty multi-spiral hydraulic hoses and 24/7 emergency repair serving iron ore mines, excavators, and dumpers across Keonjhar, Barbil, and Joda.",
    url: "https://www.bharathydraulics.site/locations/keonjhar",
    siteName: "Bharat Hydraulics",
    locale: "en_IN",
    type: "website",
  },
};

export default function LocationKeonjharPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you make custom hydraulic hoses for mining excavators in Barbil and Joda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We fabricate heavy-duty 4SP, 4SH, and R15 multi-spiral wire hydraulic hoses designed to withstand severe pulse shock and high working pressures on excavators like Tata Hitachi, Komatsu, CAT, and Volvo in the Keonjhar mining belt."
        }
      },
      {
        "@type": "Question",
        "name": "Can you replace hydraulic rock breaker hoses in Keonjhar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Hydraulic rock breakers generate intense vibration and heat. We supply abrasion-resistant, high-flexibility rock breaker hoses with heavy protective wire springs or nylon sleeving to prevent burst failures."
        }
      },
      {
        "@type": "Question",
        "name": "How do you dispatch hydraulic assemblies to mines in Keonjhar and Koira?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer same-day courier dispatch and rapid on-site emergency van service across the Keonjhar, Barbil, and Koira mining corridors."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bharat Hydraulics - Keonjhar & Barbil Mining Service",
    "description": "Heavy mining hydraulic hose repair, rock breaker assemblies, and on-site troubleshooting serving Keonjhar, Barbil, Joda, and Koira.",
    "telephone": "+919178330536",
    "url": "https://www.bharathydraulics.site/locations/keonjhar",
    "areaServed": [
      { "@type": "City", "name": "Keonjhar" },
      { "@type": "City", "name": "Barbil" },
      { "@type": "City", "name": "Joda" },
      { "@type": "AdministrativeArea", "name": "Koira Mining Belt" }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Industrial Estate",
      "addressLocality": "Rajgangpur",
      "addressRegion": "Odisha",
      "postalCode": "770017",
      "addressCountry": "IN"
    }
  };

  const miningEquipmentServiced = [
    { title: "Mining Excavators (20T – 90T)", desc: "Boom, arm, and bucket cylinder high-pressure pilot and main relief lines." },
    { title: "Hydraulic Rock Breakers", desc: "Anti-vibration high-impulse hoses fitted with spring armor protection." },
    { title: "Heavy Mining Tippers & Dumpers", desc: "Tipping hoist cylinders, cabin lift lines, and power steering hydraulics." },
    { title: "Drill Rigs & Crushing Plants", desc: "Feed cylinder lines, rotary head motor hoses, and conveyor control valves." }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="bg-[#F8FAFC] min-h-screen pt-28 pb-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <Link href="/" className="hover:text-[#FF6A00] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/locations/sundargarh" className="hover:text-[#FF6A00] transition-colors">Locations</Link>
            <ChevronRight size={14} />
            <span className="text-[#081C3A] font-bold">Keonjhar & Barbil</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-16">
          <div className="bg-[#081C3A] rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6A00]/20 rounded-full blur-[130px] -mr-32 -mt-32 pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-[#FF6A00] px-4 py-2 rounded-full mb-6 font-bold text-xs uppercase tracking-widest border border-white/10">
                <Pickaxe size={14} /> Iron Ore & Mining Corridor Specialist
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                Heavy <span className="text-[#FF6A00]">Mining Hydraulic Hose</span> & Repair in Keonjhar & Barbil
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8">
                Operating heavy excavators, rock breakers, and dumpers in Keonjhar’s iron ore mines? Bharat Hydraulics delivers extreme-duty 4SP/4SH spiral hydraulic hoses, precision crimping, and emergency troubleshooting to prevent expensive mining downtime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+919178330536"
                  className="bg-[#FF6A00] hover:bg-[#e65f00] text-white px-8 py-4 rounded-md font-bold transition-all shadow-[0_0_25px_rgba(255,106,0,0.4)] flex items-center justify-center gap-3 text-lg"
                >
                  <Phone size={20} /> Call Mining Emergency Line
                </a>
                <a
                  href="https://wa.me/919178330536?text=Hi%20Bharat%20Hydraulics,%20I%20need%20heavy%20mining%20hose%20assemblies%20in%20Keonjhar/Barbil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#1da851] text-white px-8 py-4 rounded-md font-bold transition-all flex items-center justify-center gap-3 text-lg shadow-xl"
                >
                  <MessageSquare size={20} /> WhatsApp Mining Spares
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Mining Equipment Serviced */}
        <section className="container mx-auto px-6 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-2">Mining Fleet Support</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#081C3A]">Built For Extreme Mining Conditions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {miningEquipmentServiced.map((eq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#FF6A00]/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#0A2E6E]/10 text-[#0A2E6E] flex items-center justify-center mb-4">
                  <Pickaxe size={24} />
                </div>
                <h4 className="text-lg font-bold text-[#081C3A] mb-2">{eq.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{eq.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Severe Duty Hose Engineering */}
        <section className="container mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-2">Rugged Reliability</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#081C3A] mb-6">
                Why Standard Hoses Fail In Keonjhar&apos;s Mines
              </h3>
              <p className="text-gray-600 leading-relaxed text-base mb-8">
                Iron ore mining exposes hydraulic lines to sharp rock impacts, extreme dust abrasion, and continuous pressure spikes up to 420 bar. Using low-grade 2-wire hoses leads to dangerous blowouts. Bharat Hydraulics supplies <strong>ultra-heavy 4-spiral and 6-spiral wire hoses with MSHA-certified fire and abrasion protection</strong>.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Heavy Spiral Spring Guards", desc: "Prevents external rock abrasion and pinching on excavator boom and dipper arms." },
                  { title: "Code 62 High Pressure Flanges", desc: "Heavy-duty 6,000 PSI split flange kits engineered for CAT, Komatsu, and Volvo machines." },
                  { title: "Zero-Leak Dual-Lock Crimping", desc: "Precision factory-calibrated crimp collars that eliminate hose end blowouts under peak load." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-[#FF6A00]/10 text-[#FF6A00] flex items-center justify-center shrink-0">
                      <ShieldCheck size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#081C3A] text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/car.webp"
                alt="Heavy mining excavator and earthmoving hydraulic maintenance in Barbil Keonjhar"
                fill
                quality={75}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A]/90 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-[#FF6A00] font-bold text-sm uppercase tracking-wider mb-2">High Pulse Durability</span>
                <h4 className="text-2xl font-bold mb-2">1,000,000+ Impulse Cycle Tested</h4>
                <p className="text-gray-300 text-sm">Hoses built to withstand intense pressure vibrations from hydraulic breakers and high-tonnage mining shovels.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="container mx-auto px-6 max-w-4xl mb-20">
          <div className="text-center mb-12">
            <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-2">FAQ</h2>
            <h3 className="text-3xl font-extrabold text-[#081C3A]">Frequently Asked Questions for Mining Operators</h3>
          </div>

          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-lg text-[#081C3A] mb-2">{faq.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-[#0A2E6E] to-[#081C3A] rounded-3xl p-8 md:p-12 text-white text-center shadow-xl">
            <h3 className="text-3xl font-extrabold mb-4">Urgent Mining Breakdown in Barbil or Keonjhar?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base">
              Call our rapid technical support now to arrange urgent fabrication and courier/van dispatch to your mining lease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919178330536"
                className="bg-[#FF6A00] hover:bg-[#e65f00] text-white px-8 py-3.5 rounded-md font-bold transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Phone size={18} /> Call +91 91783 30536
              </a>
              <Link
                href="/locations/sundargarh"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-md font-bold transition-all border border-white/20 flex items-center justify-center gap-2"
              >
                View Sundargarh Coverage
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
