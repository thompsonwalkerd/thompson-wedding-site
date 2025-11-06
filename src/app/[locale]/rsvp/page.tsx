'use client';

import { use, useState } from 'react';
import { getTranslations } from '@/lib/translations';
import { validateLocale } from '@/utils/locale';
import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { searchGuests, submitRsvp, checkRsvpStatus, type GuestGroup, type RsvpAttendee } from '@/lib/mocks/rsvp';

type RsvpPageProps = {
  params: Promise<{ locale: string }>;
};

type FormState = 'search' | 'results' | 'form' | 'success' | 'already-submitted';

export default function RsvpPage({ params }: RsvpPageProps) {
  const { locale: localeString } = use(params);
  const locale = validateLocale(localeString);
  const t = getTranslations(locale);

  // State management
  const [formState, setFormState] = useState<FormState>('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState('');

  const [searchResults, setSearchResults] = useState<GuestGroup[]>([]);
  const [guestGroup, setGuestGroup] = useState<GuestGroup | null>(null);
  const [attendees, setAttendees] = useState<RsvpAttendee[]>([]);
  const [email, setEmail] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Handle guest search
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setSearchError('');
    setIsSearching(true);

    try {
      const results = await searchGuests(searchQuery);

      if (results.length === 0) {
        setSearchError(t.rsvp.notFound);
        setIsSearching(false);
        return;
      }

      // Show results for user to select
      setSearchResults(results);
      setFormState('results');
    } catch (error) {
      setSearchError(t.rsvp.errorMessage);
    } finally {
      setIsSearching(false);
    }
  };

  // Handle selecting a guest from results
  const handleSelectGuest = async (group: GuestGroup) => {
    // Check if already submitted
    const hasSubmitted = await checkRsvpStatus(group.group_id);
    if (hasSubmitted) {
      setFormState('already-submitted');
      return;
    }

    // Initialize attendees array with all guests set to not attending
    const initialAttendees: RsvpAttendee[] = group.guests.map(guest => ({
      guest_id: guest.id,
      attending: false,
      plus_one_name: undefined,
    }));

    setGuestGroup(group);
    setAttendees(initialAttendees);
    setFormState('form');
  };

  // Handle attendee checkbox change
  const handleAttendeeChange = (guestId: number, attending: boolean) => {
    setAttendees(prev =>
      prev.map(a =>
        a.guest_id === guestId ? { ...a, attending } : a
      )
    );
  };

  // Handle plus-one name change
  const handlePlusOneNameChange = (guestId: number, name: string) => {
    setAttendees(prev =>
      prev.map(a =>
        a.guest_id === guestId ? { ...a, plus_one_name: name } : a
      )
    );
  };

  // Handle RSVP submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestGroup) return;

    setSubmitError('');
    setIsSubmitting(true);

    try {
      const result = await submitRsvp({
        group_id: guestGroup.group_id,
        email,
        attendees,
        dietary_restrictions: dietaryRestrictions,
      });

      if (result.success) {
        setFormState('success');
      } else {
        setSubmitError(result.message || t.rsvp.errorMessage);
      }
    } catch (error) {
      setSubmitError(t.rsvp.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout locale={locale} t={t} currentPath='rsvp'>
      <div className='px-6 py-12 max-w-2xl mx-auto w-full'>
        {/* Page Title */}
        <h1 className='text-5xl font-heading text-wedding-cream mb-12 border-b border-wedding-cream/30 pb-4'>
          {t.rsvp.pageTitle}
        </h1>

          {/* Search State */}
          {formState === 'search' && (
            <div className='space-y-6'>
              <p className='text-wedding-cream font-sans text-lg'>
                {t.rsvp.searchPrompt}
              </p>

              <form onSubmit={handleSearch} className='space-y-4'>
                <input
                  type='text'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.rsvp.searchPlaceholder}
                  className='w-full px-4 py-3 bg-wedding-cream/10 border border-wedding-cream/30 rounded-lg text-wedding-cream placeholder:text-wedding-cream/50 font-sans focus:outline-none focus:border-wedding-cream/60'
                  disabled={isSearching}
                />

                {searchError && (
                  <p className='text-red-400 font-sans text-sm'>{searchError}</p>
                )}

                <button
                  type='submit'
                  disabled={isSearching || !searchQuery.trim()}
                  className='w-full px-6 py-3 bg-wedding-cream text-wedding-black font-sans rounded-lg hover:bg-wedding-cream/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isSearching ? t.rsvp.searching : t.rsvp.searchButton}
                </button>
              </form>
            </div>
          )}

          {/* Results State */}
          {formState === 'results' && (
            <div className='space-y-6'>
              <p className='text-wedding-cream font-sans text-lg mb-4'>
                {t.rsvp.resultsPrompt}
              </p>

              <div className='space-y-3'>
                {searchResults.map((group) => (
                  <button
                    key={group.group_id}
                    onClick={() => handleSelectGuest(group)}
                    className='w-full text-left px-6 py-4 bg-wedding-cream/10 border border-wedding-cream/30 rounded-lg text-wedding-cream font-sans hover:bg-wedding-cream/20 hover:border-wedding-cream/50 transition-all group'
                  >
                    <div className='flex items-center justify-between'>
                      <div>
                        <p className='text-lg font-heading'>{group.group_name}</p>
                        <p className='text-sm text-wedding-cream/70 mt-1'>
                          {group.guests.map(g => g.name).join(', ')}
                        </p>
                      </div>
                      <span className='text-wedding-cream/50 group-hover:text-wedding-cream group-hover:translate-x-1 transition-all'>
                        →
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setFormState('search')}
                className='text-wedding-cream/70 hover:text-wedding-cream font-sans text-sm transition-colors'
              >
                ← Back to search
              </button>
            </div>
          )}

          {/* Form State */}
          {formState === 'form' && guestGroup && (
            <form onSubmit={handleSubmit} className='space-y-8'>
              {/* Group Label */}
              <div>
                <h2 className='text-2xl font-heading text-wedding-cream mb-4'>
                  {t.rsvp.groupLabel}
                </h2>
                <p className='text-wedding-cream/70 font-sans mb-6'>{guestGroup.group_name}</p>

                {/* Guest Checkboxes */}
                <div className='space-y-4'>
                  {guestGroup.guests.map((guest, index) => {
                    const attendee = attendees.find(a => a.guest_id === guest.id);
                    if (!attendee) return null;

                    return (
                      <div key={guest.id} className='space-y-2'>
                        <label className='flex items-center gap-3 text-wedding-cream font-sans cursor-pointer'>
                          <input
                            type='checkbox'
                            checked={attendee.attending}
                            onChange={(e) => handleAttendeeChange(guest.id, e.target.checked)}
                            className='w-5 h-5 rounded border-wedding-cream/30 bg-wedding-cream/10 text-wedding-olive focus:ring-wedding-olive focus:ring-offset-wedding-black'
                          />
                          <span>{guest.is_plus_one_slot ? t.rsvp.guestNameLabel : guest.name}</span>
                        </label>

                        {/* Plus-one name input */}
                        {guest.is_plus_one_slot && attendee.attending && (
                          <input
                            type='text'
                            value={attendee.plus_one_name || ''}
                            onChange={(e) => handlePlusOneNameChange(guest.id, e.target.value)}
                            placeholder={t.rsvp.guestNamePlaceholder}
                            className='w-full ml-8 px-4 py-2 bg-wedding-cream/10 border border-wedding-cream/30 rounded-lg text-wedding-cream placeholder:text-wedding-cream/50 font-sans focus:outline-none focus:border-wedding-cream/60'
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className='block text-wedding-cream font-sans mb-2'>
                  {t.rsvp.emailLabel}
                </label>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.rsvp.emailPlaceholder}
                  required
                  className='w-full px-4 py-3 bg-wedding-cream/10 border border-wedding-cream/30 rounded-lg text-wedding-cream placeholder:text-wedding-cream/50 font-sans focus:outline-none focus:border-wedding-cream/60'
                />
              </div>

              {/* Dietary Restrictions */}
              <div>
                <label className='block text-wedding-cream font-sans mb-2'>
                  {t.rsvp.dietaryLabel}
                </label>
                <textarea
                  value={dietaryRestrictions}
                  onChange={(e) => setDietaryRestrictions(e.target.value)}
                  placeholder={t.rsvp.dietaryPlaceholder}
                  rows={4}
                  className='w-full px-4 py-3 bg-wedding-cream/10 border border-wedding-cream/30 rounded-lg text-wedding-cream placeholder:text-wedding-cream/50 font-sans focus:outline-none focus:border-wedding-cream/60 resize-none'
                />
              </div>

              {submitError && (
                <p className='text-red-400 font-sans text-sm'>{submitError}</p>
              )}

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full px-6 py-3 bg-wedding-cream text-wedding-black font-sans rounded-lg hover:bg-wedding-cream/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSubmitting ? t.rsvp.submitting : t.rsvp.submitButton}
              </button>
            </form>
          )}

          {/* Success State */}
          {formState === 'success' && (
            <div className='text-center space-y-6'>
              <div className='text-6xl mb-4'>✓</div>
              <p className='text-2xl font-heading text-wedding-cream'>
                {t.rsvp.successMessage}
              </p>
              {email && (
                <div className='space-y-2'>
                  <p className='text-wedding-cream/70 font-sans text-sm'>
                    {t.rsvp.confirmationSent}
                  </p>
                  <p className='text-wedding-cream font-sans text-lg'>
                    {email}
                  </p>
                </div>
              )}
              <Link
                href={`/${locale}/details`}
                className='inline-block mt-6 px-8 py-3 bg-wedding-cream text-wedding-black font-sans rounded-lg hover:bg-wedding-cream/90 transition-colors'
              >
                {t.rsvp.viewDetails}
              </Link>
            </div>
          )}

          {/* Already Submitted State */}
          {formState === 'already-submitted' && (
            <div className='text-center space-y-4'>
              <div className='text-6xl mb-4'>✓</div>
              <p className='text-xl font-sans text-wedding-cream'>
                {t.rsvp.alreadySubmitted}
              </p>
            </div>
          )}
      </div>
    </PageLayout>
  );
}
