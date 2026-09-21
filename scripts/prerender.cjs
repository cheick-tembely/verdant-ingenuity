/* Generates static, crawlable HTML for every public URL after Vite builds. */
const { mkdirSync, readFileSync, readdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const distDir = join(__dirname, "..", "dist");
const baseUrl = "https://icred-mali.com";
const templatePath = join(distDir, ".seo-template.html");
const assetsDir = join(distDir, "assets");

const assetUrl = (prefix) => {
  const filename = readdirSync(assetsDir).find((name) => name.startsWith(`${prefix}-`));
  return filename ? `${baseUrl}/assets/${filename}` : `${baseUrl}/favicon.png`;
};

const services = {
  "bureau-etudes-mali": ["Bureau d'études au Mali", "ICRED est un bureau d'études techniques au Mali qui accompagne les projets publics et privés avec une approche fiable et adaptée au terrain."],
  "topographie-mali": ["Topographie au Mali", "Prestations de topographie au Mali : levés, implantation, plans et contrôle pour les projets d'infrastructure et d'aménagement."],
  "etudes-techniques-mali": ["Études techniques & ingénierie au Mali", "ICRED réalise des études techniques au Mali pour concevoir des projets cohérents, chiffrés et réalisables."],
  "genie-civil-mali": ["Génie civil & suivi des travaux au Mali", "Études de génie civil, suivi de chantier et contrôle technique pour des travaux maîtrisés au Mali."],
  "etude-faisabilite-mali": ["Étude de faisabilité au Mali", "Études de faisabilité techniques, économiques et environnementales pour orienter les décisions d'investissement."],
  "ingenierie-conseil-mali": ["Ingénierie conseil au Mali", "ICRED apporte son expertise d'ingénierie conseil aux entreprises, institutions et porteurs de projets au Mali."],
  "etude-projet-mali": ["Étude de projet au Mali", "Préparation d'avant-projets, dossiers techniques et appels d'offres pour les projets d'infrastructure."],
  "entreprise-btp-mali": ["Entreprise BTP au Mali", "Études, coordination et suivi de travaux BTP au Mali avec l'expertise technique d'ICRED."],
  "forage-eau-mali": ["Forage d'eau & adduction au Mali", "Études et accompagnement de projets de forage, eau potable et adduction d'eau au Mali."],
  "energie-solaire-mali": ["Énergie solaire au Mali", "Études de faisabilité, dimensionnement photovoltaïque et accompagnement de projets solaires au Mali."],
  "etude-environnementale-mali": ["Étude environnementale & EIES au Mali", "Études d'impact environnemental et social, analyse des risques et accompagnement des projets au Mali."],
  "travaux-routiers-mali": ["Travaux routiers & infrastructures au Mali", "Études, conception et suivi de routes, pistes rurales, ponts et infrastructures au Mali."],
};

const articles = {
  "etude-faisabilite-solaire-mali": ["Étude de faisabilité solaire au Mali : les décisions à prendre avant d'investir", "Les étapes essentielles pour préparer un projet photovoltaïque fiable et adapté au Mali."],
  "preparer-projet-adduction-eau-potable": ["Comment préparer un projet d'adduction d'eau potable au Mali ?", "Les éléments à étudier pour concevoir un projet durable d'accès à l'eau."],
  "eies-mali-etude-impact-environnemental-social": ["EIES au Mali : intégrer les impacts environnementaux et sociaux", "Comprendre le rôle d'une étude d'impact environnemental et social dans un projet."],
  "aps-apd-dao-projet-infrastructure": ["APS, APD et DAO : les documents clés d'un projet d'infrastructure", "Les étapes de conception qui préparent un projet à la consultation et à la réalisation."],
  "suivi-controle-travaux-btp": ["Pourquoi le suivi et le contrôle des travaux sécurisent un projet BTP", "Qualité, délais et conformité : les apports du contrôle des travaux."],
  "choisir-bureau-etudes-mali": ["Comment choisir un bureau d'études pour son projet au Mali ?", "Références, méthode et périmètre : les critères pour choisir un partenaire d'ingénierie."],
};

const projects = {
  "centrale-solaire-gongasso-sikasso": ["Étude de faisabilité d'une centrale solaire à Gongasso", "Étude de faisabilité d'une centrale solaire de 100 MWc avec stockage au Mali."],
  "maitrise-ouvrage-solaire-fgsp-bamako": ["Maîtrise d'ouvrage déléguée solaire pour FGSP S.A.", "Accompagnement de la maîtrise d'ouvrage pour un système photovoltaïque à Bamako."],
  "etudes-bamako-kati-2x2-voies": ["Études du bitumage Bamako–Kati 2×2 voies", "Études techniques, environnementales et sociales d'un projet routier Bamako–Kati."],
  "projet-jikura-eau-helvetas": ["Projet JIKURA : eau potable et solaire avec HELVETAS", "Projet d'accès à l'eau : forages et systèmes d'adduction solaires dans huit communes rurales."],
  "etudes-hydrauliques-dialakoroba-kourouba": ["Études hydrologiques et hydrauliques Dialakoroba–Kourouba", "Études hydrologiques et hydrauliques pour un projet de piste au Mali."],
};

const pages = [
  ["/", "ICRED Mali | Bureau d'études & ingénieur conseil à Bamako", "ICRED Mali est un bureau d'études techniques et d'ingénierie conseil à Bamako : topographie, génie civil, énergie solaire, eau, routes, bâtiment et environnement.", "WebSite", assetUrl("hero-bg")],
  ["/services", "Services d'ingénierie au Mali | ICRED Mali", "Découvrez les services d'ICRED : bureau d'études, topographie, génie civil, faisabilité, énergie et infrastructures.", "CollectionPage", assetUrl("services-hero")],
  ...Object.entries(services).map(([slug, [title, description]]) => [`/${slug}`, `${title} | ICRED Mali`, description, "Service", assetUrl("engineer")]),
  ["/blog", "Blog ingénierie & projets au Mali | ICRED Mali", "Conseils et actualités ICRED Mali sur l'ingénierie, les études techniques et les projets d'infrastructure.", "Blog", assetUrl("blog")],
  ...Object.entries(articles).map(([slug, [title, description]]) => [`/blog/${slug}`, `${title} | ICRED Mali`, description, "Article", assetUrl("blog")]),
  ...Object.entries(projects).map(([slug, [title, description]]) => [`/projets/${slug}`, `${title} | ICRED Mali`, description, "Article", assetUrl("project")]),
];

const escape = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
// Preserve Vite's original document before replacing the homepage entry. This
// also makes the script safe when it is invoked more than once in one build.
let source;
try {
  source = readFileSync(templatePath, "utf8");
} catch {
  source = readFileSync(join(distDir, "index.html"), "utf8");
  writeFileSync(templatePath, source);
}

for (const [path, title, description, type, image] of pages) {
  // Static route output is a directory containing index.html. Hostinger's
  // canonical public address for such a page therefore ends with a slash.
  const url = `${baseUrl}${path === "/" ? "/" : `${path}/`}`;
  const schema = JSON.stringify({ "@context": "https://schema.org", "@type": type, name: title.replace(" | ICRED Mali", ""), description, image, url, inLanguage: "fr-ML", provider: { "@id": `${baseUrl}/#organization` } });
  const fallback = `<noscript><main><nav><a href="/">Accueil</a> › <a href="/services">Services</a></nav><h1>${escape(title.replace(" | ICRED Mali", ""))}</h1><p>${escape(description)}</p><p>ICRED Mali, bureau d'études et ingénierie conseil à Bamako, accompagne les projets au Mali.</p><p><a href="/services">Découvrir nos services</a> · <a href="/blog">Lire nos conseils</a></p></main></noscript>`;
  const html = source
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escape(description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escape(title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escape(description)}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta property="og:image" content="[^"]*"\s*\/>/, `<meta property="og:image" content="${image}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${escape(title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${escape(description)}" />`)
    .replace(/<meta name="twitter:image" content="[^"]*"\s*\/>/, `<meta name="twitter:image" content="${image}" />`)
    .replace("</head>", `<script type="application/ld+json">${schema}</script></head>`)
    .replace("<body>", `<body>${fallback}`);
  const output = path === "/" ? join(distDir, "index.html") : join(distDir, path.slice(1), "index.html");
  mkdirSync(join(output, ".."), { recursive: true });
  writeFileSync(output, html);
}

console.log(`Generated crawlable HTML for ${pages.length} public pages.`);
