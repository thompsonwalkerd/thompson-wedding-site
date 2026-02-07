import { GuestGroup, RsvpGuestResponse } from '@/lib/mocks/rsvp';
import { Translations } from '@/lib/translations';

type RsvpConfirmProps = {
  t: Translations;
  guestGroup: GuestGroup;
  attendees: RsvpGuestResponse[];
  email: string;
  songs: string;
  dietaryRestrictions: string;
  isSubmitting: boolean;
  onConfirm: () => void;
  onGoBack: () => void;
};

export default function RsvpConfirm({
  t,
  guestGroup,
  attendees,
  email,
  songs,
  dietaryRestrictions,
  isSubmitting,
  onConfirm,
  onGoBack,
}: RsvpConfirmProps) {
  const attendingGuests = attendees.filter(a => a.attending);
  const attendingNames = attendingGuests
    .map(a => guestGroup.guests.find(g => g.id === a.guest_id)?.name)
    .filter(Boolean);

  return (
    <div className='space-y-8'>
      <div>
        <h2 className='text-3xl font-heading text-heading mb-4'>{t.rsvp.confirmTitle}</h2>
        <p className='text-text/70 font-sans text-base'>{t.rsvp.reviewDetails}</p>
      </div>

      {/* Confirmation Details */}
      <div className='space-y-6 bg-surface/5 border border-text/20 rounded-lg p-6'>
        {/* Group Info */}
        <div>
          <h3 className='text-text font-heading text-xl mb-2'>
            {guestGroup.guests.length > 1 && guestGroup.group_name
              ? guestGroup.group_name
              : t.rsvp.missingGroupPlaceholder}
          </h3>
        </div>

        {/* Attending */}
        <div>
          <p className='text-text/70 font-sans text-sm mb-2'>{t.rsvp.attendingLabel}:</p>
          {attendingNames.length > 0 ? (
            <ul className='list-disc list-inside text-text font-sans'>
              {attendingNames.map((name, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          ) : (
            <p className='text-text font-sans italic'>{t.rsvp.noGuestsAttending}</p>
          )}
        </div>

        {/* Email */}
        {email && (
          <div>
            <p className='text-text/70 font-sans text-sm mb-1'>{t.rsvp.emailLabel}:</p>
            <p className='text-text font-sans'>{email}</p>
          </div>
        )}

        {/* Songs */}
        {songs && (
          <div>
            <p className='text-text/70 font-sans text-sm mb-1'>{t.rsvp.songRequestConfirmLabel}:</p>
            <p className='text-text font-sans'>{songs}</p>
          </div>
        )}

        {/* Dietary */}
        {dietaryRestrictions && (
          <div>
            <p className='text-text/70 font-sans text-sm mb-1'>{t.rsvp.dietaryLabel}:</p>
            <p className='text-text font-sans'>{dietaryRestrictions}</p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <button
          type='button'
          onClick={onGoBack}
          disabled={isSubmitting}
          className='flex-1 px-6 py-3 bg-surface/20 border border-text/30 text-text font-sans rounded-lg hover:bg-surface/20 hover:border-text/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {t.rsvp.editFormButton}
        </button>

        <button
          type='button'
          onClick={onConfirm}
          disabled={isSubmitting}
          className='flex-1 px-6 py-3 bg-surface text-home-elements font-sans rounded-lg hover:bg-surface/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isSubmitting ? t.rsvp.submitting : t.rsvp.submitButton}
        </button>
      </div>
    </div>
  );
}
