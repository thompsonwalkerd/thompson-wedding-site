import { getTranslations } from '@/lib/translations';
import { validateLocale } from '@/utils/locale';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = validateLocale(params.locale);
  const t = getTranslations(locale);

  return (
    <PageLayout
      locale={locale}
      t={t}
      currentPath=''
      backgroundImage='/home-bg-1.jpeg'
    >
      <div className='flex flex-col items-center justify-between h-full'>
        {/* Hero Section */}
        <div className='flex-1 flex flex-col items-center justify-top text-center'>
          <p className='font-heading text-wedding-cream text-xl text-glow uppercase tracking-widest mt-8 mb-2'>
            {t.home.tagline}
          </p>

          <h1 className='text-8xl font-script text-wedding-cream text-glow'>
            {t.home.couple.bride} {t.home.couple.and} {t.home.couple.groom}
          </h1>

          <p className='font-heading text-wedding-cream text-xl text-glow uppercase tracking-widest'>
            {t.when.dateString}
          </p>
        </div>

        {/* RSVP Button */}
        <div className='pb-12 flex justify-center'>
          <Link
            href={`/${locale}/rsvp`}
            className='bg-wedding-cream text-wedding-olive px-20 py-2 rounded-full text-2xl font-sans uppercase insert-shadow-sm shadow-xl'
          >
            {t.home.rsvpButton}
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}