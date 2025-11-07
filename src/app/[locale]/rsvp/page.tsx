'use client';

import { use, useState } from 'react';
import { getTranslations } from '@/lib/translations';
import { validateLocale } from '@/utils/locale';
import PageLayout from '@/components/PageLayout';
import RsvpSearch from '@/components/rsvp/RsvpSearch';
import RsvpResults from '@/components/rsvp/RsvpResults';
import RsvpForm from '@/components/rsvp/RsvpForm';
import RsvpSuccess from '@/components/rsvp/RsvpSuccess';
import RsvpAlreadySubmitted from '@/components/rsvp/RsvpAlreadySubmitted';
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
          <RsvpSearch
            t={t}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            isSearching={isSearching}
            searchError={searchError}
            onSearch={handleSearch}
          />
        )}

        {/* Results State */}
        {formState === 'results' && (
          <RsvpResults
            t={t}
            searchResults={searchResults}
            onSelectGuest={handleSelectGuest}
            onBackToSearch={() => setFormState('search')}
          />
        )}

        {/* Form State */}
        {formState === 'form' && guestGroup && (
          <RsvpForm
            t={t}
            guestGroup={guestGroup}
            attendees={attendees}
            email={email}
            dietaryRestrictions={dietaryRestrictions}
            isSubmitting={isSubmitting}
            submitError={submitError}
            onAttendeeChange={handleAttendeeChange}
            onPlusOneNameChange={handlePlusOneNameChange}
            onEmailChange={setEmail}
            onDietaryRestrictionsChange={setDietaryRestrictions}
            onSubmit={handleSubmit}
          />
        )}

        {/* Success State */}
        {formState === 'success' && (
          <RsvpSuccess t={t} locale={locale} email={email} />
        )}

        {/* Already Submitted State */}
        {formState === 'already-submitted' && (
          <RsvpAlreadySubmitted t={t} />
        )}
      </div>
    </PageLayout>
  );
}
