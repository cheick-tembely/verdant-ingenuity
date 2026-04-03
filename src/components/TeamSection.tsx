const experts = [
  { name: "Ismaïla KEITA", role: "Chef de Mission", profile: "Hydrogéologie & Eau potable", years: 30 },
  { name: "Salia SIDIBE", role: "Études et Travaux", profile: "Fondations & Chaussées", years: 20 },
  { name: "Ahmed Ag Mouhamed Aly", role: "Études & Contrôle", profile: "Hydraulique & Hydro-agricole", years: 25 },
  { name: "Mamba KONATE", role: "Études & Terrain", profile: "Génie Civil & Travaux fluviaux", years: 20 },
  { name: "Dr Mamadou K. N'DIAYE", role: "Études & Appuis", profile: "Expert Agronome", years: 30 },
  { name: "Fousseyni TRAORE", role: "Travaux & Études", profile: "Environnement & Sécurité", years: 20 },
  { name: "Bourama KANADJIGUI", role: "Études & Terrain", profile: "Énergie & Photovoltaïque", years: 20 },
  { name: "Dr Brahima DIALLO", role: "Chef département", profile: "Développement social", years: 15 },
];

const TeamSection = () => {
  return (
    <section id="equipe" className="section-padding" style={{ background: "var(--gradient-section)" }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Notre équipe</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Des <span className="text-gradient">experts</span> qualifiés
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Plus de 17 experts avec une expérience combinée de plusieurs centaines d'années dans l'ingénierie et le développement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {experts.map((expert) => (
            <div
              key={expert.name}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg mb-4">
                {expert.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>
              <h3 className="font-semibold text-foreground text-sm">{expert.name}</h3>
              <p className="text-xs text-secondary font-medium mb-1">{expert.role}</p>
              <p className="text-xs text-muted-foreground mb-3">{expert.profile}</p>
              <div className="flex items-center gap-1.5">
                <div className="h-1 flex-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-primary rounded-full" style={{ width: `${Math.min((expert.years / 30) * 100, 100)}%` }} />
                </div>
                <span className="text-xs font-medium text-primary">{expert.years} ans</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
