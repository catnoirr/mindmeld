export default function JsonLd({ organizationData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Mindmeld Management Consulting Private Limited",
          "url": "https://mindmeld.com",
          "logo": "https://mindmeld.com/logo.png",
          "description": "Professional management consulting services specializing in business strategy, digital transformation, and regulatory compliance.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Old GT Road, Near Jalandhar Byepass, Opposite Old Sabzi Mandi",
            "addressLocality": "Ludhiana",
            "addressRegion": "Punjab",
            "postalCode": "141001",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://www.linkedin.com/company/mindmeld",
            "https://twitter.com/mindmeld"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+919815081610",
            "contactType": "customer service",
            "email": "mindmeldplc@gmail.com"
          }
        })
      }}
    />
  );
} 