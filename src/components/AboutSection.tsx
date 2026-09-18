import { Building2, Calendar, Users, Award, ArrowRight } from "lucide-react";
import icredTeamImg from "@/assets/icred-team.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { icon: Calendar, value: "2013", label: "Année de création", color: "from-primary to-green-medium" },
  { icon: Users, value: "17+", label: "Experts qualifiés", color: "from-green-medium to-secondary" },
  { icon: Building2, value: "16+", label: "Projets majeurs", color: "from-secondary to-green-lime" },
  { icon: Award, value: "9", label: "Partenaires internationaux", color: "from-green-lime to-accent" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="apropos" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-pale rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div ref={ref} className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className={`reveal-left ${isVisible ? "visible" : ""}`}>
            <span className="inline-flex items-center gap-2 bg-green-pale text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              À propos d'ICRED Mali
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-6 leading-tight">
              Un bureau d'études au cœur du{" "}
              <span className="text-gradient">développement</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
              Ingénierie Conseil et de Recherche pour le Développement (ICRED-SARL) est une société de droit malien créée en juin 2013, en tant que bureau d'étude d'ingénieurs conseils.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              La société jouit d'une solide expérience dans divers domaines tels que l'énergie, l'adduction d'eau potable, l'aménagement urbain, les routes, le bâtiment et les études d'impact environnemental.
            </p>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Nos domaines d'expertise
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className={`relative reveal-right ${isVisible ? "visible" : ""}`}>
            <div className="relative">
              <img
                src={icredTeamImg}
                alt="Équipe ICRED Mali"
                className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                width={800}
                height={600}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating stat card */}
            <div className="absolute -bottom-4 left-4 md:-bottom-8 md:-left-8 glass rounded-2xl p-4 md:p-6 shadow-xl border border-border/50" style={{ animation: "pulse-glow 3s ease-in-out infinite" }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient">12+</div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium">Années d'expérience</div>
            </div>
            
            {/* Decorative ring */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-secondary/30 rounded-full hidden md:block" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal-scale ${isVisible ? "visible" : ""} stagger-${i + 3} group relative bg-card rounded-2xl p-6 text-center border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-500 overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-pale/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="text-primary-foreground" size={24} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
