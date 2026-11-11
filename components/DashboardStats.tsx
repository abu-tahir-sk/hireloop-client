import { Search, BarChart3, UserSearch, Star } from "lucide-react";

export default function DashboardStats() {
  const stats = [
    {
      value: "50K",
      label: "Active Jobs",
      icon: Search,
    },
    {
      value: "12K",
      label: "Companies",
      icon: BarChart3,
    },
    {
      value: "2M",
      label: "Job Seekers",
      icon: UserSearch,
    },
    {
      value: "97%",
      label: "Satisfication Rate",
      icon: Star,
    },
  ];

  return (
    <section className="relative z-10 pt-[200px] sm:pt-[300px] lg:pt-[452px]">
      <div className="mx-auto w-full max-w-[1320px] px-4">
        {/* Heading — Instrument Sans Medium 40, white/70 (Figma Frame 2147234448) */}
        <h2 className="mx-auto max-w-[600px] text-center font-instrument text-2xl font-medium leading-snug text-white/70 sm:text-3xl lg:text-[40px] lg:leading-[52px]">
          Assisting over 15,000 job seekers find their dream positions.
        </h2>

        {/* 4 stat cards — gradient #010102→#313131, border white/10, radius 16, 312x254 */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex h-auto min-h-[220px] flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-[#010102] to-[#313131] p-6 lg:h-[254px] lg:p-7"
              >
                {/* Icon 24, white */}
                <div className="flex h-6 w-6 items-center justify-center">
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                </div>

                <div>
                  <div className="font-jakarta text-4xl font-semibold leading-none text-white sm:text-5xl lg:text-[56px]">
                    {stat.value}
                  </div>
                  <div className="mt-4 font-inter-tight text-base leading-[30px] text-white sm:text-lg">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
