// Discogs API raw response types (only fields we need)
export interface DiscogsResult {
  id: number;
  title: string; // Format: "Artist - Album Name"
  year?: string;
  thumb?: string;
  cover_image?: string;
  format?: string[];
  type: string; // "master" or "release"
  community?: {
    want: number; // Number of users who want this album
    have: number; // Number of users who have this album
  };
}

export interface DiscogsSearchResponse {
  results: DiscogsResult[];
}

// Normalized album type for frontend use
export interface Album {
  id: string; // Unique identifier (collectionId from iTunes)
  artist: string;
  title: string;
  coverUrl: string; // Album artwork URL
  year: number; // Release year
  isRegistered: boolean; // Whether this album has been registered by someone
}

// Request payload for registering an album
export interface AlbumRegistrationRequest {
  artist: string;
  album: string;
  coverUrl: string;
}

// Response from backend availability check
export interface AlbumAvailabilityResponse {
  available: boolean;
}

// Batch availability check request
export interface BatchAvailabilityRequest {
  albums: Array<{
    artist: string;
    album: string;
  }>;
}

// Batch availability check response
export interface BatchAvailabilityResponse {
  availability: {
    [key: string]: boolean; // Key format: "Artist-Album"
  };
}
