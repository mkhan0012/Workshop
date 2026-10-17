import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, Wrench, Clock, ArrowRight, Phone, MapPin, 
  CheckCircle2, ChevronRight, MessageSquare, Gauge, Truck, 
  Layers, Settings, Sparkles 
} from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bharathydraulics.site"),
  alternates: {
    canonical: "/services/hydraulic-hose-repair",
  },
  title: "Hydraulic Hose Repair, R1 R2 Spiral Stock in Rajgangpur | Bharat Hydraulics",
  description: "Ready stock of R1, R2, and Multi-Spiral hydraulic hoses (1/4\" to 2\") with BSP, JIC, Metric, and Flange fittings. 15-min in-shop crimping in Rajgangpur & 24/7 on-site repair across Sundargarh.",
  keywords: "hydraulic hose repair Rajgangpur, R1 hydraulic hose, R2 hydraulic hose Sundargarh, spiral hydraulic hose Odisha, 1/2 hydraulic hose, 3/4 hydraulic hose, 1 inch hydraulic hose, hydraulic fittings BSP JIC Metric, custom hose crimping Odisha, emergency hydraulic repair",
  openGraph: {
    title: "Hydraulic Hose Repair & In-Stock R1, R2, Spiral Hoses | Bharat Hydraulics",
    description: "Full inventory of R1, R2, and 4SP/4SH spiral hydraulic hoses and fittings from 1/4\" to 2\". Fast 15-minute crimping at our Rajgangpur shop & 24/7 on-site van service across Sundargarh.",
    url: "https://www.bharathydraulics.site/services/hydraulic-hose-repair",
    siteName: "Bharat Hydraulics",
    locale: "en_IN",
    type: "website",
  },
};

