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
    <section className="relative z-10 pt-[160px] sm:pt-[240px] lg:pt-[320px]">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-[620px] text-center font-sans text-2xl font-medium leading-snug text-white/70 sm:text-3xl lg:text-[40px] lg:leading-[52px]">
          Assisting over{" "}
          <span className="font-semibold text-white">15,000 job seekers</span>{" "}
          find their dream positions.
        </h2>
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex h-auto min-h-[220px] flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-[#010102] via-[#121212] to-[#252525] p-6 lg:h-[254px] lg:p-7 shadow-xl shadow-black/40 transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex h-6 w-6 items-center justify-center">
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="font-jakarta text-4xl font-semibold leading-none tracking-tight text-white sm:text-5xl lg:text-[56px]">
                    {stat.value}
                  </div>
                  <div className="mt-4 font-inter-tight text-sm sm:text-base lg:text-lg leading-normal text-white/80">
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