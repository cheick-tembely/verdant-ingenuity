import logo from "@/assets/icred-logo.png";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <img src={logo} alt="ICRED Mali" className="h-14 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Ingénierie Conseil et de Recherche pour le Développement. Rendre accessibles les services de l'Ingénieur Conseil aux populations.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">Navigation</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              {["Accueil", "À propos", "Services", "Références", "Équipe", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l === "Accueil" ? "accueil" : l === "À propos" ? "apropos" : l.toLowerCase()}`} className="hover:text-primary-foreground transition-colors hover:translate-x-1 inline-block">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2"><Phone size={14} /> (+223) 76 08 58 47</li>
              <li className="flex items-center gap-2"><Mail size={14} /> icred.mali@gmail.com</li>
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
          <p className="text-xs text-primary-foreground/30">
            RC : MA.BKO.2013.B.2382 | NIF : 085123935
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
