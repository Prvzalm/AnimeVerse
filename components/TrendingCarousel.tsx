import React, { useEffect, useState } from 'react';
import { useInfiniteFetch } from '../hooks/useInfiniteFetch';
import { AnimeCard } from './AnimeCard';
import { Skeleton } from './ui/Skeleton';

const TrendingCarousel: React.FC = () => {
    const { data, loading, error, fetchMore } = useInfiniteFetch('/api/anime/trending');

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !loading) {
            fetchMore();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading]);

    if (loading) {
        return (
            <div className="flex overflow-x-auto">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Skeleton key={index} className="w-64 h-96 m-2" />
                ))}
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500">Failed to load trending anime.</div>;
    }

    return (
        <div className="flex overflow-x-auto">
            {data.map((anime) => (
                <AnimeCard key={anime.id} anime={anime} />
            ))}
        </div>
    );
};

export default TrendingCarousel;