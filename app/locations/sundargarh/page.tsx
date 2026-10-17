import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, MapPin, Factory, ArrowRight, Phone, MessageSquare, Truck, Clock, Wrench } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bharathydraulics.site"),
  alternates: {
    canonical: "/locations/sundargarh",
  },
  title: "Hydraulic Repair & Emergency Hose Service in Sundargarh | Bharat Hydraulics",
  description: "24/7 on-site hydraulic hose repair, crimping, and heavy machinery support across Sundargarh district. Centrally based in Rajgangpur with rapid dispatch.",
  keywords: "hydraulic repair Sundargarh, hydraulic hose shop Sundargarh, hydraulic hose crimping Kansbahal, emergency hydraulic repair Rajgangpur, JCB hose repair Sundargarh, mining equipment repair Odisha",
  openGraph: {
    title: "Hydraulic Repair & On-Site Service Across Sundargarh | Bharat Hydraulics",
    description: "Centrally stationed in Rajgangpur, providing 24/7 on-site hydraulic hose crimping, cylinder overhauls, and OEM spares across Sundargarh district.",
    url: "https://www.bharathydraulics.site/locations/sundargarh",
    siteName: "Bharat Hydraulics",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.bharathydraulics.site/hero.webp",
        width: 1200,
        height: 630,
        alt: "Bharat Hydraulics Sundargarh Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hydraulic Repair in Sundargarh | Bharat Hydraulics",
    description: "24/7 on-site hydraulic hose crimping and spares across Sundargarh district.",
    images: ["https://www.bharathydraulics.site/hero.webp"],
  },
};

export default function LocationSundargarhPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bharat Hydraulics - Sundargarh Service Area",
    "description": "24/7 on-site hydraulic hose repair, crimping, and heavy machinery fluid power support serving all of Sundargarh district from our central Rajgangpur workshop.",
    "telephone": "+919178330536",
    "url": "https://www.bharathydraulics.site/locations/sundargarh",
    "areaServed": [
      { "@type": "City", "name": "Rajgangpur" },
      { "@type": "City", "name": "Sundargarh" },
      { "@type": "City", "name": "Kansbahal" },
      { "@type": "City", "name": "Kutra" },
      { "@type": "City", "name": "Bargaon" }
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="bg-white min-h-screen pt-32 pb-24">
        {/* Location Hero */}
        <section className="container mx-auto px-6 mb-16 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-[#FF6A00]/10 text-[#FF6A00] px-4 py-2 rounded-full mb-6 font-bold text-xs uppercase tracking-widest">
            <MapPin size={14} /> Physical Shop in Rajgangpur &bull; Serving Entire Sundargarh District
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#081C3A] mb-6 leading-tight tracking-tight">
            24/7 Heavy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FF8C33]">Hydraulic Repair</span> Across Sundargarh
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-8">
            From our centrally positioned engineering workshop in Rajgangpur Industrial Estate, Bharat Hydraulics provides rapid on-site emergency van dispatch, custom R1, R2, and multi-spiral hose crimping, and cylinder overhauls across the entire Sundargarh district.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919178330536" 
              className="inline-flex bg-[#FF6A00] hover:bg-[#e65f00] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl items-center justify-center gap-3 text-base"
            >
              <Phone size={18} /> Call Sundargarh Dispatch Line
            </a>
            <a 
              href="https://wa.me/919178330536?text=Hi%20Bharat%20Hydraulics,%20I%20need%20on-site%20service%20in%20Sundargarh" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#25D366] hover:bg-[#1da851] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl items-center justify-center gap-3 text-base"
            >
              <MessageSquare size={18} /> WhatsApp Quick Request
            </a>
          </div>
        </section>

        {/* Coverage Details */}
        <section className="container mx-auto px-6 mb-20">
          <div className="bg-[#081C3A] rounded-3xl p-8 md:p-12 text-white grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Central Rajgangpur Hub</h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Our main workshop houses multi-ton crimping presses and ready stock for while-you-wait custom hose fabrication.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center shrink-0">
                <Truck size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Rapid On-Site Van</h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Equipped with mobile crimping tools, diagnostic pressure gauges, and ready fittings to service your site directly.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">24/7 Breakdown Hotline</h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Breakdowns don&apos;t keep office hours. Our emergency response team operates day and night to keep your operations moving.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries specific to location */}
        <section className="bg-[#F8FAFC] py-20 border-y border-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#081C3A] mb-12 text-center">Local Industries We Support in Sundargarh</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Factory, title: "Steel & Metallurgy", desc: "Heat-resistant hoses and heavy-duty cylinders for rolling mills and local fabricators." },
                { icon: ShieldCheck, title: "Crushers & Earthmoving", desc: "Extreme-pressure fittings for excavators, dumpers, and stone crushers in the area." },
                { icon: MapPin, title: "Civil Infrastructure", desc: "Rapid on-site replacement for cranes, concrete mixers, and loaders to minimize downtime." }
              ].map((ind, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                  <div className="bg-[#FF6A00]/10 w-16 h-16 rounded-xl flex items-center justify-center text-[#FF6A00] mb-6 group-hover:scale-110 transition-transform">
                    <ind.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#081C3A] mb-3">{ind.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Regional Hubs */}
        <section className="container mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold text-[#081C3A] mb-8 text-center">Explore Other Industrial Hubs We Serve</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/locations/rourkela" className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#FF6A00]/40 shadow-sm hover:shadow-lg transition-all group">
              <span className="text-[#FF6A00] font-bold text-xs uppercase tracking-wider block mb-1">Steel Hub</span>
              <h4 className="text-xl font-bold text-[#081C3A] group-hover:text-[#FF6A00] transition-colors mb-2">Rourkela &amp; Kalunga</h4>
              <p className="text-gray-500 text-sm">24/7 hydraulic hose crimping and on-site support for rolling mills and heavy fabricators.</p>
            </Link>
            <Link href="/locations/jharsuguda" className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#FF6A00]/40 shadow-sm hover:shadow-lg transition-all group">
              <span className="text-[#FF6A00] font-bold text-xs uppercase tracking-wider block mb-1">Powerhouse Hub</span>
              <h4 className="text-xl font-bold text-[#081C3A] group-hover:text-[#FF6A00] transition-colors mb-2">Jharsuguda &amp; Belpahar</h4>
              <p className="text-gray-500 text-sm">High-pressure spiral hoses for thermal power stations and aluminum smelting plants.</p>
            </Link>
            <Link href="/locations/keonjhar" className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#FF6A00]/40 shadow-sm hover:shadow-lg transition-all group">
              <span className="text-[#FF6A00] font-bold text-xs uppercase tracking-wider block mb-1">Mining Belt</span>
              <h4 className="text-xl font-bold text-[#081C3A] group-hover:text-[#FF6A00] transition-colors mb-2">Keonjhar &amp; Barbil</h4>
              <p className="text-gray-500 text-sm">Heavy excavator, rock breaker, and mining dumper hydraulic hose assemblies.</p>
            </Link>
          </div>
        </section>

        {/* SEO Breadcrumb */}
        <div className="container mx-auto px-6 mt-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <Link href="/" className="hover:text-[#FF6A00]">Home</Link>
            <span>/</span>
            <span className="text-[#081C3A]">Locations</span>
            <span>/</span>
            <span className="text-[#FF6A00]">Sundargarh</span>
          </div>
        </div>
      </div>
    </>
  );
}
