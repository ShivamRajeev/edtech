import { useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import PartnerStrip from "./components/PartnerStrip";
import ProcessSection from "./components/ProcessSection";
import FeaturedProgramSection from "./components/FeaturedProgramSection";
import WhyPreviewSection from "./components/WhyPreviewSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AboutSection from "./components/AboutSection";
import FounderSection from "./components/FounderSection";
import ProgramsSection from "./components/ProgramsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import PlacementSection from "./components/PlacementSection";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";
import ContactSection from "./components/ContactSection";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";

function HomePage({ onApplyNow }) {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <PartnerStrip />
      <ProcessSection />
      <FeaturedProgramSection onApplyNow={onApplyNow} />
      <WhyPreviewSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  );
}

export default function App() {
  const location = useLocation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  useRevealOnScroll(location.pathname);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <>
      <Header onApplyNow={openContactModal} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage onApplyNow={openContactModal} />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/founder" element={<FounderSection />} />
          <Route path="/programs" element={<ProgramsSection onApplyNow={openContactModal} />} />
          <Route path="/why-us" element={<WhyChooseUsSection />} />
          <Route path="/placement" element={<PlacementSection />} />
          <Route path="/faqs" element={<FAQSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer onApplyNow={openContactModal} />
      <FloatingActions onApplyNow={openContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
}
