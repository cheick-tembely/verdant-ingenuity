const { existsSync, readFileSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const distDir = join(__dirname, "..", "dist");
const indexPath = join(distDir, "index.html");
const fallbackPath = join(distDir, "404.html");

if (!existsSync(indexPath)) {
  throw new Error("dist/index.html is missing. Run vite build before creating the SPA fallback.");
}

const source = readFileSync(indexPath, "utf8");
const notFoundPage = source
  .replace(/<title>[\s\S]*?<\/title>/, "<title>Page introuvable | ICRED Mali</title>")
  .replace(/<meta name="description" content="[^"]*"\s*\/>/, '<meta name="description" content="Cette page n\'existe pas ou a été déplacée." />')
  .replace(/<meta name="robots" content="[^"]*"\s*\/>/, '<meta name="robots" content="noindex, follow" />')
  .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, '<link rel="canonical" href="https://icred-mali.com/404.html" />')
  .replace('<div id="root"></div>', '<main><h1>Page introuvable</h1><p>Cette page n\'existe pas ou a été déplacée.</p><p><a href="/">Retour à l\'accueil</a></p></main>');

writeFileSync(fallbackPath, notFoundPage);
