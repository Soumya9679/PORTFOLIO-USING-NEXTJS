import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-container/[0.06] blur-[200px] pointer-events-none" />

      <div className="text-center relative z-10">
        {/* Glitch-style 404 */}
        <h1 className="text-[10rem] md:text-[14rem] font-extrabold font-display leading-none text-gradient-hero mb-4 tracking-tighter">
          404
        </h1>
        <p className="text-2xl font-display font-bold text-[#e1e2ed] mb-3">
          Page not found
        </p>
        <p className="text-[#958ea0] mb-10 max-w-sm mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved
          to another location.
        </p>
        <Link
          href="/"
          className="btn-gradient inline-flex items-center gap-2.5"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
