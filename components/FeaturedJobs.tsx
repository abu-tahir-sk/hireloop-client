import Image from "next/image";
import Link from "next/link";
import { MapPin, Briefcase, DollarSign, ArrowRight } from "lucide-react";
import SectionBadge from "./SectionBadge";

export interface JobItem {
  id: string;
  company: string;
  companyLogo: string;
  title: string;
  description: string;
  location: string;
  schedule: string;
  salary: string;
}

export const sampleJobs: JobItem[] = [
  {
    id: "1",
    company: "Meta",
    companyLogo: "/images/companies/meta.png",
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    schedule: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: "2",
    company: "Google",
    companyLogo: "/images/companies/google.png",
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    schedule: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: "3",
    company: "Apple",
    companyLogo: "/images/companies/apple.png",
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    schedule: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: "4",
    company: "Spotify",
    companyLogo: "/images/companies/spotify.png",
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    schedule: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: "5",
    company: "Amazon",
    companyLogo: "/images/companies/amazon.png",
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    schedule: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: "6",
    company: "Netflix",
    companyLogo: "/images/companies/netflix.png",
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
    <section id="browse" className="relative z-10 pt-20 pb-[120px] lg:pt-[120px]">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Header — badge + Manrope SemiBold 48 */}
        <SectionBadge label="Smart job discovery" />
        <h2 className="mx-auto mt-4 max-w-[560px] text-center font-sans text-3xl font-semibold leading-snug text-white sm:text-4xl lg:text-[48px] lg:leading-[55px]">
          The roles you&apos;d never find by searching
        </h2>

        {/* 3x2 grid, gap 24 */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {sampleJobs.map((job) => (
            <div
              key={job.id}
              className="group flex flex-col justify-between rounded-3xl border border-white/5 bg-[#151516] p-7 transition-all duration-200 hover:border-white/15 hover:bg-[#19191b] sm:p-9 lg:h-[390px]"
            >
              <div className="flex flex-col gap-6">
                {/* Company Header */}
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#202022] p-2 shadow-inner">
                    <Image
                      src={job.companyLogo}
                      alt={job.company}
                      width={28}
                      height={28}
                      className="max-h-7 max-w-7 object-contain"
                    />
                  </div>
                  <span className="font-sans text-sm font-medium text-white/60">
                    {job.company}
                  </span>
                </div>

                {/* Title + description */}
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-inter text-2xl font-medium leading-[1.3] text-white sm:text-[28px] sm:leading-[38px] group-hover:text-white">
                    {job.title}
                  </h3>
                  <p className="font-inter text-sm sm:text-base leading-[26px] text-white/60">
                    {job.description}
                  </p>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <Chip
                    icon={<MapPin className="h-4 w-4" strokeWidth={1.5} />}
                    text={job.location}
                  />
                  <Chip
                    icon={<Briefcase className="h-4 w-4" strokeWidth={1.5} />}
                    text={job.schedule}
                  />
                  <Chip
                    icon={<DollarSign className="h-4 w-4" strokeWidth={1.5} />}
                    text={job.salary}
                  />
                </div>
              </div>

              {/* Bottom apply CTA */}
              <div className="pt-6">
                <Link
                  href={`/jobs/${job.id}`}
                  className="inline-flex items-center gap-1.5 font-sans text-base font-semibold text-white transition-colors hover:text-[#5C53FE]"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View all button — Figma Buttons 188x58 */}
        <div className="mt-12 text-center">
          <Link
            href="/jobs"
            className="inline-flex h-[58px] items-center justify-center rounded-xl border border-[#090a15]/10 bg-white px-8 font-instrument text-lg font-medium text-[#0B0B14] shadow-lg shadow-white/5 transition-all hover:bg-zinc-200 hover:shadow-white/10"
          >
            View all job open
          </Link>
        </div>
      </div>
    </section>
  );
}
