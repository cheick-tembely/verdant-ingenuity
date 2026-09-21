import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NotFound from "@/pages/NotFound";
import { usePageSeo, useStructuredData } from "@/hooks/usePageSeo";
import { keywordPageMap } from "@/data/keywordPages";
import { whatsappUrl } from "@/lib/whatsapp";

const siteUrl = "https://icred-mali.com";

const KeywordPage = () => {
  const { slug } = useParams();
  const page = keywordPageMap[slug ?? ""];
  const pageUrl = `${siteUrl}/${page?.slug ?? slug ?? ""}/`;
  const imageUrl = page?.image?.startsWith("http") ? page.image : `${siteUrl}${page?.image ?? "/favicon.png"}`;

  usePageSeo(
    page ? `${page.title} | ICRED Mali` : "Page introuvable | ICRED Mali",
    page?.description ?? "Cette page n'existe pas ou a été déplacée.",
    `/${slug ?? ""}`,
    "website",
    page?.keywords ?? "",
    { image: page?.image, robots: page ? undefined : "noindex, follow" },
  );

  useStructuredData(`keyword-page-schema-${slug}`, page ? {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${pageUrl}#webpage`, name: page.title, description: page.description, url: pageUrl, inLanguage: "fr-ML", primaryImageOfPage: { "@id": `${pageUrl}#image` }, isPartOf: { "@id": `${siteUrl}/#website` } },
      { "@type": "ImageObject", "@id": `${pageUrl}#image`, url: imageUrl, contentUrl: imageUrl, caption: page.title },
      { "@type": "Service", "@id": `${pageUrl}#service`, name: page.serviceType, description: page.description, serviceType: page.serviceType, provider: { "@id": `${siteUrl}/#organization` }, areaServed: { "@type": "Country", name: "Mali" }, url: pageUrl },
      { "@type": "ProfessionalService", "@id": `${siteUrl}/#organization`, name: "ICRED Mali SARL", url: `${siteUrl}/`, telephone: "+223 76 08 58 47", address: { "@type": "PostalAddress", addressLocality: "Bamako", addressCountry: "ML" } },
      { "@type": "BreadcrumbList", "@id": `${pageUrl}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services/` }, { "@type": "ListItem", position: 3, name: page.title, item: pageUrl }] },
      { "@type": "FAQPage", "@id": `${pageUrl}#faq`, mainEntity: page.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
      { "@type": "Offer", "@id": `${pageUrl}#offer`, name: page.serviceType, url: pageUrl, priceCurrency: "XOF", availability: "https://schema.org/InStock", seller: { "@id": `${siteUrl}/#organization` } },
    ],
  } : {});

  if (!page) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden pt-36 pb-20 px-4 text-primary-foreground">
          <img src={page.image} alt={page.title} className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/55" />
          <div className="container mx-auto max-w-5xl">
            <p className="text-secondary font-semibold uppercase tracking-[.2em] text-xs mb-5">{page.eyebrow}</p>
            <h1 className="text-4xl md:text-6xl font-bold max-w-4xl">{page.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/85 max-w-3xl">{page.description}</p>
            <p className="mt-7 text-sm text-primary-foreground/70 border-l-2 border-secondary pl-4">{page.keywords}</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto max-w-5xl grid lg:grid-cols-[1fr_.7fr] gap-12">
            <div className="space-y-10">
              {page.sections.map((section) => (
                <article key={section.heading}>
                  <h2 className="text-3xl font-bold mb-4">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-muted-foreground leading-8 text-lg mb-4">{paragraph}</p>)}
                </article>
              ))}
            </div>
            <aside className="rounded-2xl bg-card border border-border p-7 h-fit">
              <h2 className="text-2xl font-bold mb-6">Les points forts de notre accompagnement</h2>
              <ul className="space-y-4">{page.benefits.map((benefit) => <li key={benefit} className="flex gap-3 text-foreground/80"><CheckCircle2 className="shrink-0 text-primary" size={20} />{benefit}</li>)}</ul>
              <a href={whatsappUrl(`Bonjour ICRED, je souhaite parler de ${page.title.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold">Parler de votre projet <ArrowRight size={17} /></a>
              <a href="tel:+22376085847" className="mt-4 inline-flex items-center gap-2 font-semibold text-primary"><Phone size={17} /> Appeler ICRED</a>
            </aside>
          </div>
        </section>

        <section className="px-4 pb-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-7">Questions fréquentes</h2>
            <div className="grid md:grid-cols-2 gap-5">{page.faqs.map((faq) => <article key={faq.question} className="rounded-xl border border-border bg-card p-6"><h3 className="text-xl font-bold mb-3">{faq.question}</h3><p className="text-muted-foreground leading-relaxed">{faq.answer}</p></article>)}</div>
          </div>
        </section>

        <section className="px-4 pb-20">
          <div className="container mx-auto max-w-5xl">
            <div className="max-w-3xl mb-8"><p className="text-primary font-semibold mb-2">À découvrir également</p><h2 className="text-3xl font-bold">Les expertises complémentaires d'ICRED</h2><p className="mt-4 text-muted-foreground leading-8">Un projet fiable mobilise souvent plusieurs compétences. Consultez les pages liées pour approfondir votre besoin et préparer la prochaine étape.</p></div>
            <div className="grid gap-5 md:grid-cols-3">{page.relatedLinks.map((related) => <Link key={related.href} to={related.href} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-card"><h3 className="text-xl font-bold text-foreground">{related.label}</h3><span className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">Découvrir <ArrowRight size={16} /></span></Link>)}</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KeywordPage;
