import logo from "@/assets/icred-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-start mb-8">
          <div>
            <img src={logo} alt="ICRED Mali" className="h-12 w-auto mb-3 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Ingénierie Conseil et de Recherche pour le Développement. Rendre accessibles les services de l'Ingénieur Conseil aux populations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Liens rapides</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#accueil" className="hover:text-primary-foreground transition-colors">Accueil</a></li>
              <li><a href="#apropos" className="hover:text-primary-foreground transition-colors">À propos</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Services</a></li>
              <li><a href="#references" className="hover:text-primary-foreground transition-colors">Références</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Représentations</h4>
            <p className="text-sm text-primary-foreground/70 mb-2">🇫🇷 Représentant officiel d'ADG Valve (France)</p>
            <p className="text-sm text-primary-foreground/70">🇨🇳 Partenaire officiel de Huawei Mali pour les études et installations photovoltaïques</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} ICRED Mali SARL — Tous droits réservés
        </div>
      </div>
    </footer>
  );
};

export default Footer;
