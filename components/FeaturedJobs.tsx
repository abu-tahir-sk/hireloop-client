import Link from "next/link";
import { MapPin, Briefcase, DollarSign, ArrowRight } from "lucide-react";
import SectionBadge from "./SectionBadge";

export interface JobItem {
  id: string;
  title: string;
  description: string;
  location: string;
  schedule: string;
  salary: string;
}

export const sampleJobs: JobItem[] = [
  {
    id: "1",
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    schedule: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: "2",
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    schedule: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: "3",
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    schedule: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: "4",
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    schedule: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: "5",
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    schedule: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: "6",
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    schedule: "Hybrid",
    salary: "€25–€40/hour",
  },
];

function Chip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex h-9 items-center gap-2 rounded-full bg-[#1F1F1F] px-4">
      <span className="flex h-4 w-4 items-center justify-center text-white">{icon}</span>
      <span className="font-inter-tight text-sm font-medium text-white">{text}</span>
    </div>
  );
}

export default function FeaturedJobs() {
  return (
    <section id="browse" className="relative z-10 pt-24 pb-[120px] lg:pt-[120px]">
      <div className="mx-auto w-full max-w-[1320px] px-4">
        {/* Header — badge + Manrope SemiBold 48 */}
        <SectionBadge label="Smart job discovery" />
        <h2 className="mx-auto mt-4 max-w-[520px] text-center font-sans text-3xl font-semibold leading-snug text-white sm:text-4xl lg:text-[48px] lg:leading-[55px]">
          The roles you&apos;d never find by searching
        </h2>

        {/* 3x2 grid, gap 24 */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {sampleJobs.map((job) => (
            <div
              key={job.id}
              className="flex flex-col gap-8 rounded-3xl bg-[#151516] p-7 transition-colors hover:bg-[#1a1a1c] sm:p-10 lg:h-[363px]"
            >
              {/* Title + description (gap 12) */}
              <div className="flex flex-col gap-3">
                <h3 className="font-inter text-2xl font-medium leading-[1.3] text-white sm:text-[32px] sm:leading-[42px]">
                  {job.title}
                </h3>
                <p className="font-inter text-base leading-[27px] text-white/60">
                  {job.description}
                </p>
              </div>

              {/* Meta chips (bg #1F1F1F, radius 24, icon 16, Inter Tight Medium 14) */}
              <div className="mt-auto flex flex-wrap gap-2">
                <Chip icon={<MapPin className="h-4 w-4" strokeWidth={1.5} />} text={job.location} />
                <Chip icon={<Briefcase className="h-4 w-4" strokeWidth={1.5} />} text={job.schedule} />
                <Chip icon={<DollarSign className="h-4 w-4" strokeWidth={1.5} />} text={job.salary} />
              </div>

              {/* Apply Now (Manrope SemiBold 16 + arrow 24) */}
              <Link
                href={`/jobs/${job.id}`}
                className="inline-flex items-center gap-1 font-sans text-base font-semibold text-white transition-colors hover:text-[#5C53FE]"
              >
                <span>Apply Now</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
            </div>
          ))}
        </div>

        {/* View all button (188x58, white, radius 12) */}
        <div className="mt-10 text-center">
          <Link
            href="/jobs"
            className="inline-flex h-[58px] items-center justify-center rounded-xl border border-[#090a15]/10 bg-white px-6 font-instrument text-lg font-medium text-[#0B0B14] transition-colors hover:bg-zinc-200"
          >
            View all job open
          </Link>
        </div>
      </div>
    </section>
  );
}
