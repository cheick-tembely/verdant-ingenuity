import { CheckCircle2 } from "lucide-react";
import energyImg from "@/assets/energy-img.jpg";

const references = [
  "Études de faisabilité d'une centrale solaire de 100 MWc avec 100 MW de stockage à Gongasso, région Sikasso",
  "Maîtrise d'ouvrage déléguée pour l'installation d'un système solaire photovoltaïque chez FGSP S.A",
  "Étude de faisabilité d'une centrale photovoltaïque de 50 MWc à San – Bienso",
  "Études techniques pour l'aménagement et bitumage en 2x2 voies du tronçon Bamako-Koulouba-Kati",
  "Réalisation de 34 forages et 41 systèmes d'adduction d'eau dans le cadre du projet JIKURA de HELVETAS",
  "Hybridation au solaire photovoltaïque du réseau électrique du bureau SNV de Bamako",
  "Contrôle des travaux d'entretien routier à Tessalit pour l'AGEROUTE",
  "Études hydrologiques et hydrauliques de 65 km de piste pour PDI-BS",
];

const partners = [
  "EGIS International (France)", "Fluvial Conseil (France/Mali)", "SERTAS Mali",
  "BETICO Mali", "SID Ingénierie", "TED (Burkina Faso)",
  "Huawei Mali", "ADG Valve (France)",
];

const ReferencesSection = () => {
  return (
    <section id="references" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Références</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Projets <span className="text-gradient">réalisés</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-4">
            {references.map((ref, i) => (
              <div key={i} className="flex gap-3 items-start bg-card rounded-lg p-4 border border-border hover:border-primary/20 transition-colors">
                <CheckCircle2 className="text-secondary mt-0.5 shrink-0" size={18} />
                <p className="text-sm text-foreground/80 leading-relaxed">{ref}</p>
              </div>
            ))}
          </div>
          <div>
            <img
              src={energyImg}
              alt="Centrale solaire réalisée par ICRED"
              className="rounded-2xl shadow-lg w-full object-cover aspect-video mb-8"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-xl font-bold mb-4">Partenaires nationaux & internationaux</h3>
              <div className="grid grid-cols-2 gap-3">
                {partners.map((partner) => (
                  <div key={partner} className="text-sm text-primary-foreground/80 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-lime shrink-0" />
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
