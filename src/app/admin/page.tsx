'use client';

import { useState, useEffect } from 'react';
import { fetchRsvpSubmissions } from '@/lib/api/admin-api';
import { RsvpSubmission, AttendanceFilter } from '@/lib/types/admin';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [filter, setFilter] = useState<AttendanceFilter>('all');
  const [submissions, setSubmissions] = useState<RsvpSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      loadSubmissions(filter);
    }
  }, [isAuthenticated, filter]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (password === correctPassword) {
      setIsAuthenticated(true);
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password');
      setPassword('');
    }
  };

  const loadSubmissions = async (filterType: AttendanceFilter) => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchRsvpSubmissions(filterType);
      setSubmissions(data.submissions);
    } catch (err) {
      setError('Failed to load submissions. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = () => {
    let totalGuests = 0;
    let attendingGuests = 0;

    submissions.forEach(submission => {
      totalGuests += submission.attendees.length;
      attendingGuests += submission.attendees.filter(a => a.attending).length;
    });

    return {
      totalSubmissions: submissions.length,
      totalGuests,
      attendingGuests,
      decliningGuests: totalGuests - attendingGuests,
    };
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!isAuthenticated) {
    return (
      <div className='min-h-screen bg-bg flex items-center justify-center p-4'>
        <div className='bg-surface/5 border border-text/20 rounded-lg p-8 w-full max-w-md'>
          <h1 className='text-3xl font-heading text-heading mb-6 text-center'>Admin Access</h1>
          <form onSubmit={handlePasswordSubmit} className='space-y-4'>
            <div>
              <label htmlFor='password' className='block text-text/80 font-sans mb-2'>
                Password
              </label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                className='w-full bg-surface/10 border border-text/30 rounded-lg px-4 py-2 text-text font-sans focus:outline-none focus:border-accent'
                autoFocus
              />
              {passwordError && <p className='text-error text-sm mt-2'>{passwordError}</p>}
            </div>
            <button
              type='submit'
              className='w-full bg-accent/90 hover:bg-accent text-bg font-sans py-3 rounded-lg transition-colors'
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    );
  }

  const stats = calculateStats();

  return (
    <div className='min-h-screen bg-bg p-6 md:p-8'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl md:text-5xl font-heading text-heading mb-8'>RSVP Dashboard</h1>

        {/* Statistics Cards */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-8'>
          <div className='bg-surface/5 border border-text/20 rounded-lg p-4'>
            <div className='text-3xl font-heading text-accent'>{stats.totalSubmissions}</div>
            <div className='text-sm text-text/70 font-sans'>Total Submissions</div>
          </div>
          <div className='bg-surface/5 border border-text/20 rounded-lg p-4'>
            <div className='text-3xl font-heading text-accent'>{stats.totalGuests}</div>
            <div className='text-sm text-text/70 font-sans'>Total Guests</div>
          </div>
          <div className='bg-surface/5 border border-text/20 rounded-lg p-4'>
            <div className='text-3xl font-heading text-accent'>{stats.attendingGuests}</div>
            <div className='text-sm text-text/70 font-sans'>Attending</div>
          </div>
          <div className='bg-surface/5 border border-text/20 rounded-lg p-4'>
            <div className='text-3xl font-heading text-accent'>{stats.decliningGuests}</div>
            <div className='text-sm text-text/70 font-sans'>Declined</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className='flex gap-2 mb-6'>
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-sans text-sm transition-colors ${
              filter === 'all'
                ? 'bg-accent text-bg'
                : 'bg-surface/5 text-text/70 hover:bg-surface/10 border border-text/20'
            }`}
          >
            All ({submissions.length})
          </button>
          <button
            onClick={() => setFilter('attending')}
            className={`px-4 py-2 rounded-lg font-sans text-sm transition-colors ${
              filter === 'attending'
                ? 'bg-accent text-bg'
                : 'bg-surface/5 text-text/70 hover:bg-surface/10 border border-text/20'
            }`}
          >
            Attending
          </button>
          <button
            onClick={() => setFilter('not_attending')}
            className={`px-4 py-2 rounded-lg font-sans text-sm transition-colors ${
              filter === 'not_attending'
                ? 'bg-accent text-bg'
                : 'bg-surface/5 text-text/70 hover:bg-surface/10 border border-text/20'
            }`}
          >
            Not Attending
          </button>
        </div>

        {/* Loading/Error States */}
        {loading && <div className='text-center text-text/70 font-sans py-8'>Loading...</div>}
        {error && <div className='text-error font-sans py-4'>{error}</div>}

        {/* Submissions List */}
        {!loading && !error && (
          <div className='space-y-4'>
            {submissions.length === 0 ? (
              <div className='text-center text-text/70 font-sans py-8'>No submissions found</div>
            ) : (
              submissions.map(submission => {
                const attendingCount = submission.attendees.filter(a => a.attending).length;
                const totalCount = submission.attendees.length;
                const isExpanded = expandedId === submission.id;

                return (
                  <div
                    key={submission.id}
                    className='bg-surface/5 border border-text/20 rounded-lg overflow-hidden'
                  >
                    {/* Submission Header - Clickable */}
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : submission.id)}
                      className='w-full p-4 md:p-6 text-left hover:bg-surface/10 transition-colors'
                    >
                      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                        <div className='flex-1'>
                          <h3 className='text-xl font-heading text-heading mb-1'>
                            {submission.group_name && submission.group_name !== 'None'
                              ? submission.group_name
                              : submission.attendees.length === 1
                                ? submission.attendees[0].guest_name
                                : 'Single Guest'}
                          </h3>
                          <p className='text-sm text-text/70 font-sans'>{submission.email}</p>
                        </div>
                        <div className='flex items-center gap-6'>
                          <div className='text-right'>
                            <div className='text-sm text-text/70 font-sans'>
                              {attendingCount} / {totalCount} attending
                            </div>
                            <div className='text-xs text-text/60 font-sans'>
                              {formatDate(submission.submitted_at)}
                            </div>
                          </div>
                          <div className='text-text/40'>
                            {isExpanded ? '▼' : '▶'}
                          </div>
                        </div>
                      </div>
                    </button>

                    {/* Expanded Details */}
                    {isExpanded && (
                      <div className='border-t border-text/20 p-4 md:p-6 bg-surface/10'>
                        {/* Attendees List */}
                        <div className='mb-4'>
                          <h4 className='font-heading text-lg text-text mb-2'>Guests</h4>
                          <div className='space-y-1'>
                            {submission.attendees.map(attendee => (
                              <div key={attendee.id} className='flex items-center gap-2 font-sans text-sm'>
                                <span className={attendee.attending ? 'text-accent' : 'text-text/40'}>
                                  {attendee.attending ? '✓' : '✗'}
                                </span>
                                <span className='text-text'>{attendee.guest_name}</span>
                                <span className='text-text/60'>
                                  ({attendee.attending ? 'Attending' : 'Not Attending'})
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Song Requests */}
                        {submission.songs && (
                          <div className='mb-4'>
                            <h4 className='font-heading text-lg text-text mb-2'>Song Requests</h4>
                            <p className='text-text/80 font-sans text-sm'>{submission.songs}</p>
                          </div>
                        )}

                        {/* Dietary Restrictions */}
                        {submission.dietary_restrictions && (
                          <div>
                            <h4 className='font-heading text-lg text-text mb-2'>Dietary Restrictions</h4>
                            <p className='text-text/80 font-sans text-sm'>{submission.dietary_restrictions}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
}
