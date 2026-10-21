"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Mail } from "lucide-react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Magnetic from "./Magnetic";
import { openQuoteModal } from "./QuotePopup";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services/hydraulic-hose-repair" },
    { name: "PRODUCTS", href: "/#products" },
    { name: "LOCATIONS", href: "/locations/sundargarh" },
    { name: "ABOUT US", href: "/about" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6A00] to-[#FF8C33] origin-left z-[100] shadow-[0_0_15px_rgba(255,106,0,0.8)]"
        style={{ scaleX: scrollYProgress }}
      />
      <header className="bg-white/90 backdrop-blur-xl sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-gray-100/50 transition-all">
        <div className="container mx-auto px-6 h-20 lg:h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center cursor-pointer group">
            <div className="relative w-[150px] h-[45px] md:w-[260px] md:h-[100px] lg:w-[280px] lg:h-[80px]">
              <Image
                src="/logo2.webp"
                alt="Bharat Hydraulics Logo"
                fill
                sizes="(max-width: 768px) 150px, (max-width: 1024px) 260px, 280px"
                className="object-contain object-left group-hover:opacity-85 transition-opacity"
                priority
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 font-bold text-sm tracking-wider" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative group transition-colors duration-300 ${
                    isActive ? "text-[#B84300] font-black" : "text-[#081C3A] hover:text-[#B84300]"
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`absolute -bottom-1.5 left-0 h-0.5 bg-[#FF6A00] transition-all duration-300 rounded-full ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="mailto:info@bharathydraulics.site"
              className="text-xs font-bold text-gray-700 hover:text-[#FF6A00] flex items-center gap-1.5 transition-colors py-2 px-3 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200"
              title="Email Bharat Hydraulics"
            >
              <Mail size={15} className="text-[#FF6A00]" />
              <span>Email Us</span>
            </a>
            <Magnetic strength={0.2}>
              <button 
                type="button"
                onClick={() => openQuoteModal()}
                className="bg-[#FF6A00] hover:bg-[#e65f00] text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-[0_4px_14px_rgba(255,106,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,106,0,0.4)] active:scale-95 cursor-pointer"
              >
                <span>Request a Quote</span>
              </button>
            </Magnetic>
          </div>

          <button 
            className="lg:hidden p-2 text-[#081C3A]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden absolute top-full left-0 w-full shadow-2xl z-50"
            >
              <nav className="flex flex-col p-6 gap-4 font-bold text-lg" aria-label="Mobile Navigation">
                {navLinks.map((link) => {
                  const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`transition-colors ${
                        isActive ? "text-[#B84300] font-black" : "text-[#081C3A] hover:text-[#B84300]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                
                <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
                  <button 
                    type="button"
                    onClick={() => { openQuoteModal(); setIsMobileMenuOpen(false); }}
                    className="bg-[#FF6A00] text-white w-full py-3.5 rounded-xl font-bold hover:bg-[#e65f00] transition-colors shadow-lg shadow-[#FF6A00]/25 text-center cursor-pointer"
                  >
                    Request a Quote
                  </button>
                  <a 
                    href="mailto:info@bharathydraulics.site"
                    className="bg-[#081C3A] text-white w-full py-3 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm hover:bg-[#0A2E6E] transition-colors"
                  >
                    <Mail size={16} className="text-[#FF6A00]" /> Email Our Engineering Desk
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
