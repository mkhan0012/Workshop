// components/GallerySection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function GallerySection() {
    return (
        <section id="gallery" className="py-32 bg-[#F8FAFC]">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-3">Our Facility & Work</h2>
                    <h3 className="text-4xl font-extrabold text-[#081C3A] tracking-tight">Engineered For Excellence</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[340px]">
                    <motion.div
                        whileHover={{ scale: 0.99 }}
                        className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden shadow-sm cursor-zoom-in group bg-black"
                    >
                        <Image
                            src="/Components Pic.png"
                            alt="Workshop overview"
                            fill
                            className="object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                            <span className="text-white font-bold text-2xl tracking-wide">State-of-the-Art Assembly Line</span>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 0.99 }}
                        className="relative rounded-3xl overflow-hidden shadow-sm cursor-zoom-in group bg-black"
                    >
                        <Image
                            src="/HeroPIC.png"
                            alt="Heavy Machinery"
                            fill
                            className="object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500" />
                    </motion.div>

                    <motion.div
                        className="relative rounded-3xl overflow-hidden shadow-lg shadow-blue-900/10 bg-gradient-to-br from-[#0A2E6E] to-[#081C3A] flex items-center justify-center p-8 text-center"
                    >
                        <div className="space-y-2">
                            <div className="text-[#FF6A00] text-6xl font-black tracking-tighter">10k+</div>
                            <div className="text-white/80 text-xs font-bold tracking-widest uppercase">Parts in Inventory</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}