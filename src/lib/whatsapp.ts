const WHATSAPP_PHONE = "22376085847";

export const whatsappUrl = (message = "Bonjour ICRED, je souhaite discuter de mon projet.") =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
