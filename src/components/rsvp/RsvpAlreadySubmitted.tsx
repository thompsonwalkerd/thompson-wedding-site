import { Translations } from '@/lib/translations';

type RsvpAlreadySubmittedProps = {
  t: Translations;
};

export default function RsvpAlreadySubmitted({ t }: RsvpAlreadySubmittedProps) {
  return (
    <div className='text-center space-y-6'>
      <div className='text-6xl mb-4'>✓</div>
      <p className='text-2xl font-sans text-wedding-cream'>{t.rsvp.alreadySubmitted}</p>

      {/* Contact information */}
      <div className='mt-8 pt-6 border-t border-wedding-cream/20'>
        <p className='text-wedding-cream/70 font-sans text-base mb-4'>
          {t.rsvp.contactPrompt}
        </p>
        <div className='space-y-2 text-wedding-cream font-sans'>
          <p>
            <a
              href='mailto:wedding@example.com'
              className='text-wedding-cream hover:text-wedding-cream/80 transition-colors underline'
            >
              thompsonwalker222@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
