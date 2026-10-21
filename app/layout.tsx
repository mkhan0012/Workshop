// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
import { MapPin, Mail, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import QuotePopup from "@/components/QuotePopup";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bharathydraulics.site"),
  alternates: {
    canonical: "/",
  },
  title: "Bharat Hydraulics | #1 Hydraulic Repair in Rajgangpur",
  description: "Top hydraulic repair shop in Rajgangpur, Odisha. We specialize in 24/7 hydraulic hose repair, custom assemblies, and emergency on-site troubleshooting.",
  keywords: "hydraulic repair shop near me, hydraulic repair shop Rajgangpur, hydraulic hose repair near me, hydraulic hose repair Odisha, hydraulic hose making Rajgangpur, hydraulic cylinder repair Sundargarh, emergency hydraulic hose repair Odisha, 24 hour hydraulic hose repair, mobile hydraulic hose repair, custom hydraulic hose maker, heavy duty hose repair Odisha, industrial hose repair shop Rajgangpur, excavator hose repair, JCB hose repair near me, high pressure hose repair, tractor hose repair, crane hydraulic hose repair, hydraulic pipe repair, hydraulic hose crimping near me, hydraulic hose replacement near me, broken hydraulic hose fix, rajgangpur hydraulics hose, bharat hydraulic hose, bharat hydraulics, Hydraulic Hose Repair Rajgangpur, Hydraulic Fittings near me, Bharat Hydraulics Rajgangpur, Custom Hose Assembly Odisha, Industrial Hoses Sundargarh, Emergency hydraulic service Odisha, hydraulic shop in Odisha, best hydraulic repair in Rajgangpur",
  openGraph: {
    title: "Bharat Hydraulics | #1 Hydraulic Repair Shop in Rajgangpur, Odisha",
    description: "Odisha's trusted partner for custom Bharat hydraulic hose, fittings, and 24/7 emergency troubleshooting. The best hydraulic repair shop in Rajgangpur and Sundargarh.",
    siteName: "Bharat Hydraulics Rajgangpur",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.bharathydraulics.site/hero.webp",
        width: 1200,
        height: 630,
        alt: "Bharat Hydraulics Workshop Rajgangpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat Hydraulics | #1 Hydraulic Repair in Rajgangpur",
    description: "Top hydraulic repair shop in Rajgangpur, Odisha. 24/7 hydraulic hose repair, custom assemblies, and emergency on-site troubleshooting.",
    images: ["https://www.bharathydraulics.site/hero.webp"],
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
  "@type": ["LocalBusiness", "AutoPartsStore", "HardwareStore"],
  "name": "Bharat Hydraulics",
  "description": "Odisha's top-rated hydraulic repair shop in Rajgangpur. We offer premium hydraulic hose repair, custom fitting services, and 24/7 on-site emergency repairs across Sundargarh and Odisha.",
  "image": "https://www.bharathydraulics.site/logo2.webp",
  "url": "https://www.bharathydraulics.site",
  "email": "info@bharathydraulics.site",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Industrial Estate",
    "addressLocality": "Rajgangpur",
    "addressRegion": "Odisha",
    "postalCode": "770017",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "22.1896",
    "longitude": "84.5828"
  },
  "areaServed": {
    "@type": "City",
    "name": "Rajgangpur"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "08:30",
    "closes": "19:00"
  }
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
        <link
          rel="preload"
          as="image"
          href="/hero.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`antialiased flex flex-col min-h-screen bg-[var(--color-background)] ${inter.variable} ${outfit.variable} font-sans`}>
        <SmoothScroll>
          {/* Google Analytics */}
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-VPNWDC99M7"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-VPNWDC99M7', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />

          {/* Top Information Bar */}
          <div className="bg-[#081C3A] text-white/90 text-xs py-2.5 hidden md:block border-b border-white/5">
            <div className="container mx-auto px-6 flex justify-between items-center tracking-wide font-medium">
              <div className="flex gap-8">
                <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default"><MapPin size={14} className="text-[#FF6A00]" /> Rajgangpur, Odisha</span>
                <span className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={14} className="text-[#FF6A00]" /> <a href="mailto:info@bharathydraulics.site" className="hover:underline">info@bharathydraulics.site</a></span>
                <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default"><Clock size={14} className="text-[#FF6A00]" /> Mon - Sat: 8:30 AM - 7:00 PM</span>
              </div>
              <div className="text-white/60 text-xs font-medium">
                Industrial Hydraulic Services &bull; Sundargarh District
              </div>
            </div>
          </div>

          <Navbar />

          <main className="flex-grow">{children}</main>

          {/* Premium Corporate Footer */}
          <footer className="bg-[#081C3A] text-white pt-24 pb-8 relative overflow-hidden border-t-2 border-[#FF6A00]/20" aria-label="Site Footer">
            {/* Subtle Premium Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6A00]/5 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0A2E6E]/30 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none animate-pulse-slow" style={{animationDelay: '2s'}} />

            <div className="container mx-auto px-6 relative z-10">
              <h2 className="sr-only">Footer Information &amp; Navigation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-12 border-b border-white/10 pb-16 mb-8">
                
                {/* Column 1: Brand & Bio */}
                <div className="lg:col-span-1">
                  {/* Optimized Footer Logo Wrapper */}
                  <Link href="/" className="inline-block mb-8 relative w-[200px] h-[55px] group">
                    <Image 
                      src="/logo2.webp" 
                      alt="Bharat Hydraulics Logo" 
                      fill
                      sizes="200px"
                      className="object-contain object-left group-hover:opacity-85 transition-opacity brightness-0 invert" 
                    />
                  </Link>
                  <p className="text-gray-300 text-sm leading-relaxed font-light pr-4">
                    Engineering the future of heavy industry. We provide world-class hydraulic solutions, premium assemblies, and dedicated support to keep your operations moving.
                  </p>
                </div>
                
                {/* Column 2: Quick Links */}
                <div>
                  <h3 className="text-lg font-bold mb-8 text-white tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FF6A00] rounded-sm"></span> Regional Hubs
                  </h3>
                  <ul className="space-y-4 text-gray-300 text-sm font-medium">
                    <li><Link href="/services/hydraulic-hose-repair" className="hover:text-[#FF6A00] transition-all hover:translate-x-1 inline-block">Hose Repair Service</Link></li>
                    <li><Link href="/locations/rourkela" className="hover:text-[#FF6A00] transition-all hover:translate-x-1 inline-block">Rourkela &amp; Kalunga</Link></li>
                    <li><Link href="/locations/jharsuguda" className="hover:text-[#FF6A00] transition-all hover:translate-x-1 inline-block">Jharsuguda &amp; Belpahar</Link></li>
                    <li><Link href="/locations/keonjhar" className="hover:text-[#FF6A00] transition-all hover:translate-x-1 inline-block">Keonjhar &amp; Barbil Mines</Link></li>
                    <li><Link href="/locations/sundargarh" className="hover:text-[#FF6A00] transition-all hover:translate-x-1 inline-block">Sundargarh District</Link></li>
                    <li><Link href="/about" className="hover:text-[#FF6A00] transition-all hover:translate-x-1 inline-block">About Our Story &amp; Expansion</Link></li>
                  </ul>
                </div>

                {/* Column 3: Products */}
                <div>
                  <h3 className="text-lg font-bold mb-8 text-white tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FF6A00] rounded-sm"></span> Top Products
                  </h3>
                  <ul className="space-y-4 text-gray-300 text-sm font-medium">
                    <li><Link href="/#products" className="hover:text-[#FF6A00] transition-all hover:translate-x-1 inline-block">Hydraulic Hoses</Link></li>
                    <li><Link href="/#products" className="hover:text-[#FF6A00] transition-all hover:translate-x-1 inline-block">Fittings &amp; Adapters</Link></li>
                    <li><Link href="/#products" className="hover:text-[#FF6A00] transition-all hover:translate-x-1 inline-block">Quick Couplings</Link></li>
                    <li><Link href="/#products" className="hover:text-[#FF6A00] transition-all hover:translate-x-1 inline-block">Industrial Hoses</Link></li>
                    <li><Link href="/#products" className="hover:text-[#FF6A00] transition-all hover:translate-x-1 inline-block">OEM Spares</Link></li>
                  </ul>
                </div>

                {/* Column 4: Contact */}
                <div>
                  <h3 className="text-lg font-bold mb-8 text-white tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FF6A00] rounded-sm"></span> Contact Us
                  </h3>
                  <ul className="space-y-6 text-gray-300 text-sm">
                    <li className="flex gap-4 items-start group">
                      <div className="bg-white/5 p-2 rounded-md group-hover:bg-[#FF6A00] group-hover:text-white transition-colors text-[#FF6A00]">
                        <MapPin size={18} /> 
                      </div>
                      <span className="mt-1 leading-relaxed">Industrial Estate, Rajgangpur<br/>Odisha, 770017</span>
                    </li>
                    <li className="flex gap-4 items-start group">
                      <div className="bg-white/5 p-2 rounded-md group-hover:bg-[#FF6A00] group-hover:text-white transition-colors text-[#FF6A00]">
                        <Mail size={18} /> 
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 block font-normal">Primary Email &amp; Quotes</span>
                        <a href="mailto:info@bharathydraulics.site" className="font-semibold text-white hover:text-[#FF6A00] transition-colors">
                          info@bharathydraulics.site
                        </a>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start group">
                      <div className="bg-white/5 p-2 rounded-md group-hover:bg-[#FF6A00] group-hover:text-white transition-colors text-[#FF6A00]">
                        <Clock size={18} /> 
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 block font-normal">Working Hours</span>
                        <span className="text-gray-300 font-medium">Mon - Sat: 8:30 AM - 7:00 PM</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Bottom Copyright & Legal Bar */}
              <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-medium pt-8 border-t border-white/10">
                <p>&copy; {new Date().getFullYear()} Bharat Hydraulics. All Rights Reserved. Heavy Fluid Power &amp; Hydraulic Engineering.</p>
                <div className="mt-4 md:mt-0 flex gap-8">
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                  <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                  <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
                </div>
              </div>
            </div>
          </footer>

          {/* Site-wide Quote / Query Popup with 5s delay & floating action trigger */}
          <QuotePopup />
        </SmoothScroll>
      </body>
    </html>
  );
}