export default function HydraulicHoseRepairPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What hose types and pressure ratings does Bharat Hydraulics keep in stock?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We maintain continuous ready stock of R1 (single-wire braid 1SN, up to 3,250 PSI), R2 (double-wire braid 2SN, up to 5,800 PSI), and heavy multi-spiral 4SP/4SH/R15 (4-wire and 6-wire, up to 6,000+ PSI / 420 bar)."
        }
      },
      {
        "@type": "Question",
        "name": "What sizes of hydraulic hoses and fittings are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We stock all fractional and metric diameters: 1/4\", 3/8\", 1/2\", 5/8\", 3/4\", 1\", 1-1/4\", 1-1/2\", and 2\" with matching BSP, JIC 37°, Metric DIN (DKOL/DKOS), ORFS, and SAE split flanges."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can I get a replacement hose made?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At our physical shop in Industrial Estate, Rajgangpur, we diagnose, cut, skive, and crimp your replacement hose within 10 to 15 minutes while you wait. For field breakdowns, our mobile service van dispatches across Sundargarh district."
        }
      }
    ]
  };

  const hoseInventory = [
    {
      name: "R1 Hydraulic Hoses (1SN)",
      standard: "EN 853 1SN / SAE 100 R1AT",
      construction: "Single high-tensile steel wire braid with oil & weather-resistant synthetic rubber",
      pressure: "Up to 3,250 PSI (225 Bar)",
      sizes: "1/4\", 3/8\", 1/2\", 5/8\", 3/4\", 1\", 1-1/4\", 1-1/2\"",
      applications: "Tractors, tipping trolleys, return lines, low-to-medium pressure hydraulic circuits, forklift auxiliary lines."
    },
    {
      name: "R2 Hydraulic Hoses (2SN)",
      standard: "EN 853 2SN / SAE 100 R2AT",
      construction: "Double high-tensile steel wire braids for heavy continuous industrial pulsation",
      pressure: "Up to 5,800 PSI (400 Bar)",
      sizes: "1/4\", 3/8\", 1/2\", 5/8\", 3/4\", 1\", 1-1/4\", 1-1/2\", 2\"",
      applications: "JCB 3DX backhoes, mobile cranes, civil construction equipment, hydrostatic drives, industrial power packs."
    },
    {
      name: "Multi-Spiral Hoses (4SP / 4SH / R15)",
      standard: "EN 856 4SP / 4SH & ISO 18752",
      construction: "Four and six alternating layers of spiraled high-tensile steel wire with heavy abrasion cover",
      pressure: "Up to 6,000+ PSI (420 Bar)",
      sizes: "3/8\", 1/2\", 3/4\", 1\", 1-1/4\", 1-1/2\", 2\"",
      applications: "Heavy mining excavators (Tata Hitachi, Komatsu, CAT), hydraulic rock breakers, steel mill rolling stands, high-surge mining equipment."
    }
  ];

  const fittingStandards = [
    {
      name: "BSP (British Standard Pipe)",
      thread: "BSPP (Parallel) & BSPT (Taper)",
      sealing: "60° Cone Seat & bonded seal washers",
      sizes: "1/4\" to 2\" (Straight, 45°, 90° bends)"
    },
    {
      name: "JIC 37° Flare (American SAE)",
      thread: "UNF / UN threads",
      sealing: "37° precision flared metal-to-metal seat",
      sizes: "Dash 04 (1/4\") to Dash 32 (2\")"
    },
    {
      name: "Metric DIN (German Standard)",
      thread: "Metric parallel threads",
      sealing: "24° Cone with O-ring (DKOL Light & DKOS Heavy)",
      sizes: "6L to 42L (Light) & 6S to 38S (Heavy)"
    },
    {
      name: "ORFS (O-Ring Face Seal)",
      thread: "UNF straight threads",
      sealing: "Flat face with captive elastomer O-ring (Zero Leakage)",
      sizes: "1/4\" through 1-1/2\""
    },
    {
      name: "SAE High-Pressure Flanges",
      thread: "Four-bolt split flange clamp",
      sealing: "Code 61 (3,000 PSI) & Code 62 (6,000 PSI)",
      sizes: "1/2\" to 2\" Flange heads"
    },
    {
      name: "Quick Release Couplings (QRC)",
      thread: "Poppet & Flat Face dry break",
      sealing: "Instant push-pull connection without fluid loss",
      sizes: "1/4\" to 1\" (Agriculture & Industrial)"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-[#F8FAFC] min-h-screen pt-28 pb-24">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-6 mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <Link href="/" className="hover:text-[#FF6A00] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#081C3A] font-bold">Services &amp; Hose Inventory</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-16">
          <div className="bg-[#081C3A] rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6A00]/20 rounded-full blur-[130px] -mr-32 -mt-32 pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-[#FF6A00] px-4 py-2 rounded-full mb-6 font-bold text-xs uppercase tracking-widest border border-white/10">
                <MapPin size={14} /> Workshop in Rajgangpur &bull; 24/7 On-Site Across Sundargarh
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                In-Stock <span className="text-[#FF6A00]">R1, R2 &amp; Spiral</span> Hydraulic Hoses &amp; Repair
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8">
                Bharat Hydraulics maintains extensive ready inventory of high-pressure R1 (1SN), R2 (2SN), and 4SP/4SH multi-spiral hoses in every diameter from <strong>1/4&quot; up to 2&quot;</strong>. Get while-you-wait 15-minute custom crimping at our Rajgangpur workshop or 24/7 on-site emergency van repair anywhere in Sundargarh.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+919178330536"
                  className="bg-[#FF6A00] hover:bg-[#e65f00] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_25px_rgba(255,106,0,0.4)] flex items-center justify-center gap-3 text-lg"
                >
                  <Phone size={20} /> Call For Immediate Hose Fabrication
                </a>
                <a
                  href="https://wa.me/919178330536?text=Hi%20Bharat%20Hydraulics,%20I%20need%20a%20hydraulic%20hose%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#1da851] text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-3 text-lg shadow-xl"
                >
                  <MessageSquare size={20} /> WhatsApp Hose Specifications
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* HOSE SPECIFICATIONS COMPARISON (R1, R2, Spiral) */}
        <section className="container mx-auto px-6 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#FF6A00] font-bold text-xs uppercase tracking-widest mb-2 block">Technical Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#081C3A]">Our Complete Hose Inventory</h2>
            <p className="text-gray-600 mt-2 text-base">
              Every hose assembly is cut, cleaned, calibrated with digital micrometer crimp specs, and pressure tested.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hoseInventory.map((item, idx) => (
              <div 
                key={idx} 
                className={`rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 ${
                  idx === 1 
                    ? "bg-[#081C3A] text-white border-transparent shadow-2xl relative" 
                    : "bg-white text-[#081C3A] border-gray-100 shadow-sm hover:shadow-xl hover:border-[#FF6A00]/40"
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      idx === 1 ? "bg-[#FF6A00] text-white" : "bg-[#0A2E6E]/10 text-[#0A2E6E]"
                    }`}>
                      {item.standard}
                    </span>
                  </div>
                  <h3 className={`text-2xl font-black mb-3 ${idx === 1 ? "text-white" : "text-[#081C3A]"}`}>
                    {item.name}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 ${idx === 1 ? "text-gray-300" : "text-gray-600"}`}>
                    {item.construction}
                  </p>

                  <div className={`p-4 rounded-2xl mb-6 space-y-2 text-xs font-semibold ${
                    idx === 1 ? "bg-white/10" : "bg-gray-50 border border-gray-100"
                  }`}>
                    <div className="flex justify-between">
                      <span className={idx === 1 ? "text-gray-300" : "text-gray-500"}>Max Working Pressure:</span>
                      <span className="font-bold text-[#FF6A00]">{item.pressure}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={idx === 1 ? "text-gray-300" : "text-gray-500"}>Ready Diameters:</span>
                      <span className={idx === 1 ? "text-white" : "text-[#081C3A]"}>{item.sizes}</span>
                    </div>
                  </div>

                  <div className="text-xs leading-relaxed mb-6">
                    <span className={`font-bold block mb-1 ${idx === 1 ? "text-gray-300" : "text-gray-500"}`}>Primary Applications:</span>
                    <span className={idx === 1 ? "text-gray-200" : "text-gray-700"}>{item.applications}</span>
                  </div>
                </div>

                <a 
                  href="tel:+919178330536"
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 ${
                    idx === 1 
                      ? "bg-[#FF6A00] hover:bg-[#e65f00] text-white shadow-lg" 
                      : "bg-[#081C3A] hover:bg-[#0A2E6E] text-white"
                  }`}
                >
                  <Phone size={14} /> Inquire About {item.name.split(" ")[0]} Hose
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FITTING STANDARDS CATALOG */}
        <section className="bg-white py-20 border-y border-gray-100 mb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-[#FF6A00] font-bold text-xs uppercase tracking-widest mb-2 block">Zero-Leak Guarantee</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#081C3A]">Complete Hydraulic Fittings in Every Size</h2>
              <p className="text-gray-600 mt-2 text-base">
                We stock matching male and female end couplings, swivels, flanges, and adapters across all global standards:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fittingStandards.map((fit, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-100 hover:border-[#FF6A00]/40 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#0A2E6E]/10 text-[#0A2E6E] flex items-center justify-center mb-4">
                    <Wrench size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-[#081C3A] mb-1">{fit.name}</h3>
                  <span className="text-xs font-semibold text-[#FF6A00] block mb-3">{fit.thread}</span>
                  
                  <div className="space-y-1.5 text-xs text-gray-600">
                    <div><strong>Sealing Type:</strong> {fit.sealing}</div>
                    <div><strong>Available Sizes:</strong> {fit.sizes}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORKSHOP & CRIMPER SHOWCASE */}
        <section className="container mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#FF6A00] font-bold text-xs uppercase tracking-widest mb-2 block">Our Factory Equipment</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#081C3A] mb-6">
                Why Precision Crimping Matters
              </h2>
              <p className="text-gray-600 leading-relaxed text-base mb-6">
                Over 70% of premature hydraulic hose failures occur not because the hose burst in the middle, but because the end collar was either under-crimped (leading to blow-off) or over-crimped (cutting the wire braid internally).
              </p>
              <p className="text-gray-600 leading-relaxed text-base mb-8">
                At Bharat Hydraulics in Rajgangpur, our technicians calculate exact crimp diameters for every hose and collar combination using calibrated micrometers. Every assembly is assembled to DIN EN 856 standards for 100% leak-proof reliability.
              </p>

              <div className="space-y-4">
                {[
                  { title: "High-Tonnage Hydraulic Crimping Press", desc: "Handles multi-spiral hoses up to 2\" with smooth, uniform radial compression." },
                  { title: "Skiving & Hose Cutting Machines", desc: "Clean, square cuts with internal/external skiving to ensure perfect collar seating." },
                  { title: "On-Site Hose Cleaning", desc: "High-pressure projectile cleaning to remove rubber debris before installation." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/10 text-[#FF6A00] flex items-center justify-center shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#081C3A] text-base mb-0.5">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <Image 
                src="/Workingmachine.webp" 
                alt="Precision high pressure hydraulic hose crimping in Rajgangpur workshop"
                fill
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A]/90 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-[#FF6A00] font-bold text-xs uppercase tracking-widest mb-1">Rajgangpur Workshop</span>
                <h4 className="text-2xl font-bold mb-2">15-Minute Custom Hose Assemblies</h4>
                <p className="text-gray-300 text-sm">Bring your damaged hose sample or machine specs for instant while-you-wait manufacturing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="container mx-auto px-6 max-w-4xl mb-20">
          <div className="text-center mb-12">
            <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-xs mb-2">FAQ</h2>
            <h3 className="text-3xl font-extrabold text-[#081C3A]">Hydraulic Hose Repair Questions</h3>
          </div>

          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-lg text-[#081C3A] mb-2">{faq.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-[#0A2E6E] to-[#081C3A] rounded-3xl p-8 md:p-12 text-white text-center shadow-xl">
            <h3 className="text-3xl font-extrabold mb-4">Need a Custom Hose Fabricated Immediately?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base">
              Visit our Rajgangpur workshop for 15-minute while-you-wait crimping, or call our mobile emergency van for dispatch anywhere in Sundargarh district.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919178330536"
                className="bg-[#FF6A00] hover:bg-[#e65f00] text-white px-8 py-3.5 rounded-md font-bold transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Phone size={18} /> Call +91 91783 30536
              </a>
              <Link
                href="/about"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-md font-bold transition-all border border-white/20 flex items-center justify-center gap-2"
              >
                Learn About Our Facility
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
