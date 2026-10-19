// app/page.tsx
"use client";

import { motion, AnimatePresence, Variants, useScroll, useTransform, useInView, animate } from "framer-motion";
import {
  Clock, ArrowRight, Factory, MessageSquare, Phone,
  Pickaxe, Zap, Tractor, HardHat, Plus, Minus,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Magnetic from "@/components/Magnetic";
import HorizontalGallery from "@/components/HorizontalGallery";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

function AnimatedCounter({ from = 0, to }: { from?: number; to: number }) {
  // Always initialize with 'to' so on initial paint / SSR / slow mobile connections it never flashes 0!
  const [count, setCount] = useState(to);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, amount: 0.1 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      setCount(from);
      const controls = animate(from, to, {
        duration: 1.8,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.round(value));
        }
      });
      return () => controls.stop();
    }
  }, [from, to, inView]);

  return (
    <span ref={nodeRef} className="inline-block tabular-nums">
      {count >= 1000 ? (count / 1000).toFixed(0) + "k" : count}
    </span>
  );
}

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 150]);

  const faqs = [
    {
      q: "Where is Bharat Hydraulics physically located?",
      a: "Our physical workshop and retail facility is located in Industrial Estate, Rajgangpur, Odisha (PIN 770017). This is our central engineering hub where we house heavy-duty hydraulic crimping presses, testing rigs, and massive spares inventory."
    },
    {
      q: "Do you provide on-site hydraulic repair services outside Rajgangpur?",
      a: "Yes! While our physical shop is in Rajgangpur, we provide active 24/7 emergency on-site van dispatch across the entire Sundargarh district — including Kansbahal, Kalunga, Rourkela, Vedvyas, Kutra, Bargaon, and Sundargarh town."
    },
    {
      q: "How fast can you fabricate a custom hydraulic hose assembly?",
      a: "If you bring your damaged hose or sample to our Rajgangpur workshop, our technicians can measure, cut, skive, and crimp a precision replacement within 10 to 15 minutes while you wait. For on-site emergency calls in Sundargarh, our mobile response van carries mobile crimping tools and ready fittings."
    },
    {
      q: "What types of hoses and pressure ratings do you stock?",
      a: "We stock 1SN, 2SN, 4SP, 4SH, R12, R13, and R15 multi-spiral wire hoses rated up to 6,000 PSI (420 bar). All raw materials and fittings comply strictly with ISO 18752, DIN EN 856, and SAE 100R standards."
    },
    {
      q: "Do you supply parts for heavy mining and earthmoving machinery?",
      a: "Absolutely. We specialize in high-impulse hydraulic lines and cylinders for JCB 3DX, Tata Hitachi excavators, Komatsu shovels, CAT earthmovers, hydraulic rock breakers, and mining tipper trucks."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const industries = [
    { name: "Mining & Heavy Earthmovers", icon: Pickaxe, desc: "High-pressure multi-spiral hoses for excavators, dumpers, and rock breakers." },
    { name: "Steel & Metallurgy", icon: Factory, desc: "Heat-resistant hoses and protective fire sleeves for furnaces and rolling mills." },
    { name: "Civil & Infrastructure", icon: HardHat, desc: "Fast turnaround replacements for mobile cranes, backhoe loaders, and transit mixers." },
    { name: "Power Plants & Utilities", icon: Zap, desc: "Precision high-reliability hydraulic lines for turbine valves and fuel handling." },
    { name: "Agriculture & Transport", icon: Tractor, desc: "Durable assemblies for tractors, tipping trolleys, and transport trailers." }
  ];

  const quickSolutions = [
    {
      title: "Excavator & JCB Hose Blowout",
      desc: "Instant 15-minute while-you-wait replication in Rajgangpur or rapid van dispatch across Sundargarh.",
      specs: "1SN / 2SN / 4SP rated up to 5,000 PSI",
      img: "/Hose.webp"
    },
    {
      title: "Hydraulic Cylinder Leaks & Overhauls",
      desc: "Complete cylinder teardown, seal kit replacement, and pressure testing for industrial rams.",
      specs: "OEM seal kits & polished chrome rods",
      img: "/Machine.webp"
    },
    {
      title: "Heavy Multi-Spiral Hoses (4SP / 4SH)",
      desc: "Engineered for extreme pulse shock in steel mills, continuous casters, and heavy mining shovels.",
      specs: "Tested up to 6,000 PSI working pressure",
      img: "/Machinery.webp"
    },
    {
      title: "BSP, JIC, ORFS & Metric Adaptors",
      desc: "Over 500+ adapter, quick coupling, and flange variants ready on shelf for immediate fitment.",
      specs: "SAE 3000 / 6000 PSI split flanges",
      img: "/hosecomponent.webp"
    }
  ];

  const coverageHubs = [
    {
      name: "Rajgangpur (Headquarters & Shop)",
      type: "Physical Workshop & Store",
      highlight: "Main Facility",
      desc: "Our primary retail store and heavy crimping workshop. Walk in with your hose sample for while-you-wait custom fabrication.",
      badge: "Shop Located Here",
      link: "/about"
    },
    {
      name: "Sundargarh District",
      type: "Full On-Site Coverage",
      highlight: "24/7 Mobile Dispatch",
      desc: "Covering Kansbahal, Kutra, Bargaon, and Sundargarh town with our rapid emergency service van and technician team.",
      badge: "Full On-Site Service",
      link: "/locations/sundargarh"
    },
    {
      name: "Rourkela & Kalunga",
      type: "Regional Steel Hub (30 km)",
      highlight: "High-Temperature Hoses",
      desc: "Supplying Kalunga Industrial Estate and Rourkela steel mills with heavy 4SP/4SH spiral hoses and fire-sleeve protections.",
      badge: "30-Min Fast Dispatch",
      link: "/locations/rourkela"
    },
    {
      name: "Jharsuguda Belt",
      type: "Power & Aluminum Hub",
      highlight: "Industrial Spares",
      desc: "Serving Vedanta smelters, OPGC thermal power stations, and Belpahar coal handling machinery.",
      badge: "Direct Highway Link",
      link: "/locations/jharsuguda"
    },
    {
      name: "Keonjhar & Barbil",
      type: "Iron Ore Mining Corridor",
      highlight: "Mining Excavator Lines",
      desc: "Extreme-duty rock breaker and mining shovel hydraulic lines engineered for harsh abrasive terrain.",
      badge: "Mining Fleet Support",
      link: "/locations/keonjhar"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* TRANSPARENCY NOTICE BAR (Prominent Physical Location & Service Range) */}
      <div className="bg-gradient-to-r from-[#081C3A] via-[#0A2E6E] to-[#081C3A] text-white py-3 px-4 text-xs md:text-sm font-medium border-b border-[#FF6A00]/30 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6A00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6A00]"></span>
            </span>
            <span>
              <strong>Physical Workshop:</strong> Industrial Estate, Rajgangpur &bull; <strong>Service Coverage:</strong> Rapid 24/7 On-Site Repairs Across Entire Sundargarh District
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-gray-300">
            <Link href="/about" className="text-[#FF6A00] hover:underline flex items-center gap-1">
              About Us <ChevronRight size={12} />
            </Link>
            <a href="tel:+919178330536" className="hover:text-white transition-colors flex items-center gap-1">
              <Phone size={12} className="text-[#FF6A00]" /> +91 91783 30536
            </a>
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] w-full flex flex-col justify-center pt-24 pb-28 lg:pt-32 lg:pb-32 bg-[#081C3A] overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#FF6A00]/25 rounded-full blur-[140px] pointer-events-none mix-blend-screen animate-pulse-slow" />
        <div className="absolute -bottom-32 -right-32 w-[800px] h-[800px] bg-[#0A2E6E]/60 rounded-full blur-[160px] pointer-events-none mix-blend-screen animate-pulse-slow" style={{animationDelay: '2s'}} />
        
        {/* Background Image with Layered Gradient */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div style={{ y: heroY }} className="w-full h-[120%] -top-[10%] relative">
            <Image
              src="/hero.webp"
              alt="Heavy duty industrial hydraulic hose and machinery repair workshop in Rajgangpur Sundargarh"
              fill
              sizes="100vw"
              quality={75}
              className="object-cover object-center"
              priority
              fetchPriority="high"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#081C3A]/95 via-[#081C3A]/85 to-[#081C3A]/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A] via-transparent to-[#081C3A]/60 z-10" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            
            {/* Pill Tag */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 bg-white/10 border border-white/15 px-5 py-2 rounded-full mb-8 backdrop-blur-md shadow-2xl">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6A00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6A00]"></span>
              </span>
              <span className="text-white font-semibold text-xs md:text-sm tracking-[0.15em] uppercase">
                #1 Hydraulic Hose Repair in Rajgangpur & Sundargarh
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={fadeUp}
              className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight mb-8 text-white"
            >
              KEEPING HEAVY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] via-[#FFA154] to-[#FF6A00] filter drop-shadow-[0_0_20px_rgba(255,106,0,0.35)]">
                MACHINERY MOVING
              </span>
            </motion.h1>

            {/* Subtext with Location Clarity */}
            <motion.p 
              variants={fadeUp}
              className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed"
            >
              With our fully equipped workshop in <strong>Rajgangpur</strong> and mobile emergency service vans dispatched across <strong>Sundargarh District</strong>, Bharat Hydraulics delivers high-pressure custom crimped hoses, OEM spares, and 24/7 on-site repair to stop costly breakdown downtime.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-14 w-full">
              <Magnetic strength={0.3} className="w-full sm:w-auto">
                <a 
                  href="tel:+919178330536" 
                  className="w-full sm:w-auto bg-[#FF6A00] hover:bg-[#e65f00] text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,106,0,0.4)] active:scale-95 text-center"
                >
                  <Phone size={22} /> CALL EMERGENCY LINE
                </a>
              </Magnetic>
              <Magnetic strength={0.3} className="w-full sm:w-auto">
                <a 
                  href="https://wa.me/919178330536?text=Hi%20Bharat%20Hydraulics,%20I%20need%20urgent%20hydraulic%20repair%20or%20hose%20fabrication" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1da851] text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 text-center"
                >
                  <MessageSquare size={22} /> WHATSAPP QUOTE
                </a>
              </Magnetic>
            </motion.div>

            {/* Live Stats Ticker */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-white/10">
              <div className="bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-2xl border border-white/5 sm:border-0">
                <div className="text-2xl sm:text-3xl font-black text-white"><AnimatedCounter from={0} to={6} />+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1">Years of Excellence</div>
              </div>
              <div className="bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-2xl border border-white/5 sm:border-0">
                <div className="text-2xl sm:text-3xl font-black text-[#FF6A00]"><AnimatedCounter from={0} to={5000} />+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1">Hoses Crimped</div>
              </div>
              <div className="bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-2xl border border-white/5 sm:border-0">
                <div className="text-2xl sm:text-3xl font-black text-white"><AnimatedCounter from={0} to={1000} />+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1">Machinery Clients</div>
              </div>
              <div className="bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-2xl border border-white/5 sm:border-0">
                <div className="text-2xl sm:text-3xl font-black text-[#FF6A00]">24/7</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1">Sundargarh Dispatch</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 2. OUR REGIONAL COVERAGE FOOTPRINT (Transparent Shop in Rajgangpur + Full Sundargarh Range) */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#FF6A00] font-bold text-xs uppercase tracking-widest mb-2 block">Our Geographic Reach</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#081C3A] mb-4">
              Rajgangpur Workshop & Sundargarh Coverage
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              We operate our full-scale hydraulic crimping and retail workshop right here in <strong>Rajgangpur</strong>, providing fast on-site dispatch and emergency repairs throughout <strong>Sundargarh district</strong> and neighboring industrial corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageHubs.map((hub, idx) => (
              <div 
                key={idx}
                className={`p-8 rounded-3xl border transition-all duration-300 relative flex flex-col justify-between group ${
                  idx === 0 
                    ? "bg-[#081C3A] text-white border-transparent shadow-xl" 
                    : "bg-[#F8FAFC] text-[#081C3A] border-gray-100 hover:border-[#FF6A00]/40 hover:shadow-xl"
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      idx === 0 ? "bg-[#FF6A00] text-white" : "bg-[#0A2E6E]/10 text-[#0A2E6E]"
                    }`}>
                      {hub.badge}
                    </span>
                    <span className={`text-xs font-semibold ${idx === 0 ? "text-gray-300" : "text-gray-400"}`}>
                      {hub.type}
                    </span>
                  </div>
                  <h3 className={`text-2xl font-black mb-3 ${idx === 0 ? "text-white" : "text-[#081C3A]"}`}>
                    {hub.name}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 ${idx === 0 ? "text-gray-300" : "text-gray-600"}`}>
                    {hub.desc}
                  </p>
                </div>

                <Link 
                  href={hub.link} 
                  aria-label={`View details and services for ${hub.name}`}
                  className={`text-sm font-bold inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform ${
                    idx === 0 ? "text-[#FF6A00]" : "text-[#0A2E6E]"
                  }`}
                >
                  <span>View Details &amp; Services</span>
                  <span className="sr-only"> for {hub.name}</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 IN-STOCK READY INVENTORY: R1, R2, SPIRAL & EVERY FITTING SIZE */}
      <section id="products" className="py-24 bg-white border-b border-gray-100 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#FF6A00] font-bold text-xs uppercase tracking-widest mb-2 block">Extensive Workshop Inventory</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#081C3A] mb-4">
              In-Stock: R1, R2, Spiral Hoses & Fittings in Every Size
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Never wait days for parts to arrive from out of state. At our <strong>Rajgangpur workshop</strong>, we maintain a vast, ready-to-crimp inventory of 1-wire, 2-wire, and 4-spiral heavy hoses with matching fittings across every standard diameter.
            </p>
          </div>

          {/* Hose Types Cards: R1, R2, Spiral */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* R1 Hose Card */}
            <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-gray-100 hover:border-[#FF6A00]/40 hover:shadow-xl transition-all duration-300 relative group">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-black uppercase px-3.5 py-1.5 rounded-full bg-[#0A2E6E]/10 text-[#0A2E6E] tracking-wider">
                  Single Wire Braid
                </span>
                <span className="text-xs font-bold text-gray-500">1SN / SAE 100 R1AT</span>
              </div>
              <h3 className="text-2xl font-black text-[#081C3A] mb-2">R1 Hydraulic Hoses</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                High-flexibility, medium-pressure hydraulic lines designed for return lines, steering systems, tractor attachments, and light earthmoving machinery.
              </p>
              <div className="pt-4 border-t border-gray-200/80 space-y-2 text-xs font-semibold text-gray-700">
                <div className="flex justify-between">
                  <span className="text-gray-500">Working Pressure:</span>
                  <span className="text-[#081C3A]">Up to 3,250 PSI (225 Bar)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sizes in Stock:</span>
                  <span className="text-[#FF6A00] font-bold">1/4&quot; to 1-1/2&quot;</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="text-[#081C3A]">Tractors, Tippers &amp; Return Lines</span>
                </div>
              </div>
            </div>

            {/* R2 Hose Card */}
            <div className="bg-[#081C3A] rounded-3xl p-8 border border-white/10 text-white shadow-2xl relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6A00]/20 rounded-bl-full pointer-events-none" />
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-black uppercase px-3.5 py-1.5 rounded-full bg-[#FF6A00] text-white tracking-wider">
                  Double Wire Braid
                </span>
                <span className="text-xs font-bold text-gray-300">2SN / SAE 100 R2AT</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">R2 Hydraulic Hoses</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                The rugged industrial workhorse. Heavy double high-tensile steel wire braids built to absorb intense continuous hydraulic pressure in demanding machinery.
              </p>
              <div className="pt-4 border-t border-white/15 space-y-2 text-xs font-semibold text-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-400">Working Pressure:</span>
                  <span className="text-white">Up to 5,800 PSI (400 Bar)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sizes in Stock:</span>
                  <span className="text-[#FF6A00] font-bold">1/4&quot;, 3/8&quot;, 1/2&quot;, 3/4&quot;, 1&quot;, 1-1/4&quot;+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Best For:</span>
                  <span className="text-white">JCB 3DX, Loaders &amp; Cranes</span>
                </div>
              </div>
            </div>

            {/* Multi-Spiral Hose Card */}
            <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-gray-100 hover:border-[#FF6A00]/40 hover:shadow-xl transition-all duration-300 relative group">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-black uppercase px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 tracking-wider">
                  4-Wire &amp; 6-Wire Spiral
                </span>
                <span className="text-xs font-bold text-gray-500">4SP / 4SH / R12 / R15</span>
              </div>
              <h3 className="text-2xl font-black text-[#081C3A] mb-2">Multi-Spiral Hoses</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Ultra-high-pressure severe duty lines engineered for violent pressure surges, rock breakers, high-tonnage mining shovels, and steel mill presses.
              </p>
              <div className="pt-4 border-t border-gray-200/80 space-y-2 text-xs font-semibold text-gray-700">
                <div className="flex justify-between">
                  <span className="text-gray-500">Working Pressure:</span>
                  <span className="text-[#081C3A]">Up to 6,000+ PSI (420 Bar)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sizes in Stock:</span>
                  <span className="text-[#FF6A00] font-bold">3/8&quot;, 1/2&quot;, 3/4&quot;, 1&quot;, 1-1/4&quot;, 1-1/2&quot;, 2&quot;</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="text-[#081C3A]">Excavators, Breakers &amp; Steel Mills</span>
                </div>
              </div>
            </div>

          </div>

          {/* SIZES IN STOCK INTERACTIVE GRID */}
          <div className="bg-[#081C3A] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="max-w-3xl mb-8">
              <span className="text-[#FF6A00] font-bold text-xs uppercase tracking-widest mb-1 block">Full Size Coverage</span>
              <h3 className="text-2xl md:text-3xl font-black">All Standard &amp; Heavy Metric Diameters Ready in Stock</h3>
              <p className="text-gray-300 text-sm mt-2">
                We stock matching hose and end fittings across all fractional and metric dash sizes for instant while-you-wait crimping:
              </p>
            </div>

            {/* Grid of sizes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 text-center mb-10">
              {[
                { size: "1/4\"", dn: "DN06", desc: "Pilot / Gauges" },
                { size: "3/8\"", dn: "DN10", desc: "Steering / Valve" },
                { size: "1/2\"", dn: "DN12", desc: "JCB Boom & Arm" },
                { size: "5/8\"", dn: "DN16", desc: "High Flow Aux" },
                { size: "3/4\"", dn: "DN20", desc: "Excavator Main" },
                { size: "1\"", dn: "DN25", desc: "Heavy Return/Feed" },
                { size: "1-1/4\"", dn: "DN32", desc: "High Volume Line" },
                { size: "1-1/2\" - 2\"", dn: "DN38-50", desc: "Suction & Dumpers" }
              ].map((item, i) => (
                <div key={i} className="bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-sm hover:bg-[#FF6A00] hover:border-[#FF6A00] transition-colors group">
                  <div className="text-2xl font-black text-white group-hover:scale-105 transition-transform">{item.size}</div>
                  <div className="text-xs font-bold text-[#FF6A00] group-hover:text-white transition-colors">{item.dn}</div>
                  <div className="text-[10px] text-gray-300 mt-1 leading-tight group-hover:text-white/90">{item.desc}</div>
                </div>
              ))}
            </div>

            {/* Fitting Standards Bar */}
            <div className="pt-8 border-t border-white/15 flex flex-col lg:flex-row items-center justify-between gap-6 text-sm">
              <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Matching Fittings In Stock:</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg font-semibold text-xs text-white">BSP (60&deg; Cone)</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg font-semibold text-xs text-white">JIC (37&deg; Flare)</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg font-semibold text-xs text-white">Metric DIN (DKOL / DKOS)</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg font-semibold text-xs text-white">ORFS (O-Ring Face Seal)</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg font-semibold text-xs text-white">SAE Code 61 / 62 Flanges</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg font-semibold text-xs text-white">Quick Release Couplings (QRC)</span>
              </div>
              <a
                href="tel:+919178330536"
                className="w-full lg:w-auto bg-[#FF6A00] hover:bg-[#e65f00] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 text-center"
              >
                <Phone size={14} /> Check Specific Size Availability
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 3. COMMON BREAKDOWN PROBLEMS & SOLUTIONS */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#FF6A00] font-bold text-xs uppercase tracking-widest mb-2 block">Emergency Problem Solver</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#081C3A] mb-4">
                What Hydraulic Problem Needs Fixing?
              </h2>
              <p className="text-gray-600 text-lg">
                Whether you suffered a blown line on an excavator or need a complete cylinder rebuild, we have the machinery and parts ready to resolve it immediately.
              </p>
            </div>
            <Link 
              href="/services/hydraulic-hose-repair"
              className="bg-[#0A2E6E] hover:bg-[#081C3A] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md flex items-center gap-2 shrink-0"
            >
              All Services & Capabilities <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickSolutions.map((item, i) => (
              <div 
                key={i} 
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-[#FF6A00]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-44 rounded-2xl overflow-hidden relative mb-6 border border-gray-100">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      quality={75}
                      loading="lazy"
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider block mb-1">{item.specs}</span>
                  <h3 className="text-xl font-bold text-[#081C3A] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                </div>

                <a 
                  href="tel:+919178330536"
                  className="w-full bg-gray-50 hover:bg-[#FF6A00] text-[#081C3A] hover:text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={14} /> Request Immediate Fix
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HORIZONTAL GALLERY SHOWCASE */}
      <HorizontalGallery />

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="py-24 bg-[#081C3A] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#FF6A00] font-bold text-xs uppercase tracking-widest mb-2 block">Heavy Industry Coverage</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Powering Sundargarh’s Industrial Core
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div 
                key={i} 
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-[#FF6A00]/40 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FF6A00]/15 text-[#FF6A00] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ind.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF6A00] transition-colors">{ind.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-24 bg-white" id="faq">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-[#FF6A00] font-bold text-xs uppercase tracking-widest mb-2 block">Got Questions?</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#081C3A]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  openFaqIndex === i ? 'border-[#0A2E6E] shadow-xl shadow-blue-900/5 bg-white' : 'border-gray-100 hover:border-gray-200 bg-gray-50/50'
                }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-transparent outline-none group"
                >
                  <span className={`font-bold text-lg pr-6 transition-colors duration-300 ${openFaqIndex === i ? 'text-[#FF6A00]' : 'text-[#081C3A] group-hover:text-[#0A2E6E]'}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 p-2 rounded-full transition-all duration-300 ${openFaqIndex === i ? 'bg-[#0A2E6E] text-white rotate-180' : 'bg-white text-gray-400 shadow-sm'}`}>
                    {openFaqIndex === i ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openFaqIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="p-6 md:p-8 pt-0 text-gray-600 leading-relaxed text-base border-t border-gray-50 mt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VISIT OUR WORKSHOP & MAP */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="lg:col-span-2 h-[420px] rounded-2xl overflow-hidden relative border border-gray-100">
              <iframe 
                title="Bharat Hydraulics Workshop Rajgangpur Location"
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
                <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider block mb-1">Our Facility</span>
                <h2 className="text-2xl font-black text-[#081C3A]">Bharat Hydraulics Workshop</h2>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  Industrial Estate, Rajgangpur<br />
                  Sundargarh District, Odisha - 770017
                </p>
              </div>

              <div className="space-y-2 text-sm text-gray-700 pt-2 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[#FF6A00]" />
                  <span>Workshop Open: Mon – Sat (8:30 AM – 7:00 PM)</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-[#081C3A]">
                  <Phone size={16} className="text-[#FF6A00]" />
                  <span>24/7 On-Site Emergency: +91 91783 30536</span>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/Z4Smp3f7pkFaxUY98?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#FF6A00] hover:bg-[#e65f00] text-white py-4 rounded-xl font-bold text-center block transition-all shadow-lg shadow-[#FF6A00]/25"
              >
                Get Directions to Rajgangpur Shop
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 9. BOTTOM ACTION BANNER */}
      <section className="py-20 bg-gradient-to-r from-[#FF6A00] to-[#FF8C33] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Immediate Hydraulic Breakdown in Sundargarh?</h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Our rapid response technicians and mobile equipment are on standby to minimize your downtime.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+919178330536"
              className="bg-[#081C3A] hover:bg-[#0A2E6E] text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-2xl flex items-center justify-center gap-3"
            >
              <Phone size={22} /> Call +91 91783 30536
            </a>
            <a 
              href="https://wa.me/919178330536?text=Hi%20Bharat%20Hydraulics,%20I%20need%20urgent%20support"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 text-[#081C3A] px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-2xl flex items-center justify-center gap-3"
            >
              <MessageSquare size={22} className="text-[#25D366]" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
