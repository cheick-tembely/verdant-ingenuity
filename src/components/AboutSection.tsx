import { Building2, Calendar, Users, Award } from "lucide-react";
import aboutImg from "@/assets/about-img.jpg";

const stats = [
  { icon: Calendar, value: "2013", label: "Année de création" },
  { icon: Users, value: "17+", label: "Experts qualifiés" },
  { icon: Building2, value: "16+", label: "Projets majeurs" },
  { icon: Award, value: "9", label: "Partenaires" },
];

const AboutSection = () => {
  return (
    <section id="apropos" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">À propos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Un bureau d'études au cœur du <span className="text-gradient">développement</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ingénierie Conseil et de Recherche pour le Développement (ICRED-SARL) est une société de droit malien créée en juin 2013, en tant que bureau d'étude d'ingénieurs conseils.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              La société jouit d'une solide expérience dans divers domaines tels que l'énergie, l'adduction d'eau potable, l'aménagement urbain, les routes, le bâtiment et les études d'impact environnemental. ICRED Mali entretient de bonnes relations de partenariat avec de grandes sociétés nationales et internationales.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-green-pale rounded-xl p-4 text-center">
                  <stat.icon className="mx-auto mb-2 text-primary" size={24} />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={aboutImg}
              alt="Ingénieurs ICRED sur le terrain"
              className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-5 shadow-lg">
              <div className="text-3xl font-bold">12+</div>
              <div className="text-sm text-primary-foreground/80">Années d'expérience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
