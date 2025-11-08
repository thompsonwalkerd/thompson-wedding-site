import { Translations } from '@/lib/translations';

type RsvpAlreadySubmittedProps = {
  t: Translations;
};

export default function RsvpAlreadySubmitted({ t }: RsvpAlreadySubmittedProps) {
  return (
    <div className='text-center space-y-4'>
      <div className='text-6xl mb-4'>✓</div>
      <p className='text-2xl font-sans text-wedding-cream'>{t.rsvp.alreadySubmitted}</p>
    </div>
  );
}
