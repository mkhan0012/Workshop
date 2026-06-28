// components/FaqSection.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import React, { useState } from "react";

const faqs = [
    { q: "Do you provide emergency on-site hydraulic repairs?", a: "Yes, we offer 24/7 emergency on-site troubleshooting and replacement services to minimize your operational downtime. Our rapid-response teams are equipped with fully stocked service vans." },
    { q: "What is the warranty period on your hydraulic assemblies?", a: "We provide a standard 12-month warranty on all custom assemblies and OEM spares against manufacturing defects, ensuring complete peace of mind for your industrial operations." },
    { q: "Can you manufacture custom high-pressure hoses?", a: "Absolutely. We specialize in fabricating custom hydraulic hoses tailored precisely to your machinery's pressure, temperature, and fluid requirements using state-of-the-art crimping technology." },
    { q: "Are your hydraulic components ISO certified?", a: "Yes, all our raw materials, fittings, and finished assemblies comply with stringent ISO and DIN international standards, guaranteeing maximum safety and performance." }
];

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-20">
                    <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-3">Support & Knowledge Base</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-[#081C3A] tracking-tight">Frequently Asked Questions</h3>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-[#0A2E6E] shadow-xl shadow-blue-900/5' : 'border-gray-100 hover:border-gray-200 bg-gray-50/50'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left bg-transparent outline-none"
                            >
                                <span className={`font-bold text-lg tracking-wide transition-colors ${openIndex === i ? 'text-[#0A2E6E]' : 'text-[#081C3A]'}`}>
                                    {faq.q}
                                </span>
                                <div className={`shrink-0 ml-6 p-2 rounded-full transition-colors duration-300 ${openIndex === i ? 'bg-[#0A2E6E] text-white rotate-180' : 'bg-white text-gray-400 shadow-sm'}`}>
                                    {openIndex === i ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-6 pt-0 text-gray-500 leading-relaxed text-sm">
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
    );
}