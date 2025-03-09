export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Mindmeld Management Consulting Private Limited",
          "image": "https://mindmeld.com/logo.png",
          "description": "Professional management consulting services specializing in business strategy, digital transformation, and regulatory compliance.",
          "@id": "https://mindmeld.com",
          "url": "https://mindmeld.com",
          "telephone": "+919815081610",
          "email": "mindmeldplc@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Old GT Road, Near Jalandhar Byepass, Opposite Old Sabzi Mandi",
            "addressLocality": "Ludhiana",
            "addressRegion": "Punjab",
            "postalCode": "141001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "30.9010",
            "longitude": "75.8573"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          },
          "priceRange": "₹₹",
          "areaServed": ["Ludhiana", "Punjab", "India"]
        })
      }}
    />
  );
} 