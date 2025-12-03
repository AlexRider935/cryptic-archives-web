import MainLayout from "@/components/MainLayout"; // 1. Import the MainLayout component

// Your other existing imports
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import FeaturedCasesSection from "./components/FeaturedCasesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FinalCTASection from "./components/FinalCTASection";

export default function Home() {
  return (
    // 2. Wrap all your page sections with the MainLayout component
    <MainLayout>
      <HeroSection />
      <IntroSection />
      <FeaturedCasesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FinalCTASection />
    </MainLayout>
  );
}
