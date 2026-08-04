import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import PartnerStrip from "./components/PartnerStrip";
import ProcessSection from "./components/ProcessSection";
import FeaturedProgramSection from "./components/FeaturedProgramSection";
import WhyPreviewSection from "./components/WhyPreviewSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AboutSection from "./components/AboutSection";
import ProgramsSection from "./components/ProgramsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import PlacementSection from "./components/PlacementSection";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";

export default function App() {
  useRevealOnScroll();

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <PartnerStrip />
        <ProcessSection />
        <FeaturedProgramSection />
        <WhyPreviewSection />
        <TestimonialsSection />
        <AboutSection />
        <ProgramsSection />
        <WhyChooseUsSection />
        <PlacementSection />
        <FAQSection />
        <FinalCTASection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
