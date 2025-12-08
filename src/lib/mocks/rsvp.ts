// Type definitions for RSVP system
// These types are shared between the frontend and the Python backend API

export type Guest = {
  id: number;
  name: string;
  from_america?: boolean;
};

export type GuestGroup = {
  group_id: number;
  group_name: string;
  guests: Guest[];
};

export type RsvpGuestResponse = {
  guest_id: number;
  attending: boolean;
  from_america?: boolean;
};

export type RsvpSubmission = {
  group_id: number;
  email: string;
  attendees: RsvpGuestResponse[];
  dietary_restrictions: string;
  songs: string;
};
