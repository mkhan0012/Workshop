import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, MapPin, Factory, Phone, Clock, Wrench, CheckCircle2, ChevronRight, MessageSquare, Truck, Zap } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bharathydraulics.site"),
  alternates: {
    canonical: "/locations/rourkela",
  },
  title: "Hydraulic Repair & Hose Crimping in Rourkela | Bharat Hydraulics",
  description: "Premier hydraulic repair and custom hose crimping service for Rourkela, Kalunga Industrial Estate, and Panposh. 24/7 emergency on-site support for steel plants and heavy machinery.",
  keywords: "hydraulic repair Rourkela, hydraulic hose shop Rourkela, hydraulic hose crimping Kalunga, Rourkela Steel Plant hydraulic service, emergency hydraulic hose repair Panposh, hydraulic fittings Rourkela, JCB hose repair Rourkela, industrial hydraulic cylinders Odisha",
  openGraph: {
    title: "Hydraulic Repair & Custom Hose Assemblies in Rourkela | Bharat Hydraulics",
    description: "Fast 24/7 hydraulic repairs, high-pressure spiral hose crimping, and on-site support for Rourkela's steel mills, fabrication units, and heavy earthmovers.",
    url: "https://www.bharathydraulics.site/locations/rourkela",
    siteName: "Bharat Hydraulics",
    locale: "en_IN",
    type: "website",
  },
};

