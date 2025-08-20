import React from 'react';
import AnimeCard from './AnimeCard';
import { Anime } from '../types'; // Assuming you have a types file for TypeScript types

interface AnimeGridProps {
  animes: Anime[]; // Array of anime objects
}

const AnimeGrid: React.FC<AnimeGridProps> = ({ animes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {animes.map((anime) => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeGrid;