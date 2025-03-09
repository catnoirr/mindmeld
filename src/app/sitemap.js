export default async function sitemap() {
  const baseUrl = 'https://mindmeld.com';

  // Core pages
  const routes = [
    '',
    '/about',
    '/services',
    '/contact-us',
    '/workwithus',
    '/other-services',
    '/zed-certification',
    '/ecommerce',
    '/income-tax-regulatory-compliances',
    '/central-subsidies',
    '/mega-food-park',
    '/integrated-cold-chain',
    '/scbfi',
    '/mofpi'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
} 