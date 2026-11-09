import {
  Search,
  DollarSign,
  Building2,
  BookmarkCheck,
  MousePointerClick,
  FileText,
  Target,
  GraduationCap,
} from "lucide-react";

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
      icon: DollarSign,
    },
    {
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring.",
      icon: Building2,
    },
    {
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard.",
      icon: BookmarkCheck,
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
      icon: GraduationCap,
    },
  ];

  return (
    <section id="features" className="relative py-20 md:py-28 bg-[#010103] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Figma */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-wider text-[#5C53FE] mb-3">
            <span className="w-6 h-px bg-[#5C53FE]" />
            <span>features job</span>
            <span className="w-6 h-px bg-[#5C53FE]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Everything you need to succeed
          </h2>
        </div>

        {/* 8 Feature Cards Grid (4 cols x 2 rows) matching Figma */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0B0B14] border border-zinc-800/90 hover:border-zinc-700 transition-all flex flex-col justify-start"
              >
                <div className="w-10 h-10 rounded-xl bg-[#141422] border border-zinc-800 flex items-center justify-center text-zinc-300 mb-5">
                  <Icon className="w-5 h-5 text-zinc-300" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
