import Image from "next/image";
import { Briefcase, Building2, Users, Award } from "lucide-react";

export default function DashboardStats() {
  const stats = [
    {
      value: "50K",
      label: "Active Jobs",
      icon: Briefcase,
    },
    {
      value: "12K",
      label: "Companies",
      icon: Building2,
    },
    {
      value: "2M",
      label: "Job Seekers",
      icon: Users,
    },
    {
      value: "97%",
      label: "Satisfication Rate",
      icon: Award,
    },
  ];

  return (
    <section className="relative pt-6 pb-20 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glowing Planet / Earth Horizon matching Figma Screenshot */}
        <div className="relative mx-auto w-full max-w-4xl h-[280px] sm:h-[360px] md:h-[440px] flex items-end justify-center overflow-hidden mb-6">
          {/* Top blue atmospheric glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#4285F4]/30 rounded-full blur-[90px] pointer-events-none -z-10" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#5C53FE]/40 rounded-full blur-[60px] pointer-events-none -z-10" />

          {/* Curved Globe Sphere */}
          <div className="relative w-[750px] sm:w-[950px] md:w-[1100px] h-[750px] sm:h-[950px] md:h-[1100px] rounded-full border border-blue-500/40 shadow-[0_0_80px_rgba(66,133,244,0.35)] overflow-hidden bg-[#020514] -mb-[550px] sm:-mb-[720px] md:-mb-[840px] flex items-start justify-center">
            {/* World Map Texture inside Globe */}
            <div className="relative w-full h-full opacity-60">
              <Image
                src="/images/earth_globe.png"
                alt="Global Talent Map"
                fill
                priority
                className="object-cover object-center filter saturate-150 contrast-125 brightness-110"
              />
              {/* Radial gradient mask for atmospheric rim lighting */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#010103]/60 to-[#010103]" />
              <div className="absolute inset-0 shadow-[inset_0_20px_60px_rgba(66,133,244,0.6)] rounded-full" />
            </div>
          </div>

          {/* Text Overlaid directly on Globe Horizon */}
          <div className="absolute top-2/3 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center px-4 z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug max-w-lg mx-auto drop-shadow-md">
              Assisting over <span className="text-[#5C53FE]">15,000</span> job seekers find their dream positions.
            </h2>
          </div>
        </div>

        {/* 4 Stat Cards Grid matching Figma Screenshot */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative p-6 sm:p-7 rounded-2xl bg-[#0B0B14] border border-zinc-800/90 hover:border-[#5C53FE]/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#141422] border border-zinc-800 flex items-center justify-center text-zinc-300 mb-6">
                  <Icon className="w-5 h-5 text-zinc-300" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-zinc-400 font-normal">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
