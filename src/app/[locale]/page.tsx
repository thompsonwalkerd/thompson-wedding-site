import { use } from 'react';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/ui/Button';
import { getTranslations } from '@/lib/translations';
import { validateLocale } from '@/utils/locale';

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeString } = use(params);
  const locale = validateLocale(localeString);
  const t = getTranslations(locale);

  return (
    <PageLayout locale={locale} t={t} currentPath='' backgroundImage='/home-bg-1.jpeg'>
      <div className='flex flex-col items-center justify-center h-full relative'>
        {/* Hero Section */}
        <div className='flex flex-col items-center justify-center text-center'>
          <p className='font-heading text-wedding-cream text-xl text-glow uppercase tracking-widest mb-2'>
            {t.home.tagline}
          </p>

          <h1 className='text-8xl font-script text-wedding-cream text-glow mb-4'>
            {t.home.couple.bride} {t.home.couple.and} {t.home.couple.groom}
          </h1>

          <p className='font-heading text-wedding-cream text-xl text-glow uppercase tracking-widest mb-12'>
            {t.when.dateString}
          </p>

          {/* RSVP Button */}
          <Button as='link' href={`/${locale}/rsvp`} variant='primary'>
            {t.home.rsvpButton}
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
