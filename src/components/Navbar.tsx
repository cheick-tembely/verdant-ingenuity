import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/icred-logo.png";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Services", href: "#services" },
  { label: "Références", href: "#references" },
  { label: "Équipe", href: "#equipe" },
  { label: "Contact", href: "#contact" },
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
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="#accueil" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="ICRED Mali"
            className={`h-12 w-auto transition-all duration-300 ${!scrolled ? "brightness-0 invert" : ""}`}
          />
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-foreground/70 hover:text-primary hover:bg-green-pale"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`hidden lg:inline-flex px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
            scrolled
              ? "bg-gradient-primary text-primary-foreground hover:shadow-lg"
              : "bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/25"
          }`}
        >
          Nous contacter
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
        <div className="lg:hidden glass border-t border-border/50 pb-6 animate-fade-in">
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
              </li>
            ))}
            <li className="px-4 pt-2 w-full">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold"
              >
                Nous contacter
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
