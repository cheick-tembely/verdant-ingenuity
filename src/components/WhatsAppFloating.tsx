import { whatsappUrl } from "@/lib/whatsapp";

const WhatsAppFloating = () => (
  <>
    <a
      href={whatsappUrl("Bonjour ICRED, je souhaite parler de mon projet.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-4 md:left-6 z-40 hidden sm:inline-flex items-center gap-2 rounded-full bg-card border border-border shadow-elevated px-5 py-3 text-sm font-semibold text-foreground hover:text-primary hover:-translate-y-1 transition-all"
    >
      Un projet ? Parlons-en
    </a>
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Écrire à ICRED Mali sur WhatsApp"
      title="Discuter avec ICRED sur WhatsApp"
      className="group fixed bottom-5 right-4 md:bottom-6 md:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl animate-[pulse-glow_2.5s_ease-in-out_infinite] hover:scale-110 hover:bg-[#1ebe5a] transition-all duration-200"
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true" fill="currentColor">
        <path d="M16.02 3.2a12.7 12.7 0 0 0-10.94 19.15L3.2 28.8l6.62-1.74A12.8 12.8 0 1 0 16.02 3.2Zm0 23.3c-2.05 0-4.06-.55-5.82-1.6l-.42-.25-3.93 1.03 1.05-3.83-.28-.44A10.48 10.48 0 1 1 16.02 26.5Zm5.75-7.85c-.32-.16-1.9-.94-2.19-1.04-.3-.11-.51-.16-.73.16-.21.31-.83 1.04-1.02 1.25-.19.21-.38.24-.7.08-1.9-.95-3.15-1.7-4.4-3.85-.33-.57.33-.53.94-1.76.11-.22.05-.41-.03-.57-.08-.16-.73-1.77-1-2.42-.26-.63-.53-.54-.73-.55h-.62c-.22 0-.57.08-.87.41-.3.32-1.14 1.12-1.14 2.73s1.17 3.17 1.33 3.39c.16.21 2.29 3.49 5.54 4.9.77.33 1.37.53 1.84.68.77.24 1.47.2 2.02.12.62-.09 1.9-.78 2.17-1.53.27-.76.27-1.4.19-1.54-.08-.13-.3-.21-.62-.37Z" />
      </svg>
      <span className="absolute right-16 whitespace-nowrap rounded-lg bg-foreground px-3 py-2 text-xs font-medium text-background opacity-0 pointer-events-none translate-x-2 md:group-hover:translate-x-0 md:group-hover:opacity-100">Nous écrire sur WhatsApp</span>
    </a>
  </>
);

export default WhatsAppFloating;
