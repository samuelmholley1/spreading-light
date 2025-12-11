export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://mendograss.com/#organization",
        "name": "Mendo Grass",
        "url": "https://mendograss.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mendograss.com/logo_colored.jpg",
          "width": 300,
          "height": 300
        },
        "description": "Premium organic microgreens and wheatgrass farm in Mendocino County, California. Serving restaurants, schools, and food service professionals with fresh, locally grown microgreens.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mendocino County",
          "addressRegion": "CA",
          "addressCountry": "US"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "adam@mendograss.com",
          "contactType": "Customer Service"
        },
        "sameAs": [
          "https://instagram.com/mendograss",
          "https://facebook.com/mendograss"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://mendograss.com/#localbusiness",
        "name": "Mendo Grass",
        "description": "Organic microgreens and wheatgrass farm specializing in premium fresh greens for restaurants and food service.",
        "url": "https://mendograss.com",
        "telephone": "(707) 555-0123",
  "email": "adam@mendograss.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mendocino County",
          "addressRegion": "CA",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 39.1637,
          "longitude": -123.8006
        },
        "openingHours": "Mo-Fr 08:00-17:00",
        "priceRange": "$$",
        "servesCuisine": ["Organic", "Farm Fresh", "Microgreens"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Microgreens & Wheatgrass Products",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Fresh Microgreens",
                "description": "Organic microgreens including buckwheat, radish, pea shoots, and custom mixes"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Product",
                "name": "Wheatgrass",
                "description": "Fresh wheatgrass flats for juice programs and health-conscious establishments"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product", 
                "name": "Pea Shoot Pesto",
                "description": "Artisanal pesto made from fresh pea shoots"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://mendograss.com/#website",
        "url": "https://mendograss.com",
        "name": "Mendo Grass",
        "description": "Premium organic microgreens and wheatgrass from Mendocino County",
        "publisher": {
          "@id": "https://mendograss.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://mendograss.com/wholesale?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}