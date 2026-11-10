"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#010103]/80 border-b border-zinc-900/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Exact Logo from Figma */}
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/images/logo.png"
              alt="hireloop"
              width={154}
              height={44}
              priority
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Items matching Figma */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#browse"
              className="text-sm text-zinc-300 hover:text-white transition-colors"
            >
              Browse Jobs
            </Link>
            <Link
              href="#company"
              className="text-sm text-zinc-300 hover:text-white transition-colors"
            >
              Company
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-zinc-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>

            {/* Vertical Divider */}
            <div className="h-4 w-px bg-zinc-800" />

            <Link
              href="/signin"
              className="text-sm font-medium text-[#5C53FE] hover:text-[#4E45E8] transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#5C53FE] hover:bg-[#4E45E8] shadow-md shadow-[#5C53FE]/30 hover:shadow-[#5C53FE]/50 transition-all cursor-pointer"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-[#191938]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-[#0B0B14]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <Link
            href="#browse"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-200 hover:bg-[#191938]"
          >
            Browse Jobs
          </Link>
          <Link
            href="#company"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-200 hover:bg-[#191938]"
          >
            Company
          </Link>
          <Link
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-200 hover:bg-[#191938]"
          >
            Pricing
          </Link>
          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2">
            <Link
              href="/signin"
              className="w-full text-center py-2.5 rounded-lg text-sm font-medium text-zinc-300 hover:bg-[#191938]"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="w-full text-center py-2.5 rounded-full text-sm font-semibold text-white bg-[#5C53FE] hover:bg-[#4E45E8] shadow-md shadow-[#5C53FE]/30"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
