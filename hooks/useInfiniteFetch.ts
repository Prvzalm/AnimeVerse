import { useEffect, useState } from 'react';

// Custom hook for infinite fetching of data
const useInfiniteFetch = (fetchFunction: (page: number) => Promise<any>, initialPage: number = 1) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<number>(initialPage);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const fetchData = async (page: number) => {
        setLoading(true);
        setError(null);
        try {
            const result = await fetchFunction(page);
            setData((prevData) => [...prevData, ...result.data]);
            setHasMore(result.hasMore); // Assuming the API returns a hasMore flag
        } catch (err) {
            setError('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (hasMore) {
            fetchData(page);
        }
    }, [page, hasMore]);

    return { data, loading, error, hasMore, setPage };
};

export default useInfiniteFetch;