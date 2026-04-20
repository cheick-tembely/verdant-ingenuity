import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DiscoverSection from "@/components/DiscoverSection";
import ReferencesSection from "@/components/ReferencesSection";
import PartnersSection from "@/components/PartnersSection";

import OrgChartSection from "@/components/OrgChartSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DiscoverSection />
      <ReferencesSection />
      <PartnersSection />
      
      <OrgChartSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
