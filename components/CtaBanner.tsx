import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="relative pt-12 pb-24 md:pb-32 overflow-hidden text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curved Wireframe Grid Hemisphere matching Figma Screenshot */}
        <div className="relative mx-auto w-full max-w-4xl h-[360px] sm:h-[420px] rounded-t-full border-t border-x border-[#5C53FE]/40 overflow-hidden flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#0B0B24]/80 via-[#010103] to-[#010103] shadow-[0_-20px_80px_rgba(92,83,254,0.25)]">
          {/* Wireframe Grid SVG */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Curved Longitude & Latitude Grid Lines */}
              <ellipse cx="400" cy="400" rx="390" ry="360" stroke="#6661FF" strokeWidth="1" strokeDasharray="3 3" />
              <ellipse cx="400" cy="400" rx="320" ry="290" stroke="#6661FF" strokeWidth="1" strokeDasharray="3 3" />
              <ellipse cx="400" cy="400" rx="240" ry="210" stroke="#6661FF" strokeWidth="1" strokeDasharray="3 3" />
              <ellipse cx="400" cy="400" rx="160" ry="140" stroke="#6661FF" strokeWidth="1" strokeDasharray="3 3" />
              <ellipse cx="400" cy="400" rx="80" ry="70" stroke="#6661FF" strokeWidth="1" />
              {/* Radiating lines */}
              <line x1="400" y1="400" x2="400" y2="40" stroke="#6661FF" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="400" y1="400" x2="200" y2="90" stroke="#6661FF" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="400" y1="400" x2="600" y2="90" stroke="#6661FF" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="400" y1="400" x2="70" y2="220" stroke="#6661FF" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="400" y1="400" x2="730" y2="220" stroke="#6661FF" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* Atmospheric blue/purple glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#5C53FE]/30 rounded-full blur-[80px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 leading-snug">
              Your next role is already looking for you
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mb-8 max-w-md mx-auto">
              Build a profile in three minutes. The matches start arriving tomorrow morning.
            </p>

            {/* Buttons matching Figma */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/signup"
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-black bg-white hover:bg-zinc-200 transition-all shadow-lg cursor-pointer"
              >
                Create a free account
              </Link>
              <Link
                href="#pricing"
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#0B0B14] hover:bg-[#191938] border border-zinc-800 transition-all cursor-pointer"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
