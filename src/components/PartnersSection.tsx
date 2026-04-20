import { useScrollReveal } from "@/hooks/useScrollReveal";
import anict from "@/assets/partners/anict.png";
import apej from "@/assets/partners/apej.png";
import b2gold from "@/assets/partners/b2gold.jpg";
import bdk from "@/assets/partners/bdk.png";
import fgsp from "@/assets/partners/fgsp.jpg";
import helvetas from "@/assets/partners/helvetas.png";
import huawei from "@/assets/partners/huawei.png";
import edm from "@/assets/partners/edm.png";
import amrtp from "@/assets/partners/amrtp.png";
import oit from "@/assets/partners/oit.png";

const partners = [
  { name: "ANICT", logo: anict },
  { name: "APEJ", logo: apej },
  { name: "B2Gold - Fekola", logo: b2gold },
  { name: "Groupe BDK", logo: bdk },
  { name: "FGSP S.A", logo: fgsp },
  { name: "HELVETAS Mali", logo: helvetas },
  { name: "Huawei", logo: huawei },
  { name: "EDM S.A", logo: edm },
  { name: "AMRTP", logo: amrtp },
  { name: "OIT", logo: oit },
];

const PartnersSection = () => {
  const { ref, isVisible } = useScrollReveal();
  // Duplicate list for seamless infinite scroll
  const loop = [...partners, ...partners];

  return (
    <section id="partenaires" className="section-padding bg-card relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-green-pale/40 rounded-full blur-3xl -translate-x-1/2" />

      <div ref={ref} className="container mx-auto relative">
        <div className={`text-center mb-12 reveal ${isVisible ? "visible" : ""}`}>
          <span className="inline-flex items-center gap-2 bg-green-pale text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Partenaires de confiance
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Ils nous font <span className="text-gradient">confiance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Nous collaborons avec des acteurs majeurs de l'ingénierie, des institutions et de la technologie au Mali et à l'international.
          </p>
        </div>

        <div className={`relative reveal ${isVisible ? "visible" : ""}`}>
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-card to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-card to-transparent z-10" />

          <div className="overflow-hidden">
            <div className="flex gap-6 md:gap-8 animate-marquee w-max hover:[animation-play-state:paused]">
              {loop.map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="group flex flex-col items-center justify-center gap-3 w-44 md:w-56 shrink-0"
                >
                  <div className="w-full h-32 md:h-36 bg-background rounded-2xl border border-border flex items-center justify-center p-5 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                    <img
                      src={partner.logo}
                      alt={`Logo ${partner.name}`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                      width={512}
                      height={512}
                    />
                  </div>
                  <p className="text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors text-center">
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
