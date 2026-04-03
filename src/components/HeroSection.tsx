import { ArrowDown, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Infrastructure et développement au Mali"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-lime/10 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative z-10 container mx-auto text-center px-4">
        <div className="max-w-4xl mx-auto">
          <span
            className="inline-block glass-dark text-primary-foreground px-5 py-2 rounded-full text-sm font-medium mb-8 border border-primary-foreground/20 animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            ✦ Bureau d'Études d'Ingénieurs Conseils — Depuis 2013
          </span>
          
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-8 animate-fade-in"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            Ingénierie au service
            <br />
            du{" "}
            <span className="relative">
              <span className="text-green-lime">Développement</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 8C50 2 100 2 150 6C200 10 250 4 298 8" stroke="hsl(80 70% 55%)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          
          <p
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            Notre mission, rendre accessibles les services de l'Ingénieur Conseil aux populations. ICRED Mali accompagne le développement durable au Mali et en Afrique.
          </p>
          
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.8s", animationFillMode: "both" }}
          >
            <a
              href="#services"
              className="group bg-primary-foreground text-primary px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary-foreground/20 transition-all duration-300 text-base flex items-center gap-2"
            >
              Découvrir nos services
              <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#apropos"
              className="group border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all duration-300 text-base flex items-center gap-2"
            >
              <Play size={16} className="fill-current" />
              En savoir plus
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/50 text-sm animate-fade-in"
            style={{ animationDelay: "1s", animationFillMode: "both" }}
          >
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

      <a
        href="#apropos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/40 hover:text-primary-foreground transition-all duration-300 hover:scale-110"
        style={{ animation: "float 2s ease-in-out infinite" }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-current flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-current rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};

export default HeroSection;
