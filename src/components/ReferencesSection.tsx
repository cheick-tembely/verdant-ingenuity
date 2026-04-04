import { CheckCircle2, ArrowUpRight } from "lucide-react";
import energyImg from "@/assets/energy-img.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const references = [
  { title: "Centrale solaire 100 MWc", desc: "Études de faisabilité avec 100 MW de stockage sur 240 ha à Gongasso, Sikasso", tag: "Énergie" },
  { title: "Installation solaire FGSP S.A", desc: "Maîtrise d'ouvrage déléguée pour un système photovoltaïque à Hamdallaye ACI 2000", tag: "Énergie" },
  { title: "Centrale photovoltaïque 50 MWc", desc: "Étude de faisabilité technique, économique et environnementale à San – Bienso", tag: "Énergie" },
  { title: "Bitumage Bamako-Kati 2x2 voies", desc: "Études techniques, environnementale et sociale du tronçon avec réhabilitation de voiries", tag: "Routes" },
  { title: "Projet JIKURA - HELVETAS", desc: "34 forages et 41 systèmes d'adduction d'eau solaires dans 8 communes rurales", tag: "Eau" },
  { title: "Hybridation SNV Bamako", desc: "Hybridation au solaire photovoltaïque du réseau électrique du bureau SNV", tag: "Énergie" },
  { title: "Entretien routier Tessalit", desc: "Contrôle des travaux d'entretien courant routier pour l'AGEROUTE", tag: "Routes" },
  { title: "Piste Dialakoroba-Kourouba", desc: "Études hydrologiques et hydrauliques sur 65 km pour PDI-BS", tag: "Hydraulique" },
];

const partners = [
  "EGIS International", "Fluvial Conseil", "SERTAS Mali",
  "BETICO Mali", "SID Ingénierie", "TED",
  "Huawei Mali", "ADG Valve",
];

const ReferencesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="references" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-pale/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div ref={ref} className="container mx-auto relative">
        <div className={`text-center mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <span className="inline-flex items-center gap-2 bg-green-pale text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Nos références
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Projets <span className="text-gradient">réalisés</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Des projets d'envergure nationale et internationale qui témoignent de notre expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 lg:mb-20">
          <div className={`space-y-3 reveal-left ${isVisible ? "visible" : ""}`}>
            {references.map((ref, i) => (
              <div
                key={i}
                className="group flex gap-3 md:gap-4 items-start bg-card rounded-xl p-4 md:p-5 border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-green-pale flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <CheckCircle2 className="text-primary group-hover:text-primary-foreground transition-colors" size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{ref.title}</h4>
                    <span className="text-[10px] font-semibold uppercase text-secondary bg-secondary/10 px-2 py-0.5 rounded-full shrink-0">{ref.tag}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">{ref.desc}</p>
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground/0 group-hover:text-primary transition-all shrink-0 mt-1" />
              </div>
            ))}
          </div>
          
          <div className={`space-y-8 reveal-right ${isVisible ? "visible" : ""}`}>
            <div className="relative group">
              <img
                src={energyImg}
                alt="Centrale solaire réalisée par ICRED"
                className="rounded-3xl shadow-xl w-full object-cover aspect-video group-hover:shadow-2xl transition-shadow duration-500"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-xl px-5 py-3 border border-primary-foreground/10">
                  <p className="text-foreground text-sm font-semibold">+16 projets majeurs réalisés</p>
                  <p className="text-muted-foreground text-xs">au Mali et en Afrique de l'Ouest</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-dark rounded-3xl p-8 text-primary-foreground relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-2xl" />
              <div className="relative">
                <h3 className="text-xl font-bold mb-6">Partenaires de confiance</h3>
                <div className="grid grid-cols-2 gap-4">
                  {partners.map((partner) => (
                    <div key={partner} className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors group/p cursor-pointer">
                      <div className="w-2 h-2 rounded-full bg-green-lime group-hover/p:scale-150 transition-transform" />
                      {partner}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
