import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, MapPin, Factory, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Top Hydraulic Repair & Spares in Sundargarh District | Bharat Hydraulics",
  description: "Bharat Hydraulics is the leading hydraulic repair shop serving Sundargarh, Rourkela, and Jharsuguda. 24/7 on-site support, custom hoses, and heavy-duty spares.",
  keywords: "hydraulic repair Sundargarh, hydraulic shop Rourkela, hydraulic hose Jharsuguda, heavy equipment repair Sundargarh, mining hydraulic service Odisha, Bharat Hydraulics Sundargarh",
};

export default function LocationSundargarhPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      
      {/* Location Hero */}
      <section className="container mx-auto px-6 mb-20 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-[#FF6A00]/10 text-[#FF6A00] px-4 py-2 rounded-full mb-6 font-bold text-sm uppercase tracking-widest">
          <MapPin size={16} /> Serving Sundargarh District
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-[#081C3A] mb-6 leading-tight tracking-tight">
          Heavy-Duty Hydraulic Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FF8C33]">Sundargarh's Industries</span>
        </h1>
        <p className="text-xl text-gray-600 font-light leading-relaxed mb-10">
          From the mining belts to steel manufacturing plants, Bharat Hydraulics delivers unparalleled fluid power solutions, high-pressure hoses, and 24/7 on-site emergency repairs across the entire Sundargarh region.
        </p>
        <a href="tel:+919178330536" className="inline-flex bg-[#081C3A] hover:bg-[#0A2E6E] text-white px-8 py-4 rounded-md font-bold transition-all shadow-xl hover:shadow-2xl items-center gap-3">
           <Phone size={20} /> Request On-Site Service in Sundargarh
        </a>
      </section>

      {/* Industries specific to location */}
      <section className="bg-[#F8FAFC] py-20 border-y border-gray-100">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#081C3A] mb-12 text-center">Local Industries We Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { icon: Factory, title: "Steel & Metallurgy", desc: "Heat-resistant hoses and heavy-duty cylinders for Rourkela and nearby steel hubs." },
                 { icon: ShieldCheck, title: "Mining Operations", desc: "Extreme-pressure fittings for excavators, dumpers, and earthmovers in the mining belt." },
                 { icon: MapPin, title: "Construction", desc: "Rapid on-site replacement for cranes and loaders to minimize construction downtime." }
               ].map((ind, i) => (
                 <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                    <div className="bg-[#FF6A00]/10 w-16 h-16 rounded-xl flex items-center justify-center text-[#FF6A00] mb-6 group-hover:scale-110 transition-transform">
                       <ind.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-[#081C3A] mb-3">{ind.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{ind.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SEO Breadcrumb */}
      <div className="container mx-auto px-6 mt-20">
         <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <Link href="/" className="hover:text-[#FF6A00]">Home</Link>
            <span>/</span>
            <span className="text-[#081C3A]">Locations</span>
            <span>/</span>
            <span className="text-[#FF6A00]">Sundargarh</span>
         </div>
      </div>
    </div>
  );
}
