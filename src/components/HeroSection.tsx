import { ArrowDown, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { whatsappUrl } from "@/lib/whatsapp";

const HeroSection = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8"
    >
      {/* Background */}
      <img
        src={heroBg}
        alt="ICRED Mali — Bureau d'études et ingénieur conseil pour l'énergie solaire, l'eau et les infrastructures au Mali"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="w-full md:max-w-5xl md:mx-auto text-center">
          
          {/* Badge */}
          <span className="inline-block glass-dark text-primary-foreground px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 border border-primary-foreground/20">
            ✦ Bureau d'Études d'Ingénieurs Conseils — Depuis 2013
          </span>

          {/* Title */}
          <h1 className="font-bold text-primary-foreground leading-[1.2] mb-6
            text-[clamp(1.8rem,5vw,3rem)] md:text-6xl lg:text-7xl">
            
            Votre projet mérite une
            <br className="hidden sm:block" />

            <span className="relative inline-block mt-2 sm:mt-0">
              <span className="text-green-lime">
                étude fiable
              </span>

              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 8C50 2 100 2 150 6C200 10 250 4 298 8"
                  stroke="hsl(80 70% 55%)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Description */}
          <p className="text-primary-foreground/80 mb-8 leading-relaxed
            text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            Études, énergie solaire, eau, routes et BTP : échangez avec un ingénieur ICRED pour clarifier votre besoin et préparer votre projet au Mali.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            
            <a
              href={whatsappUrl("Bonjour ICRED, j'ai un projet et je souhaite échanger avec un ingénieur.\n\nType de projet : \nLocalisation : \nBesoin / état d'avancement : ")}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-attention w-full sm:w-auto bg-green-lime text-primary px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl hover:-translate-y-1 transition-transform"
            >
              Parler de mon projet sur WhatsApp
              <MessageCircle size={18} />
            </a>

            <a
        href="#services"
              className="w-full sm:w-auto border-2 border-primary-foreground/40 text-primary-foreground px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary-foreground/10 transition-colors"
            >
              Voir les expertises
              <ArrowDown size={18} />
            </a>
          </div>

          {/* Badges */}
          <p className="mt-5 text-center text-sm text-primary-foreground/70">Décrivez simplement votre besoin : ICRED vous orientera vers l'expertise adaptée.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-primary-foreground/70 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-lime" />
              <span>12+ ans d'expérience</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-lime" />
              <span>17+ experts qualifiés</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-lime" />
              <span>Partenaire Huawei</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#apropos"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary-foreground/40 hidden md:block"
      >
        <div className="w-8 h-12 rounded-full border-2 border-current flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-current rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};

export default HeroSection;
