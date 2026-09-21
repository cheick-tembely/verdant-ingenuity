import logo from "@/assets/icred-logo.png";
import logo1 from "@/assets/logo.png";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { whatsappUrl } from "@/lib/whatsapp";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="bg-gradient-dark text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="ICRED Mali" className="h-24 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Ingénierie Conseil et de Recherche pour le Développement. Rendre accessibles les services de l'Ingénieur Conseil aux populations.
            </p>
            <a href={whatsappUrl("Bonjour ICRED, je souhaite lancer mon projet avec vous.")} target="_blank" rel="noopener noreferrer" className="inline-flex mt-5 rounded-lg border border-primary-foreground/30 px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors">Lancer votre projet</a>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">Navigation</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li><a href="/#accueil" className="hover:text-primary-foreground transition-colors">Accueil</a></li>
              <li><a href="/#apropos" className="hover:text-primary-foreground transition-colors">À propos</a></li>
              <li><a href="/services" className="hover:text-primary-foreground transition-colors">Services</a></li>
              <li><a href="/blog" className="hover:text-primary-foreground transition-colors">Blog</a></li>
              <li><a href="/plan-du-site" className="hover:text-primary-foreground transition-colors">Plan du site</a></li>
              <li><a href="/#references" className="hover:text-primary-foreground transition-colors">Références</a></li>
              <li><a href="/#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">Services</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li><a href="/bureau-etudes-mali" className="hover:text-primary-foreground transition-colors">Bureau d'études</a></li>
              <li><a href="/topographie-mali" className="hover:text-primary-foreground transition-colors">Topographie</a></li>
              <li><a href="/etudes-techniques-mali" className="hover:text-primary-foreground transition-colors">Études techniques</a></li>
              <li><a href="/genie-civil-mali" className="hover:text-primary-foreground transition-colors">Génie civil & suivi</a></li>
              <li><a href="/ingenierie-conseil-mali" className="hover:text-primary-foreground transition-colors">Ingénierie & conseil</a></li>
              <li><a href="/etude-faisabilite-mali" className="hover:text-primary-foreground transition-colors">Faisabilité & conseil</a></li>
              <li><a href="/etude-projet-mali" className="hover:text-primary-foreground transition-colors">Étude de projet</a></li>
              <li><a href="/entreprise-btp-mali" className="hover:text-primary-foreground transition-colors">BTP & construction</a></li>
              <li><a href="/forage-eau-mali" className="hover:text-primary-foreground transition-colors">Forage d'eau</a></li>
              <li><a href="/energie-solaire-mali" className="hover:text-primary-foreground transition-colors">Énergie solaire</a></li>
              <li><a href="/etude-environnementale-mali" className="hover:text-primary-foreground transition-colors">Étude environnementale</a></li>
              <li><a href="/travaux-routiers-mali" className="hover:text-primary-foreground transition-colors">Travaux routiers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li><a href="tel:+22376085847" className="flex items-center gap-2 hover:text-primary-foreground transition-colors"><Phone size={14} /> (+223) 76 08 58 47</a></li>
              <li><a href="mailto:contact@icred-mali.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors"><Mail size={14} /> contact@icred-mali.com</a></li>
              <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 shrink-0" /> Sogoniko, Bamako, Mali</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">Représentations</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <p className="flex items-start gap-2">
                <span className="shrink-0">🇫🇷</span>
                Représentant officiel d'ADG Valve (France)
              </p>
              <p className="flex items-start gap-2">
                <span className="shrink-0">🇨🇳</span>
                Partenaire officiel de Huawei Mali — Photovoltaïque
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} ICRED Mali SARL — Tous droits réservés
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-primary-foreground/60">
                Réalisé par
              </span>
              <a 
                href="https://exelite.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative inline-block h-6"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className={`text-sm font-semibold transition-all duration-300 ${isHovered ? 'opacity-0' : 'opacity-100 text-primary-foreground/80 hover:text-primary-foreground'}`}>
                  Exelite
                </span>
                <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-90'}`}>
                  <img 
                    src={logo1} 
                    alt="Exelite" 
                    className="h-6 w-auto transition-transform duration-300 hover:scale-125"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
