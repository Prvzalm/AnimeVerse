import React, { useEffect, useRef } from 'react';

interface InfiniteScrollProps {
  loadMore: () => void; // Function to load more items
  hasMore: boolean; // Flag to indicate if more items are available
  children: React.ReactNode; // Children components to render
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ loadMore, hasMore, children }) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect(); // Disconnect previous observer

    const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore(); // Load more items when the last item is in view
      }
    };

    observer.current = new IntersectionObserver(callback);
    if (lastItemRef.current) {
      observer.current.observe(lastItemRef.current); // Observe the last item
    }

    return () => {
      if (observer.current) observer.current.disconnect(); // Cleanup observer on unmount
    };
  }, [loadMore, hasMore]);

  return (
    <div>
      {children}
      <div ref={lastItemRef} /> {/* Reference for the last item */}
    </div>
  );
};

export default InfiniteScroll;