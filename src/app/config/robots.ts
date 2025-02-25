import type { MetadataRoute } from 'next';

export function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: 'https://movie.xafiro.site/sitemap.xml'
  };
}
