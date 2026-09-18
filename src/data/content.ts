import blueprintsHero from "@/assets/service-heroes/blueprints.jpg";
import constructionHero from "@/assets/service-heroes/construction.jpg";
import planningHero from "@/assets/service-heroes/planning.jpg";
import solarHero from "@/assets/service-heroes/solar.jpg";

export const projects = [
  {
    slug: "centrale-solaire-gongasso-sikasso",
    title: "Étude de faisabilité d'une centrale solaire à Gongasso",
    location: "Gongasso, Sikasso · Mali",
    service: "Énergie solaire",
    serviceUrl: "/energie-solaire-mali",
    image: solarHero,
    summary: "Étude de faisabilité d'une centrale solaire de 100 MWc avec 100 MW de stockage sur un site de 240 hectares.",
    role: "ICRED a réalisé les études de faisabilité nécessaires pour éclairer les choix techniques, économiques et environnementaux du projet.",
    results: ["100 MWc de capacité étudiée", "100 MW de stockage considérés", "240 hectares de site étudiés"],
  },
  {
    slug: "maitrise-ouvrage-solaire-fgsp-bamako",
    title: "Maîtrise d'ouvrage déléguée solaire pour FGSP S.A.",
    location: "Hamdallaye ACI 2000, Bamako · Mali",
    service: "Énergie solaire",
    serviceUrl: "/energie-solaire-mali",
    image: solarHero,
    summary: "Accompagnement en maîtrise d'ouvrage déléguée pour un système photovoltaïque à Bamako.",
    role: "ICRED a accompagné le projet en qualité de maîtrise d'ouvrage déléguée pour structurer et suivre la mise en œuvre du système photovoltaïque.",
    results: ["Projet photovoltaïque en milieu urbain", "Accompagnement de la maîtrise d'ouvrage", "Référence énergie à Bamako"],
  },
  {
    slug: "etudes-bamako-kati-2x2-voies",
    title: "Études du bitumage Bamako–Kati 2×2 voies",
    location: "Bamako–Kati · Mali",
    service: "Routes & infrastructures",
    serviceUrl: "/travaux-routiers-mali",
    image: constructionHero,
    summary: "Études techniques, environnementales et sociales du tronçon, incluant la réhabilitation de voiries.",
    role: "ICRED a contribué aux études nécessaires à la préparation de cette infrastructure routière et à la prise en compte de ses enjeux environnementaux et sociaux.",
    results: ["Études techniques réalisées", "Volet environnemental et social", "Réhabilitation de voiries intégrée"],
  },
  {
    slug: "projet-jikura-eau-helvetas",
    title: "Projet JIKURA : eau potable et solaire avec HELVETAS",
    location: "8 communes rurales · Mali",
    service: "Eau & assainissement",
    serviceUrl: "/forage-eau-mali",
    image: planningHero,
    summary: "Projet comprenant 34 forages et 41 systèmes d'adduction d'eau solaires dans huit communes rurales.",
    role: "ICRED a apporté son expertise aux composantes d'accès à l'eau et d'adduction solaire de ce projet rural.",
    results: ["34 forages", "41 systèmes d'adduction d'eau solaires", "8 communes rurales concernées"],
  },
  {
    slug: "etudes-hydrauliques-dialakoroba-kourouba",
    title: "Études hydrologiques et hydrauliques Dialakoroba–Kourouba",
    location: "Dialakoroba–Kourouba · Mali",
    service: "Routes & hydraulique",
    serviceUrl: "/travaux-routiers-mali",
    image: blueprintsHero,
    summary: "Études hydrologiques et hydrauliques sur 65 km de piste pour le projet PDI-BS.",
    role: "ICRED a réalisé les études hydrologiques et hydrauliques permettant d'intégrer les contraintes de l'eau et du drainage au projet de piste.",
    results: ["65 km de piste étudiés", "Études hydrologiques", "Études hydrauliques pour PDI-BS"],
  },
] as const;

