import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Infrastructure et développement au Mali"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative z-10 container mx-auto text-center px-4">
        <div className="animate-fade-up max-w-4xl mx-auto">
          <span className="inline-block bg-secondary/20 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-secondary/30">
            Bureau d'Études d'Ingénieurs Conseils
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Ingénierie au service du{" "}
            <span className="text-green-lime">Développement</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            Notre mission, rendre accessibles les services de l'Ingénieur Conseil aux populations. Depuis 2013, ICRED Mali accompagne le développement durable au Mali et en Afrique.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#services"
              className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity text-base"
            >
              Nos services
            </a>
            <a
              href="#apropos"
              className="border-2 border-primary-foreground/40 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors text-base"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>

      <a
        href="#apropos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        style={{ animation: "float 2s ease-in-out infinite" }}
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
};

export default HeroSection;
