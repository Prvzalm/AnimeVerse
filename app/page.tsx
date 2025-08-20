import React from 'react';
import TrendingCarousel from '../components/TrendingCarousel';
import AnimeGrid from '../components/AnimeGrid';
import { fetchTrendingAnime } from '../lib/anilist'; // Function to fetch trending anime

const HomePage = async () => {
  // Fetch trending anime data
  const trendingAnime = await fetchTrendingAnime();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <section className="w-full">
        <TrendingCarousel animeList={trendingAnime} />
      </section>
      <section className="w-full mt-10">
        <h2 className="text-2xl font-bold text-center">Top Rated Anime</h2>
        <AnimeGrid animeList={trendingAnime} />
      </section>
      <section className="w-full mt-10 text-center">
        <a href="/auth/register" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">
          Join Now
        </a>
      </section>
    </main>
  );
};

export default HomePage;