import Link from 'next/link';
import { Locale, Translations } from '@/lib/translations';

type RsvpSuccessProps = {
  t: Translations;
  locale: Locale;
  email: string;
};

export default function RsvpSuccess({ t, locale, email }: RsvpSuccessProps) {
  return (
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
  );
}
