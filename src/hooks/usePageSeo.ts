import { useEffect } from "react";

const siteUrl = "https://icred-mali.com";
const defaultImage = `${siteUrl}/favicon.png`;

const upsertMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
  let element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
};

export const usePageSeo = (
  title: string,
  description: string,
  path = "/",
  type: "website" | "article" = "website",
  keywords = "",
  options: {
    image?: string;
    robots?: string;
  } = {},
) => {
  useEffect(() => {
    const absoluteUrl = `${siteUrl}${path}`;
    const image = options.image
      ? options.image.startsWith("http")
        ? options.image
        : `${siteUrl}${options.image}`
      : defaultImage;

    document.title = title;
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[name="robots"]', "name", "robots", options.robots ?? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", absoluteUrl);
    upsertMeta('meta[property="og:type"]', "property", "og:type", type);
    upsertMeta('meta[property="og:site_name"]', "property", "og:site_name", "ICRED Mali");
    upsertMeta('meta[property="og:locale"]', "property", "og:locale", "fr_ML");
    upsertMeta('meta[property="og:image"]', "property", "og:image", image);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", image);
    if (keywords) upsertMeta('meta[name="keywords"]', "name", "keywords", keywords);
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = absoluteUrl;
  }, [title, description, path, type, keywords, options.image, options.robots]);
};

export const useStructuredData = (id: string, data: object) => {
  useEffect(() => {
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
    return () => script?.remove();
  }, [id, data]);
};
