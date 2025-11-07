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
      <div className='flex flex-col items-center justify-center h-full relative px-4'>
        {/* Hero Section */}
        <div className='flex flex-col items-center justify-center text-center'>
          <p className='font-heading text-wedding-cream text-lg md:text-xl text-glow uppercase tracking-widest mb-3 animate-fade-in'>
            {t.home.tagline}
          </p>

          <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-script text-wedding-cream text-glow mb-6 leading-tight animate-fade-in-delay-1'>
            {t.home.couple.bride} {t.home.couple.and} {t.home.couple.groom}
          </h1>

          <p className='font-heading text-wedding-cream text-lg md:text-xl text-glow uppercase tracking-widest mb-12 animate-fade-in-delay-2'>
            {t.when.dateString}
          </p>

          {/* RSVP Button */}
          <div className='animate-fade-in-delay-3'>
            <Button as='link' href={`/${locale}/rsvp`} variant='primary'>
              {t.home.rsvpButton}
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
