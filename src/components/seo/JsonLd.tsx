import { SITE_CONFIG } from "@/lib/site-config";

export function LegalServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Nikhil Shukla, Advocate",
    "url": SITE_CONFIG.url,
    "description": SITE_CONFIG.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressCountry": "IN"
    },
    "areaServed": "New Delhi, India",
    "knowsAbout": [
      "Criminal Law", "Bail Applications", "Cybercrime Law",
      "Matrimonial Law", "Divorce", "Child Custody",
      "Domestic Violence", "Maintenance"
    ],
    "founder": {
      "@type": "Person",
      "name": "Nikhil Shukla",
      "jobTitle": "Advocate",
      "worksFor": { "@type": "LegalService", "name": "Nikhil Shukla, Advocate" }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title, description, publishedAt, url, image
}: {
  title: string; description: string; publishedAt?: Date | null; url: string; image?: string | null;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": publishedAt?.toISOString(),
    "author": { "@type": "Person", "name": "Nikhil Shukla" },
    "publisher": { "@type": "LegalService", "name": "Nikhil Shukla, Advocate" },
    ...(image ? { "image": image } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}