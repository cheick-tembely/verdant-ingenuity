import {
  Sun, Droplets, Building, MapPin, Route, Leaf, BarChart3, Search, FlaskConical, Waves
} from "lucide-react";

const services = [
  { icon: Sun, title: "Énergie", desc: "Centrales thermiques et solaires, hybridation électrique, installation photovoltaïque" },
  { icon: Droplets, title: "Eau & Assainissement", desc: "Adduction d'eau potable, forages, puits, station de pompage" },
  { icon: Building, title: "Bâtiment & Construction", desc: "Études, suivi et contrôle des travaux de bâtiments commerciaux et industriels" },
  { icon: MapPin, title: "Aménagement Urbain", desc: "Réseaux d'adduction d'eau, collecteurs de drainage, études routières" },
  { icon: Route, title: "Routes & Infrastructures", desc: "Pistes rurales, routes, ponts et ouvrages d'art" },
  { icon: Waves, title: "Hydro-agricole", desc: "Périmètres irrigués, aménagement des bas-fonds, réhabilitation de retenues d'eau" },
  { icon: Leaf, title: "Environnement", desc: "Études d'impact environnemental et social, gestion des ressources naturelles" },
  { icon: BarChart3, title: "Suivi-Évaluation", desc: "Suivi-évaluation des projets de développement, statistiques et analyses" },
  { icon: Search, title: "Implantation Géophysique", desc: "Prospection et études géophysiques pour les projets d'infrastructure" },
  { icon: FlaskConical, title: "Recherche & Développement", desc: "Innovation et recherche appliquée au service du développement durable" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding" style={{ background: "var(--gradient-section)" }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Nos services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Domaines d'<span className="text-gradient">activité</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ICRED Mali intervient dans de nombreux domaines d'ingénierie au Mali et à l'étranger.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="w-12 h-12 bg-green-pale rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-sm">{service.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
