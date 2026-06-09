import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { villes } from "@/lib/villes";

const BASE = "https://vilbert-hydro.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/a-propos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/vidange-fosse-septique`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/mentions-legales`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/vidange-fosse-septique/amiens`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/vidange-fosse-septique/compiegne`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/vidange-fosse-septique/beauvais`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/vidange-fosse-septique/saint-quentin`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/vidange-fosse-septique/abbeville`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/vidange-fosse-septique/peronne`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/assainissement-copropriete`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/assainissement-restaurant`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/assainissement-agriculteur`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contrat-maintenance`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/debouchage-canalisation`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.95 },
    { url: `${BASE}/hydrocurage-haute-pression`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/inspection-televisee`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/maintenance-poste-relevage`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/faq`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${BASE}/avis-clients`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const VIDANGE_VILLES = ["amiens","abbeville","peronne","albert","montdidier","doullens","corbie","roye","ham","chaulnes","friville-escarbotin","arras","lens","saint-quentin","soissons","laon","compiegne","beauvais","noyon"];
  const vidangeVilleRoutes: MetadataRoute.Sitemap = VIDANGE_VILLES.map((v) => ({
    url: `${BASE}/vidange-fosse-septique/${v}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const villeRoutes: MetadataRoute.Sitemap = villes.map((v) => ({
    url: `${BASE}/debouchage-${v.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...vidangeVilleRoutes, ...blogRoutes, ...villeRoutes];
}
