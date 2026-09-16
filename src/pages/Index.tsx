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
import { usePageSeo, useStructuredData } from "@/hooks/usePageSeo";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  usePageSeo(
    "ICRED Mali | Bureau d'études & ingénieur conseil à Bamako",
    "ICRED Mali est un bureau d'études techniques et d'ingénierie conseil à Bamako : topographie, génie civil, énergie solaire, eau, routes, bâtiment et environnement.",
    "/",
    "website",
    "bureau d'études Mali, ingénieur conseil Mali, bureau d'études Bamako, topographie Mali, génie civil Mali, énergie solaire Mali",
    { image: heroImage },
  );

  useStructuredData("home-schema", {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://icred-mali.com/#organization",
        name: "ICRED Mali SARL",
        alternateName: "Ingénierie Conseil et de Recherche pour le Développement",
        url: "https://icred-mali.com/",
        logo: "https://icred-mali.com/favicon.png",
        image: "https://icred-mali.com/favicon.png",
        description: "Bureau d'études techniques et cabinet d'ingénierie conseil à Bamako, spécialisé en topographie, études techniques, génie civil, énergie solaire, eau, routes, bâtiment et environnement.",
        telephone: "+223 76 08 58 47",
        email: "contact@icred-mali.com",
        foundingDate: "2013",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Sogoniko, Imm. TRAORÉ, 2ème étage",
          addressLocality: "Bamako",
          addressCountry: "ML",
        },
        areaServed: [
          { "@type": "Country", name: "Mali" },
          { "@type": "Place", name: "Afrique de l'Ouest" },
        ],
        knowsAbout: [
          "Bureau d'études techniques",
          "Ingénierie conseil",
          "Topographie",
          "Génie civil",
          "Études de faisabilité",
          "Énergie solaire photovoltaïque",
          "Forage d'eau",
          "Études environnementales",
          "Travaux routiers",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://icred-mali.com/#website",
        url: "https://icred-mali.com/",
        name: "ICRED Mali",
        inLanguage: "fr-ML",
        publisher: { "@id": "https://icred-mali.com/#organization" },
      },
    ],
  });

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
