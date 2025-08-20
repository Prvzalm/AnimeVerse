import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AnimeVerse - Your Ultimate Anime Destination',
  description: 'Discover the latest anime news, get AI-generated recommendations, and engage with the community on AnimeVerse.',
  keywords: ['Anime', 'Anime News', 'Recommendations', 'Community', 'AI'],
  authors: [{ name: 'AnimeVerse Team', url: 'https://animeverse.com' }],
  openGraph: {
    title: 'AnimeVerse - Your Ultimate Anime Destination',
    description: 'Discover the latest anime news, get AI-generated recommendations, and engage with the community on AnimeVerse.',
    url: 'https://animeverse.com',
    siteName: 'AnimeVerse',
    images: [
      {
        url: 'https://animeverse.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AnimeVerse Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AnimeVerse - Your Ultimate Anime Destination',
    description: 'Discover the latest anime news, get AI-generated recommendations, and engage with the community on AnimeVerse.',
    images: ['https://animeverse.com/og-image.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};