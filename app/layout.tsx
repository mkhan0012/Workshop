// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { MapPin, Mail, Clock, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Bharat Hydraulics | Hydraulic Repair Shop & Hose Repair Near Me",
  description: "Top-rated hydraulic repair shop near me in Rajgangpur, Odisha. We specialize in hydraulic hose repair near me, custom assemblies, high-pressure fittings, and 24/7 on-site hydraulic troubleshooting.",
  keywords: "hydraulic repair shop near me, hydraulic repair shop, hydraulic hose repair near me, hydraulic hose repair, hydraulic hose making near me, hydraulic cylinder repair near me, rajgangpur hydraulics hose, bharat hydraulic hose, bharat hydraulics, Hydraulic Hose Repair Rajgangpur, Hydraulic Fittings near me, Bharat Hydraulics Rajgangpur, Custom Hose Assembly Odisha, Industrial Hoses Sundargarh, Emergency hydraulic service",
  openGraph: {
    title: "Bharat Hydraulics | Hydraulic Repair Shop & Hose Repair Near Me",
    description: "Your trusted partner for custom Bharat hydraulic hose, fittings, and 24/7 emergency troubleshooting. The best hydraulic repair shop near me in Rajgangpur and Sundargarh.",
    siteName: "Bharat Hydraulics",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Bharat Hydraulics",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Bharat Hydraulics",
  "image": "/logo2.png",
  "url": "https://bharathydraulics.in",
  "telephone": "+919178330536",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Industrial Estate",
    "addressLocality": "Rajgangpur",
    "addressRegion": "Odisha",
    "postalCode": "770017",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "08:30",
    "closes": "19:00"
  },
  "sameAs": [
    "https://maps.app.goo.gl/Z4Smp3f7pkFaxUY98"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#FF6A00" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen bg-[var(--color-background)]">
        {/* Top Information Bar */}
        <div className="bg-[#081C3A] text-white/80 text-xs py-2 hidden md:block">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="flex gap-6">
              <span className="flex items-center gap-2"><MapPin size={14} className="text-[#FF6A00]" /> Rajgangpur, Odisha</span>
              <span className="flex items-center gap-2"><Mail size={14} className="text-[#FF6A00]" /> moshink0786@gmail.com</span>
              <span className="flex items-center gap-2"><Clock size={14} className="text-[#FF6A00]" /> Mon - Sat: 8:30 AM - 7:00 PM</span>
            </div>
            <div className="flex gap-5">
              <Link href="#" className="hover:text-[#FF6A00] transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.61l.39-4H14V7a1 1 0 0 1 1-1h3z" /></svg>
              </Link>
              <Link href="#" className="hover:text-[#FF6A00] transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </Link>
              <Link href="#" className="hover:text-[#FF6A00] transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </Link>
            </div>
          </div>
        </div>

        <Navbar />

        <main className="flex-grow">{children}</main>

        {/* Premium Corporate Footer */}
       {/* Premium Corporate Footer */}
        <footer className="bg-[#081C3A] text-white pt-24 pb-8 relative overflow-hidden border-t border-white/5">
          {/* Subtle Premium Background Glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6A00]/5 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0A2E6E]/30 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-12 border-b border-white/10 pb-16 mb-8">
              
              {/* Column 1: Brand & Bio */}
              <div className="lg:col-span-1">
                {/* Optimized Footer Logo Wrapper */}
                <Link href="/" className="inline-block mb-8 relative w-[200px] h-[55px] group">
                  <Image 
                    src="/logo2.png" 
                    alt="Bharat Hydraulics Logo" 
                    fill
                    sizes="200px"
                    /* Note: 'brightness-0 invert' forces the logo to be solid white. 
                       Remove these 2 words if your transparent logo already has white text. */
                    className="object-contain object-left group-hover:opacity-85 transition-opacity brightness-0 invert" 
                  />
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light pr-4">
                  Engineering the future of heavy industry. We provide world-class hydraulic solutions, premium assemblies, and 24/7 on-site support to keep your operations moving.
                </p>
                {/* Social Links */}
                <div className="flex gap-4">
                  <a href="#" className="bg-white/5 hover:bg-[#FF6A00] p-2.5 rounded-md transition-colors text-white hover:shadow-lg hover:shadow-[#FF6A00]/20" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.61l.39-4H14V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="#" className="bg-white/5 hover:bg-[#FF6A00] p-2.5 rounded-md transition-colors text-white hover:shadow-lg hover:shadow-[#FF6A00]/20" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="#" className="bg-white/5 hover:bg-[#FF6A00] p-2.5 rounded-md transition-colors text-white hover:shadow-lg hover:shadow-[#FF6A00]/20" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                </div>
              </div>
              
              {/* Column 2: Quick Links */}
              <div>
                <h4 className="text-lg font-bold mb-8 text-white tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FF6A00] rounded-sm"></span> Quick Links
                </h4>
                <ul className="space-y-4 text-gray-400 text-sm font-medium">
                  <li><Link href="/" className="hover:text-[#FF6A00] transition-all hover:translate-x-1 inline-block">Home</Link></li>
                  <li><Link href="#about" className="hover:text-[#FF6A00] transition-all hover:translate-x-1 inline-block">About Company</Link></li>
                  <li><Link href="#services" className="hover:text-[#FF6A00] transition-all hover:translate-x-1 inline-block">Our Services</Link></li>
                  <li><Link href="#gallery" className="hover:text-[#FF6A00] transition-all hover:translate-x-1 inline-block">Facility Gallery</Link></li>
                  <li><Link href="#faq" className="hover:text-[#FF6A00] transition-all hover:translate-x-1 inline-block">Support & FAQ</Link></li>
                </ul>
              </div>

              {/* Column 3: Products */}
              <div>
                <h4 className="text-lg font-bold mb-8 text-white tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FF6A00] rounded-sm"></span> Top Products
                </h4>
                <ul className="space-y-4 text-gray-400 text-sm font-medium">
                  <li><Link href="#products" className="hover:text-[#FF6A00] transition-all hover:translate-x-1 inline-block">Hydraulic Hoses</Link></li>
                  <li><Link href="#products" className="hover:text-[#FF6A00] transition-all hover:translate-x-1 inline-block">Fittings & Adapters</Link></li>
                  <li><Link href="#products" className="hover:text-[#FF6A00] transition-all hover:translate-x-1 inline-block">Quick Couplings</Link></li>
                  <li><Link href="#products" className="hover:text-[#FF6A00] transition-all hover:translate-x-1 inline-block">Industrial Hoses</Link></li>
                  <li><Link href="#products" className="hover:text-[#FF6A00] transition-all hover:translate-x-1 inline-block">OEM Spares</Link></li>
                </ul>
              </div>

              {/* Column 4: Contact */}
              <div>
                <h4 className="text-lg font-bold mb-8 text-white tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FF6A00] rounded-sm"></span> Contact Us
                </h4>
                <ul className="space-y-6 text-gray-400 text-sm">
                  <li className="flex gap-4 items-start group">
                    <div className="bg-white/5 p-2 rounded-md group-hover:bg-[#FF6A00] group-hover:text-white transition-colors text-[#FF6A00]">
                      <MapPin size={18} /> 
                    </div>
                    <span className="mt-1 leading-relaxed">Industrial Estate, Rajgangpur<br/>Odisha, 770017</span>
                  </li>
                  <li className="flex gap-4 items-center group">
                    <div className="bg-white/5 p-2 rounded-md group-hover:bg-[#FF6A00] group-hover:text-white transition-colors text-[#FF6A00]">
                      <Phone size={18} /> 
                    </div>
                    <span className="font-semibold text-white tracking-wide">+91 91783 30536</span>
                  </li>
                  <li className="flex gap-4 items-center group">
                    <div className="bg-white/5 p-2 rounded-md group-hover:bg-[#FF6A00] group-hover:text-white transition-colors text-[#FF6A00]">
                      <Mail size={18} /> 
                    </div>
                    <a href="mailto:moshink0786@gmail.com" className="hover:text-[#FF6A00] transition-colors">moshink0786@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Bottom Copyright Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium">
              <p>&copy; {new Date().getFullYear()} Bharat Hydraulics. All Rights Reserved.</p>
              <div className="mt-4 md:mt-0 flex gap-6">
                <Link href="#" className="hover:text-[#FF6A00] transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-[#FF6A00] transition-colors">Terms of Service</Link>
                <Link href="#" className="hover:text-[#FF6A00] transition-colors">Sitemap</Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp Widget */}
        <a 
          href="https://wa.me/919178330536" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce group border-[3px] border-white/20"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={28} className="fill-current" />
          <span className="absolute -top-10 right-0 bg-white text-[#081C3A] text-xs font-bold py-1 px-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with us!
          </span>
        </a>
      </body>
    </html>
  );
}