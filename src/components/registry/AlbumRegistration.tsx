'use client';

import { useState } from 'react';
import { searchAlbums, checkMultipleAlbums, registerAlbum } from '@/lib/api/albums-api';
import type { Album } from '@/lib/types/albums';

interface AlbumRegistrationProps {
  translations: {
    title: string;
    searchPlaceholder: string;
    searchButton: string;
    searching: string;
    noResults: string;
    selectAlbum: string;
    registeredBadge: string;
    registerButton: string;
    registering: string;
    success: string;
    registerAnother: string;
    error: string;
  };
}

export default function AlbumRegistration({ translations: t }: AlbumRegistrationProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Album[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setError(null);
    setSearchResults([]);
    setSelectedAlbum(null);

    try {
      // Step 1: Search iTunes for albums
      const albums = await searchAlbums(searchQuery);

      if (albums.length === 0) {
        setSearchResults([]);
        setIsSearching(false);
        return;
      }

      // Step 2: Check which albums are already registered
      const albumsToCheck = albums.map(album => ({
        artist: album.artist,
        album: album.title,
      }));

      const availability = await checkMultipleAlbums(albumsToCheck);

      // Step 3: Mark albums as registered or available
      const albumsWithStatus = albums.map(album => {
        const key = `${album.artist}-${album.title}`;
        return {
          ...album,
          isRegistered: !availability[key], // If not available, it's registered
        };
      });

      setSearchResults(albumsWithStatus);
    } catch (err) {
      console.error('Search error:', err);
      setError(t.error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleAlbumSelect = (album: Album) => {
    if (album.isRegistered) return; // Don't allow selecting registered albums
    setSelectedAlbum(album);
  };

  const handleRegister = async () => {
    if (!selectedAlbum) return;

    setIsRegistering(true);
    setError(null);

    try {
      await registerAlbum({
        artist: selectedAlbum.artist,
        album: selectedAlbum.title,
        coverUrl: selectedAlbum.coverUrl,
      });

      setRegistrationSuccess(true);
      setSelectedAlbum(null);
      setSearchResults([]);
    } catch (err) {
      console.error('Registration error:', err);
      setError(t.error);
    } finally {
      setIsRegistering(false);
    }
  };

  const handleRegisterAnother = () => {
    setRegistrationSuccess(false);
    setSearchQuery('');
    setSearchResults([]);
    setSelectedAlbum(null);
    setError(null);
  };

  // Success state
  if (registrationSuccess) {
    return (
      <div className='space-y-6'>
        <h3 className='text-2xl font-display text-accent'>{t.title}</h3>
        <div className='rounded-lg bg-surface/20 p-8 text-center'>
          <div className='mb-4 text-6xl'>✓</div>
          <p className='mb-6 text-lg text-text/90'>{t.success}</p>
          <button
            onClick={handleRegisterAnother}
            className='bg-accent/90 hover:bg-accent text-bg font-sans py-2 px-6 rounded-lg transition-colors duration-200'
          >
            {t.registerAnother}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      <h3 className='text-2xl font-display text-accent'>{t.title}</h3>

      {/* Search Form */}
      <form onSubmit={handleSearch} className='space-y-4'>
        <input
          type='text'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
          className='w-full rounded-lg border border-text/20 bg-surface/10 px-4 py-3 text-text placeholder:text-text/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20'
          disabled={isSearching}
        />
        <button
          type='submit'
          disabled={isSearching || !searchQuery.trim()}
          className='w-full bg-accent/90 hover:bg-accent text-bg font-sans py-2 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isSearching ? t.searching : t.searchButton}
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <div className='rounded-lg bg-red-500/10 p-4 text-red-400 border border-red-500/20'>
          {error}
        </div>
      )}

      {/* No Results Message */}
      {!isSearching && searchResults.length === 0 && searchQuery && !selectedAlbum && (
        <p className='text-center text-text/60'>{t.noResults}</p>
      )}

      {/* Selected Album View */}
      {selectedAlbum && (
        <div className='space-y-4'>
          <div className='rounded-lg bg-surface/20 p-6'>
            <div className='flex flex-col items-center gap-6 sm:flex-row'>
              <img
                src={selectedAlbum.coverUrl}
                alt={`${selectedAlbum.title} by ${selectedAlbum.artist}`}
                className='h-48 w-48 rounded-lg shadow-lg'
              />
              <div className='flex-1 text-center sm:text-left'>
                <h4 className='text-2xl font-display text-accent mb-2'>{selectedAlbum.title}</h4>
                <p className='text-lg text-text/80 mb-1'>{selectedAlbum.artist}</p>
                <p className='text-sm text-text/60'>{selectedAlbum.year}</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-3'>
            <button
              onClick={() => setSelectedAlbum(null)}
              className='flex-1 bg-surface/30 hover:bg-surface/50 text-text/80 font-sans py-2 px-6 rounded-lg transition-colors duration-200'
            >
              Back to Results
            </button>
            <button
              onClick={handleRegister}
              disabled={isRegistering}
              className='flex-1 bg-accent/90 hover:bg-accent text-bg font-sans py-2 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isRegistering ? t.registering : t.registerButton}
            </button>
          </div>
        </div>
      )}

      {/* Search Results Grid */}
      {!selectedAlbum && searchResults.length > 0 && (
        <div className='space-y-4'>
          <p className='text-sm text-text/70'>{t.selectAlbum}</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
            {searchResults.map(album => (
              <button
                key={album.id}
                onClick={() => handleAlbumSelect(album)}
                disabled={album.isRegistered}
                className={`group relative rounded-lg bg-surface/20 p-3 sm:p-4 text-left transition-all w-full max-w-xs ${
                  album.isRegistered
                    ? 'cursor-not-allowed opacity-50'
                    : 'hover:bg-surface/30 hover:shadow-lg cursor-pointer'
                }`}
              >
                {/* Registered Badge */}
                {album.isRegistered && (
                  <div className='absolute top-2 right-2 rounded-md bg-red-500/90 px-2 py-1 text-xs font-bold text-white shadow-lg z-10'>
                    {t.registeredBadge}
                  </div>
                )}

                {/* Mobile: Horizontal layout with smaller cover */}
                <div className='flex sm:hidden items-center gap-3'>
                  <img
                    src={album.coverUrl}
                    alt={`${album.title} by ${album.artist}`}
                    className='h-20 w-20 flex-shrink-0 rounded-md shadow-md'
                  />
                  <div className='flex-1 min-w-0'>
                    <h5 className='font-display text-accent text-sm line-clamp-2 mb-1'>
                      {album.title}
                    </h5>
                    <p className='text-xs text-text/70 line-clamp-1'>{album.artist}</p>
                    <p className='text-xs text-text/50'>{album.year}</p>
                  </div>
                </div>

                {/* Desktop: Vertical layout with larger cover */}
                <div className='hidden sm:flex flex-col items-center gap-3'>
                  <img
                    src={album.coverUrl}
                    alt={`${album.title} by ${album.artist}`}
                    className='h-32 w-32 rounded-md shadow-md'
                  />
                  <div className='w-full text-center'>
                    <h5 className='font-display text-accent text-sm line-clamp-1'>{album.title}</h5>
                    <p className='text-xs text-text/70 line-clamp-1'>{album.artist}</p>
                    <p className='text-xs text-text/50'>{album.year}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
