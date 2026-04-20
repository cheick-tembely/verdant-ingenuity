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
import snv from "@/assets/partners/snv.png";

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
  { name: "SNV", logo: snv },
];

const PartnersSection = () => {
  const { ref, isVisible } = useScrollReveal();
  // Two rows scrolling in opposite directions for a richer effect
  const half = Math.ceil(partners.length / 2);
  const rowA = partners.slice(0, half);
  const rowB = partners.slice(half).concat(partners.slice(0, half - partners.slice(half).length));
  // Ensure both rows have content; fallback if uneven
  const rowBSafe = rowB.length ? rowB : partners;
  const loopA = [...rowA, ...rowA, ...rowA];
  const loopB = [...rowBSafe, ...rowBSafe, ...rowBSafe];

  return (
    <section id="partenaires" className="section-padding bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 w-[40rem] h-[40rem] bg-green-pale/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-light/20 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto relative">
        <div className={`text-center mb-14 reveal ${isVisible ? "visible" : ""}`}>
          <span className="inline-flex items-center gap-2 bg-green-pale text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Partenaires de confiance
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Ils nous font <span className="text-gradient">confiance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Nous collaborons avec des acteurs majeurs de l'ingénierie, des institutions publiques et des leaders technologiques au Mali et à l'international.
          </p>
        </div>

        {/* Stats banner */}
        <div className={`grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12 reveal ${isVisible ? "visible" : ""}`}>
          {[
            { value: `${partners.length}+`, label: "Partenaires" },
            { value: "15+", label: "Années" },
            { value: "100%", label: "Engagement" },
          ].map((s) => (
            <div key={s.label} className="text-center bg-background/60 backdrop-blur-sm border border-border rounded-2xl py-4 px-2">
              <div className="text-2xl md:text-3xl font-bold text-gradient">{s.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className={`relative space-y-6 reveal ${isVisible ? "visible" : ""}`}>
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-card to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-card to-transparent z-10" />

          {/* Row 1 - left */}
          <div className="overflow-hidden">
            <div className="flex gap-6 md:gap-8 animate-marquee w-max hover:[animation-play-state:paused]">
              {loopA.map((partner, i) => (
                <PartnerCard key={`a-${partner.name}-${i}`} name={partner.name} logo={partner.logo} />
              ))}
            </div>
          </div>

          {/* Row 2 - right */}
          <div className="overflow-hidden">
            <div className="flex gap-6 md:gap-8 animate-marquee-reverse w-max hover:[animation-play-state:paused]">
              {loopB.map((partner, i) => (
                <PartnerCard key={`b-${partner.name}-${i}`} name={partner.name} logo={partner.logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnerCard = ({ name, logo }: { name: string; logo: string }) => (
  <div className="group flex flex-col items-center justify-center gap-3 w-44 md:w-52 shrink-0">
    <div className="relative w-full h-28 md:h-32 bg-background rounded-2xl border border-border flex items-center justify-center p-5 shadow-sm hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-pale/0 to-green-pale/0 group-hover:from-green-pale/30 group-hover:to-transparent transition-all duration-500" />
      <img
        src={logo}
        alt={`Logo ${name}`}
        className="relative max-h-full max-w-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
        loading="lazy"
        width={512}
        height={512}
      />
    </div>
    <p className="text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors text-center">
      {name}
    </p>
  </div>
);

export default PartnersSection;
