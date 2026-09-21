import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/icred-logo.png";
import { whatsappUrl } from "@/lib/whatsapp";

const navLinks = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Services", href: "/services" },
  { label: "Bureau d'études", href: "/bureau-etudes-mali" },
  { label: "Topographie", href: "/topographie-mali" },
  { label: "Génie civil", href: "/genie-civil-mali" },
  { label: "Énergie solaire", href: "/energie-solaire-mali" },
  { label: "Projets", href: "/#references" },
  { label: "Blog", href: "/blog" },
];

const serviceLinks = [
  { label: "Vue d'ensemble", href: "/services" },
  { label: "Bureau d'études", href: "/bureau-etudes-mali" },
  { label: "Topographie", href: "/topographie-mali" },
  { label: "Études techniques", href: "/etudes-techniques-mali" },
  { label: "Génie civil & suivi", href: "/genie-civil-mali" },
  { label: "Ingénierie & conseil", href: "/ingenierie-conseil-mali" },
  { label: "Faisabilité & conseil", href: "/etude-faisabilite-mali" },
  { label: "Étude de projet", href: "/etude-projet-mali" },
  { label: "BTP & construction", href: "/entreprise-btp-mali" },
  { label: "Forage d'eau", href: "/forage-eau-mali" },
  { label: "Énergie solaire", href: "/energie-solaire-mali" },
  { label: "Étude environnementale", href: "/etude-environnementale-mali" },
  { label: "Travaux routiers", href: "/travaux-routiers-mali" },
];

const projectLinks = [
  { label: "Centrale solaire de Gongasso", href: "/projets/centrale-solaire-gongasso-sikasso" },
  { label: "Solaire FGSP à Bamako", href: "/projets/maitrise-ouvrage-solaire-fgsp-bamako" },
  { label: "Route Bamako–Kati", href: "/projets/etudes-bamako-kati-2x2-voies" },
  { label: "Projet JIKURA – HELVETAS", href: "/projets/projet-jikura-eau-helvetas" },
  { label: "Piste Dialakoroba–Kourouba", href: "/projets/etudes-hydrauliques-dialakoroba-kourouba" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl border-b border-border shadow-md py-0"
          : "bg-transparent py-2"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <a href="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="ICRED Mali"
            className={`h-20 w-auto transition-all duration-300 ${!scrolled ? "brightness-0 invert" : ""}`}
          />
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => link.label === "Services" || link.label === "Projets" ? (
            <li key={link.href} className="group relative">
              <a
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-foreground/70 hover:text-primary hover:bg-green-pale"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                <span className="inline-flex items-center gap-1">{link.label} <ChevronDown size={15} className="group-hover:rotate-180 transition-transform" /></span>
              </a>
              <div className="absolute left-0 top-full pt-3 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                <div className={`grid gap-2 rounded-xl bg-card border border-border shadow-elevated p-3 ${link.label === "Services" ? "w-[42rem] grid-cols-3" : "w-[25rem] grid-cols-1"}`}>
                  {(link.label === "Services" ? serviceLinks : projectLinks).map((item) => <a key={item.href} href={item.href} className="flex min-h-12 items-center rounded-lg px-4 py-2.5 text-sm leading-snug text-foreground/75 hover:bg-green-pale hover:text-primary transition-colors">{item.label}</a>)}
                </div>
              </div>
            </li>
          ) : (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-foreground/70 hover:text-primary hover:bg-green-pale"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >{link.label}</a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappUrl("Bonjour ICRED, j'ai un projet et je souhaite échanger avec un ingénieur.\n\nType de projet : \nLocalisation : \nBesoin : ")}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden lg:inline-flex px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
            scrolled
              ? "bg-gradient-primary text-primary-foreground hover:shadow-lg"
              : "bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/25"
          }`}
        >
          Parler à un ingénieur
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden glass max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border/50 pb-6 animate-fade-in">
          <ul className="flex flex-col items-center gap-2 pt-4">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full px-4">
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-center text-sm font-medium text-foreground/70 hover:text-primary hover:bg-green-pale py-3 rounded-lg transition-all"
                >
                  {link.label}
                </a>
                {(link.label === "Services" || link.label === "Projets") && <div className="mx-1 mt-2 overflow-x-auto pb-3">
                  <ul className="grid min-w-[34rem] grid-cols-3 gap-2 text-left">
                    {(link.label === "Services" ? serviceLinks.slice(1) : projectLinks).map((item) => <li key={item.href}><a href={item.href} onClick={() => setIsOpen(false)} className="flex min-h-14 items-center justify-center rounded-lg bg-green-pale/60 px-3 py-2 text-center text-xs leading-snug text-foreground/70 hover:text-primary">{item.label}</a></li>)}
                  </ul>
                </div>}
              </li>
            ))}
            <li className="px-4 pt-2 w-full">
              <a
                href={whatsappUrl("Bonjour ICRED, j'ai un projet et je souhaite échanger avec un ingénieur.\n\nType de projet : \nLocalisation : \nBesoin : ")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold"
              >
                Parler à un ingénieur
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
