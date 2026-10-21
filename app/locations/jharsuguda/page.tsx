import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Factory, Mail, CheckCircle2, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bharathydraulics.site"),
  alternates: {
    canonical: "/locations/jharsuguda",
  },
  title: "Hydraulic Hose Repair & Spares in Jharsuguda | Bharat Hydraulics",
  description: "Reliable hydraulic repair, custom hose crimping, and 24/7 emergency service in Jharsuguda, Belpahar, and Brajrajnagar. Supporting thermal power, aluminum, and mining plants.",
  keywords: "hydraulic repair Jharsuguda, hydraulic hose shop Jharsuguda, hydraulic hose replacement Belpahar, Brajrajnagar hydraulic service, power plant hydraulic hose, Vedanta aluminium hydraulic spares, earthmover hydraulic repair Jharsuguda",
  openGraph: {
    title: "Hydraulic Repair & Emergency Hose Service in Jharsuguda | Bharat Hydraulics",
    description: "Rapid hydraulic repair and OEM hose assembly serving thermal power plants, aluminum smelters, and mining fleets across Jharsuguda district.",
    url: "https://www.bharathydraulics.site/locations/jharsuguda",
    siteName: "Bharat Hydraulics",
    locale: "en_IN",
    type: "website",
  },
};

export default function LocationJharsugudaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does Bharat Hydraulics provide emergency on-site hydraulic service in Jharsuguda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We operate emergency rapid-response teams covering Jharsuguda, Belpahar, and Brajrajnagar for on-site hydraulic hose crimping, troubleshooting, and fitting replacement to minimize costly downtime."
        }
      },
      {
        "@type": "Question",
        "name": "Can you provide heavy-duty spiral hoses for coal handling plants in Jharsuguda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we supply abrasion-resistant 4-spiral (4SP/4SH) and 6-spiral (R13/R15) hoses specifically designed for the abrasive, dusty coal handling and mining environments of the Jharsuguda belt."
        }
      },
      {
        "@type": "Question",
        "name": "What fittings and thread standards do you stock for Jharsuguda industrial equipment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We maintain ready inventory of BSP, JIC 37°, Metric DIN, ORFS (O-Ring Face Seal), and SAE flange code 61/62 fittings compatible with heavy earthmovers and imported machinery."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bharat Hydraulics - Jharsuguda Service Area",
    "description": "Industrial hydraulic hose assemblies, crimping, and on-site repair serving Jharsuguda, Belpahar, and Brajrajnagar.",
    "email": "info@bharathydraulics.site",
    "url": "https://www.bharathydraulics.site/locations/jharsuguda",
    "areaServed": [
      { "@type": "City", "name": "Jharsuguda" },
      { "@type": "City", "name": "Belpahar" },
      { "@type": "City", "name": "Brajrajnagar" }
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

  const industriesSupported = [
    { title: "Power Generation & OPGC", desc: "Turbine actuator lines, high-pressure steam valve hydraulics, and fuel handling systems." },
    { title: "Aluminum Smelters (Vedanta Belt)", desc: "Pneumatic/hydraulic potline equipment, anode handling cranes, and casting plant hoses." },
    { title: "Coal Mining & Washeries", desc: "Heavy-duty abrasion-resistant fluid lines for coal dumpers, crushers, and stacker-reclaimers." },
    { title: "Cement & Refractory Plants", desc: "Kiln drive hydraulic systems, clinker cooler cylinder lines, and baghouse fluid power." }
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
            <span className="text-[#081C3A] font-bold">Jharsuguda</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-16">
          <div className="bg-[#081C3A] rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6A00]/20 rounded-full blur-[130px] -mr-32 -mt-32 pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-[#FF6A00] px-4 py-2 rounded-full mb-6 font-bold text-xs uppercase tracking-widest border border-white/10">
                <MapPin size={14} /> Serving Jharsuguda, Belpahar & Brajrajnagar
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                Industrial <span className="text-[#FF6A00]">Hydraulic Repair</span> & Hose Assemblies in Jharsuguda
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8">
                Keep your heavy power plant, aluminum smelting, and mining operations running without downtime. Bharat Hydraulics delivers precision-crimped hydraulic hoses, high-pressure fittings, and 24/7 on-site repair across the Jharsuguda industrial belt.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <a
                  href="mailto:info@bharathydraulics.site?subject=Jharsuguda%20Hydraulic%20Hose%20Support%20Inquiry"
                  className="bg-[#FF6A00] hover:bg-[#e65f00] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_25px_rgba(255,106,0,0.4)] flex items-center justify-center gap-3 text-base active:scale-95"
                >
                  <Mail size={20} /> Email Technical Support
                </a>
                <Link
                  href="/services/hydraulic-hose-repair"
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all border border-white/20 flex items-center justify-center gap-3 text-base shadow-xl active:scale-95"
                >
                  Explore Hose Services
                </Link>
              </div>
              <p className="text-xs text-gray-400 font-medium">
                Official Desk: <a href="mailto:info@bharathydraulics.site" className="text-white underline hover:text-[#FF6A00]">info@bharathydraulics.site</a>
              </p>
            </div>
          </div>
        </section>

        {/* Industrial Highlights */}
        <section className="container mx-auto px-6 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-2">Powerhouse Hub</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#081C3A]">Specialized Hydraulic Solutions For Jharsuguda</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesSupported.map((ind, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#FF6A00]/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#0A2E6E]/10 text-[#0A2E6E] flex items-center justify-center mb-4">
                  <Factory size={24} />
                </div>
                <h4 className="text-lg font-bold text-[#081C3A] mb-2">{ind.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Capability Overview */}
        <section className="container mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 order-2 lg:order-1">
              <Image
                src="/Workingmachine.webp"
                alt="Hydraulic hose crimping and heavy machinery support for Jharsuguda industries"
                fill
                quality={75}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A]/90 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-[#FF6A00] font-bold text-sm uppercase tracking-wider mb-2">Pressure Tested</span>
                <h4 className="text-2xl font-bold mb-2">High-Pressure Multi-Spiral Hose Assemblies</h4>
                <p className="text-gray-300 text-sm">Every hose assembly is tested up to double its working pressure before dispatch.</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-2">Unmatched Reliability</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#081C3A] mb-6">
                Why Power & Metal Plants in Jharsuguda Partner With Us
              </h3>
              <p className="text-gray-600 leading-relaxed text-base mb-8">
                Jharsuguda’s extreme heat and round-the-clock operations require hydraulic assemblies that do not burst prematurely. At Bharat Hydraulics, we use <strong>synthetic rubber inner tubes, high-tensile wire braids, and weather-resistant outer covers</strong> that resist oil, abrasion, and thermal degradation.
              </p>

              <div className="space-y-4">
                {[
                  { title: "DIN EN 856 4SP / 4SH Standards", desc: "Designed for extreme pulse and shock loads in industrial presses and mobile excavators." },
                  { title: "Complete Flange & Adapter Selection", desc: "SAE 3000 / 6000 PSI flanges, BSP 60° cones, and metric light/heavy series in stock." },
                  { title: "Rapid Turnaround Delivery", desc: "Direct road connection via State Highway ensuring parts reach your site without delays." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-[#FF6A00]/10 text-[#FF6A00] flex items-center justify-center shrink-0">
                      <CheckCircle2 size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#081C3A] text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="container mx-auto px-6 max-w-4xl mb-20">
          <div className="text-center mb-12">
            <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-2">FAQ</h2>
            <h3 className="text-3xl font-extrabold text-[#081C3A]">Frequently Asked Questions for Jharsuguda</h3>
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
            <h3 className="text-3xl font-extrabold mb-4">Need Hydraulic Hose Assemblies in Jharsuguda?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base">
              Contact our engineering workshop today for custom crimping, bulk spares supply, or emergency breakdown assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@bharathydraulics.site?subject=Jharsuguda%20Hydraulic%20Hose%20Assembly%20Quote"
                className="bg-[#FF6A00] hover:bg-[#e65f00] text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95"
              >
                <Mail size={18} /> Email Engineering Support
              </a>
              <Link
                href="/locations/rourkela"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-xl font-bold transition-all border border-white/20 flex items-center justify-center gap-2 active:scale-95"
              >
                Explore Rourkela Hub
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
