// iTunes API raw response types (only fields we need)
export interface iTunesTrack {
  collectionId: number;
  artistName: string;
  collectionName: string;
  artworkUrl100: string;
  releaseDate: string;
}

export interface iTunesSearchResponse {
  resultCount: number;
  results: iTunesTrack[];
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