export const articles = [
  { slug: "etude-faisabilite-solaire-mali", title: "Étude de faisabilité solaire au Mali : les décisions à prendre avant d'investir", serviceUrl: "/energie-solaire-mali", service: "Énergie solaire", image: solarHero, intro: "Avant de dimensionner une installation photovoltaïque, il faut confirmer le besoin, le site, les scénarios techniques et les conditions d'exploitation.", sections: [["Partir du besoin énergétique", "L'étude analyse les usages, les consommations et le niveau de continuité de service attendu. Elle évite de choisir un équipement avant d'avoir défini le problème à résoudre."], ["Comparer les scénarios", "Raccordement, solaire, stockage et hybridation doivent être comparés selon les contraintes du site, le budget et la maintenance future."], ["Préparer une décision documentée", "Les conclusions doivent présenter les hypothèses, les risques, les coûts à préciser et une feuille de route pour les études détaillées."]] },
  { slug: "preparer-projet-adduction-eau-potable", title: "Comment préparer un projet d'adduction d'eau potable au Mali ?", serviceUrl: "/forage-eau-mali", service: "Eau & assainissement", image: planningHero, intro: "Un projet d'accès à l'eau fiable se prépare avant le lancement des travaux, avec une analyse du besoin, de la ressource et de l'exploitation.", sections: [["Comprendre les besoins", "La population desservie, les usages et les perspectives d'évolution guident le dimensionnement de la solution."], ["Étudier la ressource et le système", "Captage, pompage, stockage, énergie et réseau doivent former un ensemble cohérent et exploitable."], ["Prévoir l'exploitation", "Une solution durable intègre dès le départ la maintenance, les compétences locales et les coûts d'exploitation."]] },
  { slug: "eies-mali-etude-impact-environnemental-social", title: "EIES au Mali : intégrer les impacts environnementaux et sociaux dès la conception", serviceUrl: "/etude-environnementale-mali", service: "Étude environnementale", image: blueprintsHero, intro: "L'étude d'impact environnemental et social aide les porteurs de projets à identifier les enjeux et à préparer des mesures adaptées.", sections: [["Identifier les enjeux du site", "Les milieux naturels, les populations, les usages et les risques du projet doivent être analysés avec méthode."], ["Préparer des mesures réalistes", "Les mesures d'évitement, de réduction et de suivi doivent pouvoir être appliquées pendant les travaux et l'exploitation."], ["Faire de l'environnement un outil de décision", "Une EIES utile éclaire les choix techniques et améliore l'acceptabilité du projet."]] },
  { slug: "aps-apd-dao-projet-infrastructure", title: "APS, APD et DAO : les documents clés d'un projet d'infrastructure", serviceUrl: "/etude-projet-mali", service: "Étude de projet", image: blueprintsHero, intro: "Ces trois étapes permettent de passer progressivement d'une intention de projet à une consultation structurée des entreprises.", sections: [["L'APS pour cadrer", "L'avant-projet sommaire fixe les grandes options, les besoins et les premières estimations."], ["L'APD pour préciser", "L'avant-projet détaillé approfondit la solution retenue afin de préparer la réalisation."], ["Le DAO pour consulter", "Le dossier d'appel d'offres décrit les travaux attendus afin de comparer les offres sur une base claire."]] },
  { slug: "suivi-controle-travaux-btp", title: "Pourquoi le suivi et le contrôle des travaux sécurisent un projet BTP", serviceUrl: "/genie-civil-mali", service: "Génie civil", image: constructionHero, intro: "Un contrôle régulier aide le maître d'ouvrage à suivre la qualité, les quantités, les délais et les décisions de chantier.", sections: [["Vérifier la conformité", "Les travaux sont observés au regard des plans, prescriptions et décisions validées."], ["Documenter l'avancement", "Les rapports de chantier facilitent les arbitrages et permettent de conserver la trace des décisions."], ["Anticiper les risques", "Une remontée précoce des écarts et contraintes limite les corrections coûteuses en fin de projet."]] },
  { slug: "choisir-bureau-etudes-mali", title: "Comment choisir un bureau d'études pour son projet au Mali ?", serviceUrl: "/bureau-etudes-mali", service: "Bureau d'études", image: constructionHero, intro: "Le bon partenaire ne se choisit pas seulement sur une offre : ses références, son équipe et sa méthode doivent correspondre au projet.", sections: [["Vérifier les références comparables", "Demandez des exemples de missions comparables par secteur, complexité et contexte géographique."], ["Évaluer la méthode", "Une bonne proposition explique la compréhension du besoin, les livrables, les étapes et l'organisation de l'équipe."], ["Clarifier le rôle attendu", "Étude, assistance à maîtrise d'ouvrage, contrôle ou suivi : le périmètre doit être défini avant le démarrage."]] },
] as const;
