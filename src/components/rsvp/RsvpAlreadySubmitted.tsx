import { Translations } from '@/lib/translations';

type RsvpAlreadySubmittedProps = {
  t: Translations;
};

export default function RsvpAlreadySubmitted({ t }: RsvpAlreadySubmittedProps) {
  return (
    <div className='text-center space-y-6'>
      <div className='text-6xl mb-4'>✓</div>
      <p className='text-2xl font-sans text-text'>{t.rsvp.alreadySubmitted}</p>

      {/* Contact information */}
      <div className='mt-8 pt-6 border-t border-text/20'>
        <p className='text-text/70 font-sans text-base mb-4'>
          {t.rsvp.contactPrompt}
        </p>
        <div className='space-y-2 text-text font-sans'>
          <p>
            <a
              href='mailto:thompsonwalker222@gmail.com'
              className='text-text hover:text-text/80 transition-colors underline'
            >
              thompsonwalker222@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
