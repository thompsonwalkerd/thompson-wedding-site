import { RsvpSubmissionsResponse, AttendanceFilter } from '@/lib/types/admin';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export async function fetchRsvpSubmissions(
  attendanceFilter: AttendanceFilter = 'all',
): Promise<RsvpSubmissionsResponse> {
  const url = new URL(`${API_BASE_URL}/api/rsvp/submissions/`);
  if (attendanceFilter !== 'all') {
    url.searchParams.append('attendance_filter', attendanceFilter);
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error('Failed to fetch RSVP submissions');
  }

  return response.json();
}

export async function updateRsvpEmail(
  groupId: number,
  newEmail: string,
): Promise<{ success: boolean; message: string }> {
  const response = await fetch(`${API_BASE_URL}/api/rsvp/update-email/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      group_id: groupId,
      email: newEmail,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to update email');
  }

  return response.json();
}
