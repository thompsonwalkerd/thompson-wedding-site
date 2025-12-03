export interface Attendee {
  id: number;
  guest_id: number;
  guest_name: string;
  attending: boolean;
  from_america: boolean;
}

export interface RsvpSubmission {
  id: number;
  group_id: number;
  group_name: string | null;
  email: string;
  songs: string | null;
  dietary_restrictions: string | null;
  submitted_at: string;
  attendees: Attendee[];
}

export interface RsvpSubmissionsResponse {
  submissions: RsvpSubmission[];
  count: number;
}

export type AttendanceFilter = 'all' | 'attending' | 'not_attending';
