import { Metadata } from 'next';

const sitemap = () => {
  const pages = [
    { loc: '/', lastmod: new Date().toISOString() },
    { loc: '/dashboard', lastmod: new Date().toISOString() },
    { loc: '/profile', lastmod: new Date().toISOString() },
    { loc: '/auth/sign-in', lastmod: new Date().toISOString() },
    { loc: '/auth/register', lastmod: new Date().toISOString() },
    // Add more routes as necessary
  ];

  return (
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image">
      {pages.map((page) => (
        <url key={page.loc}>
          <loc>{page.loc}</loc>
          <lastmod>{page.lastmod}</lastmod>
        </url>
      ))}
    </urlset>
  );
};

export const metadata: Metadata = {
  title: 'AnimeVerse Sitemap',
  description: 'Sitemap for AnimeVerse application',
};

export default sitemap;