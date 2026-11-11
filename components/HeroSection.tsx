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
    <section className="relative z-10 pt-[100px] sm:pt-[140px] lg:pt-[176px]">
      <div className="mx-auto w-full max-w-[784px] px-4 sm:px-0">
        {/* Announcement badge — Figma Frame 2147234462/2147234446 */}
        <div className="flex items-center justify-center">
          {/* Flanking line (64px, gradient) */}
          <div className="hidden h-px w-16 shrink-0 bg-gradient-to-r from-[#010123] to-[#a8a8a8] sm:block" />

          <div className="flex h-12 items-center gap-4 rounded-full border border-[#a8a8a8]/30 bg-gradient-to-b from-[#474747] to-[#010102] px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)] sm:px-5">
            {/* fi_5517030 briefcase icon */}
            <svg
              className="h-6 w-6 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="badgeHandle" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#e6eeff" />
                  <stop offset="100%" stopColor="#bac8fa" />
                </linearGradient>
                <linearGradient id="badgeLock" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fee45a" />
                  <stop offset="100%" stopColor="#fea613" />
                </linearGradient>
                <linearGradient id="badgeBody" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#c86d36" />
                  <stop offset="100%" stopColor="#883f2e" />
                </linearGradient>
                <linearGradient id="badgeShade" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#883f2e" stopOpacity="0" />
                  <stop offset="100%" stopColor="#6d3326" />
                </linearGradient>
              </defs>
              {/* Handle */}
              <path
                d="M8.5 6.5V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5"
                stroke="url(#badgeHandle)"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              {/* Locks */}
              <rect x="7" y="7.5" width="3" height="3" rx="0.6" fill="url(#badgeLock)" />
              <rect x="14" y="7.5" width="3" height="3" rx="0.6" fill="url(#badgeLock)" />
              {/* Bag body */}
              <path
                d="M2.5 9.5a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3v-8Z"
                fill="url(#badgeBody)"
              />
              <path
                d="M2.5 12.5h19v5a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3v-5Z"
                fill="url(#badgeShade)"
              />
              <path
                d="M7 7.5V10M17 7.5V10"
                stroke="url(#badgeHandle)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <rect x="7" y="9" width="3" height="3.4" rx="0.6" fill="url(#badgeLock)" />
              <rect x="14" y="9" width="3" height="3.4" rx="0.6" fill="url(#badgeLock)" />
            </svg>

            {/* Space Mono 20 white */}
            <span className="font-mono text-sm text-white sm:text-lg lg:text-xl">
              50,000+ new jobs this month
            </span>
          </div>

          <div className="hidden h-px w-16 shrink-0 bg-gradient-to-l from-[#010123] to-[#a8a8a8] sm:block" />
        </div>

        {/* Title block (gap 16) */}
        <h1 className="mt-6 font-sans text-4xl font-bold leading-[1.15] text-white sm:mt-8 sm:text-5xl lg:text-[56px] lg:leading-[64px]">
          Find Your Dream Job Today
        </h1>
        <p className="mt-4 font-sans text-base leading-relaxed text-white/70 sm:text-xl lg:leading-[32px]">
          HireLoop connects top talent with world-class companies. Browse thousands
          of curated opportunities and land your next role — faster.
        </p>
      </div>

      {/* Search bar — Figma Frame 1 (784x64, #101010, border white/20, radius 16) */}
      <div className="mx-auto mt-10 w-full max-w-[784px] px-4 sm:px-0 sm:mt-12">
        <form
          onSubmit={handleSearch}
          className="flex h-16 items-center gap-4 rounded-2xl border border-white/20 bg-[#101010] pl-4 pr-2 transition-colors focus-within:border-white/30 sm:gap-6 sm:pl-5"
        >
          {/* Job title input (search icon 24 + Satoshi 16 white/80) */}
          <div className="flex min-w-0 flex-1 items-center gap-2">
            <Search className="h-6 w-6 shrink-0 text-white" strokeWidth={1.5} />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Job title, skill or company"
              className="w-full bg-transparent font-sans text-base text-white outline-none placeholder:text-white/80"
            />
          </div>

          {/* Divider (23px, white/20) */}
          <div className="hidden h-6 w-px shrink-0 bg-white/20 sm:block" />

          {/* Location input */}
          <div className="hidden min-w-0 flex-1 items-center gap-2 sm:flex">
            <MapPin className="h-6 w-6 shrink-0 text-white" strokeWidth={1.5} />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location or Remote"
              className="w-full bg-transparent font-sans text-base text-white outline-none placeholder:text-white/80"
            />
          </div>

          {/* Search button (48x48, #5C53FE, radius 12) */}
          <button
            type="submit"
            className="flex h-12 shrink-0 cursor-pointer items-center gap-2.5 rounded-xl bg-[#5C53FE] px-4 font-geist text-base font-medium text-white transition-colors hover:bg-[#4E45E8]"
          >
            <span>Search</span>
            <Search className="h-6 w-6" />
          </button>
        </form>

        {/* Trending row (gap 16, chips gap 8) */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <span className="font-sans text-base text-white/70">Trending Position</span>
          <div className="flex flex-wrap items-center gap-2">
            {trendingTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setTitle(tag)}
                className="flex h-[33px] cursor-pointer items-center rounded-full border border-white/10 bg-[#1A1A1B] px-3.5 font-sans text-sm text-white transition-colors hover:bg-[#252528]"
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
