// app/page.tsx
"use client";

import { motion, AnimatePresence, Variants, useScroll, useTransform, useInView, animate } from "framer-motion";
import {
  ShieldCheck, Wrench, Clock, ThumbsUp, ArrowRight,
  CheckCircle2, Users, Factory, Award, MessageSquare, Phone,
  Pickaxe, Zap, Ship, Tractor, HardHat, Plus, Minus, MapPin
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function AnimatedCounter({ from, to }: { from: number; to: number }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.round(value));
        }
      });
      return () => controls.stop();
    }
  }, [from, to, inView]);

  return <span ref={nodeRef}>{count >= 1000 ? (count / 1000).toFixed(0) + "k" : count}</span>;
}


export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 250]);

  const faqs = [
    { q: "Do you provide emergency on-site hydraulic repairs?", a: "Yes, we offer 24/7 emergency on-site troubleshooting and replacement services to minimize your operational downtime. Our rapid-response teams are equipped with fully stocked service vans." },
    { q: "Can you manufacture custom high-pressure hoses?", a: "Absolutely. We specialize in fabricating custom hydraulic hoses tailored precisely to your machinery's pressure, temperature, and fluid requirements using state-of-the-art crimping technology." },
    { q: "Are your hydraulic components ISO certified?", a: "Yes, all our raw materials, fittings, and finished assemblies comply with stringent ISO and DIN international standards, guaranteeing maximum safety and performance." }
  ];

  const industries = [
    { name: "Mining & Excavation", icon: Pickaxe, desc: "High-pressure hoses and robust fittings for heavy-duty earthmoving equipment." },
    { name: "Steel Manufacturing", icon: Factory, desc: "Heat-resistant hydraulic assemblies designed for extreme temperature environments." },
    { name: "Construction", icon: HardHat, desc: "Reliable fluid conveyance systems for cranes, loaders, and excavators." },
    { name: "Power Gen", icon: Zap, desc: "Precision components for turbines and continuous-operation power plants." },
    { name: "Marine & Offshore", icon: Ship, desc: "Corrosion-resistant hydraulic solutions for maritime and offshore drilling." },
    { name: "Agriculture", icon: Tractor, desc: "Durable and flexible hose assemblies for tractors and harvesting machinery." }
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] min-h-[650px] w-full flex items-center bg-[#081C3A] overflow-hidden">
        {/* Animated Premium Glowing Orbs */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#FF6A00]/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute -bottom-32 -right-32 w-[700px] h-[700px] bg-[#0A2E6E]/60 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-[pulse_12s_ease-in-out_infinite_reverse]" />
        
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, x: 0, y: 0 }}
            animate={{ scale: 1.25, x: "-2%", y: "2%" }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/hero-cinematic.png"
              alt="Cinematic Drone View of Bharat Hydraulics Machinery"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#081C3A] via-[#081C3A]/85 to-[#081C3A]/30 z-10" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial="hidden" animate="visible" variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="inline-block bg-[#FF6A00]/10 border border-[#FF6A00]/20 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-[#FF6A00] font-semibold text-sm tracking-widest uppercase">Welcome to Bharat Hydraulics</span>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                BHARAT <span className="text-[#FF6A00]">HYDRAULICS</span><br />
                PREMIUM RAJGANGPUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">HOSE</span>
              </h1>
            </motion.div>

            <motion.p variants={fadeUp} className="text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed font-light">
              We provide the highest quality Bharat hydraulic hose, fittings, and assemblies for all industrial applications. Experience the best Rajgangpur hydraulics hose solutions engineered for extreme environments.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a href="tel:+919178330536" className="bg-[#0A2E6E] hover:bg-blue-800 text-white px-8 py-4 rounded-md font-bold flex items-center gap-3 transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/40">
                <Phone size={20} /> CALL NOW
              </a>
              <a href="https://wa.me/919178330536" target="_blank" rel="noopener noreferrer" className="glass-card hover:bg-white hover:text-[#081C3A] text-white px-8 py-4 rounded-md font-bold flex items-center gap-3 transition-all transform hover:-translate-y-1 shadow-lg border border-white/20">
                <MessageSquare size={20} className="text-[#25D366]" /> WHATSAPP US
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST INDICATORS */}
      <section className="bg-[#0A2E6E] text-white py-12 relative z-30 -mt-10 mx-6 lg:mx-20 rounded-2xl shadow-2xl border border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "QUALITY PRODUCTS", desc: "Best quality raw materials & tested spares." },
              { icon: Wrench, title: "EXPERT TECHNICIANS", desc: "Skilled professionals with years of experience." },
              { icon: Clock, title: "FAST SERVICE", desc: "Quick turnaround time & on-site support." },
              { icon: ThumbsUp, title: "CUSTOMER TRUST", desc: "Strong relationships built on reliability." }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 rounded-xl text-[#FF6A00] group-hover:bg-[#FF6A00] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                  <item.icon size={28} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1 tracking-wide">{item.title}</h3>
                  <p className="text-sm text-blue-200/80 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[550px] group"
            >
              <Image
                src="/warehouse.png"
                alt="Workshop capabilities"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-left group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A]/80 to-transparent" />
              <div className="absolute bottom-8 right-8 bg-[#FF6A00] p-8 rounded-2xl text-white shadow-2xl backdrop-blur-md">
                <h4 className="text-5xl font-black mb-1">6+</h4>
                <p className="font-semibold text-sm uppercase tracking-wider">Years of<br />Excellence</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-3">About Bharat Hydraulics</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#081C3A] mb-8 leading-tight tracking-tight">
                Top Quality Bharat Hydraulic Hose & Accessories.
              </h3>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg font-light">
                With over 6 years of dedicated industrial experience, Bharat Hydraulics has established itself as a trusted name in providing reliable, high-pressure hydraulic solutions. If you need a durable Rajgangpur hydraulics hose, we've got you covered. We focus on precision engineering, premium OEM parts, and rapid response times to minimize your downtime.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "ISO Certified Spares", "24/7 Emergency Support",
                  "On-Site Troubleshooting", "Custom Hose Assemblies"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-[#FF6A00]/10 p-1 rounded-full">
                      <CheckCircle2 size={20} className="text-[#FF6A00]" />
                    </div>
                    <span className="font-semibold text-[#081C3A]">{text}</span>
                  </div>
                ))}
              </div>

              <a href="#services" className="bg-[#081C3A] hover:bg-[#0A2E6E] text-white px-8 py-4 rounded-md font-bold transition-all flex items-center justify-center w-fit gap-3 shadow-xl shadow-blue-900/20 active:scale-95">
                Explore Our Work <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES & PRODUCTS */}
      <section id="services" className="py-32 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Services Left */}
            <div className="w-full lg:w-1/2">
              <div className="flex justify-between items-end mb-10">
                <div>
                  <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-2">Our Services</h2>
                  <h3 className="text-4xl font-extrabold text-[#081C3A] tracking-tight">Expert Solutions</h3>
                </div>
                <a href="#products" className="text-[#0A2E6E] font-bold flex items-center gap-1 hover:text-[#FF6A00] transition-colors pb-2 border-b-2 border-transparent hover:border-[#FF6A00]">
                  View Products <ArrowRight size={16} />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Hose Assembly", desc: "Custom high-pressure assemblies as per exact OEM specs.", img: "/Hose.png" },
                  { title: "Hydraulic Fittings", desc: "Wide range of leak-proof high-pressure adaptors.", img: "/hosecomponent.png" },
                  { title: "Industrial Hoses", desc: "Special purpose heavy-duty fluid transfer hoses.", img: "/otherpic2.png" },
                  { title: "On-Site Service", desc: "Emergency field replacement & technical support.", img: "/truck.png" }
                ].map((srv, idx) => (
                  <motion.div
                    key={idx} whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="h-40 bg-gray-100 rounded-xl mb-6 overflow-hidden relative">
                      <Image src={srv.img} alt={srv.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <h4 className="font-bold text-[#081C3A] text-xl mb-2">{srv.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{srv.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Products Right */}
            <div id="products" className="w-full lg:w-1/2">
              <div className="flex justify-between items-end mb-10">
                <div>
                  <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-2">Our Products</h2>
                  <h3 className="text-4xl font-extrabold text-[#081C3A] tracking-tight">Premium Spares</h3>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {[
                  { name: "Hydraulic Hoses", img: "/Hose.png" },
                  { name: "Hose Fittings", img: "/hosecomponent.png" },
                  { name: "Adapters", img: "/otherpic.png" },
                  { name: "Quick Couplings", img: "/otherpic3.png" },
                  { name: "Flanges", img: "/otherpic2.png" },
                  { name: "Accessories", img: "/hosecomponent.png" }
                ].map((prod, idx) => (
                  <motion.div
                    key={idx} whileHover={{ scale: 1.03 }}
                    className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-[#FF6A00] transition-colors cursor-pointer group shadow-sm hover:shadow-lg"
                  >
                    <div className="w-20 h-20 relative mb-4 opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md">
                      <Image src={prod.img} alt={prod.name} fill sizes="80px" className="object-cover rounded-xl" />
                    </div>
                    <h4 className="font-bold text-sm text-[#081C3A]">{prod.name}</h4>
                  </motion.div>
                ))}
              </div>

              {/* Stats Banner */}
              <div className="mt-10 bg-gradient-to-br from-[#0A2E6E] to-[#081C3A] rounded-3xl p-8 text-white grid grid-cols-3 gap-4 shadow-2xl shadow-blue-900/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10" />
                <div className="text-center relative z-10">
                  <Users size={28} className="mx-auto text-[#FF6A00] mb-3" />
                  <div className="text-3xl font-black mb-1">1k+</div>
                  <div className="text-xs text-gray-300 font-semibold tracking-wider uppercase">Clients</div>
                </div>
                <div className="text-center border-l border-white/10 relative z-10">
                  <Factory size={28} className="mx-auto text-[#FF6A00] mb-3" />
                  <div className="text-3xl font-black mb-1">5k+</div>
                  <div className="text-xs text-gray-300 font-semibold tracking-wider uppercase">Assemblies</div>
                </div>
                <div className="text-center border-l border-white/10 relative z-10">
                  <Clock size={28} className="mx-auto text-[#FF6A00] mb-3" />
                  <div className="text-3xl font-black mb-1">24/7</div>
                  <div className="text-xs text-gray-300 font-semibold tracking-wider uppercase">Support</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="py-32 bg-[#081C3A] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-3">Industries We Serve</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Powering The Core Of <br />Global Infrastructure
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group bg-white/[0.03] border border-white/5 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer flex flex-col h-full"
              >
                <div className="bg-[#FF6A00]/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-[#FF6A00] group-hover:scale-110 transition-transform">
                  <ind.icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold mb-3 tracking-wide">{ind.name}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{ind.desc}</p>
                <div className="w-full h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                  <div className="absolute inset-y-0 left-0 bg-[#FF6A00] w-0 group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-3">Why Choose Us</h2>
            <h3 className="text-4xl font-extrabold text-[#081C3A] tracking-tight">The Bharat Hydraulics Advantage</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Best Quality", desc: "We never compromise on material integrity and stringent burst pressure testing." },
              { title: "Competitive Pricing", desc: "Direct OEM sourcing allows us to offer the best market value to our clients." },
              { title: "Timely Delivery", desc: "Optimized supply chain to ensure your essential parts arrive exactly when needed." },
              { title: "Wide Range", desc: "Everything you need under one roof, from micro-fittings to heavy industrial hoses." },
              { title: "After Sales Support", desc: "Our relationship doesn't end at delivery. We provide ongoing technical maintenance." },
              { title: "Expert Consultation", desc: "Technical engineering guidance to ensure you select the perfect hydraulic components." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-5 p-8 rounded-2xl hover:bg-[#F8FAFC] transition-colors border border-transparent hover:border-gray-100 group"
              >
                <div className="shrink-0 mt-1">
                  <div className="bg-[#0A2E6E]/10 p-3 rounded-xl text-[#0A2E6E] group-hover:bg-[#0A2E6E] group-hover:text-white transition-colors">
                    <Award size={28} strokeWidth={2} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#081C3A] mb-3">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GALLERY SECTION */}
      <section id="gallery" className="py-32 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-3">Our Facility & Work</h2>
            <h3 className="text-4xl font-extrabold text-[#081C3A] tracking-tight">Engineered For Excellence</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
            {/* Main Featured Real Image */}
            <motion.div
              whileHover={{ scale: 0.98 }} transition={{ duration: 0.4 }}
              className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden shadow-xl group bg-black"
            >
              <Image src="/realpic.jpeg" alt="Our state-of-the-art workshop" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A]/90 via-[#081C3A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                <span className="text-white font-bold text-3xl tracking-tight">Our State-of-the-Art Assembly Facility</span>
              </div>
            </motion.div>

            {/* Wide Real Image */}
            <motion.div
              whileHover={{ scale: 0.98 }} transition={{ duration: 0.4 }}
              className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden shadow-xl group bg-black"
            >
              <Image src="/realpic2.jpeg" alt="On-site machinery and stock" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <span className="text-white text-xs font-bold tracking-widest uppercase">Live Operations</span>
              </div>
            </motion.div>

            {/* Stats Block */}
            <motion.div className="md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0A2E6E] to-[#081C3A] flex items-center justify-center p-8 text-center border border-white/10">
              <div className="space-y-3">
                <div className="text-[#FF6A00] text-6xl font-black tracking-tighter"><AnimatedCounter from={0} to={10000} />+</div>
                <div className="text-white/90 text-xs font-bold tracking-widest uppercase">Parts in Inventory</div>
              </div>
            </motion.div>

            {/* Heavy Machinery Accent */}
            <motion.div
              whileHover={{ scale: 0.98 }} transition={{ duration: 0.4 }}
              className="md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden shadow-xl group bg-black"
            >
              <Image src="/Machinery.png" alt="Heavy Machinery" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-3">Support & Knowledge Base</h2>
            <h3 className="text-4xl font-extrabold text-[#081C3A] tracking-tight">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaqIndex === i ? 'border-[#0A2E6E] shadow-xl shadow-blue-900/5 bg-white' : 'border-gray-100 hover:border-gray-300 bg-gray-50/50'}`}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-transparent outline-none"
                >
                  <span className={`font-bold text-lg pr-8 tracking-wide transition-colors ${openFaqIndex === i ? 'text-[#0A2E6E]' : 'text-[#081C3A]'}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 p-2.5 rounded-full transition-all duration-300 ${openFaqIndex === i ? 'bg-[#0A2E6E] text-white rotate-180' : 'bg-white text-gray-400 shadow-sm border border-gray-100'}`}>
                    {openFaqIndex === i ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openFaqIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}
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

      {/* 9. LOCATION SECTION */}
      <section className="py-32 bg-[#F8FAFC] relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-3">Visit Our Facility</h2>
            <h3 className="text-4xl font-extrabold text-[#081C3A] tracking-tight">Find Us On The Map</h3>
          </div>
          
          <div className="bg-white p-4 rounded-3xl shadow-xl shadow-blue-900/5 flex flex-col lg:flex-row gap-8 items-center border border-gray-100">
            <div className="w-full lg:w-2/3 h-[400px] rounded-2xl overflow-hidden relative group">
              <iframe 
                title="Bharat Hydraulics Location on Google Maps"
                src="https://maps.google.com/maps?q=Bharat+Hydraulics,+Rajgangpur,+Odisha&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
            
            <div className="w-full lg:w-1/3 p-6 lg:p-10">
              <div className="bg-[#0A2E6E]/5 w-16 h-16 rounded-2xl flex items-center justify-center text-[#0A2E6E] mb-6">
                <MapPin size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-bold text-[#081C3A] mb-4">Bharat Hydraulics</h4>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Industrial Estate, Rajgangpur<br />
                Sundargarh, Odisha 770017
              </p>
              
              <a 
                href="https://maps.app.goo.gl/Z4Smp3f7pkFaxUY98?g_st=aw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#FF6A00] hover:bg-[#e65f00] text-white px-8 py-4 rounded-md font-bold transition-all shadow-lg shadow-[#FF6A00]/20 flex items-center justify-center gap-3 w-full active:scale-95 group"
              >
                <MapPin size={20} className="group-hover:animate-bounce" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-24 relative overflow-hidden bg-[#FF6A00]">
        <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center mix-blend-overlay opacity-10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Need Immediate Hydraulic Support?</h2>
          <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Our expert technicians are on standby to minimize your downtime and keep your heavy operations running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:+919178330536" className="bg-white text-[#081C3A] px-10 py-5 rounded-md font-bold text-lg hover:bg-gray-50 transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-3">
              <Phone size={22} /> Contact Us Now
            </a>
            <a href="https://wa.me/919178330536" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-md font-bold text-lg hover:bg-[#1da851] transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-3">
              <MessageSquare size={22} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}