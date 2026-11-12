"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { signIn } from "@/lib/auth-client"; // Better Auth client

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<"google" | "github" | null>(null);

  // Google Login Handler
  const handleGoogleLogin = async () => {
    setSocialLoading("google");
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
    setSocialLoading(null);
  };

  // GitHub Login Handler
  const handleGithubLogin = async () => {
    setSocialLoading("github");
    await signIn.social({
      provider: "github",
      callbackURL: "/",
    });
    setSocialLoading(null);
  };

  // Email/Password Login Logic
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/";
    }, 1000);
  };

  return (
    <div className="min-h-screen flex bg-[#010103] text-white selection:bg-[#5C53FE]/30 selection:text-white">
      {/* Left Form Panel */}
      <div className="flex-1 flex flex-col justify-between px-6 py-10 sm:px-12 lg:px-16 xl:px-24">
        {/* Top Header with Brand */}
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/images/logo.png"
              alt="hireloop"
              width={154}
              height={44}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>
          <Link
            href="/"
            className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>

        {/* Center Auth Form */}
        <div className="max-w-md w-full mx-auto my-auto py-8">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
              Welcome back
            </h1>
            <p className="text-sm sm:text-base text-zinc-400">
              Sign in to access your curated job matches, applications, and insights.
            </p>
          </div>

          {/* Social Sign-in Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={socialLoading !== null}
              className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#0B0B14] hover:bg-[#191938] border border-[#6661FF]/25 hover:border-[#6661FF]/50 text-xs sm:text-sm font-medium text-white transition-all cursor-pointer disabled:opacity-50"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z" />
                <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5.1 3.7-8.9z" />
                <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3 0-.8.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15s.7 5.3 1.9 7.7l3.7-2.9z" />
                <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z" />
              </svg>
              <span>{socialLoading === "google" ? "Wait..." : "Google"}</span>
            </button>
            <button
              type="button"
              onClick={handleGithubLogin}
              disabled={socialLoading !== null}
              className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#0B0B14] hover:bg-[#191938] border border-[#6661FF]/25 hover:border-[#6661FF]/50 text-xs sm:text-sm font-medium text-white transition-all cursor-pointer disabled:opacity-50"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>{socialLoading === "github" ? "Wait..." : "GitHub"}</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800" />
            </div>
            <span className="relative px-4 text-xs uppercase tracking-wider text-zinc-500 bg-[#010103]">
              Or continue with email
            </span>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0B0B14] border border-[#6661FF]/25 focus:border-[#5C53FE] text-white placeholder-zinc-500 text-sm focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Password
                </label>
                <Link href="/forgot-password" className="text-xs text-[#F7C2FF] hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#0B0B14] border border-[#6661FF]/25 focus:border-[#5C53FE] text-white placeholder-zinc-500 text-sm focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-500 hover:text-zinc-300"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between py-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded bg-[#0B0B14] border-[#6661FF]/30 text-[#5C53FE] focus:ring-[#5C53FE]"
                />
                <span className="text-xs text-zinc-400">Remember for 30 days</span>
              </label>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#5C53FE] hover:bg-[#4E45E8] shadow-lg shadow-[#5C53FE]/30 hover:shadow-[#5C53FE]/50 transition-all cursor-pointer disabled:opacity-50"
            >
              <span>{loading ? "Signing in..." : "Sign In to HireLoop"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Footer Link to Register */}
          <div className="mt-8 text-center text-xs sm:text-sm text-zinc-400">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#F7C2FF] hover:text-white font-semibold underline underline-offset-4">
              Create a free account
            </Link>
          </div>
        </div>

        {/* Bottom Policy notice */}
        <div className="text-xs text-zinc-600 text-center">
          © 2024 HireLoop by Programming Hero. Protected by reCAPTCHA and Subject to Privacy Policy.
        </div>
      </div>

      {/* Right Visual Showcase Panel (Desktop) */}
      <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-[#191938] via-[#0B0B14] to-[#010103] border-l border-[#6661FF]/20 p-12 xl:p-16 flex-col justify-between overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#5C53FE]/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#DC02CE]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 flex items-center justify-end">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5C53FE]/20 border border-[#5C53FE]/40 text-xs font-semibold text-[#F7C2FF]">
            <svg className="w-3.5 h-3.5 fill-[#F7C2FF]" viewBox="0 0 24 24">
              <path d="M12 0l2.5 8.5L23 11l-8.5 2.5L12 22l-2.5-8.5L1 11l8.5-2.5z" />
            </svg>
            AI-Native Job Platform
          </span>
        </div>

        <div className="relative z-10 max-w-lg mx-auto">
          <div className="p-8 rounded-3xl bg-[#0B0B14]/80 border border-[#6661FF]/30 backdrop-blur-xl shadow-2xl shadow-[#5C53FE]/20 mb-8">
            <p className="text-base sm:text-lg text-white font-medium leading-relaxed mb-6">
              &ldquo;HireLoop matched me with a Lead Designer role at a top AI startup within 48 hours. The verified salary bands made negotiating completely transparent.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#5C53FE] to-[#F7C2FF] flex items-center justify-center font-bold text-sm text-black">
                AS
              </div>
              <div>
                <div className="font-bold text-sm text-white">Alex Sterling</div>
                <div className="text-xs text-zinc-400">Senior Product Designer • San Francisco</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-[#0B0B14]/60 border border-zinc-800">
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-xs text-zinc-400 mt-1">Live Roles</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#0B0B14]/60 border border-zinc-800">
              <div className="text-2xl font-bold text-[#F7C2FF]">$160k</div>
              <div className="text-xs text-zinc-400 mt-1">Avg Salary</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#0B0B14]/60 border border-zinc-800">
              <div className="text-2xl font-bold text-[#29CC6A]">97%</div>
              <div className="text-xs text-zinc-400 mt-1">Hired Fast</div>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex items-center justify-between text-xs text-zinc-500">
          <span>Trusted by 12,000+ top tech companies</span>
          <span>HireLoop 2.0</span>
        </div>
      </div>
    </div>
  );
}