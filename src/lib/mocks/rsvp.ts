// Mock data and API functions for RSVP system
// This will be replaced with real API calls to Python backend later

export type Guest = {
  id: number;
  name: string;
  is_plus_one_slot: boolean;
};

export type GuestGroup = {
  group_id: number;
  group_name: string;
  guests: Guest[];
};

export type RsvpAttendee = {
  guest_id: number;
  attending: boolean;
  plus_one_name?: string;
};

export type RsvpSubmission = {
  group_id: number;
  email: string;
  attendees: RsvpAttendee[];
  dietary_restrictions: string;
};

// Mock guest data
const mockGroups: GuestGroup[] = [
  {
    group_id: 1,
    group_name: 'Smith Family',
    guests: [
      { id: 1, name: 'Sarah Smith', is_plus_one_slot: false },
      { id: 2, name: 'John Smith', is_plus_one_slot: false },
      { id: 3, name: 'Emma Smith', is_plus_one_slot: false },
    ],
  },
  {
    group_id: 2,
    group_name: 'Michael Johnson + Guest',
    guests: [
      { id: 4, name: 'Michael Johnson', is_plus_one_slot: false },
      { id: 5, name: 'Guest', is_plus_one_slot: true },
    ],
  },
  {
    group_id: 3,
    group_name: 'Emily Davis',
    guests: [{ id: 6, name: 'Emily Davis', is_plus_one_slot: false }],
  },
  {
    group_id: 4,
    group_name: 'The Williams Family',
    guests: [
      { id: 7, name: 'Robert Williams', is_plus_one_slot: false },
      { id: 8, name: 'Lisa Williams', is_plus_one_slot: false },
      { id: 9, name: 'Jake Williams', is_plus_one_slot: false },
      { id: 10, name: 'Sophie Williams', is_plus_one_slot: false },
    ],
  },
  {
    group_id: 5,
    group_name: 'David Smith + Guest',
    guests: [
      { id: 11, name: 'David Smith', is_plus_one_slot: false },
      { id: 12, name: 'Guest', is_plus_one_slot: true },
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

  // Validate: plus-one slots that are attending must have a name
  const group = mockGroups.find(g => g.group_id === data.group_id);
  if (group) {
    for (const attendee of data.attendees) {
      if (attendee.attending) {
        const guest = group.guests.find(g => g.id === attendee.guest_id);
        if (guest?.is_plus_one_slot && !attendee.plus_one_name?.trim()) {
          return {
            success: false,
            message: 'Please provide a name for your guest',
          };
        }
      }
    }
  }

  // Mark as submitted
  submittedRsvps.add(data.group_id);

  return {
    success: true,
    message: 'RSVP submitted successfully!',
  };
}
