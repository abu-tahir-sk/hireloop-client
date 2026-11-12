"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, LogOut, User } from "lucide-react";
import { useSession, signOut } from "@/lib/auth-client";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session, isPending } = useSession();

  const handleLogout = async () => {
    await signOut({ callbackURL: "/" });
  };

  return (
    <header className="relative z-20 pt-6">
      <div className="mx-auto w-full max-w-[1320px] px-4 lg:px-0">
        <div className="flex h-[74px] items-center justify-between rounded-2xl bg-[#222222] px-4 sm:px-6 lg:px-7">
          <Link href="/" className="inline-flex shrink-0 items-center">
            <Image
              src="/images/logo.png"
              alt="hireloop"
              width={154}
              height={44}
              priority
              className="h-8 w-auto object-contain sm:h-11"
            />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            <div className="flex items-center gap-10">
              <Link href="#browse" className="font-geist text-base text-white transition-colors hover:text-white/80">
                Browse Jobs
              </Link>
              <Link href="#company" className="font-geist text-base text-white transition-colors hover:text-white/80">
                Company
              </Link>
              <Link href="#pricing" className="font-geist text-base text-white transition-colors hover:text-white/80">
                Pricing
              </Link>
            </div>
            <div className="h-6 w-px bg-[#a8a8a8]/40" />
            <div className="flex items-center gap-4">
              {isPending ? (
                <div className="h-[52px] w-32 animate-pulse rounded-xl bg-white/10" />
              ) : session ? (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#1A1A1B] px-4 py-2">
                    {session.user.image ? (
                      <img src={session.user.image} alt={session.user.name} className="h-8 w-8 rounded-full object-cover" />
                    ) : (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5C53FE] font-bold text-white">
                        {session.user.name?.charAt(0) || "U"}
                      </div>
                    )}
                    <span className="font-sans text-sm font-medium text-white">{session.user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex h-[48px] w-[48px] items-center justify-center rounded-xl bg-red-500/10 text-red-400 transition-colors hover:bg-red-500/20"
                    title="Log out"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    href="/signin"
                    className="px-4 py-3.5 font-sans text-lg font-semibold text-white transition-colors hover:text-white/80"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="flex h-[52px] items-center rounded-xl border border-[#090a15]/10 bg-[#5C53FE] px-6 font-instrument text-lg font-medium text-white shadow-md shadow-[#5C53FE]/20 transition-all hover:bg-[#4E45E8]"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </nav>
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="mt-2 space-y-1 rounded-2xl border border-white/10 bg-[#222222] p-4 lg:hidden">
            <Link href="#browse" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2.5 font-geist text-base text-white hover:bg-white/5">
              Browse Jobs
            </Link>
            <Link href="#company" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2.5 font-geist text-base text-white hover:bg-white/5">
              Company
            </Link>
            <Link href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2.5 font-geist text-base text-white hover:bg-white/5">
              Pricing
            </Link>
            <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-3">
              {isPending ? (
                <span className="py-2 text-center text-sm text-white/50">Loading...</span>
              ) : session ? (
                <>
                  <div className="flex items-center gap-3 rounded-lg bg-white/5 px-4 py-3">
                    {session.user.image ? (
                      <img src={session.user.image} alt={session.user.name} className="h-8 w-8 rounded-full" />
                    ) : (
                      <User className="h-6 w-6 text-white" />
                    )}
                    <span className="font-sans text-base text-white">{session.user.name}</span>
                  </div>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleLogout();
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500/10 py-3 text-red-400 font-semibold transition-colors hover:bg-red-500/20"
                  >
                    <LogOut className="h-5 w-5" /> Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/signin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 text-center font-sans text-lg font-semibold text-[#5C53FE]"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex h-[52px] items-center justify-center rounded-xl border border-[#090a15]/10 bg-[#5C53FE] font-instrument text-lg font-medium text-white"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}