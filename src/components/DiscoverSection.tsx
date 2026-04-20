import { useState } from "react";
import { X, Camera } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import img1 from "@/assets/discover/1.jpeg";
import img2 from "@/assets/discover/2.jpeg";
import img3 from "@/assets/discover/3.jpeg";
import img4 from "@/assets/discover/4.jpeg";
import img5 from "@/assets/discover/5.jpeg";
import img6 from "@/assets/discover/6.jpeg";
import img7 from "@/assets/discover/7.jpeg";
import img8 from "@/assets/discover/8.jpeg";
import img9 from "@/assets/discover/9.jpeg";
import img10 from "@/assets/discover/10.jpeg";

const photos = [
  { src: img1, caption: "Équipe topographique sur site", category: "Topographie" },
  { src: img7, caption: "Fondations massives - ouvrages industriels", category: "Génie Civil" },
  { src: img2, caption: "Levés topographiques en milieu urbain", category: "Topographie" },
  { src: img8, caption: "Installation de panneaux solaires", category: "Énergie Solaire" },
  { src: img3, caption: "Mission de relevé topographique", category: "Topographie" },
  { src: img6, caption: "Préparation de dalle en béton", category: "Génie Civil" },
  { src: img4, caption: "Technicien en intervention", category: "Topographie" },
  { src: img9, caption: "Centrale photovoltaïque opérationnelle", category: "Énergie Solaire" },
  { src: img5, caption: "Mission terrain en zone forestière", category: "Études Terrain" },
  { src: img10, caption: "Encadrement de chantier", category: "Génie Civil" },
];

const DiscoverSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="decouvrir" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-pale rounded-full blur-3xl opacity-30 -z-0" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-light/20 rounded-full blur-3xl -z-0" />

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-pale text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Camera size={14} />
            Galerie
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nous Découvrir
          </h2>
          <p className="text-foreground/70 leading-relaxed">
            Plongez au cœur de nos missions sur le terrain. Découvrez l'expertise et
            l'engagement de nos équipes à travers leurs réalisations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {photos.map((photo, idx) => {
            const spans = [
              "row-span-2", // 1 - portrait tall
              "col-span-2", // 7 - wide
              "",
              "col-span-2", // 8 - wide
              "",
              "",
              "row-span-2", // 4 - tall
              "col-span-2", // 9 - wide
              "",
              "row-span-2", // 10 - tall
            ];
            return (
              <button
                key={idx}
                onClick={() => setSelected(idx)}
                className={`group relative overflow-hidden rounded-2xl bg-muted shadow-md hover:shadow-2xl transition-all duration-500 ${spans[idx] || ""} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-left translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block text-[10px] md:text-xs font-semibold text-green-light uppercase tracking-wider mb-1">
                    {photo.category}
                  </span>
                  <p className="text-primary-foreground text-xs md:text-sm font-medium leading-tight line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            aria-label="Fermer"
          >
            <X size={24} />
          </button>
          <div
            className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selected].src}
              alt={photos[selected].caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center">
              <span className="inline-block text-xs font-semibold text-green-light uppercase tracking-wider mb-1">
                {photos[selected].category}
              </span>
              <p className="text-primary-foreground text-base">{photos[selected].caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DiscoverSection;
