import Navbar from "@/components/Navbar";
import HeroBackdrop from "@/components/HeroBackdrop";
import HeroSection from "@/components/HeroSection";
import DashboardStats from "@/components/DashboardStats";
import FeaturedJobs from "@/components/FeaturedJobs";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import CtaBanner, { CtaBackdrop } from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#010103] text-white">
      <main className="flex-1">
        {/* Hero + stats over the globe-horizon artwork (Figma "Group 1") */}
        <div className="relative">
          <HeroBackdrop />
          <Navbar />
          <HeroSection />
          <DashboardStats />
        </div>

        {/* Featured Jobs Discovery Grid (3x2) */}
        <FeaturedJobs />

        {/* 8 Feature Value Propositions (#151516 full-bleed) */}
        <FeaturesSection />

        {/* Flexible Pricing Tiers with Monthly/Yearly toggle */}
        <PricingSection />

        {/* Call to Action over wireframe line-art ("BG Grid"), footer overlaps the art */}
        <div className="relative">
          <CtaBackdrop />
          <CtaBanner />
          <Footer />
        </div>
      </main>
    </div>
  );
}
