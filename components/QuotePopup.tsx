"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, CheckCircle2, Send, Copy, ExternalLink, HelpCircle, FileText } from "lucide-react";

export const openQuoteModal = (defaultService?: string) => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-quote-modal", {
        detail: { service: defaultService || "" },
      })
    );
  }
};

export default function QuotePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Hydraulic Hose Repair & Replacement",
    details: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const targetEmail = "info@bharathydraulics.site";

  // Automatic delayed popup after 5 seconds on first visit of session
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("bharat_quote_popup_seen");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("bharat_quote_popup_seen", "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for manual trigger from buttons across the site
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ service?: string }>;
      if (customEvent.detail?.service) {
        setFormData((prev) => ({ ...prev, service: customEvent.detail.service || prev.service }));
      }
      setSubmitted(false);
      setIsOpen(true);
    };

    window.addEventListener("open-quote-modal", handleOpen);
    return () => window.removeEventListener("open-quote-modal", handleOpen);
  }, []);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.details.trim()) {
      setErrorMessage("Please complete your name, email, and requirements.");
      return;
    }

    setErrorMessage("");

    const subject = encodeURIComponent(`Quote / Query Request: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(
      `NEW QUOTE / QUERY REQUEST\n` +
      `------------------------------------\n` +
      `Name / Company : ${formData.name}\n` +
      `Sender Email   : ${formData.email}\n` +
      `Requirement    : ${formData.service}\n\n` +
      `Details / Specifications:\n` +
      `${formData.details}\n\n` +
      `------------------------------------\n` +
      `Primary Email: ${targetEmail}\n` +
      `Submitted via Bharat Hydraulics Portal (bharathydraulics.site)`
    );

    const mailtoUrl = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

    // Open user's default email client
    window.location.href = mailtoUrl;

    setSubmitted(true);
  };

  const copyDetailsToClipboard = () => {
    const textToCopy = 
      `Quote / Query for ${targetEmail}\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Requirement: ${formData.service}\n` +
      `Details: ${formData.details}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const openGmailWeb = () => {
    const subject = encodeURIComponent(`Quote / Query Request: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(
      `NEW QUOTE / QUERY REQUEST\n` +
      `------------------------------------\n` +
      `Name / Company : ${formData.name}\n` +
      `Sender Email   : ${formData.email}\n` +
      `Requirement    : ${formData.service}\n\n` +
      `Details / Specifications:\n` +
      `${formData.details}\n\n` +
      `------------------------------------\n` +
      `Primary Email: ${targetEmail}\n` +
      `Submitted via Bharat Hydraulics Portal`
    );
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${subject}&body=${body}`, "_blank");
  };

  const resetAndClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        service: "Hydraulic Hose Repair & Replacement",
        details: "",
      });
      setErrorMessage("");
    }, 300);
  };

  return (
    <>
      {/* Floating Action Button (Always available for instant quote / query) */}
      <button
        type="button"
        onClick={() => {
          setSubmitted(false);
          setIsOpen(true);
        }}
        className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[100] bg-gradient-to-r from-[#FF6A00] to-[#e65f00] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-[0_8px_30px_rgba(255,106,0,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 group border-2 border-white/25 cursor-pointer"
        aria-label="Request a Quote or Query"
      >
        <FileText className="w-5 h-5 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline-block font-bold text-sm tracking-wide">
          Request a Quote
        </span>
        <span className="hidden sm:inline-block absolute -top-9 right-0 bg-[#081C3A] text-white text-[11px] font-semibold py-1 px-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
          Online Quote &amp; Query Desk
        </span>
      </button>

      {/* Quote / Query Modal Popup */}
      <AnimatePresence>
        {isOpen && (
          <div 
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 bg-[#081C3A]/75 backdrop-blur-md overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={resetAndClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl max-w-xl w-full relative overflow-hidden border border-gray-100 my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Accent Strip */}
              <div className="h-2 w-full bg-gradient-to-r from-[#FF6A00] via-[#FF8C33] to-[#0A2E6E]" />

              {/* Close Button */}
              <button
                type="button"
                onClick={resetAndClose}
                className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-[#081C3A] hover:bg-gray-100 transition-colors z-20"
                aria-label="Close modal"
              >
                <X size={22} />
              </button>

              <div className="p-6 sm:p-8">
                {!submitted ? (
                  <>
                    {/* Header */}
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6A00]/10 text-[#FF6A00] font-bold text-xs uppercase tracking-wider mb-2">
                        <Mail size={13} /> Official Quote &amp; Query Desk
                      </div>
                      <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#081C3A] tracking-tight">
                        Raise a Quote or Query
                      </h2>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                        Need custom hose crimping, spares, or on-site repair? Submit below to dispatch your request directly to our primary engineering inbox:
                        <span className="block font-semibold text-[#081C3A] mt-0.5">{targetEmail}</span>
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-xl text-xs font-semibold border border-red-200">
                        {errorMessage}
                      </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Your Name / Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma / Vedanta Contractor"
                          className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-[#081C3A] outline-none focus:border-[#FF6A00] focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Your Contact Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. name@company.com"
                          className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-[#081C3A] outline-none focus:border-[#FF6A00] focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Requirement / Inquiry Type
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-[#081C3A] outline-none focus:border-[#FF6A00] focus:bg-white transition-colors"
                        >
                          <option value="Hydraulic Hose Repair & Replacement">Hydraulic Hose Repair &amp; Replacement</option>
                          <option value="Custom Hose Assembly (R1, R2, 4SP, 4SH)">Custom Hose Assembly (R1, R2, 4SP, 4SH)</option>
                          <option value="Hydraulic Fittings & Adapters (BSP, JIC, ORFS, DIN)">Hydraulic Fittings &amp; Adapters (BSP, JIC, ORFS, DIN)</option>
                          <option value="Emergency Breakdown On-Site Support">Emergency Breakdown On-Site Support</option>
                          <option value="Bulk Industrial & OEM Spares Supply">Bulk Industrial &amp; OEM Spares Supply</option>
                          <option value="General Technical Query">General Technical Query</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Details &amp; Specifications *
                        </label>
                        <textarea
                          required
                          rows={3}
                          value={formData.details}
                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                          placeholder="Provide details such as hose diameter, working pressure, machine model, or required quantity..."
                          className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-[#081C3A] outline-none focus:border-[#FF6A00] focus:bg-white transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#FF6A00] to-[#e65f00] hover:from-[#e65f00] hover:to-[#cc5200] text-white py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-[#FF6A00]/25 transition-all flex items-center justify-center gap-2 transform active:scale-[0.99] cursor-pointer"
                      >
                        <Send size={16} /> Send to {targetEmail}
                      </button>

                      <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 text-center">
                        <HelpCircle size={13} className="text-[#FF6A00]" />
                        <span>All quotes are delivered exclusively to <strong className="text-gray-700 font-semibold">{targetEmail}</strong></span>
                      </div>
                    </form>
                  </>
                ) : (
                  /* Success / Submission Confirmation State */
                  <div className="text-center py-4">
                    <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-200">
                      <CheckCircle2 size={36} />
                    </div>

                    <h3 className="text-2xl font-extrabold text-[#081C3A] mb-2">Quote Request Prepared!</h3>
                    <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed mb-6">
                      Your quote request has been formatted for our official desk at <strong className="text-[#081C3A]">{targetEmail}</strong>. Your default email app was triggered. If it didn&apos;t open automatically, use the direct options below:
                    </p>

                    <div className="bg-[#F8FAFC] rounded-2xl p-4 text-left border border-gray-200 mb-6 text-xs text-gray-700 space-y-1">
                      <div><strong>To:</strong> {targetEmail}</div>
                      <div><strong>From:</strong> {formData.name} ({formData.email})</div>
                      <div><strong>Requirement:</strong> {formData.service}</div>
                      <div className="pt-2 text-gray-500 line-clamp-2 italic border-t border-gray-100">&ldquo;{formData.details}&rdquo;</div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                      <button
                        type="button"
                        onClick={openGmailWeb}
                        className="bg-[#081C3A] hover:bg-[#0A2E6E] text-white px-5 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <ExternalLink size={14} /> Open in Gmail Web
                      </button>
                      <button
                        type="button"
                        onClick={copyDetailsToClipboard}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <Copy size={14} /> {copied ? "Copied to Clipboard!" : "Copy Details"}
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={resetAndClose}
                      className="text-xs font-bold text-gray-500 hover:text-[#081C3A] transition-colors underline cursor-pointer"
                    >
                      Done &amp; Close Window
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
