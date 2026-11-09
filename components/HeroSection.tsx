"use client";

import { useState } from "react";
import { Search, MapPin, Flame } from "lucide-react";

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
    <section className="relative pt-12 pb-12 md:pt-16 md:pb-16 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Announcement Badge matching Figma */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#11111A] border border-zinc-800 text-xs text-zinc-300 mb-6 shadow-sm">
          <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
          <span className="font-medium">50,000+ new jobs this month</span>
        </div>

        {/* Main Heading (H1) matching Figma */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
          Find Your Dream Job Today
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl mx-auto text-sm sm:text-base text-zinc-400 font-normal leading-relaxed mb-8">
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
            <span className="text-zinc-500">Trending Position:</span>
            {trendingTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setTitle(tag)}
                className="px-3 py-1 rounded-full bg-[#0B0B14] hover:bg-[#191938] border border-zinc-800/80 text-zinc-400 hover:text-white transition-colors cursor-pointer"
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
