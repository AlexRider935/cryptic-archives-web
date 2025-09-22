import Link from 'next/link';
import Image from 'next/image';
import { Folder, Search, Key } from 'lucide-react';

// We import the mock data and the CaseCard component
import { mockCases } from '@/data/mockData';
import CaseCard from '@/components/CaseCard';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import FeaturedCasesSection from './components/FeaturedCasesSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCTASection from './components/FinalCTASection';

export default function Home() {
  return (
    <>
      <HeroSection/>
      <IntroSection/>
      <FeaturedCasesSection/>
      <HowItWorksSection/>
      <TestimonialsSection/>
      <FinalCTASection/>
    </>
  );
}