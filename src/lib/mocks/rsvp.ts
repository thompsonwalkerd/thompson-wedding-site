// Mock data and API functions for RSVP system
// This will be replaced with real API calls to Python backend later

export type Guest = {
  id: number;
  name: string;
};

export type GuestGroup = {
  group_id: number;
  group_name: string;
  guests: Guest[];
};

export type RsvpGuestResponse = {
  guest_id: number;
  attending: boolean;
};

export type RsvpSubmission = {
  group_id: number;
  email: string;
  attendees: RsvpGuestResponse[];
  dietary_restrictions: string;
};

// Mock guest data
const mockGroups: GuestGroup[] = [
  {
    group_id: 1,
    group_name: 'Smith Family',
    guests: [
      { id: 1, name: 'Sarah Smith' },
      { id: 2, name: 'John Smith' },
      { id: 3, name: 'Emma Smith' },
    ],
  },
  {
    group_id: 2,
    group_name: 'Michael Johnson & Partner',
    guests: [
      { id: 4, name: 'Michael Johnson' },
      { id: 5, name: 'Jamie Anderson' },
    ],
  },
  {
    group_id: 3,
    group_name: 'Emily Davis',
    guests: [{ id: 6, name: 'Emily Davis' }],
  },
  {
    group_id: 4,
    group_name: 'The Williams Family',
    guests: [
      { id: 7, name: 'Robert Williams' },
      { id: 8, name: 'Lisa Williams' },
      { id: 9, name: 'Jake Williams' },
      { id: 10, name: 'Sophie Williams' },
    ],
  },
  {
    group_id: 5,
    group_name: 'David & Sarah Chen',
    guests: [
      { id: 11, name: 'David Chen' },
      { id: 12, name: 'Sarah Chen' },
    ],
  },
];

// Track submitted RSVPs (in-memory for mock)
const submittedRsvps = new Set<number>();

/**
 * Search for guests by name
 * Returns all groups that have a matching guest
 */
export async function searchGuests(name: string): Promise<GuestGroup[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  const searchLower = name.toLowerCase().trim();
  const results: GuestGroup[] = [];

  // Search through all groups to find matching guests
  for (const group of mockGroups) {
    const foundGuest = group.guests.find(guest => guest.name.toLowerCase().includes(searchLower));

    if (foundGuest) {
      results.push(group);
    }
  }

  return results;
}

/**
 * Check if a group has already RSVP'd
 */
export async function checkRsvpStatus(groupId: number): Promise<boolean> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));

  return submittedRsvps.has(groupId);
}

/**
 * Submit an RSVP
 */
export async function submitRsvp(
  data: RsvpSubmission
): Promise<{ success: boolean; message?: string }> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // eslint-disable-next-line no-console
  console.log('Mock RSVP Submission:', data);

  // Validate: at least one person attending
  const anyoneAttending = data.attendees.some(a => a.attending);
  if (!anyoneAttending) {
    return {
      success: false,
      message: 'At least one person must be attending',
    };
  }

  // Mark as submitted
  submittedRsvps.add(data.group_id);

  return {
    success: true,
    message: 'RSVP submitted successfully!',
  };
}
