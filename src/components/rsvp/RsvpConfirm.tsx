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
        <h2 className='text-3xl font-heading text-wedding-cream mb-4'>Confirm Your RSVP</h2>
        <p className='text-wedding-cream/70 font-sans text-base'>
          Please review your details before submitting
        </p>
      </div>

      {/* Confirmation Details */}
      <div className='space-y-6 bg-wedding-cream/5 border border-wedding-cream/20 rounded-lg p-6'>
        {/* Group Info */}
        <div>
          <h3 className='text-wedding-cream font-heading text-xl mb-2'>
            {guestGroup.guests.length > 1 && guestGroup.group_name
              ? guestGroup.group_name
              : 'Your RSVP'}
          </h3>
        </div>

        {/* Attending */}
        <div>
          <p className='text-wedding-cream/70 font-sans text-sm mb-2'>Attending:</p>
          {attendingNames.length > 0 ? (
            <ul className='list-disc list-inside text-wedding-cream font-sans'>
              {attendingNames.map((name, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          ) : (
            <p className='text-wedding-cream font-sans italic'>No one attending</p>
          )}
        </div>

        {/* Email */}
        {email && (
          <div>
            <p className='text-wedding-cream/70 font-sans text-sm mb-1'>Email:</p>
            <p className='text-wedding-cream font-sans'>{email}</p>
          </div>
        )}

        {/* Songs */}
        {songs && (
          <div>
            <p className='text-wedding-cream/70 font-sans text-sm mb-1'>Song Requests:</p>
            <p className='text-wedding-cream font-sans'>{songs}</p>
          </div>
        )}

        {/* Dietary */}
        {dietaryRestrictions && (
          <div>
            <p className='text-wedding-cream/70 font-sans text-sm mb-1'>
              Dietary Restrictions:
            </p>
            <p className='text-wedding-cream font-sans'>{dietaryRestrictions}</p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <button
          type='button'
          onClick={onGoBack}
          disabled={isSubmitting}
          className='flex-1 px-6 py-3 bg-wedding-cream/10 border border-wedding-cream/30 text-wedding-cream font-sans rounded-lg hover:bg-wedding-cream/20 hover:border-wedding-cream/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
        >
          � Go Back
        </button>

        <button
          type='button'
          onClick={onConfirm}
          disabled={isSubmitting}
          className='flex-1 px-6 py-3 bg-wedding-cream text-wedding-black font-sans rounded-lg hover:bg-wedding-cream/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isSubmitting ? 'Submitting...' : 'Confirm & Submit'}
        </button>
      </div>
    </div>
  );
}
