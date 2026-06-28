"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  return (
    <>
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100 transition-all">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center cursor-pointer group">
            <div className="relative w-[150px] h-[45px] md:w-[260px] md:h-[100px] lg:w-[280px] lg:h-[80px]">
              <Image
                src="/logo2.png"
                alt="Bharat Hydraulics Logo"
                fill
                sizes="(max-width: 768px) 200px, (max-width: 1024px) 260px, 280px"
                quality={100}
                className="object-contain object-left group-hover:opacity-85 transition-opacity"
                priority
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-[#081C3A]">
            <Link href="/" className="text-[#FF6A00] border-b-2 border-[#FF6A00] pb-1">HOME</Link>
            <Link href="#about" className="hover:text-[#FF6A00] transition-colors">ABOUT US</Link>
            <Link href="#services" className="hover:text-[#FF6A00] transition-colors">SERVICES</Link>
            <Link href="#products" className="hover:text-[#FF6A00] transition-colors">PRODUCTS</Link>
            <Link href="#gallery" className="hover:text-[#FF6A00] transition-colors">GALLERY</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => setIsQuotePopupOpen(true)}
              className="bg-transparent border-2 border-[#0A2E6E] text-[#0A2E6E] hover:bg-[#0A2E6E] hover:text-white px-5 py-3 rounded-md font-bold transition-all"
            >
              Request Quote
            </button>
            <button className="bg-[#0A2E6E] hover:bg-[#081C3A] text-white px-7 py-3.5 rounded-md flex items-center gap-2 font-bold transition-all shadow-lg shadow-blue-900/20 active:scale-95">
              <Phone size={18} />
              +91 98765 43210
            </button>
          </div>

          <button 
            className="lg:hidden p-2 text-[#081C3A]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden absolute w-full shadow-2xl"
            >
              <nav className="flex flex-col p-6 gap-4 font-bold text-lg text-[#081C3A]">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-[#FF6A00]">HOME</Link>
                <Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</Link>
                <Link href="#services" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</Link>
                <Link href="#products" onClick={() => setIsMobileMenuOpen(false)}>PRODUCTS</Link>
                <Link href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>GALLERY</Link>
                
                <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
                  <button 
                    onClick={() => { setIsQuotePopupOpen(true); setIsMobileMenuOpen(false); }}
                    className="bg-gray-100 text-[#0A2E6E] w-full py-3 rounded-md font-bold hover:bg-gray-200 transition-colors"
                  >
                    Request Quote
                  </button>
                  <button className="bg-[#0A2E6E] text-white w-full py-3 rounded-md flex items-center justify-center gap-2 font-bold hover:bg-[#081C3A] transition-colors">
                    <Phone size={18} /> +91 98765 43210
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Quote Request Popup */}
      <AnimatePresence>
        {isQuotePopupOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl"
            >
              <button 
                onClick={() => setIsQuotePopupOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-3xl font-extrabold text-[#081C3A] mb-2">Request A Quote</h3>
              <p className="text-gray-500 mb-8">Fill out the details below and our team will get back to you within 24 hours.</p>

              <form className="flex flex-col gap-4">
                <input type="text" placeholder="Your Name / Company" className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-medium outline-none focus:border-[#FF6A00] transition-colors" />
                <input type="email" placeholder="Email Address" className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-medium outline-none focus:border-[#FF6A00] transition-colors" />
                <input type="tel" placeholder="Phone Number" className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-medium outline-none focus:border-[#FF6A00] transition-colors" />
                <textarea placeholder="Tell us about your requirements (e.g. Custom Hose Assembly, Spares)..." rows={4} className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-medium outline-none focus:border-[#FF6A00] transition-colors resize-none"></textarea>
                
                <button type="button" onClick={(e) => { e.preventDefault(); alert('Quote Request Sent Successfully! We will contact you soon.'); setIsQuotePopupOpen(false); }} className="bg-[#FF6A00] text-white font-bold py-4 rounded-lg mt-2 flex items-center justify-center gap-2 hover:bg-[#e65f00] transition-colors shadow-lg shadow-[#FF6A00]/30">
                  <Mail size={18} /> Submit Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
