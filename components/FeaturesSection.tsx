import {
  Search,
  ChartPie,
  BarChart3,
  Bookmark,
  MousePointerClick,
  FileText,
  Target,
  TrendingUp,
} from "lucide-react";
import SectionBadge from "./SectionBadge";

export default function FeaturesSection() {
  const features = [
    {
      title: "Smart Search",
      description: "Find your ideal job with advanced filters.",
      icon: Search,
    },
    {
      title: "Salary Insights",
      description: "Get real salary data to negotiate confidently.",
      icon: ChartPie,
    },
    {
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring.",
      icon: BarChart3,
    },
    {
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard.",
      icon: Bookmark,
    },
    {
      title: "One-Click Apply",
      description: "Simplify your job applications for an easier process!",
      icon: MousePointerClick,
    },
    {
      title: "Resume Builder",
      description: "Create professional resumes with modern templates.",
      icon: FileText,
    },
    {
      title: "Skill-Based Matching",
      description: "Discover jobs that match your skills and experience.",
      icon: Target,
    },
    {
      title: "Career Growth Resources",
      description: "Boost your career with quick interview tips.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="company" className="bg-[#151516] py-24 lg:py-[120px]">
      <div className="mx-auto w-full max-w-[1320px] px-4">
        {/* Header — badge + Manrope SemiBold 48 */}
        <SectionBadge label="features job" />
        <h2 className="mx-auto mt-4 max-w-[500px] text-center font-sans text-3xl font-semibold leading-snug text-white sm:text-4xl lg:mt-6 lg:text-[48px] lg:leading-[55px]">
          Everything you need to succeed
        </h2>

        {/* 4x2 grid, col gap 24 / row gap 48 */}
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 sm:mt-16 lg:grid-cols-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex gap-6">
                {/* Icon tile 80x80 — gradient #010102→#313131, border white/10, radius 8 */}
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-b from-[#010102] to-[#313131]">
                  <Icon className="h-8 w-8 text-[#F7C2FF]" strokeWidth={2} />
                </div>
                {/* Text (gap 8) */}
                <div className="pt-1">
                  <h3 className="font-inter-tight text-lg font-medium leading-[25px] text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 font-inter-tight text-base leading-[26px] text-white/70">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
