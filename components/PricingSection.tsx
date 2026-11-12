"use client";
import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Zap, TrendingUp, Crown } from "lucide-react";
import SectionBadge from "./SectionBadge";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      priceMonthly: 0,
      priceYearly: 0,
      featured: false,
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1 click apply, unlimited",
      ],
      href: "/signup",
    },
    {
      name: "Growth",
      icon: TrendingUp,
      priceMonthly: 17,
      priceYearly: 12,
      featured: true,
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1 click apply, unlimited",
      ],
      href: "/checkout?plan=growth",
    },
    {
      name: "Premium",
      icon: Crown,
      priceMonthly: 99,
      priceYearly: 74,
      featured: false,
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
    <section id="pricing" className="relative z-10 py-24 lg:py-[120px]">
      <div className="mx-auto w-full max-w-[1320px] px-4">
        <SectionBadge label="Pricing" />
        <h2 className="mx-auto mt-4 max-w-[500px] text-center font-sans text-3xl font-semibold leading-snug text-white sm:text-4xl lg:mt-6 lg:text-[48px] lg:leading-[55px]">
          Pay for the leverage, not the listings
        </h2>
        <div className="mt-12 flex justify-center sm:mt-16">
          <div className="flex w-fit items-center gap-2 rounded-[36px] border border-[#f6f6f6]/10 bg-white/15 p-2">
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              className={`flex h-[43px] cursor-pointer items-center rounded-full border border-[#090a15]/10 px-6 font-inter text-base font-medium transition-all sm:text-lg ${!isYearly ? "bg-white text-[#010103]" : "bg-[#090a15]/5 text-white"
                }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsYearly(true)}
              className={`flex h-[43px] cursor-pointer items-center gap-2 rounded-full border border-[#090a15]/10 px-6 font-inter text-base font-medium transition-all sm:text-lg ${isYearly ? "bg-white text-[#010103]" : "bg-[#090a15]/5 text-white"
                }`}
            >
              <span>Yearly</span>
              <span className="rounded-full bg-[#DC02CE] px-2 py-0.5 font-geist text-xs text-white sm:text-base">
                25%
              </span>
            </button>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, idx) => {
            const price = isYearly ? plan.priceYearly : plan.priceMonthly;
            const Icon = plan.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col justify-between gap-8 rounded-3xl p-6 lg:h-[450px] ${plan.featured
                    ? "border border-white/20 bg-[#151516]"
                    : "border border-[#F6EFE1]/20 bg-[#010103]"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#595959]/40">
                        <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-jakarta text-2xl text-white">{plan.name}</h3>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-jakarta text-4xl font-semibold leading-[48px] text-white">
                        ${price}
                      </span>
                      <span className="font-inter-tight text-sm text-white">/month</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <p className="font-inter text-lg font-medium leading-[27px] text-white">
                      Start building your insights hub:
                    </p>
                    <ul className="mt-3 space-y-4">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#F6EFE1]/10 bg-[#595959]/30">
                            <Check className="h-4 w-4 text-white" />
                          </span>
                          <span className="font-inter text-base text-white/70">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link
                  href={plan.href}
                  className={`flex h-[55px] items-center justify-center gap-1 rounded-xl font-sans text-base font-semibold transition-all ${plan.featured
                      ? "bg-white text-[#010103] hover:bg-zinc-200"
                      : "bg-[#595959]/50 text-white hover:bg-[#595959]/70"
                    }`}
                >
                  <span>Choose This Plan</span>
                  <ArrowRight className="h-6 w-6" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}