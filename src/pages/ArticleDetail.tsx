import { ArrowRight, Phone } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { articles } from "@/data/content";
import { usePageSeo, useStructuredData } from "@/hooks/usePageSeo";
import { whatsappUrl } from "@/lib/whatsapp";

const articleAdditions: Record<string, readonly (readonly [string, string])[]> = {
  "etude-faisabilite-solaire-mali": [
    ["Vérifier les données disponibles", "Plans du site, factures d'électricité, courbes de consommation, équipements existants et contraintes d'accès sont réunis avant le dimensionnement. Lorsque les données sont incomplètes, l'étude doit le signaler clairement et préciser les relevés complémentaires nécessaires."],
    ["Anticiper l'exploitation et la maintenance", "Le projet doit prévoir qui assurera le suivi des équipements, la disponibilité des pièces, les conditions de nettoyage et les règles de sécurité. Une solution performante sur le papier doit aussi rester exploitable durablement par les équipes sur place."],
    ["Comparer le coût global plutôt que le seul prix d'achat", "L'investissement initial est important, mais il faut également examiner la durée de vie attendue, les besoins de maintenance, les coûts de remplacement et les conséquences d'une interruption de service. Cette comparaison rend la décision plus robuste."],
  ],
  "preparer-projet-adduction-eau-potable": [
    ["Associer les futurs usagers dès le départ", "Les usages de l'eau, les points de desserte, les périodes de forte demande et l'organisation locale influencent directement la solution. Les échanges avec les collectivités et les communautés permettent d'éviter un système mal adapté aux réalités quotidiennes."],
    ["Dimensionner l'ensemble de la chaîne", "Un forage seul ne garantit pas un service d'eau potable. La ressource, le pompage, l'énergie, le stockage, le réseau, les bornes-fontaines et la qualité de l'eau doivent être étudiés comme un seul système cohérent."],
    ["Définir un modèle d'exploitation réaliste", "Avant les travaux, il est utile de préciser les responsabilités : entretien, collecte éventuelle des contributions, remontée des pannes et approvisionnement en pièces. Cette organisation est aussi importante que les ouvrages eux-mêmes pour assurer la continuité du service."],
  ],
  "eies-mali-etude-impact-environnemental-social": [
    ["Étudier le site et ses usages réels", "L'analyse ne se limite pas aux limites cadastrales du projet. Elle tient compte des voies d'accès, des zones habitées, des activités économiques, des ressources naturelles, des périodes sensibles et des personnes susceptibles d'être concernées."],
    ["Hiérarchiser les mesures de gestion", "Une étude utile cherche d'abord à éviter les impacts, puis à les réduire lorsque cela est impossible. Les mesures proposées doivent être concrètes, attribuées à un responsable, budgétées lorsque nécessaire et suivies pendant les travaux comme pendant l'exploitation."],
    ["Prévoir le dialogue et le suivi", "Informer les parties prenantes, recueillir les préoccupations et mettre en place un mécanisme de suivi renforcent la qualité du projet. Les constats de terrain permettent ensuite d'ajuster les mesures lorsque des risques nouveaux apparaissent."],
  ],
  "aps-apd-dao-projet-infrastructure": [
    ["Faire valider les choix au bon moment", "L'APS permet de décider des grandes orientations avant de détailler les études. Passer trop tôt à l'APD ou au DAO peut entraîner des reprises coûteuses si le besoin, le budget ou les contraintes de terrain évoluent."],
    ["Rendre les pièces cohérentes entre elles", "Plans, notes techniques, quantitatifs, calendrier et prescriptions doivent se répondre. Des documents contradictoires créent des incertitudes dans les offres et fragilisent ensuite le suivi du chantier."],
    ["Préparer une consultation équitable", "Un bon DAO définit clairement le périmètre, les critères techniques, les exigences de qualité et les livrables attendus. Il permet aux entreprises de comprendre le besoin et au maître d'ouvrage de comparer les offres sur une base fiable."],
  ],
  "suivi-controle-travaux-btp": [
    ["Organiser les contrôles dès le démarrage", "Les points de contrôle, essais, validations de matériaux et rapports doivent être prévus avant le chantier. Cette préparation évite de découvrir trop tard qu'une étape importante n'a pas été documentée ou vérifiée."],
    ["Suivre aussi les délais et les quantités", "Le contrôle ne concerne pas uniquement l'aspect visible de l'ouvrage. Il aide à comparer les quantités exécutées aux prévisions, à comprendre les retards et à identifier rapidement les décisions nécessaires pour maintenir le projet sur sa trajectoire."],
    ["Conserver une trace des décisions", "Comptes rendus, constats, plans mis à jour et observations de chantier servent de référence à tous les intervenants. Cette documentation facilite les arbitrages, les réceptions et l'exploitation future de l'ouvrage."],
  ],
  "choisir-bureau-etudes-mali": [
    ["Comparer des compétences réellement utiles", "Le meilleur partenaire n'est pas nécessairement celui qui propose le plus grand nombre de services. Vérifiez les compétences directement liées à votre projet, les profils mobilisés, la disponibilité de l'équipe et les expériences dans des contextes comparables."],
    ["Lire l'offre au-delà du montant", "Une proposition solide détaille la compréhension du besoin, la méthode, les livrables, le calendrier, les hypothèses et les limites de la mission. Ces éléments permettent de comparer les offres de manière plus fiable que le seul prix."],
    ["Préparer une collaboration efficace", "Dès le lancement, définissez les interlocuteurs, les informations à fournir, les étapes de validation et le format des livrables. Un cadre de travail clair améliore la qualité des études et limite les retards liés aux décisions tardives."],
  ],
};

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);
  const sections = article ? [...article.sections, ...(articleAdditions[article.slug] ?? [])] : [];
  usePageSeo(article ? `${article.title} | ICRED Mali` : "Article introuvable | ICRED Mali", article?.intro ?? "Cet article n'existe pas.", `/blog/${slug ?? ""}`, "article", `${article?.service ?? "ingénierie"} Mali, ICRED Mali`, { image: article?.image, robots: article ? undefined : "noindex, follow" });
  useStructuredData(`article-schema-${slug}`, article ? { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.intro, image: article.image, mainEntityOfPage: `https://icred-mali.com/blog/${article.slug}`, publisher: { "@id": "https://icred-mali.com/#organization" } } : {});
  if (!article) return null;
  return <div className="min-h-screen bg-background"><Navbar /><main><section className="relative isolate overflow-hidden pt-36 pb-20 px-4 text-primary-foreground"><img src={article.image} alt="Illustration d'ingénierie ICRED" className="absolute inset-0 -z-20 h-full w-full object-cover" /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/55" /><div className="container mx-auto max-w-4xl"><p className="text-secondary font-semibold uppercase tracking-[.2em] text-xs mb-5">Conseils · {article.service}</p><h1 className="text-4xl md:text-6xl font-bold">{article.title}</h1><p className="mt-6 text-lg leading-relaxed text-primary-foreground/85">{article.intro}</p></div></section><section className="section-padding"><div className="container mx-auto max-w-4xl grid lg:grid-cols-[1fr_.55fr] gap-12"><div><p className="mb-10 rounded-xl border-l-4 border-primary bg-green-pale px-5 py-4 leading-relaxed text-foreground/80">Cet article propose des repères généraux. Chaque projet doit être étudié selon son site, ses objectifs, ses contraintes et les exigences applicables.</p><div className="space-y-10">{sections.map(([heading, text]) => <article key={heading}><h2 className="text-3xl font-bold mb-4">{heading}</h2><p className="text-muted-foreground text-lg leading-8">{text}</p></article>)}</div></div><aside className="rounded-2xl bg-card border border-border p-7 h-fit"><p className="text-sm font-semibold text-primary">Expertise ICRED</p><h2 className="mt-2 text-xl font-bold">Besoin d'un accompagnement ?</h2><p className="mt-3 text-muted-foreground">Découvrez l'expertise ICRED liée à ce sujet et échangez avec notre équipe sur votre projet.</p><Link to={article.serviceUrl} className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">Voir le service <ArrowRight size={17} /></Link><a href={whatsappUrl(`Bonjour ICRED, je souhaite un accompagnement en ${article.service}.`)} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold">Demander un devis <ArrowRight size={17} /></a><a href="tel:+22376085847" className="mt-4 inline-flex items-center gap-2 font-semibold text-primary"><Phone size={17} /> Appeler</a></aside></div></section></main><Footer /></div>;
};
export default ArticleDetail;
