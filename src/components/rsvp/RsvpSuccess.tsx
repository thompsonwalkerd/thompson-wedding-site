import Link from 'next/link';
import { Locale, Translations } from '@/lib/translations';

type RsvpSuccessProps = {
  t: Translations;
  locale: Locale;
  email: string;
  hasAttendees: boolean;
};

export default function RsvpSuccess({ t, locale, email, hasAttendees }: RsvpSuccessProps) {
  const message = hasAttendees ? t.rsvp.successMessage : t.rsvp.declineSuccessMessage;

  return (
    <div className='text-center space-y-6'>
      <div className='text-6xl mb-4'>✓</div>
      <p className='text-3xl font-heading text-heading'>{message}</p>
      {email && (
        <div className='space-y-2'>
          <p className='text-text/70 font-sans text-base'>{t.rsvp.confirmationSent}</p>
          <p className='text-text font-sans text-xl'>{email}</p>
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
