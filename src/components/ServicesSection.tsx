import {
  Sun, Droplets, Building, MapPin, Route, Leaf, BarChart3, Search, FlaskConical, Waves
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: Sun, title: "Énergie", desc: "Centrales thermiques et solaires, hybridation électrique, installation photovoltaïque", accent: "from-amber-400 to-orange-500" },
  { icon: Droplets, title: "Eau & Assainissement", desc: "Adduction d'eau potable, forages, puits, station de pompage", accent: "from-sky-400 to-blue-500" },
  { icon: Building, title: "Bâtiment & Construction", desc: "Études, suivi et contrôle des travaux de bâtiments commerciaux et industriels", accent: "from-primary to-green-medium" },
  { icon: MapPin, title: "Aménagement Urbain", desc: "Réseaux d'adduction d'eau, collecteurs de drainage, études routières", accent: "from-green-medium to-secondary" },
  { icon: Route, title: "Routes & Infrastructures", desc: "Pistes rurales, routes, ponts et ouvrages d'art", accent: "from-stone-400 to-stone-600" },
  { icon: Waves, title: "Hydro-agricole", desc: "Périmètres irrigués, aménagement des bas-fonds, réhabilitation de retenues d'eau", accent: "from-teal-400 to-emerald-500" },
  { icon: Leaf, title: "Environnement", desc: "Études d'impact environnemental et social, gestion des ressources naturelles", accent: "from-secondary to-green-lime" },
  { icon: BarChart3, title: "Suivi-Évaluation", desc: "Suivi-évaluation des projets de développement, statistiques et analyses", accent: "from-violet-400 to-purple-500" },
  { icon: Search, title: "Implantation Géophysique", desc: "Prospection et études géophysiques pour les projets d'infrastructure", accent: "from-primary to-accent" },
  { icon: FlaskConical, title: "Recherche & Développement", desc: "Innovation et recherche appliquée au service du développement durable", accent: "from-green-lime to-accent" },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-section)" }}>
      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto relative">
        <div className={`text-center mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <span className="inline-flex items-center gap-2 bg-green-pale text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Nos services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Domaines d'<span className="text-gradient">activité</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            ICRED Mali intervient dans de nombreux domaines d'ingénierie au Mali et à l'étranger.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal-scale ${isVisible ? "visible" : ""} stagger-${Math.min(i + 1, 10)} group bg-card rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-xl transition-all duration-500 border border-border hover:border-primary/20 hover:-translate-y-2 relative overflow-hidden cursor-pointer`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-pale/0 to-green-pale/0 group-hover:from-green-pale/60 group-hover:to-transparent transition-all duration-500" />
              
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-green-pale group-hover:bg-gradient-to-br group-hover:${service.accent} transition-all duration-300 group-hover:shadow-lg`}>
                  <service.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
