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
    <section className="relative z-10 pt-[50px] sm:pt-[70px] lg:pt-[90px]">
      <div className="mx-auto w-full  px-4 sm:px-0 text-center">
        {/* Announcement badge — Figma Frame 2147234462/2147234446 */}
        <div className="flex items-center justify-center gap-0">
          {/* Left flanking line (64px, gradient) */}
          <div className="h-px w-10 sm:w-16 shrink-0 bg-gradient-to-r from-transparent via-[#a8a8a8]/40 to-[#a8a8a8]/70" />

          {/* Badge Pill (419x48 in Figma) */}
          <div className="flex h-12 items-center gap-3 sm:gap-4 rounded-full border border-[#a8a8a8]/30 bg-gradient-to-b from-[#3a3a3a] via-[#1a1a1a] to-[#010102] px-4 sm:px-6 shadow-[inset_0_0_8px_rgba(0,0,0,0.5)]">
            {/* 3D Orange Briefcase Icon (Flaticon fi_5517030 matching Figma) */}
            <svg
              className="h-6 w-6 shrink-0 drop-shadow-sm"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Silver Handle Gradient */}
                <linearGradient id="silverHandle" x1="0" y1="0" x2="0" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="40%" stopColor="#DCE4FC" />
                  <stop offset="100%" stopColor="#8A9FCF" />
                </linearGradient>

                {/* Orange Leather Body Gradient */}
                <linearGradient id="leatherBody" x1="0" y1="0" x2="0" y2="100%">
                  <stop offset="0%" stopColor="#DF7B3A" />
                  <stop offset="50%" stopColor="#C45A1E" />
                  <stop offset="100%" stopColor="#8F3711" />
                </linearGradient>

                {/* Lower Shadow Gradient */}
                <linearGradient id="leatherShadow" x1="0" y1="0" x2="0" y2="100%">
                  <stop offset="0%" stopColor="#7E2E0D" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#551D06" />
                </linearGradient>

                {/* Gold Hardware Gradient */}
                <linearGradient id="goldHw" x1="0" y1="0" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFE066" />
                  <stop offset="60%" stopColor="#F5A623" />
                  <stop offset="100%" stopColor="#C87A00" />
                </linearGradient>

                {/* Dark Leather Straps */}
                <linearGradient id="strapColor" x1="0" y1="0" x2="0" y2="100%">
                  <stop offset="0%" stopColor="#8A3412" />
                  <stop offset="100%" stopColor="#551C06" />
                </linearGradient>
              </defs>

              {/* Metal Handle */}
              <path
                d="M8.5 6V4C8.5 2.89543 9.39543 2 10.5 2H13.5C14.6046 2 15.5 2.89543 15.5 4V6"
                stroke="url(#silverHandle)"
                strokeWidth="2.2"
                strokeLinecap="round"
              />

              {/* Main Bag Body */}
              <rect
                x="2"
                y="6"
                width="20"
                height="15"
                rx="3"
                fill="url(#leatherBody)"
              />

              {/* Bottom Depth Shadow */}
              <path
                d="M2 13.5H22V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V13.5Z"
                fill="url(#leatherShadow)"
              />

              {/* Leather Straps Left & Right */}
              <rect x="6.5" y="6" width="2.5" height="15" fill="url(#strapColor)" />
              <rect x="15" y="6" width="2.5" height="15" fill="url(#strapColor)" />

              {/* Gold Buckles on Straps */}
              <rect x="6" y="9.5" width="3.5" height="4" rx="0.8" fill="url(#goldHw)" />
              <rect x="14.5" y="9.5" width="3.5" height="4" rx="0.8" fill="url(#goldHw)" />

              {/* Central Gold Lock */}
              <rect x="10.5" y="7.5" width="3" height="3.5" rx="0.75" fill="url(#goldHw)" />
              <circle cx="12" cy="9.2" r="0.6" fill="#4B2002" />
            </svg>

            {/* Space Mono: 50,000+ (Bold, white) NEW JOBS THIS MONTH (Regular, uppercase, 50% white) */}
            <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[13px] sm:text-[15px] lg:text-[17px] tracking-wide select-none whitespace-nowrap">
              <span className="font-bold text-white">50,000+</span>
              <span className="font-normal text-white/50 uppercase">
                NEW JOBS THIS MONTH
              </span>
            </div>
          </div>

          {/* Right flanking line (64px, gradient) */}
          <div className="h-px w-10 sm:w-16 shrink-0 bg-gradient-to-l from-transparent via-[#a8a8a8]/40 to-[#a8a8a8]/70" />
        </div>

        {/* Title block — Figma: Manrope Bold 56px, centered */}
        <h1 className="mt-8 font-sans text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[64px]">
          Find Your Dream Job Today
        </h1>

        {/* Subtitle block — Figma: Manrope Regular 20px, text-white/70, centered */}
        <p className="mx-auto mt-4 max-w-[640px] font-sans text-base leading-relaxed text-white/70 sm:text-lg lg:text-[20px] lg:leading-[32px]">
          HireLoop connects top talent with world-class companies. Browse thousands
          of curated opportunities and land your next role — faster.
        </p>
      </div>

      {/* Search bar — Figma Frame 1 (784x64, #101010, border white/20, radius 16) */}
      <div className="mx-auto mt-10 w-full max-w-[784px] px-4 sm:px-0">
        <form
          onSubmit={handleSearch}
          className="flex h-16 items-center gap-3 rounded-2xl border border-white/20 bg-[#101010] pl-4 sm:pl-5 pr-2 transition-all focus-within:border-white/40"
        >
          {/* Job title input */}
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <Search className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-white/80" strokeWidth={1.75} />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Job tilte, skill or company"
              className="w-full bg-transparent font-sans text-sm sm:text-base text-white outline-none placeholder:text-white/60"
            />
          </div>

          {/* Vertical Divider (23px) */}
          <div className="hidden h-6 w-px shrink-0 bg-white/20 sm:block" />

          {/* Location input */}
          <div className="hidden min-w-0 flex-1 items-center gap-3 sm:flex">
            <MapPin className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-white/80" strokeWidth={1.75} />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location or Remote"
              className="w-full bg-transparent font-sans text-sm sm:text-base text-white outline-none placeholder:text-white/60"
            />
          </div>

          {/* Search button — Figma: 48x48 square button, cornerRadius 12, #5C53FE */}
          <button
            type="submit"
            aria-label="Search jobs"
            className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-[#5C53FE] text-white shadow-md shadow-[#5C53FE]/30 transition-colors hover:bg-[#4E45E8]"
          >
            <Search className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
          </button>
        </form>

        {/* Trending row — Figma: Trending Position + chips, centered */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <span className="font-sans text-sm sm:text-base text-white/70">
            Trending Position
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {trendingTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setTitle(tag)}
                className="flex h-[34px] cursor-pointer items-center rounded-full border border-white/10 bg-[#1A1A1B] px-4 font-sans text-xs sm:text-sm text-white transition-colors hover:bg-[#252528]"
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
