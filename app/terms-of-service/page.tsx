import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Mail, MapPin, ChevronRight, ArrowLeft, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Bharat Hydraulics Rajgangpur",
  description: "Terms and conditions governing hydraulic hose fabrication, crimping, on-site services, and commercial quotations provided by Bharat Hydraulics.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = "October 21, 2026";

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-28 pb-24 text-gray-800">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-6 mb-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <Link href="/" className="hover:text-[#FF6A00] transition-colors flex items-center gap-1">
            <ArrowLeft size={14} /> Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-[#081C3A] font-bold">Terms of Service</span>
        </nav>
      </div>

      {/* Header Banner */}
      <section className="container mx-auto px-6 mb-12">
        <div className="bg-[#081C3A] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#FF6A00]/15 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-[#FF6A00] px-4 py-1.5 rounded-full mb-6 font-bold text-xs uppercase tracking-widest border border-white/10">
              <FileText size={14} /> Commercial &amp; Operational Agreement
            </div>
            <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              These Terms of Service govern your use of the Bharat Hydraulics website, requests for quotation, and engagement of our industrial hydraulic assembly, crimping, and repair services.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400 mt-6 font-medium">
              <Clock size={14} className="text-[#FF6A00]" />
              <span>Effective &amp; Last Updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Body */}
      <main className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-10 leading-relaxed text-sm sm:text-base text-gray-700">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#081C3A] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#FF6A00]"></span> 1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website (<a href="https://www.bharathydraulics.site" className="text-[#FF6A00] underline">bharathydraulics.site</a>), submitting a quote or query, or purchasing hydraulic products and workshop services from Bharat Hydraulics, you agree to be bound by these Terms of Service. If you are acting on behalf of a corporation, contractor, or commercial entity, you represent that you possess the authority to bind that entity to these terms.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#081C3A] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#FF6A00]"></span> 2. Services &amp; Workshop Operations
            </h2>
            <p>
              Bharat Hydraulics provides specialized heavy industrial hydraulic engineering services, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>High-pressure hydraulic hose crimping and custom assemblies (1SN, 2SN, 4SP, 4SH multi-spiral lines).</li>
              <li>Stocking and distribution of matching BSP, JIC, Metric DIN, ORFS, and SAE Code 61/62 flange couplings.</li>
              <li>Emergency on-site breakdown van dispatch across Sundargarh District, Rourkela, Jharsuguda, and Keonjhar.</li>
              <li>Hydraulic cylinder overhauls, seal kit replacements, and pressure integrity testing.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#081C3A] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#FF6A00]"></span> 3. Quotations &amp; Technical Accuracy
            </h2>
            <p>
              Estimates and quotations provided via our online form or email (<a href="mailto:info@bharathydraulics.site" className="text-[#FF6A00] underline">info@bharathydraulics.site</a>) are prepared based on the information and measurements supplied by the customer.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Customer Responsibility for Specifications:</strong> Customers are responsible for verifying thread standards, cut lengths, maximum continuous working pressure, peak impulse ratings, and chemical compatibility of fluids before order finalization.</li>
              <li><strong>Sample Verification:</strong> For critical or custom applications, customers are encouraged to present the damaged hose sample or OEM technical drawings at our Rajgangpur workshop.</li>
              <li><strong>Price Validity:</strong> Due to global steel and synthetic rubber market fluctuations, written quotes are valid for thirty (30) days from issuance unless otherwise specified.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#081C3A] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#FF6A00]"></span> 4. Manufacturing Quality &amp; Warranty
            </h2>
            <p>
              Every hose assembly fabricated at Bharat Hydraulics is crimped to calibrated micrometer dimensions following DIN EN 853, 856, and 857 standards.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Workmanship Guarantee:</strong> We warrant that all crimped assemblies leaving our workshop are free from assembly defects and collar slippage under their designated working pressure.</li>
              <li><strong>Exclusions from Warranty:</strong> Warranty claims are void if failure is caused by external abrasion without adequate protective sleeving, operation beyond rated maximum burst/working pressures, improper minimum bend radius, fluid temperature extremes exceeding manufacturer guidelines, or mechanical pulling/twisting during installation.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#081C3A] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#FF6A00]"></span> 5. Limitation of Liability
            </h2>
            <p>
              High-pressure hydraulic circuits involve inherent mechanical stresses. To the maximum extent permitted under applicable law:
            </p>
            <p className="mt-2">
              Bharat Hydraulics shall not be liable for any indirect, consequential, punitive, or downtime losses (including lost plant revenue, production halts, or third-party crane/excavator rental charges) arising from equipment breakdown or delay in component procurement. Our total aggregate liability for any proven claim shall strictly not exceed the invoice amount paid for the specific component or repair service in question.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#081C3A] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#FF6A00]"></span> 6. Intellectual Property
            </h2>
            <p>
              All trademarks, workshop photographs, logos, engineering descriptions, and digital content published on this website are the intellectual property of Bharat Hydraulics. Unauthorized reproduction, scraping, or commercial misuse without written consent is prohibited.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#081C3A] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#FF6A00]"></span> 7. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms of Service and any commercial contracts entered into with Bharat Hydraulics shall be governed by and construed in accordance with the laws of the Republic of India. Any legal dispute, arbitration, or proceeding shall be subject to the exclusive jurisdiction of the competent courts located in Sundargarh District, Odisha, India.
            </p>
          </section>

          {/* Section 8 */}
          <section className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-gray-200">
            <h2 className="text-xl font-bold text-[#081C3A] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#FF6A00]"></span> 8. Official Contact Details
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              For commercial agreements, warranty verifications, or technical documentation, please contact our administrative desk:
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#FF6A00]" />
                <span>Primary Email: <a href="mailto:info@bharathydraulics.site" className="text-[#081C3A] font-semibold underline hover:text-[#FF6A00]">info@bharathydraulics.site</a></span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-[#FF6A00]" />
                <span>Workshop: Industrial Estate, Rajgangpur, Sundargarh, Odisha - 770017</span>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
