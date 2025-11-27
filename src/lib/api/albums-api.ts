import type {
  Album,
  iTunesSearchResponse,
  BatchAvailabilityRequest,
  BatchAvailabilityResponse,
  AlbumRegistrationRequest,
} from '@/lib/types/albums';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const ITUNES_API_URL = 'https://itunes.apple.com/search';

/**
 * Search for albums using the iTunes API
 * @param query - Search query (artist name, album name, or both)
 * @returns Array of normalized Album objects (without isRegistered flag)
 */
export async function searchAlbums(query: string): Promise<Album[]> {
  if (!query.trim()) {
    return [];
  }

  try {
    const params = new URLSearchParams({
      term: query,
      entity: 'album',
      limit: '5',
    });

    const response = await fetch(`${ITUNES_API_URL}?${params}`);

    if (!response.ok) {
      throw new Error('iTunes search failed');
    }

    const data: iTunesSearchResponse = await response.json();

    // Normalize iTunes results to our Album type
    return data.results.map((track) => ({
      id: track.collectionId.toString(),
      artist: track.artistName,
      title: track.collectionName,
      coverUrl: track.artworkUrl100,
      year: new Date(track.releaseDate).getFullYear(),
      isRegistered: false, // Will be updated by checkMultipleAlbums
    }));
  } catch (error) {
    console.error('Error searching albums:', error);
    throw new Error('Failed to search albums');
  }
}

/**
 * Check availability for multiple albums at once
 * @param albums - Array of {artist, album} objects to check
 * @returns Map of "Artist-Album" keys to availability boolean
 */
export async function checkMultipleAlbums(
  albums: Array<{ artist: string; album: string }>
): Promise<{ [key: string]: boolean }> {
  try {
    const requestBody: BatchAvailabilityRequest = { albums };

    const response = await fetch(`${API_BASE_URL}/api/albums/check-batch/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error('Availability check failed');
    }

    const data: BatchAvailabilityResponse = await response.json();
    return data.availability;
  } catch (error) {
    console.error('Error checking album availability:', error);
    // Return all albums as available if check fails (graceful degradation)
    return albums.reduce((acc, album) => {
      const key = `${album.artist}-${album.album}`;
      acc[key] = true;
      return acc;
    }, {} as { [key: string]: boolean });
  }
}

/**
 * Register an album to mark it as taken
 * @param data - Album registration data (artist, album, coverUrl)
 */
export async function registerAlbum(data: AlbumRegistrationRequest): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/api/albums/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to register album');
  }
}