export default function LocationRourkelaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly can Bharat Hydraulics deliver hydraulic hoses to Rourkela or Kalunga?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Located in Rajgangpur just 30 km from Rourkela and Kalunga Industrial Estate, our mobile emergency team and courier dispatch can deliver custom-crimped hydraulic hose assemblies to your plant within 45 to 60 minutes."
        }
      },
      {
        "@type": "Question",
        "name": "Do you manufacture high-temperature hoses for steel plants in Rourkela?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We stock heat-resistant fire-sleeved hydraulic hoses and 4SP/4SH four-spiral wire hoses specifically engineered for blast furnaces, rolling mills, and continuous casting plants in Rourkela."
        }
      },
      {
        "@type": "Question",
        "name": "Can your technicians troubleshoot hydraulic cylinder leaks on-site in Rourkela?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our mobile emergency hydraulic service vans are equipped with diagnostic pressure gauges, seal kits, and on-site crimping tools to fix leaks and burst hoses directly at your plant or construction site."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bharat Hydraulics - Rourkela Service Area",
    "description": "Specialized industrial hydraulic hose assemblies, crimping, and 24/7 on-site repair serving Rourkela, Kalunga, and Sundargarh.",
    "telephone": "+919178330536",
    "url": "https://www.bharathydraulics.site/locations/rourkela",
    "areaServed": [
      { "@type": "City", "name": "Rourkela" },
      { "@type": "AdministrativeArea", "name": "Kalunga Industrial Estate" },
      { "@type": "AdministrativeArea", "name": "Panposh" }
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

  const industrialZones = [
    { name: "Kalunga Industrial Estate", desc: "Heavy fabrication, rolling mills, foundry, and structural steel plants." },
    { name: "Rourkela Steel Plant (RSP) Belt", desc: "High-pressure, fire-resistant hoses for blast furnaces and continuous casters." },
    { name: "Panposh & Vedvyas", desc: "Construction machinery, concrete transit mixers, and stone crushing plants." },
    { name: "Civil Township & Industrial Zone", desc: "Hydraulic power packs, CNC machinery lines, and OEM spare replacement." }
  ];

  const servicesOffered = [
    {
      title: "Custom 4SP / 4SH Spiral Hose Crimping",
      desc: "For ultra-high-pressure hydraulic circuits up to 6,000 PSI operating in heavy steel manufacturing and earthmoving equipment.",
      icon: Wrench,
    },
    {
      title: "24/7 Rapid Mobile Van Dispatch",
      desc: "Emergency hydraulic hose failure response reaching Rourkela and Kalunga within 45–60 minutes to eliminate plant downtime.",
      icon: Truck,
    },
    {
      title: "High-Temperature & Fire Sleeving",
      desc: "Silicone-coated fiberglass protective sleeves for hydraulic lines operating near furnaces, molten slag, and extreme heat.",
      icon: Zap,
    },
    {
      title: "Hydraulic Cylinder & Seal Overhauls",
      desc: "Precision seal kit replacement, rod polishing, and hydraulic pressure testing for heavy industrial rams.",
      icon: ShieldCheck,
    }
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
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-6 mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <Link href="/" className="hover:text-[#FF6A00] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/locations/sundargarh" className="hover:text-[#FF6A00] transition-colors">Locations</Link>
            <ChevronRight size={14} />
            <span className="text-[#081C3A] font-bold">Rourkela</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-16">
          <div className="bg-[#081C3A] rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6A00]/20 rounded-full blur-[130px] -mr-32 -mt-32 pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-[#FF6A00] px-4 py-2 rounded-full mb-6 font-bold text-xs uppercase tracking-widest border border-white/10">
                <MapPin size={14} /> Serving Rourkela, Kalunga & Steel Hubs
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                24/7 <span className="text-[#FF6A00]">Hydraulic Repair</span> & Custom Hose Crimping in Rourkela
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8">
                Operating heavy machinery in Rourkela’s steel mills or Kalunga’s industrial units? Bharat Hydraulics delivers rapid on-site emergency hydraulic hose replacement, precision OEM crimping, and high-pressure fluid power solutions within minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+919178330536"
                  className="bg-[#FF6A00] hover:bg-[#e65f00] text-white px-8 py-4 rounded-md font-bold transition-all shadow-[0_0_25px_rgba(255,106,0,0.4)] flex items-center justify-center gap-3 text-lg"
                >
                  <Phone size={20} /> Call Rourkela Emergency Team
                </a>
                <a
                  href="https://wa.me/919178330536?text=Hi%20Bharat%20Hydraulics,%20I%20need%20urgent%20hydraulic%20repair%20service%20in%20Rourkela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#1da851] text-white px-8 py-4 rounded-md font-bold transition-all flex items-center justify-center gap-3 text-lg shadow-xl"
                >
                  <MessageSquare size={20} /> WhatsApp Quick Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Local Industrial Hubs */}
        <section className="container mx-auto px-6 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-2">Coverage Area</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#081C3A]">Rourkela Industrial Corridors We Support</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrialZones.map((zone, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#FF6A00]/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#0A2E6E]/10 text-[#0A2E6E] flex items-center justify-center mb-4">
                  <Factory size={24} />
                </div>
                <h4 className="text-lg font-bold text-[#081C3A] mb-2">{zone.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{zone.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Specialized Services Grid */}
        <section className="container mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-2">Engineered For Heavy Industry</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#081C3A] mb-6">
                Why Rourkela's Industrial Plants Rely On Bharat Hydraulics
              </h3>
              <p className="text-gray-600 leading-relaxed text-base mb-8">
                In steel manufacturing, foundry work, and heavy fabrication, a burst hydraulic hose can shut down an entire production line costing thousands of rupees per minute. Our workshop maintains a vast inventory of <strong>DIN & ISO certified hydraulic hoses, BSP/JIC/Metric adapters, and high-pressure flanges</strong> to get you running fast.
              </p>

              <div className="space-y-4">
                {servicesOffered.map((srv, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-[#FF6A00]/10 text-[#FF6A00] flex items-center justify-center shrink-0">
                      <srv.icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#081C3A] text-lg mb-1">{srv.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{srv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/warehouse.webp"
                alt="High-pressure hydraulic hose crimping workshop serving Rourkela and Kalunga"
                fill
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A]/90 via-[#081C3A]/30 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-[#FF6A00] font-bold text-sm uppercase tracking-wider mb-2">Rapid 30-Minute Proximity</span>
                <h4 className="text-2xl font-bold mb-2">Direct Hub Connection to Rourkela</h4>
                <p className="text-gray-300 text-sm">Strategically stationed on the State Highway to guarantee fastest dispatch to Kalunga and Rourkela City.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Machinery Supported */}
        <section className="bg-white py-16 border-y border-gray-100 mb-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-3xl font-extrabold text-[#081C3A] mb-3">Machinery & Equipment We Service in Rourkela</h3>
              <p className="text-gray-600">OEM specification replacement assemblies for all global machinery brands</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
              {[
                "JCB Backhoe Loaders", "Tata Hitachi Excavators", "Komatsu Earthmovers",
                "Hydraulic Mobile Cranes", "Steel Mill Roll Stands", "Transit Concrete Mixers"
              ].map((mach, i) => (
                <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-100 font-semibold text-sm text-[#081C3A] flex flex-col items-center justify-center gap-2">
                  <CheckCircle2 size={20} className="text-[#FF6A00]" />
                  <span>{mach}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="container mx-auto px-6 max-w-4xl mb-20">
          <div className="text-center mb-12">
            <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-2">FAQ</h2>
            <h3 className="text-3xl font-extrabold text-[#081C3A]">Frequently Asked Questions for Rourkela Clients</h3>
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

        {/* Bottom CTA */}
        <section className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-[#0A2E6E] to-[#081C3A] rounded-3xl p-8 md:p-12 text-white text-center shadow-xl">
            <h3 className="text-3xl font-extrabold mb-4">Experiencing Hydraulic Breakdown in Rourkela?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base">
              Don’t let machine downtime halt your project. Contact Bharat Hydraulics right now for immediate dispatch or custom hose fabrication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919178330536"
                className="bg-[#FF6A00] hover:bg-[#e65f00] text-white px-8 py-3.5 rounded-md font-bold transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Phone size={18} /> Call +91 91783 30536
              </a>
              <Link
                href="/services/hydraulic-hose-repair"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-md font-bold transition-all border border-white/20 flex items-center justify-center gap-2"
              >
                View Hose Repair Capabilities
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
