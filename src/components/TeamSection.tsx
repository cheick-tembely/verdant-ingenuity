import { useScrollReveal } from "@/hooks/useScrollReveal";

const experts = [
  { name: "Ismaïla KEITA", role: "Chef de Mission", profile: "Hydrogéologie & Eau potable", years: 30 },
  { name: "Salia SIDIBE", role: "Études et Travaux", profile: "Fondations & Chaussées", years: 20 },
  { name: "Ahmed Ag M. Aly", role: "Études & Contrôle", profile: "Hydraulique & Hydro-agricole", years: 25 },
  { name: "Mamba KONATE", role: "Études & Terrain", profile: "Génie Civil & Travaux fluviaux", years: 20 },
  { name: "Dr M. K. N'DIAYE", role: "Études & Appuis", profile: "Expert Agronome", years: 30 },
  { name: "Fousseyni TRAORE", role: "Travaux & Études", profile: "Environnement & Sécurité", years: 20 },
  { name: "Bourama KANADJIGUI", role: "Études & Terrain", profile: "Énergie & Photovoltaïque", years: 20 },
  { name: "Dr Brahima DIALLO", role: "Chef département", profile: "Développement social", years: 15 },
];

const TeamSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="equipe" className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-section)" }}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto relative">
        <div className={`text-center mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <span className="inline-flex items-center gap-2 bg-green-pale text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Notre équipe
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Des <span className="text-gradient">experts</span> qualifiés
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Plus de 17 experts avec une expérience combinée de plusieurs centaines d'années dans l'ingénierie.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert, i) => (
            <div
              key={expert.name}
              className={`reveal-scale ${isVisible ? "visible" : ""} stagger-${Math.min(i + 1, 8)} group bg-card rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden`}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg mb-5 group-hover:scale-110 group-hover:rounded-xl transition-all duration-300 shadow-lg">
                {expert.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{expert.name}</h3>
              <p className="text-xs text-secondary font-semibold mb-1">{expert.role}</p>
              <p className="text-xs text-muted-foreground mb-4">{expert.profile}</p>
              <div className="flex items-center gap-2">
                <div className="h-1.5 flex-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                    style={{ width: isVisible ? `${Math.min((expert.years / 30) * 100, 100)}%` : "0%" }}
                  />
                </div>
                <span className="text-xs font-bold text-primary">{expert.years} ans</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
