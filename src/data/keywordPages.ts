import constructionHero from "@/assets/service-heroes/construction.jpg";
import engineerHero from "@/assets/service-heroes/engineer.jpg";
import planningHero from "@/assets/service-heroes/planning.jpg";
import blueprintsHero from "@/assets/service-heroes/blueprints.jpg";
import projectHero from "@/assets/service-heroes/project.jpg";
import solarHero from "@/assets/service-heroes/solar.jpg";

export type KeywordPageData = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  keywords: string;
  image: string;
  serviceType: string;
  benefits: string[];
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { question: string; answer: string }[];
  relatedLinks: { label: string; href: string }[];
};

export const keywordPages: KeywordPageData[] = [
  {
    slug: "assistance-maitrise-ouvrage-mali",
    eyebrow: "Pilotage & décision",
    title: "Assistance à maîtrise d'ouvrage au Mali",
    description: "ICRED accompagne les maîtres d'ouvrage au Mali dans le cadrage, la préparation, la consultation et le suivi de leurs projets techniques et d'infrastructure.",
    keywords: "assistance à maîtrise d'ouvrage Mali, AMO Bamako, accompagnement maître d'ouvrage, conseil projet infrastructure Mali",
    image: engineerHero,
    serviceType: "Assistance à maîtrise d'ouvrage",
    benefits: ["Un interlocuteur technique indépendant", "Des décisions documentées et un suivi traçable", "Une coordination adaptée aux contraintes du projet"],
    sections: [
      { heading: "Un appui technique pour décider avec méthode", paragraphs: ["L'assistance à maîtrise d'ouvrage aide le porteur de projet à clarifier son besoin, structurer ses priorités et organiser les études nécessaires. Au Mali, les projets doivent souvent composer avec des contraintes de site, de financement, de calendrier et de capacité d'exploitation. ICRED transforme ces contraintes en éléments de décision compréhensibles.", "Notre équipe intervient aux côtés des collectivités, entreprises, institutions et partenaires au développement pour sécuriser les choix avant le lancement des travaux."] },
      { heading: "Cadrer le besoin et les objectifs", paragraphs: ["La mission commence par l'écoute des objectifs, l'analyse du contexte et l'identification des utilisateurs ou bénéficiaires. Nous aidons à distinguer les besoins indispensables, les options possibles et les contraintes qui peuvent modifier le programme.", "Cette phase permet de formaliser une note de cadrage, un périmètre d'intervention et une feuille de route réaliste avant d'engager les études détaillées."] },
      { heading: "Préparer les études et les consultations", paragraphs: ["ICRED peut contribuer à définir les termes de référence, analyser les offres techniques, préparer les pièces de consultation et organiser les interfaces entre les différents experts. Le maître d'ouvrage conserve ainsi une vision claire des livrables attendus, des responsabilités et des critères de choix.", "L'objectif est de disposer de documents cohérents, exploitables par les décideurs, les bureaux d'études et les entreprises."] },
      { heading: "Suivre la réalisation et les résultats", paragraphs: ["Pendant la réalisation, l'assistance porte sur le suivi des délais, la lecture des rapports, la coordination des intervenants et la préparation des arbitrages. Les écarts sont signalés avec leurs conséquences et les décisions sont conservées dans une documentation utile.", "Cet accompagnement favorise une meilleure maîtrise de la qualité, du budget et de la durabilité de l'ouvrage."] },
    ],
    faqs: [
      { question: "Quelle est la différence entre l'AMO et la maîtrise d'ouvrage déléguée ?", answer: "L'AMO conseille et accompagne le maître d'ouvrage dans ses décisions, tandis que la maîtrise d'ouvrage déléguée peut confier à un mandataire certaines responsabilités de conduite du projet selon un contrat défini." },
      { question: "À quel moment solliciter une assistance à maîtrise d'ouvrage ?", answer: "Il est préférable d'intervenir dès la définition du besoin, avant les études et la consultation, mais une AMO peut aussi sécuriser un projet déjà engagé ou un chantier en cours." },
      { question: "Quels projets peuvent bénéficier d'une AMO au Mali ?", answer: "Les projets d'eau, d'énergie, de routes, de bâtiments, d'aménagement et d'infrastructures publiques ou privées peuvent bénéficier d'un accompagnement adapté à leur complexité." },
    ],
    relatedLinks: [{ label: "Ingénierie conseil au Mali", href: "/ingenierie-conseil-mali" }, { label: "Étude de projet au Mali", href: "/etude-projet-mali" }, { label: "Dossier d'appel d'offres au Mali", href: "/dossier-appel-offres-mali" }],
  },
  {
    slug: "etude-hydrologique-mali",
    eyebrow: "Eau, drainage & résilience",
    title: "Étude hydrologique au Mali",
    description: "ICRED réalise des études hydrologiques au Mali pour analyser les pluies, les écoulements, les bassins versants et les risques liés à l'eau pour les projets d'infrastructure.",
    keywords: "étude hydrologique Mali, étude hydrologique Bamako, analyse des écoulements Mali, bassin versant Mali, drainage projet",
    image: planningHero,
    serviceType: "Étude hydrologique",
    benefits: ["Analyse des pluies et des bassins versants", "Identification des zones sensibles aux ruissellements", "Données utiles au dimensionnement des ouvrages"],
    sections: [
      { heading: "Comprendre l'eau avant de concevoir", paragraphs: ["Une étude hydrologique décrit le comportement de l'eau sur un site ou un bassin versant. Elle apporte les données nécessaires pour concevoir des routes, pistes, ponts, réseaux, ouvrages de drainage et aménagements plus résistants aux épisodes pluvieux.", "Au Mali, l'analyse doit tenir compte de la saisonnalité des pluies, de la nature des sols, de la topographie et de l'évolution des usages du territoire."] },
      { heading: "Analyser les pluies et les bassins versants", paragraphs: ["Nous rassemblons les informations disponibles, observons la morphologie du terrain et caractérisons les zones contributives. L'analyse permet de comprendre les chemins préférentiels du ruissellement et les points où l'eau peut se concentrer.", "Selon les données disponibles, les hypothèses et les objectifs du projet sont explicités afin que les résultats puissent être interprétés correctement."] },
      { heading: "Prévenir les risques pour les infrastructures", paragraphs: ["Les résultats hydrologiques servent à repérer les franchissements, les zones d'érosion, les points bas et les secteurs exposés à la submersion. Ils orientent ensuite le choix des ouvrages, des protections et des dispositions de drainage.", "Cette approche réduit le risque de sous-dimensionnement et contribue à la pérennité des routes, bâtiments, réseaux et aménagements."] },
      { heading: "Des livrables utilisables par les équipes projet", paragraphs: ["Une étude claire présente les données, les hypothèses, la méthode, les limites et les recommandations. Elle peut alimenter les études techniques, les notes de calcul, les dossiers d'appel d'offres et le suivi des travaux.", "ICRED articule l'analyse hydrologique avec la topographie, l'hydraulique et la conception générale du projet."] },
    ],
    faqs: [
      { question: "Pourquoi réaliser une étude hydrologique avant une route ?", answer: "Elle permet d'identifier les écoulements et les franchissements à prendre en compte afin de mieux protéger la chaussée, les ouvrages et les usagers." },
      { question: "Une étude hydrologique est-elle nécessaire pour un projet urbain ?", answer: "Oui, notamment lorsque le projet modifie les surfaces imperméabilisées, les réseaux de drainage ou les écoulements naturels." },
      { question: "Quelle différence entre hydrologie et hydraulique ?", answer: "L'hydrologie étudie notamment les pluies et les apports d'eau, tandis que l'hydraulique s'intéresse au fonctionnement et au dimensionnement des écoulements et des ouvrages." },
    ],
    relatedLinks: [{ label: "Travaux routiers au Mali", href: "/travaux-routiers-mali" }, { label: "Topographie au Mali", href: "/topographie-mali" }, { label: "Bureau d'études hydraulique au Mali", href: "/bureau-etudes-hydraulique-mali" }],
  },
  {
    slug: "bureau-etudes-hydraulique-mali",
    eyebrow: "Eau & ouvrages hydrauliques",
    title: "Bureau d'études hydraulique au Mali",
    description: "ICRED accompagne les projets hydrauliques au Mali par les études de ressources, le dimensionnement des ouvrages, le drainage et la préparation des travaux.",
    keywords: "bureau d'études hydraulique Mali, étude hydraulique Bamako, ouvrages hydrauliques Mali, drainage, adduction d'eau",
    image: blueprintsHero,
    serviceType: "Bureau d'études hydraulique",
    benefits: ["Une approche de la ressource à l'ouvrage", "Des solutions adaptées à l'exploitation locale", "Une coordination entre eau, énergie, terrain et travaux"],
    sections: [
      { heading: "Une expertise hydraulique adaptée aux réalités du Mali", paragraphs: ["Les projets hydrauliques associent une ressource, des ouvrages, des équipements et une organisation d'exploitation. ICRED aide les maîtres d'ouvrage à construire une solution cohérente pour l'eau potable, le drainage, l'irrigation ou les franchissements.", "Notre approche tient compte du site, des besoins, de la maintenance, des compétences disponibles et des conditions de réalisation."] },
      { heading: "Eau potable, pompage et adduction", paragraphs: ["Pour un projet d'accès à l'eau, nous analysons les besoins, la ressource, le captage, le pompage, le stockage et les réseaux. Les choix techniques sont étudiés comme un système complet, avec une attention portée à la qualité du service et à la continuité de l'exploitation.", "Les études peuvent préparer les consultations, les estimations et le suivi des travaux de forage ou d'adduction."] },
      { heading: "Drainage, ouvrages et franchissements", paragraphs: ["Un ouvrage hydraulique doit résister aux écoulements prévus et s'intégrer au terrain. Nous contribuons à l'analyse des points bas, des buses, des dalots, des fossés, des ouvrages de traversée et des protections contre l'érosion.", "La combinaison de la topographie, de l'hydrologie et de l'hydraulique permet de limiter les reprises et les dégradations prématurées."] },
      { heading: "Concevoir pour exploiter et maintenir", paragraphs: ["Le dimensionnement ne suffit pas : les ouvrages doivent pouvoir être inspectés, entretenus et réparés. Nous intégrons les conditions d'accès, la disponibilité des pièces, les besoins de formation et les coûts d'exploitation dans les recommandations.", "Cette vision favorise des infrastructures durables et compatibles avec les capacités locales."] },
    ],
    faqs: [
      { question: "Quels projets traite un bureau d'études hydraulique ?", answer: "Il peut intervenir sur l'eau potable, les forages, l'adduction, le drainage, les ouvrages de franchissement, l'irrigation et les infrastructures exposées aux écoulements." },
      { question: "ICRED intervient-il uniquement à Bamako ?", answer: "ICRED est basé à Bamako et accompagne des projets au Mali et en Afrique de l'Ouest selon le périmètre et les besoins de la mission." },
      { question: "Une étude hydraulique inclut-elle le suivi des travaux ?", answer: "Elle peut être complétée par une assistance au maître d'ouvrage, un suivi de chantier et un contrôle de conformité des ouvrages réalisés." },
    ],
    relatedLinks: [{ label: "Forage d'eau au Mali", href: "/forage-eau-mali" }, { label: "Étude hydrologique au Mali", href: "/etude-hydrologique-mali" }, { label: "Génie civil au Mali", href: "/genie-civil-mali" }],
  },
  {
    slug: "dossier-appel-offres-mali",
    eyebrow: "Consultation & marchés",
    title: "Dossier d'appel d'offres au Mali",
    description: "ICRED prépare et structure les dossiers d'appel d'offres au Mali pour aider les maîtres d'ouvrage à consulter les entreprises sur une base technique claire.",
    keywords: "dossier d'appel d'offres Mali, DAO Mali, préparation appel d'offres, dossier consultation entreprises Bamako, cahier des charges Mali",
    image: projectHero,
    serviceType: "Préparation de dossier d'appel d'offres",
    benefits: ["Des pièces techniques cohérentes", "Un périmètre de travaux clairement défini", "Une consultation plus facile à comparer et à suivre"],
    sections: [
      { heading: "Transformer une étude en consultation exploitable", paragraphs: ["Un dossier d'appel d'offres doit permettre aux entreprises de comprendre le besoin, les contraintes, les travaux attendus et les conditions de remise des offres. ICRED accompagne cette transformation à partir des études disponibles et des objectifs du maître d'ouvrage.", "Un DAO bien préparé réduit les ambiguïtés, facilite la comparaison des propositions et prépare un suivi plus rigoureux de l'exécution."] },
      { heading: "Structurer les pièces techniques", paragraphs: ["Selon le projet, le dossier peut réunir les plans, les spécifications techniques, les quantitatifs, les prescriptions, le calendrier indicatif, les critères de qualité et les modalités de contrôle.", "La cohérence entre les documents est essentielle : les plans, les quantités et les descriptions doivent couvrir le même périmètre et utiliser des hypothèses compatibles."] },
      { heading: "Préparer une consultation équitable", paragraphs: ["Les exigences doivent être précises sans imposer inutilement une solution fermée. Les entreprises doivent pouvoir chiffrer sur une base comparable et comprendre les livrables attendus.", "ICRED peut contribuer à clarifier les critères techniques, les responsabilités, les essais, les délais et les conditions de réception."] },
      { heading: "Accompagner l'analyse et la mise en œuvre", paragraphs: ["Après la remise des offres, une lecture technique structurée aide à repérer les écarts, les omissions et les hypothèses qui influencent le prix ou le calendrier. Cette analyse complète l'examen administratif et financier réalisé par le maître d'ouvrage.", "Le dossier peut ensuite servir de référence pour les réunions, les contrôles, les attachements et la réception des travaux."] },
    ],
    faqs: [
      { question: "Qu'est-ce qu'un DAO ?", answer: "Le dossier d'appel d'offres regroupe les informations et pièces nécessaires pour consulter des entreprises et recevoir des offres comparables pour un projet." },
      { question: "Un DAO peut-il être préparé à partir d'une étude APS ?", answer: "Le niveau de précision dépend du projet. Un dossier complet nécessite généralement des études suffisamment avancées pour définir les travaux, les quantités et les exigences techniques." },
      { question: "ICRED peut-il aider à analyser les offres ?", answer: "Oui, ICRED peut apporter une analyse technique des offres et relever les écarts entre les propositions et les exigences du dossier." },
    ],
    relatedLinks: [{ label: "Étude de projet au Mali", href: "/etude-projet-mali" }, { label: "Études techniques au Mali", href: "/etudes-techniques-mali" }, { label: "Assistance à maîtrise d'ouvrage", href: "/assistance-maitrise-ouvrage-mali" }],
  },
  {
    slug: "controle-technique-travaux-mali",
    eyebrow: "Qualité & chantier",
    title: "Contrôle technique des travaux au Mali",
    description: "ICRED accompagne le contrôle technique des travaux au Mali pour vérifier la conformité, la qualité, l'avancement et la bonne documentation des chantiers.",
    keywords: "contrôle technique travaux Mali, contrôle chantier Bamako, contrôle qualité travaux, suivi conformité chantier Mali",
    image: constructionHero,
    serviceType: "Contrôle technique des travaux",
    benefits: ["Des contrôles fondés sur les plans et prescriptions", "Une traçabilité des constats et décisions", "Une alerte précoce sur les écarts et les risques"],
    sections: [
      { heading: "Sécuriser la qualité et la conformité", paragraphs: ["Le contrôle technique des travaux apporte au maître d'ouvrage une lecture indépendante de l'exécution. Il consiste à comparer les travaux aux plans, aux spécifications, aux quantités, au calendrier et aux règles de qualité définies pour le projet.", "Cette vigilance permet d'identifier les écarts avant qu'ils ne deviennent difficiles ou coûteux à corriger."] },
      { heading: "Contrôler les étapes sensibles", paragraphs: ["Les contrôles sont organisés selon les risques du chantier : implantation, terrassements, fondations, matériaux, réseaux, ouvrages hydrauliques, équipements, essais et réception. Les points de contrôle sont définis en fonction de la nature et de la complexité des travaux.", "Les observations sont documentées avec les actions attendues, les responsables et les délais de traitement."] },
      { heading: "Suivre les quantités, les délais et les décisions", paragraphs: ["Un chantier ne se mesure pas uniquement à ce qui est visible. Le suivi porte également sur les quantités exécutées, les situations, les modifications, les retards et les décisions qui peuvent affecter le coût ou la qualité.", "Des comptes rendus réguliers facilitent les arbitrages et maintiennent une mémoire commune entre le maître d'ouvrage, l'entreprise et les autres intervenants."] },
      { heading: "Préparer une réception fiable", paragraphs: ["La réception doit s'appuyer sur des vérifications, des essais, des documents et une liste claire des éventuelles réserves. Le contrôle technique aide à rassembler ces éléments et à suivre la levée des réserves.", "L'objectif est de remettre un ouvrage conforme, exploitable et documenté pour sa maintenance future."] },
    ],
    faqs: [
      { question: "Que vérifie le contrôle technique des travaux ?", answer: "Il vérifie notamment la conformité aux plans et prescriptions, la qualité des matériaux, les méthodes d'exécution, les quantités, les essais, les délais et le traitement des écarts." },
      { question: "Quelle différence entre suivi et contrôle de chantier ?", answer: "Le suivi observe l'avancement et facilite la coordination, tandis que le contrôle vérifie plus précisément la conformité et la qualité des travaux par rapport aux exigences du projet." },
      { question: "Le contrôle technique remplace-t-il l'entreprise ?", answer: "Non. L'entreprise reste responsable de l'exécution ; le contrôle apporte au maître d'ouvrage une vérification indépendante et des constats documentés." },
    ],
    relatedLinks: [{ label: "Génie civil au Mali", href: "/genie-civil-mali" }, { label: "Entreprise BTP au Mali", href: "/entreprise-btp-mali" }, { label: "Assistance à maîtrise d'ouvrage", href: "/assistance-maitrise-ouvrage-mali" }],
  },
  {
    slug: "audit-energetique-mali",
    eyebrow: "Performance & énergie",
    title: "Audit énergétique au Mali",
    description: "ICRED réalise des audits énergétiques au Mali pour analyser les consommations, identifier les pertes et prioriser les solutions d'efficacité et d'énergie solaire.",
    keywords: "audit énergétique Mali, audit énergétique Bamako, efficacité énergétique entreprise Mali, diagnostic consommation énergie",
    image: solarHero,
    serviceType: "Audit énergétique",
    benefits: ["Une lecture précise des usages et consommations", "Des économies d'énergie hiérarchisées", "Des scénarios solaires et d'efficacité adaptés au site"],
    sections: [
      { heading: "Mesurer avant d'investir", paragraphs: ["Un audit énergétique fournit une vision structurée des consommations d'un bâtiment, d'une entreprise ou d'une installation. ICRED examine les usages, les équipements, les horaires de fonctionnement et les contraintes d'exploitation afin de distinguer les besoins réels des pertes évitables.", "Cette démarche permet de choisir des actions fondées sur des données plutôt que sur une estimation générale du besoin."] },
      { heading: "Analyser les postes de consommation", paragraphs: ["L'analyse peut porter sur l'éclairage, la climatisation, le pompage, les moteurs, les équipements informatiques, les groupes électrogènes et les installations photovoltaïques existantes. Les profils de charge et les conditions d'utilisation sont rapprochés des factures et des relevés disponibles.", "Les anomalies, surdimensionnements et usages inefficaces sont identifiés avec leurs causes possibles."] },
      { heading: "Construire un plan d'actions réaliste", paragraphs: ["Les recommandations sont hiérarchisées selon l'investissement, l'économie attendue, la facilité de mise en œuvre, la maintenance et le temps de retour. L'audit peut proposer des mesures de réglage, de remplacement, d'isolation, de pilotage ou d'amélioration des usages.", "Les solutions solaires, le stockage et l'hybridation sont étudiés lorsqu'ils répondent réellement au profil énergétique du site."] },
      { heading: "Préparer la décision et le suivi", paragraphs: ["Un rapport utile présente les hypothèses, les mesures, les scénarios, les priorités et les indicateurs de suivi. Il aide le décideur à programmer les travaux et à comparer les gains obtenus après mise en œuvre.", "ICRED peut prolonger l'audit par une étude de faisabilité, un dimensionnement photovoltaïque ou une assistance au suivi du projet."] },
    ],
    faqs: [
      { question: "À qui s'adresse un audit énergétique au Mali ?", answer: "Il s'adresse aux entreprises, bâtiments, collectivités, institutions et sites qui souhaitent comprendre leurs consommations et réduire leurs coûts ou leur dépendance énergétique." },
      { question: "Un audit énergétique inclut-il une installation solaire ?", answer: "Il peut évaluer la pertinence d'une installation solaire, mais le dimensionnement détaillé fait généralement l'objet d'une étude complémentaire." },
      { question: "Quelles données préparer avant l'audit ?", answer: "Les factures, horaires d'utilisation, plans, inventaires d'équipements, historiques de maintenance et informations sur les groupes ou installations existantes sont utiles." },
    ],
    relatedLinks: [{ label: "Énergie solaire au Mali", href: "/energie-solaire-mali" }, { label: "Étude de faisabilité au Mali", href: "/etude-faisabilite-mali" }, { label: "Études techniques au Mali", href: "/etudes-techniques-mali" }],
  },
  {
    slug: "etude-geotechnique-mali",
    eyebrow: "Sol & fondations",
    title: "Étude géotechnique au Mali",
    description: "ICRED accompagne les études géotechniques au Mali pour mieux connaître les sols, sécuriser les fondations et adapter la conception des bâtiments et infrastructures.",
    keywords: "étude géotechnique Mali, étude de sol Bamako, fondations bâtiment Mali, reconnaissance des sols, géotechnique construction",
    image: constructionHero,
    serviceType: "Étude géotechnique",
    benefits: ["Une connaissance documentée du sol", "Des recommandations pour les fondations et terrassements", "Une conception mieux adaptée aux risques du site"],
    sections: [
      { heading: "Le sol est une donnée de conception", paragraphs: ["La stabilité d'un bâtiment, d'une route ou d'un ouvrage dépend de la relation entre la structure et le sol qui la porte. Une étude géotechnique apporte les informations nécessaires pour réduire les incertitudes sur la portance, les tassements, l'eau souterraine et les terrassements.", "Elle complète la topographie et permet aux ingénieurs de concevoir avec des hypothèses adaptées au site réel."] },
      { heading: "Reconnaître les caractéristiques du terrain", paragraphs: ["La mission est définie selon le type d'ouvrage, les charges, la profondeur des fondations et les conditions du terrain. Les reconnaissances, sondages et essais appropriés permettent de caractériser les couches rencontrées et leurs comportements.", "Les résultats sont interprétés avec les données du projet, la topographie et les observations de terrain."] },
      { heading: "Adapter les fondations et les terrassements", paragraphs: ["Les recommandations peuvent porter sur le type de fondation, la profondeur, les contraintes admissibles, les remblais, les déblais, la plateforme et les dispositions de drainage. Cette analyse évite de retenir une solution standard sans vérifier sa compatibilité avec le sol.", "Elle contribue aussi à mieux estimer les travaux et les risques techniques avant la consultation des entreprises."] },
      { heading: "Anticiper les risques d'exécution", paragraphs: ["La présence d'eau, les sols compressibles, les variations de matériaux ou les difficultés d'accès peuvent modifier le calendrier et le coût. Les identifier en amont facilite la préparation des travaux et la mise en place de contrôles adaptés.", "ICRED articule les conclusions géotechniques avec les études de génie civil, de routes et d'aménagement."] },
    ],
    faqs: [
      { question: "Pourquoi réaliser une étude de sol avant de construire ?", answer: "Elle permet d'adapter les fondations et les terrassements aux caractéristiques réelles du terrain et de limiter les risques de tassement ou de désordre." },
      { question: "L'étude géotechnique concerne-t-elle uniquement les bâtiments ?", answer: "Non. Elle peut concerner les routes, plateformes, ponts, réseaux, ouvrages hydrauliques, bâtiments et autres infrastructures." },
      { question: "La topographie remplace-t-elle une étude géotechnique ?", answer: "Non. La topographie décrit la forme et les niveaux du terrain, tandis que la géotechnique étudie la nature et le comportement des sols." },
    ],
    relatedLinks: [{ label: "Topographie au Mali", href: "/topographie-mali" }, { label: "Génie civil au Mali", href: "/genie-civil-mali" }, { label: "Études techniques au Mali", href: "/etudes-techniques-mali" }],
  },
  {
    slug: "etude-vrd-mali",
    eyebrow: "Aménagement & réseaux",
    title: "Étude VRD au Mali",
    description: "ICRED réalise des études VRD au Mali pour concevoir les voiries et réseaux divers d'un lotissement, d'un site industriel, d'un projet immobilier ou d'un aménagement urbain.",
    keywords: "étude VRD Mali, voirie réseaux divers Bamako, étude lotissement Mali, réseaux eau assainissement, aménagement urbain",
    image: blueprintsHero,
    serviceType: "Étude de voirie et réseaux divers",
    benefits: ["Une organisation cohérente des voiries et réseaux", "Des plans et quantités utiles aux travaux", "Une coordination entre terrain, eau, assainissement et accès"],
    sections: [
      { heading: "Concevoir un site fonctionnel et accessible", paragraphs: ["Une étude VRD organise les accès, les voiries, les niveaux, les réseaux et l'écoulement des eaux sur un site. Elle est essentielle pour transformer un terrain en lotissement, zone d'activités, équipement public ou projet immobilier exploitable.", "ICRED recherche une cohérence entre les usages, la topographie, les contraintes foncières, les réseaux existants et les besoins futurs."] },
      { heading: "Étudier les voiries et les niveaux", paragraphs: ["Les tracés, profils, pentes, emprises et plateformes sont étudiés pour assurer la circulation, l'accès aux parcelles et la durabilité des chaussées. Les choix prennent en compte le trafic attendu, les matériaux disponibles, le drainage et les conditions de maintenance.", "Une bonne définition des niveaux limite les problèmes d'accès, de ruissellement et de raccordement entre les ouvrages."] },
      { heading: "Coordonner eau, assainissement et drainage", paragraphs: ["Les réseaux d'eau potable, d'assainissement, d'eaux pluviales, d'électricité ou de télécommunication doivent être implantés avec méthode. L'étude VRD réserve les emprises, évite les conflits entre réseaux et facilite les interventions futures.", "L'analyse des écoulements et des points bas permet de prévoir des solutions de drainage adaptées au site."] },
      { heading: "Préparer les documents de réalisation", paragraphs: ["Selon le projet, les livrables comprennent des plans, profils, détails techniques, estimations, quantitatifs, phasage et prescriptions. Ces documents facilitent la consultation des entreprises, le suivi des travaux et le contrôle des quantités.", "ICRED peut accompagner le maître d'ouvrage de l'étude initiale à la réception des travaux VRD."] },
    ],
    faqs: [
      { question: "Que signifie VRD ?", answer: "VRD signifie voirie et réseaux divers. Le terme regroupe notamment les voies, réseaux d'eau, assainissement, drainage et autres réseaux nécessaires à l'aménagement d'un site." },
      { question: "Une étude VRD est-elle obligatoire pour un lotissement ?", answer: "Les exigences dépendent du projet et des règles applicables, mais une étude VRD est indispensable pour concevoir des accès et réseaux cohérents et chiffrer les travaux." },
      { question: "Quels documents sont produits par une étude VRD ?", answer: "Elle peut produire des plans, profils, détails de réseaux, estimations, quantitatifs, prescriptions techniques et éléments de consultation." },
    ],
    relatedLinks: [{ label: "Travaux routiers au Mali", href: "/travaux-routiers-mali" }, { label: "Topographie au Mali", href: "/topographie-mali" }, { label: "Étude hydrologique au Mali", href: "/etude-hydrologique-mali" }],
  },
  {
    slug: "suivi-evaluation-projet-mali",
    eyebrow: "Résultats & pilotage",
    title: "Suivi-évaluation de projet au Mali",
    description: "ICRED accompagne le suivi-évaluation des projets au Mali pour mesurer les résultats, documenter les progrès et améliorer les décisions des organisations et partenaires.",
    keywords: "suivi-évaluation projet Mali, évaluation projet développement Bamako, indicateurs projet Mali, suivi impact programme",
    image: engineerHero,
    serviceType: "Suivi-évaluation de projet",
    benefits: ["Des indicateurs reliés aux objectifs", "Des données organisées et interprétables", "Des recommandations utiles au pilotage"],
    sections: [
      { heading: "Transformer les données en décisions", paragraphs: ["Le suivi-évaluation permet de savoir ce qui a été réalisé, pour qui, dans quels délais et avec quels résultats. ICRED aide les porteurs de projets, collectivités, ONG et partenaires à organiser une information utile au pilotage plutôt qu'une simple accumulation de rapports.", "La démarche relie les activités, les produits, les effets attendus et les moyens mobilisés."] },
      { heading: "Construire un dispositif proportionné", paragraphs: ["Un bon dispositif commence par une clarification des objectifs, des résultats attendus, des indicateurs, des sources de données et des responsabilités. Les outils sont adaptés à la taille du projet, au calendrier, aux ressources et aux exigences du bailleur.", "Les indicateurs doivent être compréhensibles, mesurables et suffisamment stables pour suivre l'évolution du projet."] },
      { heading: "Collecter et analyser les résultats", paragraphs: ["ICRED peut contribuer à structurer les fiches de collecte, les tableaux de bord, les entretiens, les enquêtes et les rapports périodiques. L'analyse met en évidence les progrès, les écarts, les facteurs de réussite et les difficultés d'exécution.", "Les données quantitatives sont complétées par l'écoute des bénéficiaires et l'observation des changements sur le terrain."] },
      { heading: "Apprendre et améliorer l'action", paragraphs: ["L'évaluation ne doit pas seulement constater les résultats ; elle doit aider à décider. Les recommandations sont formulées de manière opérationnelle, avec des priorités, des responsables et des échéances lorsque cela est pertinent.", "Cette approche favorise la capitalisation, la redevabilité et l'amélioration continue des programmes."] },
    ],
    faqs: [
      { question: "Quelle différence entre suivi et évaluation ?", answer: "Le suivi observe régulièrement l'avancement et les activités, tandis que l'évaluation analyse plus largement les résultats, les effets, la pertinence et les enseignements d'un projet." },
      { question: "Quels projets peuvent être suivis et évalués ?", answer: "Les programmes d'eau, d'énergie, d'infrastructure, d'environnement, de développement local et les projets financés par des partenaires peuvent disposer d'un système de suivi-évaluation." },
      { question: "Quand mettre en place un dispositif de suivi-évaluation ?", answer: "Il est préférable de le définir dès la conception du projet, mais il peut être structuré ou amélioré à n'importe quelle étape de la mise en œuvre." },
    ],
    relatedLinks: [{ label: "Étude de faisabilité au Mali", href: "/etude-faisabilite-mali" }, { label: "Ingénierie conseil au Mali", href: "/ingenierie-conseil-mali" }, { label: "Étude environnementale au Mali", href: "/etude-environnementale-mali" }],
  },
  {
    slug: "etude-hydrogeologique-mali",
    eyebrow: "Ressource en eau",
    title: "Étude hydrogéologique au Mali",
    description: "ICRED accompagne les études hydrogéologiques au Mali pour mieux caractériser les ressources souterraines et préparer des projets de forage et d'adduction d'eau durables.",
    keywords: "étude hydrogéologique Mali, hydrogéologie Bamako, recherche eau souterraine, étude forage Mali, ressource aquifère",
    image: planningHero,
    serviceType: "Étude hydrogéologique",
    benefits: ["Une analyse du contexte géologique et hydrogéologique", "Une aide à la localisation et à la conception des forages", "Une approche liée aux besoins et à l'exploitation de l'eau"],
    sections: [
      { heading: "Comprendre la ressource souterraine", paragraphs: ["Une étude hydrogéologique cherche à comprendre où se trouve l'eau souterraine, dans quelles conditions elle peut être mobilisée et comment elle peut répondre durablement aux besoins. Elle associe les informations géologiques, les observations de terrain et les données disponibles.", "Au Mali, la qualité de l'analyse dépend aussi de la connaissance des usages, de la saisonnalité et des conditions d'accès au site."] },
      { heading: "Préparer la recherche de forage", paragraphs: ["Avant de réaliser un forage, il est important de préciser le besoin, le débit recherché, la profondeur envisageable, les contraintes d'implantation et les conditions d'exploitation. L'étude aide à hiérarchiser les secteurs et à définir les reconnaissances complémentaires.", "Elle ne garantit pas à elle seule un résultat de forage, mais elle réduit l'incertitude et améliore la préparation de la mission."] },
      { heading: "Relier ressource, pompage et réseau", paragraphs: ["La ressource doit être étudiée avec le système qui l'utilisera : pompage, énergie, stockage, traitement éventuel, réseau et usages. Une solution techniquement possible peut devenir inadaptée si elle est trop coûteuse à exploiter ou difficile à maintenir.", "ICRED relie les recommandations hydrogéologiques aux études d'eau potable, de forage et d'adduction."] },
      { heading: "Prévoir une exploitation durable", paragraphs: ["La protection du point d'eau, la qualité, le suivi des débits, la maintenance et la gestion des équipements doivent être anticipés. Les recommandations tiennent compte des capacités locales et des besoins des usagers.", "Cette approche prépare des décisions plus solides pour les projets ruraux, urbains, agricoles et institutionnels."] },
    ],
    faqs: [
      { question: "À quoi sert une étude hydrogéologique avant un forage ?", answer: "Elle aide à comprendre le contexte de la ressource souterraine, à orienter les reconnaissances et à préparer l'implantation et les caractéristiques du forage." },
      { question: "Une étude hydrogéologique garantit-elle la présence d'eau ?", answer: "Aucune étude ne peut garantir seule un résultat ; elle réduit cependant l'incertitude en s'appuyant sur les données et méthodes adaptées au site." },
      { question: "L'étude couvre-t-elle aussi l'adduction d'eau ?", answer: "Elle peut être complétée par l'étude du pompage, du stockage, de l'énergie et du réseau d'adduction afin de concevoir un système cohérent." },
    ],
    relatedLinks: [{ label: "Forage d'eau au Mali", href: "/forage-eau-mali" }, { label: "Bureau d'études hydraulique au Mali", href: "/bureau-etudes-hydraulique-mali" }, { label: "Étude hydrologique au Mali", href: "/etude-hydrologique-mali" }],
  },
];

export const keywordPageMap = Object.fromEntries(keywordPages.map((page) => [page.slug, page])) as Record<string, KeywordPageData>;
