export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/*.json$'],
      },
    ],
    sitemap: 'https://mindmeld.com/sitemap.xml',
  };
} 