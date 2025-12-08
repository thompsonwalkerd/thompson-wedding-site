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
