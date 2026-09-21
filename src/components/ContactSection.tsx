import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { FormEvent } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const sendToWhatsApp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Bonjour ICRED, je souhaite vous contacter.",
      "",
      `Nom : ${form.get("name")}`,
      `Email : ${form.get("email")}`,
      `Type de projet : ${form.get("projectType")}`,
      `Localisation : ${form.get("location")}`,
      `État d'avancement : ${form.get("stage")}`,
      "",
      "Message :",
      String(form.get("message")),
    ].join("\n");
    window.open(`https://wa.me/22376085847?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-pale rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div ref={ref} className="container mx-auto relative">
        <div className={`text-center mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <span className="inline-flex items-center gap-2 bg-green-pale text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Prenez <span className="text-gradient">contact</span> avec nous
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Décrivez votre besoin en deux minutes. Votre message est préparé puis envoyé directement à l'équipe ICRED sur WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact cards */}
          <div className={`lg:col-span-2 space-y-4 reveal-left ${isVisible ? "visible" : ""}`}>
            <a href="tel:+22376085847" className="group flex items-start gap-4 bg-card rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-pale flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                <Phone className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">Téléphone</h3>
                <p className="text-sm text-muted-foreground">(+223) 76 08 58 47</p>
                <p className="text-sm text-muted-foreground">(+223) 72 72 02 75</p>
                <p className="text-sm text-muted-foreground">(+223) 20 20 96 95</p>
              </div>
            </a>

            <a href="mailto:contact@icred-mali.com" className="group flex items-start gap-4 bg-card rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-pale flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                <Mail className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">Email</h3>
                <p className="text-sm text-muted-foreground">contact@icred-mali.com</p>
              </div>
            </a>

            <div className="group flex items-start gap-4 bg-card rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-pale flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                <MapPin className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">Adresse</h3>
                <p className="text-sm text-muted-foreground">Sogoniko, hall de Bamako</p>
                <p className="text-sm text-muted-foreground">Imm. TRAORÉ, 2ème étage</p>
                <p className="text-sm text-muted-foreground">BP : E2938 Bamako, Mali</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className={`lg:col-span-3 reveal-right ${isVisible ? "visible" : ""}`}>
            <div className="bg-card rounded-3xl p-8 border border-border shadow-sm">
              <div className="mb-6"><h3 className="text-xl font-bold text-foreground font-serif">Parlez-nous de votre projet</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Plus votre demande est précise, plus notre équipe peut vous orienter rapidement.</p></div>
              <form className="space-y-4" onSubmit={sendToWhatsApp}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Nom complet</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="votre@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Type de projet</label>
                  <select
                      name="projectType"
                      required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  ><option value="">Sélectionnez votre besoin</option><option>Énergie solaire</option><option>Forage / eau potable</option><option>Route / infrastructure</option><option>Bâtiment / BTP</option><option>Étude technique ou de faisabilité</option><option>Étude environnementale / EIES</option><option>Autre besoin</option></select>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="text-sm font-medium text-foreground mb-1.5 block">Localisation du projet</label><input type="text" name="location" required placeholder="Ville, commune ou région" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" /></div>
                  <div><label className="text-sm font-medium text-foreground mb-1.5 block">État du projet</label><select name="stage" required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"><option value="">Sélectionnez une étape</option><option>Idée / besoin à préciser</option><option>Étude à lancer</option><option>Financement en recherche</option><option>Travaux à préparer ou suivre</option></select></div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Décrivez votre projet..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-primary text-primary-foreground py-3.5 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Envoyer ma demande sur WhatsApp
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="flex items-center justify-center gap-2 text-center text-xs text-muted-foreground"><MessageCircle size={14} className="text-primary" /> Votre message sera ouvert dans WhatsApp avant envoi.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
