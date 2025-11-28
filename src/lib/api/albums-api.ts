import type {
  Album,
  DiscogsSearchResponse,
  BatchAvailabilityRequest,
  BatchAvailabilityResponse,
  AlbumRegistrationRequest,
} from '@/lib/types/albums';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const DISCOGS_API_URL = 'https://api.discogs.com';

/**
 * Search for albums using the Discogs API
 * @param query - Search query (artist name, album name, or both)
 * @returns Array of normalized Album objects (without isRegistered flag)
 */
export async function searchAlbums(query: string): Promise<Album[]> {
  if (!query.trim()) {
    return [];
  }

  try {
    const params = new URLSearchParams({
      q: query,
      type: 'release',
      format: 'album',
      per_page: '10',
    });

    const headers: HeadersInit = {
      'User-Agent': 'ThompsonWeddingRegistry/1.0',
    };

    // Add authorization if token is available
    const token = process.env.NEXT_PUBLIC_DISCOGS_TOKEN;
    if (token) {
      headers['Authorization'] = `Discogs token=${token}`;
    }

    const response = await fetch(`${DISCOGS_API_URL}/database/search?${params}`, {
      headers,
    });

    if (!response.ok) {
      throw new Error('Discogs search failed');
    }

    const data: DiscogsSearchResponse = await response.json();

    // Filter and normalize Discogs results
    const albums = data.results
      .filter((result) => {
        // Only include releases with proper titles and album format
        if (!result.title || result.type === 'artist') return false;
        // Prefer results with cover images
        return true;
      })
      .slice(0, 5) // Take top 5
      .map((result) => {
        // Parse "Artist - Album" format
        const parts = result.title.split(' - ');
        const artist = parts[0] || 'Unknown Artist';
        const title = parts.slice(1).join(' - ') || result.title;

        return {
          id: result.id.toString(),
          artist: artist,
          title: title,
          coverUrl: result.cover_image || result.thumb || '/placeholder-album.png',
          year: result.year ? parseInt(result.year) : new Date().getFullYear(),
          isRegistered: false, // Will be updated by checkMultipleAlbums
        };
      });

    return albums;
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
