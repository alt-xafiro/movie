import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://movie.xafiro.site'),
  title: 'Movie',
  description: 'A movie roulette.',
  authors: [
    {
      name: 'Safiro',
      url: 'https://github.com/alt-xafiro'
    }
  ],
  icons: [
    '/favicon.ico',
    {
      type: 'image/svg+xml',
      sizes: 'any',
      url: '/favicon.svg'
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png'
    }
  ],
  manifest: '/manifest.webmanifest',
  openGraph: {
    siteName: 'Movie',
    url: 'https://movie.xafiro.site',
    images: [
      {
        url: 'https://movie.xafiro.site/opengraph-image.png',
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    images: ['https://movie.xafiro.site/opengraph-image.png']
  }
};
