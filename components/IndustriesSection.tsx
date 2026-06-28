// components/IndustriesSection.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Factory, HardHat, Pickaxe, Zap, Ship, Tractor } from "lucide-react";

const industries = [
    { name: "Mining & Excavation", icon: Pickaxe, desc: "High-pressure hoses and robust fittings for heavy-duty earthmoving equipment." },
    { name: "Steel Manufacturing", icon: Factory, desc: "Heat-resistant hydraulic assemblies designed for extreme temperature environments." },
    { name: "Construction", icon: HardHat, desc: "Reliable fluid conveyance systems for cranes, loaders, and excavators." },
    { name: "Power Generation", icon: Zap, desc: "Precision components for turbines and continuous-operation power plants." },
    { name: "Marine & Offshore", icon: Ship, desc: "Corrosion-resistant hydraulic solutions for maritime and offshore drilling." },
    { name: "Agriculture", icon: Tractor, desc: "Durable and flexible hose assemblies for tractors and harvesting machinery." }
];

export function IndustriesSection() {
    return (
        <section className="py-24 bg-[#081C3A] text-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-3">Industries We Serve</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                            Powering The Core Of <br />Global Infrastructure
                        </h3>
                    </div>
                    <button className="group flex items-center gap-2 text-sm font-semibold hover:text-[#FF6A00] transition-colors">
                        Explore All Industries
                        <div className="bg-white/10 p-2 rounded-full group-hover:bg-[#FF6A00] transition-colors">
                            <ArrowUpRight size={16} />
                        </div>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((ind, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer flex flex-col h-full"
                        >
                            <ind.icon className="text-[#FF6A00] mb-8" size={36} strokeWidth={1.5} />
                            <h4 className="text-xl font-bold mb-3 tracking-wide">{ind.name}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{ind.desc}</p>
                            <div className="w-full h-px bg-white/10 relative overflow-hidden">
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-[#FF6A00] w-0 group-hover:w-full transition-all duration-700 ease-out"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}