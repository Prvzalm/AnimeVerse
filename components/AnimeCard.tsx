import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AnimeCardProps {
  id: number;
  title: string;
  imageUrl: string;
  synopsis: string;
  genres: string[];
}

const AnimeCard: React.FC<AnimeCardProps> = ({ id, title, imageUrl, synopsis, genres }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <Link href={`/anime/${id}`}>
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={450}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{synopsis}</p>
          <div className="mt-2">
            {genres.map((genre) => (
              <span key={genre} className="inline-block bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                {genre}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AnimeCard;