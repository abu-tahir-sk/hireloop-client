import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DashboardStats from "@/components/DashboardStats";
import FeaturedJobs from "@/components/FeaturedJobs";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#010103] text-white selection:bg-[#5C53FE]/30 selection:text-white">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with Search and Trending Positions */}
        <HeroSection />

        {/* Platform Preview Mockup & Key Platform Stats */}
        <DashboardStats />

        {/* Featured Jobs Discovery Grid (3x2) with Interactive Bookmarking */}
        <FeaturedJobs />

        {/* 8 Feature Value Propositions */}
        <FeaturesSection />

        {/* Flexible Pricing Tiers with Monthly/Yearly toggle */}
        <PricingSection />

        {/* Call to Action Banner */}
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
