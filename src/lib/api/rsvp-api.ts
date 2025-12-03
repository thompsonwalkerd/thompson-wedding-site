import type { GuestGroup, RsvpSubmission } from '@/lib/mocks/rsvp';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export async function searchGuests(name: string): Promise<GuestGroup[]> {
  const response = await fetch(`${API_BASE_URL}/api/guests/search/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    throw new Error('Search failed');
  }

  return response.json();
}

export async function checkRsvpStatus(groupId: number): Promise<boolean> {
  const response = await fetch(`${API_BASE_URL}/api/rsvp/status/${groupId}`);

  if (!response.ok) {
    throw new Error('Status check failed');
  }

  const data = await response.json();
  return data.has_submitted;
}

export async function submitRsvp(
  data: RsvpSubmission
): Promise<{ success: boolean; message?: string }> {
  const response = await fetch(`${API_BASE_URL}/api/rsvp/submit/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    return { success: false, message: error.message || 'Submission failed' };
  }

  return { success: true };
}

export async function updateRsvpEmail(
  groupId: number,
  newEmail: string
): Promise<{ success: boolean; message?: string }> {
  const response = await fetch(`${API_BASE_URL}/api/rsvp/update-email/`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      group_id: groupId,
      email: newEmail,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    return { success: false, message: error.message || 'Email update failed' };
  }

  return { success: true, message: 'Email updated successfully' };
}
