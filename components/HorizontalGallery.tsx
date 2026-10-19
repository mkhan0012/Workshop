"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const cards = [
  { url: "/realpic.webp", title: "State-of-the-Art Assembly Facility", id: 1 },
  { url: "/realpic2.webp", title: "Live Operations & Machinery", id: 2 },
  { url: "/Hose.webp", title: "Custom Hydraulic Hoses", id: 3 },
  { url: "/hosecomponent.webp", title: "Precision Fittings", id: 4 },
  { url: "/otherpic.webp", title: "Heavy Duty Adapters", id: 5 },
];

export default function HorizontalGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the horizontal shift based on scroll progress for desktop
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="gallery" className="bg-[#F8FAFC]">
      {/* Mobile Experience: Smooth Touch-Swipeable Snap Carousel (No vertical scroll trap) */}
      <div className="block md:hidden py-16 px-6">
        <div className="text-center mb-8">
          <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-2">Our Facility &amp; Work</h2>
          <h3 className="text-3xl font-extrabold text-[#081C3A] tracking-tight">
            Engineered For Excellence
          </h3>
          <p className="text-xs text-gray-500 mt-2">Swipe horizontally to explore our workshop &rarr;</p>
        </div>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 scrollbar-none">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="relative h-[360px] w-[82vw] rounded-3xl overflow-hidden shadow-lg group bg-black border border-gray-200/80 flex-shrink-0 snap-center"
            >
              <Image 
                src={card.url} 
                alt={`${card.title} - Bharat Hydraulics workshop Rajgangpur`} 
                fill 
                quality={80}
                sizes="82vw" 
                className="object-cover object-center opacity-90" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A]/95 via-[#081C3A]/25 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-xl tracking-tight leading-snug">
                  {card.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Experience: Sticky Horizontal Transform on Vertical Scroll */}
      <div ref={targetRef} className="hidden md:block relative h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="absolute top-20 w-full text-center z-10 pointer-events-none px-6">
            <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-3 drop-shadow-sm">Our Facility &amp; Work</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-[#081C3A] tracking-tight drop-shadow-md bg-white/60 backdrop-blur-md inline-block px-8 py-2 rounded-full border border-gray-200/50">
              Engineered For Excellence
            </h3>
          </div>
          
          <motion.div style={{ x }} className="flex gap-8 px-12 lg:px-24 mt-20">
            {cards.map((card) => (
              <div 
                key={card.id} 
                className="relative h-[55vh] w-[60vw] md:w-[45vw] lg:w-[35vw] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] group bg-black border border-gray-200/80 flex-shrink-0"
              >
                 <Image 
                    src={card.url} 
                    alt={`${card.title} - Bharat Hydraulics state of the art facility in Rajgangpur, Odisha`} 
                    fill 
                    quality={80}
                    sizes="(max-width: 1024px) 45vw, 35vw" 
                    className="object-cover object-center opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A]/90 via-[#081C3A]/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 md:p-10 pointer-events-none">
                    <span className="text-white font-bold text-2xl lg:text-3xl tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
                      {card.title}
                    </span>
                 </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
