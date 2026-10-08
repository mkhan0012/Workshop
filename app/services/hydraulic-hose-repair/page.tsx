import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Wrench, Clock, ArrowRight, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://bharathydraulics.in"),
  alternates: {
    canonical: "/services/hydraulic-hose-repair",
  },
  title: "Hydraulic Hose Repair in Rajgangpur | Bharat Hydraulics",
  description: "Expert 24/7 hydraulic hose repair, crimping, and custom assembly in Rajgangpur and Sundargarh. Premium OEM parts for heavy machinery, JCB, and cranes.",
  keywords: "hydraulic hose repair, hose crimping Rajgangpur, custom hose assembly Odisha, heavy duty hose fix, emergency hose repair Sundargarh, JCB hose repair near me, excavator hose replacement",
};

export default function HydraulicHoseRepairPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-32 pb-24">
      {/* Hero Section for Service */}
      <section className="container mx-auto px-6 mb-20">
        <div className="bg-[#081C3A] rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6A00]/20 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              24/7 <span className="text-[#FF6A00]">Hydraulic Hose Repair</span> in Rajgangpur
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              When a hydraulic hose fails, every minute of downtime costs you money. Bharat Hydraulics provides rapid, on-site, and in-shop emergency hose repairs and custom crimping across Sundargarh and Odisha.
            </p>
            <div className="flex gap-4">
              <a href="tel:+919178330536" className="bg-[#FF6A00] text-white px-8 py-4 rounded-md font-bold transition-all shadow-[0_0_20px_rgba(255,106,0,0.4)] hover:shadow-[0_0_30px_rgba(255,106,0,0.6)] flex items-center gap-3">
                <Phone size={20} /> Call For Emergency Repair
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-[#081C3A] mb-6">Why Choose Our Hose Repair Service?</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              We specialize in fabricating custom hydraulic hoses tailored precisely to your machinery's pressure, temperature, and fluid requirements using state-of-the-art crimping technology right here in Rajgangpur.
            </p>
            
            <ul className="space-y-6">
              {[
                { icon: Clock, title: "Rapid Turnaround", desc: "Most hoses are diagnosed, cut, crimped, and cleaned within minutes while you wait." },
                { icon: Wrench, title: "Precision Crimping", desc: "Using advanced machinery to ensure exact OEM factory specifications and zero leaks." },
                { icon: ShieldCheck, title: "Tested for Safety", desc: "All high-pressure assemblies undergo strict burst and pressure testing." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="bg-[#0A2E6E]/10 p-3 rounded-xl text-[#0A2E6E] shrink-0 mt-1">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#081C3A] mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <Image 
              src="/Hose.webp" 
              alt="Custom high pressure hydraulic hose assembly and repair process in Odisha"
              fill
              quality={85}
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A]/90 to-transparent flex items-end p-8">
               <h3 className="text-white text-2xl font-bold">Premium OEM Quality Hoses</h3>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Breadcrumb Links */}
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-gray-200">
         <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <Link href="/" className="hover:text-[#FF6A00]">Home</Link>
            <span>/</span>
            <span className="text-[#081C3A]">Services</span>
            <span>/</span>
            <span className="text-[#FF6A00]">Hydraulic Hose Repair</span>
         </div>
      </div>
    </div>
  );
}
