"use client";

import Link from "next/link";
import { MapPin, Briefcase, DollarSign, ArrowRight } from "lucide-react";

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

export default function FeaturedJobs() {
  return (
    <section id="browse" className="relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching Figma Screenshot */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-wider text-[#5C53FE] mb-3">
            <span className="w-6 h-px bg-[#5C53FE]" />
            <span>Smart job discovery</span>
            <span className="w-6 h-px bg-[#5C53FE]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            The roles you&apos;d never find by searching
          </h2>
        </div>

        {/* 6 Job Cards Grid (3 cols x 2 rows) matching Figma */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sampleJobs.map((job) => (
            <div
              key={job.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#0B0B14] border border-zinc-800/90 hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-2.5">
                  {job.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {job.description}
                </p>

                {/* Job Details Meta */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 mb-6">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{job.schedule}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{job.salary}</span>
                  </div>
                </div>
              </div>

              {/* Apply Now Action matching Figma */}
              <div className="pt-4 border-t border-zinc-900">
                <Link
                  href={`/jobs/${job.id}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white hover:text-[#5C53FE] transition-colors"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View all job open - Solid White Pill Button with Black Text */}
        <div className="text-center">
          <Link
            href="/jobs"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-black bg-white hover:bg-zinc-200 transition-all shadow-lg cursor-pointer"
          >
            View all job open
          </Link>
        </div>
      </div>
    </section>
  );
}
