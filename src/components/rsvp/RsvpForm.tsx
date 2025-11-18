import { GuestGroup, RsvpGuestResponse } from '@/lib/mocks/rsvp';
import { Translations } from '@/lib/translations';

type RsvpFormProps = {
  t: Translations;
  guestGroup: GuestGroup;
  attendees: RsvpGuestResponse[];
  email: string;
  songs: string;
  dietaryRestrictions: string;
  isSubmitting: boolean;
  submitError: string;
  onAttendeeChange: (guestId: number, attending: boolean) => void;
  onEmailChange: (email: string) => void;
  onSongsChange: (songs: string) => void;
  onDietaryRestrictionsChange: (restrictions: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onDecline: () => void;
};

export default function RsvpForm({
  t,
  guestGroup,
  attendees,
  email,
  songs,
  dietaryRestrictions,
  isSubmitting,
  submitError,
  onAttendeeChange,
  onEmailChange,
  onSongsChange,
  onDietaryRestrictionsChange,
  onSubmit,
  onDecline,
}: RsvpFormProps) {
  return (
    <form onSubmit={onSubmit} className='space-y-8'>
      {/* Group Label */}
      <div>
        <h2 className='text-3xl font-heading text-wedding-cream mb-4'>{t.rsvp.groupLabel}</h2>
        {guestGroup.guests.length > 1 && guestGroup.group_name && (
          <p className='text-wedding-cream/70 font-sans mb-6'>{guestGroup.group_name}</p>
        )}

        {/* Guest Checkboxes */}
        <div className='space-y-4'>
          {guestGroup.guests.map(guest => {
            const attendee = attendees.find(a => a.guest_id === guest.id);
            if (!attendee) return null;

            return (
              <label
                key={guest.id}
                className='flex items-center gap-3 text-wedding-cream font-sans cursor-pointer'
              >
                <input
                  type='checkbox'
                  checked={attendee.attending}
                  onChange={e => onAttendeeChange(guest.id, e.target.checked)}
                  className='w-5 h-5 rounded border-wedding-cream/30 bg-wedding-cream/10 text-wedding-olive focus:ring-wedding-olive focus:ring-offset-wedding-black'
                />
                <span>{guest.name}</span>
              </label>
            );
          })}
        </div>

        {/* Show attendee error near the attendees if it's about attendance */}
        {submitError && submitError.includes('attending') && (
          <div className='mt-4'>
            <p className='text-red-400 font-sans text-base'>{submitError}</p>
            <button
              type='button'
              onClick={onDecline}
              className='text-wedding-cream/70 hover:text-wedding-cream font-sans text-sm mt-2 underline'
            >
              Not able to attend?
            </button>
          </div>
        )}
      </div>

      {/* Email Address */}
      <div>
        <label className='block text-wedding-cream font-sans mb-2'>{t.rsvp.emailLabel}</label>
        <input
          type='email'
          value={email}
          onChange={e => onEmailChange(e.target.value)}
          placeholder={t.rsvp.emailPlaceholder}
          required
          className='w-full px-4 py-3 bg-wedding-cream/10 border border-wedding-cream/30 rounded-lg text-wedding-cream placeholder:text-wedding-cream/50 font-sans focus:outline-none focus:border-wedding-cream/60'
        />
      </div>

      {/* Song Requests */}
      <div>
        <label className='block text-wedding-cream font-sans mb-2'>{t.rsvp.songLabel}</label>
        <textarea
          value={songs}
          onChange={e => onSongsChange(e.target.value)}
          placeholder={t.rsvp.songPlaceholder}
          rows={1}
          className='w-full px-4 py-3 bg-wedding-cream/10 border border-wedding-cream/30 rounded-lg text-wedding-cream placeholder:text-wedding-cream/50 font-sans focus:outline-none focus:border-wedding-cream/60 resize-none'
        />
      </div>

      {/* Dietary Restrictions */}
      <div>
        <label className='block text-wedding-cream font-sans mb-2'>{t.rsvp.dietaryLabel}</label>
        <textarea
          value={dietaryRestrictions}
          onChange={e => onDietaryRestrictionsChange(e.target.value)}
          placeholder={t.rsvp.dietaryPlaceholder}
          rows={1}
          className='w-full px-4 py-3 bg-wedding-cream/10 border border-wedding-cream/30 rounded-lg text-wedding-cream placeholder:text-wedding-cream/50 font-sans focus:outline-none focus:border-wedding-cream/60 resize-none'
        />
      </div>

      {/* Show other errors at the bottom */}
      {submitError && !submitError.includes('attending') && (
        <p className='text-red-400 font-sans text-base'>{submitError}</p>
      )}

      {/* Action Buttons */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <button
          type='submit'
          disabled={isSubmitting}
          className='flex-1 px-6 py-3 bg-wedding-cream text-wedding-black font-sans rounded-lg hover:bg-wedding-cream/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isSubmitting ? t.rsvp.submitting : t.rsvp.submitButton}
        </button>

        <button
          type='button'
          onClick={onDecline}
          disabled={isSubmitting}
          className='flex-1 px-6 py-3 bg-wedding-cream/10 border border-wedding-cream/30 text-wedding-cream font-sans rounded-lg hover:bg-wedding-cream/20 hover:border-wedding-cream/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {t.rsvp.declineButton}
        </button>
      </div>
    </form>
  );
}
