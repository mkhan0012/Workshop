import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, MapPin, Factory, Mail, Clock, 
  CheckCircle2, ChevronRight, Truck, Award, 
  Target, Compass, Users, Sparkles
} from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bharathydraulics.site"),
  alternates: {
    canonical: "/about",
  },
  title: "About Us | Bharat Hydraulics - Our Story & Expansion Across Sundargarh",
  description: "Learn the story of Bharat Hydraulics: Founded in Rajgangpur, providing high-precision hydraulic hose repair, custom assemblies, and 24/7 on-site service across all of Sundargarh district.",
  keywords: "about Bharat Hydraulics, hydraulic repair shop Rajgangpur, hydraulic hose Sundargarh, Bharat Hydraulics story, hydraulic workshop Odisha, industrial hose maker Rajgangpur",
  openGraph: {
    title: "About Bharat Hydraulics | Rajgangpur Workshop & Sundargarh Service",
    description: "Discover our journey from a specialized Rajgangpur workshop to a trusted hydraulic lifeline powering earthmovers, steel plants, and crushers across Sundargarh.",
    url: "https://www.bharathydraulics.site/about",
    siteName: "Bharat Hydraulics",
    locale: "en_IN",
    type: "website",
  },
};

export default function AboutPage() {
  const milestones = [
    {
      year: "The Beginning",
      title: "Recognizing the Downtime Crisis",
      desc: "Contractors, plant managers, and stone crusher operators in Rajgangpur frequently suffered multi-day machine breakdowns waiting for hydraulic hoses from distant cities. Bharat Hydraulics was founded to deliver immediate, OEM-grade crimping on the spot."
    },
    {
      year: "Investment in Tech",
      title: "Heavy-Duty Crimping Machinery",
      desc: "We installed high-tonnage multi-spiral crimping presses and digital micrometer calipers to ensure precision crimp diameters matching exact DIN/SAE standards for 1SN, 2SN, 4SP, and 4SH hoses."
    },
    {
      year: "Mobile Service Launch",
      title: "Extending Across Sundargarh District",
      desc: "While keeping our physical hub firmly rooted in Rajgangpur, we launched emergency on-site service vans equipped with mobile crimping, pressure gauges, and ready fittings to service clients across the entire Sundargarh district."
    },
    {
      year: "Today & Beyond",
      title: "Strategic Regional Expansion",
      desc: "With over 5,000 custom assemblies delivered and 1,000+ machinery clients served, we are now expanding our reach to support steel corridors in Rourkela, power hubs in Jharsuguda, and mining belts in Keonjhar."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Zero Downtime Philosophy",
      desc: "Every hour an excavator, tipper, or factory line sits idle burns profits. We operate with an emergency mindset to get your machines running without delay."
    },
    {
      icon: ShieldCheck,
      title: "Zero Compromise On Quality",
      desc: "We refuse to stock sub-standard rubber or brittle fittings. Every assembly uses certified wire braids and burst-tested couplings built for extreme industrial pulse loads."
    },
    {
      icon: Users,
      title: "Honest Technical Consultation",
      desc: "We don't just sell you a hose; we diagnose why the failure occurred (abrasion, pressure spikes, bend radius, or heat) and recommend the correct protective sleeve or rating."
    },
    {
      icon: Compass,
      title: "Transparent & Grounded",
      desc: "We are proud of our local roots in Rajgangpur. We believe in clear pricing, genuine parts, and long-term relationships with mechanics, drivers, and plant engineers."
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-28 pb-24">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-6 mb-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <Link href="/" className="hover:text-[#FF6A00] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-[#081C3A] font-bold">About Us</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="container mx-auto px-6 mb-20">
        <div className="bg-[#081C3A] rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6A00]/20 rounded-full blur-[140px] -mr-40 -mt-40 pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            {/* Transparency Location Pill */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-[#FF6A00] px-4 py-2 rounded-full mb-6 font-bold text-xs uppercase tracking-widest border border-white/10">
              <MapPin size={14} /> Physical Workshop in Rajgangpur &bull; Serving Entire Sundargarh District
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Engineering Reliability For <span className="text-[#FF6A00]">Odisha&apos;s Heavy Machinery</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8">
              Founded on the frontlines of industrial Rajgangpur, Bharat Hydraulics was created to solve one urgent challenge: keeping heavy earthmoving, mining, and manufacturing equipment operating at full power without costly breakdown delays.
            </p>

            <div className="flex flex-wrap gap-4 text-sm font-semibold text-gray-300">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                <CheckCircle2 size={16} className="text-[#FF6A00]" /> 6+ Years Industry Experience
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                <CheckCircle2 size={16} className="text-[#FF6A00]" /> 5,000+ Assemblies Fabricated
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                <CheckCircle2 size={16} className="text-[#FF6A00]" /> 24/7 Sundargarh Mobile Dispatch
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story & Location Transparency Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[#FF6A00] font-bold text-xs uppercase tracking-widest mb-3">
              <Sparkles size={16} /> Our Origin & Mission
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#081C3A] mb-8 leading-tight tracking-tight">
              Rooted in Rajgangpur, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FF8C33]">
                Serving All of Sundargarh
              </span>
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed text-base font-normal">
              <p>
                In the industrial heartland of Sundargarh district, heavy machinery is everywhere — from stone crushers and civil earthmoving projects to sponge iron mills, cement logistics, and fleet transport. Yet, for years, local operators faced a recurring nightmare: when a high-pressure hydraulic line burst, finding the exact matching fitting and an OEM-quality crimp meant hours or days of lost work.
              </p>
              <p>
                <strong>Bharat Hydraulics was established in the Industrial Estate of Rajgangpur</strong> to put an end to that downtime. Starting with top-tier hose crimping machinery and certified DIN/ISO hose stocks, we committed ourselves to doing the job right: keeping a continuous ready stock of <strong>R1 (1-wire), R2 (2-wire), and heavy 4SP/4SH multi-spiral hoses across every size (1/4&quot;, 3/8&quot;, 1/2&quot;, 5/8&quot;, 3/4&quot;, 1&quot;, 1-1/4&quot;, 1-1/2&quot;, 2&quot;)</strong> alongside hundreds of BSP, JIC, Metric, ORFS, and SAE flange fittings for instant while-you-wait replication.
              </p>
              <div className="bg-[#081C3A]/5 border-l-4 border-[#FF6A00] p-6 rounded-r-2xl text-[#081C3A]">
                <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <MapPin size={18} className="text-[#FF6A00]" /> Where We Operate
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Our physical workshop and store is located exclusively in Rajgangpur, Odisha.</strong> However, to support contractors, crushers, and factories throughout the region, our on-site service vans and emergency courier network provide continuous, rapid coverage across the <strong>entire Sundargarh district</strong> — including Kansbahal, Kalunga, Rourkela, Vedvyas, Kutra, Bargaon, and Sundargarh town.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative h-[180px] sm:h-[280px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <Image 
                src="/realpic.webp" 
                alt="Inside the Bharat Hydraulics workshop in Rajgangpur Odisha"
                fill
                quality={75}
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <span className="text-white text-xs font-bold">Rajgangpur Workshop</span>
              </div>
            </div>
            <div className="relative h-[180px] sm:h-[280px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 sm:mt-6">
              <Image 
                src="/warehouse.webp" 
                alt="Vast inventory of high pressure hydraulic hoses and fittings in Sundargarh"
                fill
                quality={75}
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <span className="text-white text-xs font-bold">Comprehensive Spares Stock</span>
              </div>
            </div>
            <div className="relative h-[180px] sm:h-[280px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 sm:-mt-6">
              <Image 
                src="/Workingmachine.webp" 
                alt="Precision hydraulic hose crimping process in action"
                fill
                quality={75}
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <span className="text-white text-xs font-bold">Precision Crimp Technology</span>
              </div>
            </div>
            <div className="relative h-[180px] sm:h-[280px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <Image 
                src="/realpic2.webp" 
                alt="Bharat Hydraulics facility and skilled technicians"
                fill
                quality={75}
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <span className="text-white text-xs font-bold">Expert Technicians</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Are Expanding Our Horizons */}
      <section className="bg-white py-24 border-y border-gray-100 mb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#FF6A00] font-bold text-xs uppercase tracking-widest mb-2 block">Looking Forward</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#081C3A] mb-6">
              How We Are Expanding Ourselves
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              We started with a single crimping machine in Rajgangpur. Today, we are strategically scaling our capabilities, mobile fleet, and partnerships to become the go-to hydraulic lifeline across Western and Northern Odisha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] p-8 rounded-3xl border border-gray-100 hover:border-[#FF6A00]/30 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#FF6A00]/10 text-[#FF6A00] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Truck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#081C3A] mb-3">Expanding On-Site Service Vans</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We are actively expanding our rapid-response mobile fleet with on-board hydraulic crimpers, portable power packs, and diagnostic equipment. This allows us to reach remote stone quarries, highway construction sites, and mining belts in record time.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-3xl border border-gray-100 hover:border-[#FF6A00]/30 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#0A2E6E]/10 text-[#0A2E6E] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Factory size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#081C3A] mb-3">Heavy Multi-Spiral & Spiral Inventory</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                To serve high-tonnage blast furnaces in <strong>Rourkela</strong>, coal handling plants in <strong>Jharsuguda</strong>, and 90-ton mining excavators in <strong>Keonjhar</strong>, we have increased our inventory of heavy 4SP, 4SH, R12, and R15 multi-spiral hoses up to 6,000 PSI working pressure.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-3xl border border-gray-100 hover:border-[#FF6A00]/30 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#FF6A00]/10 text-[#FF6A00] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#081C3A] mb-3">Cylinder Overhauls & Custom Fittings</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Beyond hoses, we are advancing our hydraulic cylinder resealing, rod polishing, and custom adapter machining capabilities. Whether you operate a JCB, a crane, or a bespoke industrial press, we have the technical tooling to engineer a lasting fix.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey & Milestones */}
      <section className="container mx-auto px-6 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#FF6A00] font-bold text-xs uppercase tracking-widest mb-2 block">Our Track Record</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#081C3A]">Milestones of Growth</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-xl hover:border-[#FF6A00]/40 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6A00]/5 rounded-bl-full pointer-events-none" />
              <div>
                <span className="text-sm font-bold text-[#FF6A00] uppercase tracking-wider block mb-2">{m.year}</span>
                <h4 className="text-xl font-bold text-[#081C3A] mb-3">{m.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-gray-400">
                <span className="w-2 h-2 rounded-full bg-[#FF6A00]"></span> Step 0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-6 mb-24">
        <div className="bg-[#081C3A] rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#FF6A00] font-bold text-xs uppercase tracking-widest mb-2 block">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-black">The Principles Behind Every Assembly</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#FF6A00] text-white flex items-center justify-center mb-4 shadow-lg shadow-[#FF6A00]/30">
                  <v.icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-2">{v.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Location & Map */}
      <section className="container mx-auto px-6 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#FF6A00] font-bold text-xs uppercase tracking-widest mb-2 block">Come Meet Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#081C3A]">Visit Our Rajgangpur Workshop</h2>
          <p className="text-gray-600 mt-2">Bring your broken hose or machinery sample for instant while-you-wait replication</p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 h-[380px] rounded-2xl overflow-hidden relative border border-gray-100">
            <iframe 
              title="Bharat Hydraulics Rajgangpur Workshop Location"
              src="https://maps.google.com/maps?q=Bharat+Hydraulics,+Rajgangpur,+Odisha&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider block mb-1">Our Workshop Address</span>
              <h4 className="text-2xl font-bold text-[#081C3A]">Bharat Hydraulics</h4>
              <p className="text-gray-600 mt-1 leading-relaxed">
                Industrial Estate, Rajgangpur<br />
                Sundargarh District, Odisha - 770017
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-700">
                <Clock size={18} className="text-[#FF6A00]" />
                <span>Mon – Sat: 8:30 AM – 7:00 PM (Emergency Email Support)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail size={18} className="text-[#FF6A00]" />
                <a href="mailto:info@bharathydraulics.site" className="font-bold text-[#081C3A] hover:text-[#FF6A00] transition-colors">
                  info@bharathydraulics.site
                </a>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/Z4Smp3f7pkFaxUY98?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#FF6A00] hover:bg-[#e65f00] text-white py-4 rounded-xl font-bold text-center block transition-all shadow-lg shadow-[#FF6A00]/25"
            >
              Get Directions on Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-[#0A2E6E] to-[#081C3A] rounded-3xl p-8 md:p-14 text-white text-center shadow-2xl relative overflow-hidden">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Need On-Site Hydraulic Support in Sundargarh?</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base">
            Whether you are located in Rajgangpur, Kansbahal, Kalunga, Rourkela, or anywhere in Sundargarh district, our technical team is ready to dispatch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="mailto:info@bharathydraulics.site?subject=Sundargarh%20On-Site%20Hydraulic%20Support%20Inquiry"
              className="bg-[#FF6A00] hover:bg-[#e65f00] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_25px_rgba(255,106,0,0.4)] flex items-center justify-center gap-3 text-base active:scale-95"
            >
              <Mail size={20} /> Email Our Engineers
            </a>
            <Link
              href="/services/hydraulic-hose-repair"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all border border-white/20 flex items-center justify-center gap-3 text-base active:scale-95"
            >
              View Services Catalog
            </Link>
          </div>
          <p className="text-xs text-gray-400 font-medium">
            Direct Inquiries: <a href="mailto:info@bharathydraulics.site" className="text-white underline hover:text-[#FF6A00]">info@bharathydraulics.site</a>
          </p>
        </div>
      </section>
    </div>
  );
}
