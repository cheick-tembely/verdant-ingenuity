import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown, ChevronUp, Users, Briefcase, Award, Image as ImageIcon, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import organigrammeImg from "@/assets/organigramme.png";

interface OrgNode {
  name: string;
  title: string;
  department?: string;
  icon: typeof Users;
  children?: OrgNode[];
}

const orgData: OrgNode = {
  name: "Lansine KEITA",
  title: "Directeur Général",
  department: "Direction Générale",
  icon: Award,
  children: [
    {
      name: "Oumou KEITA",
      title: "Assistante de Direction",
      department: "Direction Générale",
      icon: Briefcase,
      children: [
        {
          name: "Nigué Drissa SOGOBA",
          title: "Chef de Département",
          department: "Études, Contrôle & Travaux d'Infrastructures",
          icon: Briefcase,
          children: [
            { name: "Fatoumata SANOGO", title: "Chargée des Offres", department: "Études & Travaux", icon: Users },
            { name: "Adama DOUMBIA", title: "Division Études", department: "Études & Travaux", icon: Users },
            { name: "Sidiki KEDÉ, Aboubacar DEMBÉLÉ, Aliou Badra", title: "Division Travaux", department: "Études & Travaux", icon: Users },
            { name: "Mohamed DAO", title: "Division Topo", department: "Études & Travaux", icon: Users },
          ],
        },
        {
          name: "Moussa FOFANA",
          title: "Chef de Département",
          department: "Finances et Ressources Humaines",
          icon: Briefcase,
        },
        {
          name: "Ousseynou DIA",
          title: "Chef de Département",
          department: "Énergie et Génie Électrique",
          icon: Briefcase,
          children: [
            { name: "Modibo KEITA", title: "Électro-mécanicien", department: "Énergie & Génie Électrique", icon: Users },
            { name: "Sidiki COULIBALY", title: "Électro-mécanicien", department: "Énergie & Génie Électrique", icon: Users },
          ],
        },
        {
          name: "Sory COULIBALY",
          title: "Chef de Département",
          department: "Environnement, Suivi et Évaluation",
          icon: Briefcase,
        },
      ],
    },
  ],
};

const OrgNodeCard = ({
  node,
  level = 0,
  isVisible,
  delay = 0,
}: {
  node: OrgNode;
  level?: number;
  isVisible: boolean;
  delay?: number;
}) => {
  const [expanded, setExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;
  const Icon = node.icon;

  const levelColors = [
    "border-primary bg-gradient-primary text-primary-foreground",
    "border-secondary bg-card text-foreground",
    "border-border bg-card text-foreground",
  ];

  const cardStyle = level === 0 ? levelColors[0] : levelColors[Math.min(level, 2)];
  const initials = node.name.split(" ").map((n) => n[0]).join("").slice(0, 2);

  return (
    <div className="flex flex-col items-center">
      {/* Connector line from parent */}
      {level > 0 && <div className="w-px h-6 bg-border" />}

      {/* Card */}
      <div
        className={`reveal-scale ${isVisible ? "visible" : ""} relative rounded-2xl border-2 ${cardStyle} p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer min-w-[200px] max-w-[280px]`}
        style={{ transitionDelay: `${delay * 100}ms` }}
        onClick={() => hasChildren && setExpanded(!expanded)}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
              level === 0
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-gradient-primary text-primary-foreground"
            }`}
          >
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className={`font-bold text-sm leading-tight ${level === 0 ? "text-primary-foreground" : "text-foreground"}`}>
              {node.name}
            </h4>
            <p className={`text-xs font-semibold ${level === 0 ? "text-primary-foreground/80" : "text-secondary"}`}>
              {node.title}
            </p>
            {node.department && (
              <p className={`text-xs mt-0.5 ${level === 0 ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                {node.department}
              </p>
            )}
          </div>
          {hasChildren && (
            <div className={`p-1 rounded-lg ${level === 0 ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
              {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          )}
        </div>
      </div>

      {/* Children */}
      {hasChildren && expanded && (
        <div className="flex flex-col items-center">
          <div className="w-px h-6 bg-border" />
          <div className="relative">
            {/* Horizontal connector */}
            {node.children!.length > 1 && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-border" style={{ width: "calc(100% - 200px)" }} />
            )}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {node.children!.map((child, i) => (
                <OrgNodeCard
                  key={child.name}
                  node={child}
                  level={level + 1}
                  isVisible={isVisible}
                  delay={delay + i + 1}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const OrgChartSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [showSchema, setShowSchema] = useState(false);

  return (
    <section id="organigramme" className="section-padding relative overflow-hidden bg-card">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto relative">
        <div className={`text-center mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <span className="inline-flex items-center gap-2 bg-green-pale text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Users size={16} />
            Organisation
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Notre <span className="text-gradient">organigramme</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            La structure de direction d'ICRED Mali — cliquez sur un poste pour développer ou réduire ses équipes.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button
              onClick={() => setShowSchema(true)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <ImageIcon size={16} />
              Voir le schéma
            </Button>
            <Button asChild variant="outline">
              <a href={organigrammeImg} download="organigramme-icred-mali.png">
                <Download size={16} />
                Télécharger (PNG)
              </a>
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex justify-center min-w-[600px]">
            <OrgNodeCard node={orgData} isVisible={isVisible} />
          </div>
        </div>
      </div>

      {showSchema && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowSchema(false)}
        >
          <button
            onClick={() => setShowSchema(false)}
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
          <div
            className="relative max-w-6xl w-full max-h-[90vh] overflow-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={organigrammeImg}
              alt="Organigramme officiel d'ICRED Mali — schéma fidèle"
              className="w-full h-auto"
              loading="lazy"
              width={1200}
              height={896}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default OrgChartSection;
