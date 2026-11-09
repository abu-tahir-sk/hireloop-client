"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      priceMonthly: 0,
      priceYearly: 0,
      featured: false,
      featuresSubtitle: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1‑click apply, unlimited",
      ],
      href: "/signup",
    },
    {
      name: "Growth",
      priceMonthly: 17,
      priceYearly: 12,
      featured: true,
      featuresSubtitle: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1‑click apply, unlimited",
      ],
      href: "/checkout?plan=growth",
    },
    {
      name: "Enterprise",
      priceMonthly: 99,
      priceYearly: 74,
      featured: false,
      featuresSubtitle: "Start building your insights hub:",
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
      href: "/checkout?plan=enterprise",
    },
  ];

  return (
    <section id="pricing" className="relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Figma */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-wider text-[#5C53FE] mb-3">
            <span className="w-6 h-px bg-[#5C53FE]" />
            <span>Pricing</span>
            <span className="w-6 h-px bg-[#5C53FE]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
            Pay for the leverage, not the listings
          </h2>

          {/* Monthly / Yearly Toggle Capsule */}
          <div className="inline-flex items-center p-1 rounded-full bg-[#0B0B14] border border-zinc-800">
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                !isYearly
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsYearly(true)}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                isYearly
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span>Yearly</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-[#DC02CE] text-white">
                25%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards matching Figma Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, idx) => {
            const price = isYearly ? plan.priceYearly : plan.priceMonthly;
            return (
              <div
                key={idx}
                className={`relative flex flex-col justify-between p-7 rounded-2xl bg-[#0B0B14] transition-all ${
                  plan.featured
                    ? "border-2 border-[#5C53FE] shadow-[0_0_40px_rgba(92,83,254,0.2)]"
                    : "border border-zinc-800/90"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold text-white">
                        ${price}
                      </span>
                      <span className="text-xs text-zinc-400">/month</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-900 mb-6">
                    <p className="text-xs font-medium text-zinc-400 mb-4">
                      {plan.featuresSubtitle}
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                          <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Button: White button on middle card, dark on other cards */}
                <Link
                  href={plan.href}
                  className={`w-full py-3 rounded-full text-center text-xs font-semibold transition-all cursor-pointer ${
                    plan.featured
                      ? "bg-white text-black hover:bg-zinc-200 shadow-md"
                      : "bg-[#141422] text-white border border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  Choose This Plan
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
