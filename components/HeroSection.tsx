"use client";

import { useState } from "react";
import { Search, MapPin } from "lucide-react";

interface HeroSectionProps {
  onSearch?: (title: string, location: string) => void;
}

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(title, location);
    }
  };

  const trendingTags = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

  return (
    <section className="relative pt-10 pb-8 md:pt-14 md:pb-12 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Top Announcement Badge matching Figma Frame 2147234462 */}
        <div className="flex items-center justify-center gap-0 max-w-xl mx-auto mb-7">
          {/* Line 3 (64px fading line on the left) */}
          <div className="hidden sm:block w-16 h-px bg-gradient-to-r from-transparent to-[#A8A8A8]/60 shrink-0" />

          {/* Frame 2147234446 (Pill badge) */}
          <div className="relative flex items-center justify-center gap-2.5 px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-b from-[#474747]/90 via-[#262626]/90 to-[#010103] border border-[#A8A8A8]/30 shadow-[inset_0_1.5px_4px_rgba(255,255,255,0.18),0_4px_16px_rgba(0,0,0,0.6)] backdrop-blur-md">
            {/* fi_5517030 icon (Orange briefcase / job bag from Figma) */}
            <svg
              className="w-5 h-5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="bagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFA726" />
                  <stop offset="50%" stopColor="#FB8C00" />
                  <stop offset="100%" stopColor="#E65100" />
                </linearGradient>
                <linearGradient id="handleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFE082" />
                  <stop offset="100%" stopColor="#FB8C00" />
                </linearGradient>
              </defs>
              {/* Handle */}
              <path
                d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                stroke="url(#handleGrad)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Bag Body */}
              <rect
                x="2"
                y="6"
                width="20"
                height="15"
                rx="3"
                fill="url(#bagGrad)"
              />
              {/* Strap / Lock Accent */}
              <path
                d="M2 11h20M7 6v5M17 6v5M10.5 11h3v2.5h-3z"
                stroke="#FFE082"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              {/* Gold clasp */}
              <rect x="10.5" y="10" width="3" height="3" rx="0.5" fill="#FFF59D" />
            </svg>

            {/* Exact Typography: 50,000+ in Bold White, NEW JOBS THIS MONTH in Space Mono uppercase */}
            <span className="font-mono text-[11px] sm:text-xs tracking-wider uppercase text-white flex items-center gap-1.5 whitespace-nowrap">
              <strong className="font-bold text-white tracking-normal">50,000+</strong>
              <span className="text-zinc-300 font-normal">NEW JOBS THIS MONTH</span>
            </span>
          </div>

          {/* Line 2 (64px fading line on the right) */}
          <div className="hidden sm:block w-16 h-px bg-gradient-to-l from-transparent to-[#A8A8A8]/60 shrink-0" />
        </div>

        {/* Main Heading (H1) matching Figma */}
        <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight text-white mb-4 leading-tight">
          Find Your Dream Job Today
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl mx-auto text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mb-8">
          HireLoop connects top talent with world-class companies. Browse thousands
          of curated opportunities and land your next role — faster.
        </p>

        {/* Search Bar Container matching Figma */}
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSearch}
            className="p-1.5 pl-4 rounded-full bg-[#0B0B14] border border-zinc-800 shadow-2xl flex items-center justify-between gap-2 transition-all focus-within:border-zinc-700"
          >
            {/* Input 1: Job Title / Keyword */}
            <div className="flex items-center gap-2.5 flex-1 min-w-0">
              <Search className="w-4 h-4 text-zinc-500 shrink-0" />
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Job title, skill or company"
                className="w-full bg-transparent border-none text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none"
              />
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-zinc-800 shrink-0" />

            {/* Input 2: Location */}
            <div className="flex items-center gap-2.5 flex-1 min-w-0 pl-2">
              <MapPin className="w-4 h-4 text-zinc-500 shrink-0" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location or Remote"
                className="w-full bg-transparent border-none text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none"
              />
            </div>

            {/* Purple Search Button */}
            <button
              type="submit"
              className="w-10 h-10 rounded-full bg-[#5C53FE] hover:bg-[#4E45E8] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#5C53FE]/30 transition-all cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Trending Positions */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-zinc-500 font-normal">Trending Position</span>
            {trendingTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setTitle(tag)}
                className="px-3.5 py-1.5 rounded-full bg-[#1A1A1B] hover:bg-[#252528] border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer text-xs"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
