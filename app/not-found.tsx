import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#081C3A] flex flex-col items-center justify-center relative overflow-hidden text-center px-6">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#FF6A00]/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute -bottom-32 -right-32 w-[700px] h-[700px] bg-[#0A2E6E]/60 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-[pulse_12s_ease-in-out_infinite_reverse]" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8">
          <Image src="/logo2.png" alt="Bharat Hydraulics Logo" width={240} height={80} className="object-contain" />
        </div>
        
        <div className="bg-white/5 border border-white/10 p-6 rounded-full mb-8">
          <AlertTriangle size={64} className="text-[#FF6A00]" />
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-6">Page Not Found</h2>
        
        <p className="text-lg text-gray-400 max-w-md mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link href="/" className="bg-[#FF6A00] hover:bg-[#e65f00] text-white px-8 py-4 rounded-md font-bold transition-all shadow-lg shadow-[#FF6A00]/20 flex items-center justify-center gap-3 active:scale-95 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Return to Homepage
        </Link>
      </div>
    </div>
  );
}
