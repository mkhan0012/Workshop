import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Mail, MapPin, ChevronRight, ArrowLeft, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Bharat Hydraulics Rajgangpur",
  description: "Official Privacy Policy for Bharat Hydraulics. Understand how we collect, handle, and protect your commercial inquiries and technical data.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
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
          <span className="text-[#081C3A] font-bold">Privacy Policy</span>
        </nav>
      </div>

      {/* Header Banner */}
      <section className="container mx-auto px-6 mb-12">
        <div className="bg-[#081C3A] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#FF6A00]/15 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-[#FF6A00] px-4 py-1.5 rounded-full mb-6 font-bold text-xs uppercase tracking-widest border border-white/10">
              <ShieldCheck size={14} /> Legal &amp; Data Protection
            </div>
            <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Bharat Hydraulics (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your commercial information, technical specifications, and personal data. This policy details our data protection practices for our website and workshop services.
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
              <span className="w-2 h-2 rounded-sm bg-[#FF6A00]"></span> 1. Company Information &amp; Scope
            </h2>
            <p>
              Bharat Hydraulics operates an industrial engineering workshop located at Industrial Estate, Rajgangpur, Sundargarh District, Odisha 770017, India. We supply custom hydraulic hose assemblies, high-pressure crimping, industrial fittings, and emergency on-site breakdown support.
            </p>
            <p className="mt-2">
              This Privacy Policy applies to information collected through our official website (<a href="https://www.bharathydraulics.site" className="text-[#FF6A00] underline">bharathydraulics.site</a>), online quote requests, email correspondence (<a href="mailto:info@bharathydraulics.site" className="text-[#FF6A00] underline">info@bharathydraulics.site</a>), and direct commercial inquiries.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#081C3A] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#FF6A00]"></span> 2. Information We Collect
            </h2>
            <p>We only collect information necessary to fulfill quotes, deliver hydraulic services, and respond to commercial inquiries. This includes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Contact Details:</strong> Your full name, company or contractor name, and official email address.</li>
              <li><strong>Technical &amp; Equipment Specifications:</strong> Machine model (e.g. excavator, tipper, crane, power plant line), hose dimensions (inside diameter, 1SN/2SN/4SP/4SH), working pressure requirements, thread standards (BSP, JIC, DIN, ORFS), and breakdown descriptions.</li>
              <li><strong>Technical Communications:</strong> Content of your quotes, emails, and technical inquiries sent to our engineering team.</li>
              <li><strong>Automated Website Data:</strong> Non-personally identifiable technical analytics (browser type, device type, approximate geographic region, page view performance) collected anonymously to maintain website availability.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#081C3A] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#FF6A00]"></span> 3. How We Use Your Information
            </h2>
            <p>We use the collected information exclusively for legitimate business purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Generating accurate price quotes and technical feasibility assessments for hydraulic assemblies.</li>
              <li>Coordinating rapid on-site technician and emergency van dispatch across Rajgangpur, Rourkela, Jharsuguda, Keonjhar, and Sundargarh district.</li>
              <li>Providing order status, invoice generation, and post-repair technical support.</li>
              <li>Ensuring compliance with Indian safety and commercial trade regulations.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#081C3A] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#FF6A00]"></span> 4. Confidentiality &amp; Non-Disclosure
            </h2>
            <p>
              Bharat Hydraulics maintains strict confidentiality over all client information and proprietary engineering data:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Zero Third-Party Marketing Sales:</strong> We do not sell, rent, lease, or monetize your contact details or engineering data to any marketing brokers or third parties under any circumstances.</li>
              <li><strong>Proprietary Drawings &amp; Specs:</strong> Custom CAD files, hydraulic schematics, and equipment data provided to our workshop are kept strictly confidential within our engineering department.</li>
              <li><strong>Lawful Disclosures:</strong> Information may only be disclosed if mandatory under Indian law, court order, or governmental audit.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#081C3A] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#FF6A00]"></span> 5. Cookies &amp; Web Analytics
            </h2>
            <p>
              Our website uses minimal, standard HTTP cookies and Google Analytics to monitor server uptime and popular product reference pages. These cookies do not store financial credentials or sensitive personal identities. You can configure your browser settings to reject cookies at any time without impacting your ability to browse our services or contact our team.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#081C3A] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#FF6A00]"></span> 6. Compliance with Indian Legal Standards
            </h2>
            <p>
              We operate in full accordance with the laws of the Republic of India, including the <em>Information Technology Act, 2000</em>, the <em>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</em>, and the <em>Digital Personal Data Protection Act, 2023 (DPDP Act)</em>.
            </p>
            <p className="mt-2">
              You retain the right to review, update, or request the deletion of your contact records from our commercial directory at any time by contacting us directly.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-gray-200">
            <h2 className="text-xl font-bold text-[#081C3A] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#FF6A00]"></span> 7. Contact Details &amp; Grievance Redressal
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              For any privacy inquiries, data deletion requests, or questions regarding this policy, please reach out to our primary desk:
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
