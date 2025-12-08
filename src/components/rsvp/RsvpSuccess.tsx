'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Locale, Translations } from '@/lib/translations';
import { updateRsvpEmail } from '@/lib/api/rsvp-api';

type RsvpSuccessProps = {
  t: Translations;
  locale: Locale;
  email: string;
  hasAttendees: boolean;
  groupId: number;
};

export default function RsvpSuccess({ t, locale, email, hasAttendees, groupId }: RsvpSuccessProps) {
  const message = hasAttendees ? t.rsvp.successMessage : t.rsvp.declineSuccessMessage;
  const [isEditing, setIsEditing] = useState(false);
  const [newEmail, setNewEmail] = useState(email);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [updateError, setUpdateError] = useState('');
  const [currentEmail, setCurrentEmail] = useState(email);

  const handleUpdateEmail = async () => {
    if (!newEmail || newEmail === currentEmail) {
      setIsEditing(false);
      return;
    }

    setIsUpdating(true);
    setUpdateError('');

    try {
      const result = await updateRsvpEmail(groupId, newEmail);
      if (result.success) {
        setCurrentEmail(newEmail);
        setUpdateSuccess(true);
        setIsEditing(false);
        setTimeout(() => setUpdateSuccess(false), 5000);
      } else {
        setUpdateError(result.message || t.rsvp.emailUpdateFailed);
      }
    } catch (error) {
      setUpdateError(t.rsvp.emailUpdateFailed);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className='text-center space-y-6'>
      <div className='text-6xl mb-4'>✓</div>
      <p className='text-3xl font-heading text-heading'>{message}</p>
      {currentEmail && (
        <div className='space-y-2'>
          <p className='text-text/70 font-sans text-base'>{t.rsvp.confirmationSent}</p>
          {!isEditing ? (
            <div className='space-y-2'>
              <p className='text-text font-sans text-xl'>{currentEmail}</p>
              <button
                onClick={() => setIsEditing(true)}
                className='text-text/60 hover:text-text font-sans text-sm underline transition-colors'
              >
                {t.rsvp.wrongEmail}
              </button>
            </div>
          ) : (
            <div className='max-w-md mx-auto space-y-3'>
              <input
                type='email'
                value={newEmail}
                onChange={e => setNewEmail(e.target.value)}
                className='w-full bg-surface/10 border border-text/30 rounded-lg px-4 py-2 text-text font-sans focus:outline-none focus:border-accent'
                placeholder={t.rsvp.emailPlaceholder}
                autoFocus
              />
              <div className='flex gap-2 justify-center'>
                <button
                  onClick={handleUpdateEmail}
                  disabled={isUpdating}
                  className='px-4 py-2 bg-accent/90 hover:bg-accent text-bg font-sans rounded-lg transition-colors disabled:opacity-50'
                >
                  {isUpdating ? t.rsvp.updatingEmail : t.rsvp.updateEmail}
                </button>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setNewEmail(currentEmail);
                    setUpdateError('');
                  }}
                  disabled={isUpdating}
                  className='px-4 py-2 bg-surface/10 hover:bg-surface/20 text-text font-sans rounded-lg transition-colors border border-text/20'
                >
                  Cancel
                </button>
              </div>
              {updateError && <p className='text-error text-sm font-sans'>{updateError}</p>}
            </div>
          )}
          {updateSuccess && <p className='text-success text-sm font-sans'>{t.rsvp.emailUpdated}</p>}
        </div>
      )}
      {hasAttendees && (
        <Link
          href={`/${locale}/details`}
          className='inline-block mt-6 px-8 py-3 bg-surface text-home-elements font-sans rounded-lg hover:bg-surface/90 transition-colors'
        >
          {t.rsvp.viewDetails}
        </Link>
      )}
    </div>
  );
}
