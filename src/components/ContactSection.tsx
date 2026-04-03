import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Prenez <span className="text-gradient">contact</span> avec nous
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <a href="tel:+22376085847" className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center group">
            <div className="w-14 h-14 rounded-full bg-green-pale flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
              <Phone className="text-primary group-hover:text-primary-foreground transition-colors" size={22} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
            <p className="text-sm text-muted-foreground">(+223) 76 08 58 47</p>
            <p className="text-sm text-muted-foreground">(+223) 72 72 02 75</p>
            <p className="text-sm text-muted-foreground">(+223) 20 20 96 95</p>
          </a>

          <a href="mailto:icred.mali@gmail.com" className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center group">
            <div className="w-14 h-14 rounded-full bg-green-pale flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
              <Mail className="text-primary group-hover:text-primary-foreground transition-colors" size={22} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">icred.mali@gmail.com</p>
          </a>

          <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center group">
            <div className="w-14 h-14 rounded-full bg-green-pale flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
              <MapPin className="text-primary group-hover:text-primary-foreground transition-colors" size={22} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Adresse</h3>
            <p className="text-sm text-muted-foreground">Sogoniko, hall de Bamako</p>
            <p className="text-sm text-muted-foreground">BP : E2938 Bamako, Mali</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
