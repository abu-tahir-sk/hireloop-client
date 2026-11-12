import Navbar from "@/components/Navbar";
import HeroBackdrop from "@/components/HeroBackdrop";
import HeroSection from "@/components/HeroSection";
import DashboardStats from "@/components/DashboardStats";
import CompanyLogos from "@/components/CompanyLogos";
import FeaturedJobs from "@/components/FeaturedJobs";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import CtaBanner, { CtaBackdrop } from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#010103] text-white selection:bg-[#5C53FE]/40 selection:text-white">
      <main className="flex-1">
        {/* Hero + stats over the glowing Earth globe-horizon artwork */}
        <div className="relative">
          <HeroBackdrop />
          <Navbar />
          <HeroSection />
          <DashboardStats />
        </div>

        {/* Trusted By Top Companies with uploaded 12 company logos */}
        <CompanyLogos />

        {/* Featured Jobs Discovery Grid (3x2) with company logos */}
        <FeaturedJobs />

        {/* 8 Feature Value Propositions */}
        <FeaturesSection />

        {/* Flexible Pricing Tiers with Monthly/Yearly toggle */}
        <PricingSection />

        {/* Call to Action over wireframe perspective dome grid */}
        <div className="relative">
          <CtaBackdrop />
          <CtaBanner />
          <Footer />
        </div>
      </main>
    </div>
  );
}
