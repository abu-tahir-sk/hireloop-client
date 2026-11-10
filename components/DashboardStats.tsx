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
    <section className="relative pt-4 pb-20 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glowing Planet / Earth Horizon matching Figma Screenshot */}
        <div className="relative mx-auto w-full max-w-4xl h-[320px] sm:h-[400px] md:h-[480px] flex items-end justify-center overflow-hidden mb-6">
          {/* Background Stars / Space Dust */}
          <div className="absolute inset-0 pointer-events-none -z-10">
            <span className="absolute top-6 left-1/4 w-1 h-1 bg-white/70 rounded-full blur-[0.5px]" />
            <span className="absolute top-16 left-1/3 w-1.5 h-1.5 bg-blue-300/80 rounded-full blur-[0.5px]" />
            <span className="absolute top-10 right-1/4 w-1 h-1 bg-white/80 rounded-full" />
            <span className="absolute top-20 right-1/3 w-1.5 h-1.5 bg-blue-200/90 rounded-full blur-[0.5px]" />
            <span className="absolute top-8 left-1/2 w-0.5 h-0.5 bg-white/60 rounded-full" />
            <span className="absolute top-24 left-1/5 w-1 h-1 bg-blue-400/60 rounded-full" />
            <span className="absolute top-14 right-1/5 w-1 h-1 bg-white/70 rounded-full" />
          </div>

          {/* Top blue atmospheric glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-[#4285F4]/35 rounded-full blur-[90px] pointer-events-none -z-10" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[450px] h-[220px] bg-[#5C53FE]/45 rounded-full blur-[60px] pointer-events-none -z-10" />

          {/* Curved Globe Sphere */}
          <div className="relative w-[850px] sm:w-[1050px] md:w-[1250px] h-[850px] sm:h-[1050px] md:h-[1250px] rounded-full border border-blue-400/50 shadow-[0_0_90px_rgba(66,133,244,0.45)] overflow-hidden bg-[#020514] -mb-[640px] sm:-mb-[810px] md:-mb-[960px] flex items-start justify-center">
            {/* World Map Texture inside Globe */}
            <div className="relative w-full h-full opacity-65">
              <Image
                src="/images/earth_globe.png"
                alt="Global Talent Map"
                fill
                priority
                className="object-cover object-top filter saturate-150 contrast-125 brightness-110"
              />
              {/* Atmospheric rim lighting overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#010103]/60 to-[#010103]" />
              <div className="absolute inset-0 shadow-[inset_0_25px_80px_rgba(66,133,244,0.7)] rounded-full" />
            </div>
          </div>

          {/* Text Overlaid directly on Globe Horizon matching Figma Screenshot */}
          <div className="absolute top-[68%] -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center px-4 z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug max-w-lg mx-auto drop-shadow-md">
              Assisting over <span className="font-extrabold text-white">15,000</span> job seekers find their dream positions.
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
                className="relative p-6 sm:p-7 rounded-2xl bg-[#0B0B14] border border-zinc-800/90 hover:border-zinc-700 transition-all duration-300"
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
