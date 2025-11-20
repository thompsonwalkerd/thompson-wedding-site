'use client';

import { useState } from 'react';

type VinylSearchClientProps = {
  searchPlaceholder: string;
  searchButton: string;
};

export default function VinylSearchClient({ searchPlaceholder, searchButton }: VinylSearchClientProps) {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<'available' | 'taken' | null>(null);
  const [lastSearchedQuery, setLastSearchedQuery] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setResult(null);
    setLastSearchedQuery(query);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/albums/check/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ album_name: query }),
      });
      const data = await response.json();
      setResult(data.available ? 'available' : 'taken');
    } catch {
      setResult(null);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className='mt-4 space-y-3'>
      <form onSubmit={handleSearch} className='flex gap-2'>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={searchPlaceholder}
          className='flex-1 px-4 py-2 bg-surface/10 border border-text/30 rounded-lg text-text placeholder:text-text/50 focus:outline-none focus:border-accent transition-colors font-sans text-sm'
          disabled={isSearching}
        />
        <button
          type='submit'
          disabled={isSearching || !query.trim()}
          className='px-6 py-2 bg-accent/20 border border-accent/40 rounded-lg text-text font-sans text-sm hover:bg-accent/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isSearching ? '...' : searchButton}
        </button>
      </form>

      {result && (
        <p
          className={`text-sm font-sans ${
            result === 'available' ? 'text-success' : 'text-error'
          }`}
        >
          {result === 'available'
            ? `✓ "${lastSearchedQuery}" is available`
            : `✗ "${lastSearchedQuery}" has already been chosen`}
        </p>
      )}
    </div>
  );
}
