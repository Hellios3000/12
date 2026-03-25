export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Київська Юридична Група",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "вул. Хрещатик, 1",
    "addressLocality": "Київ",
    "postalCode": "01001",
    "addressCountry": "UA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.4501,
    "longitude": 30.5234
  },
  "url": "https://kyiv-legal.com.ua",
  "telephone": "+380441234567",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$"
});

export const getFAQSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
});