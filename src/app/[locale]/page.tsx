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
          <p className='font-heading text-home-elements text-xl md:text-2xl text-glow tracking-widest animate-fade-in'>
            {t.home.tagline}
          </p>

          <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-script text-home-elements text-glow leading-tight -mt-2 animate-fade-in-delay-1'>
            {t.home.couple.bride} {t.home.couple.and} {t.home.couple.groom}
          </h1>

          <p className='font-heading text-home-elements text-xl md:text-2xl text-glow tracking-widest mb-12 -mt-2 animate-fade-in-delay-2'>
            {t.when.dateString}
          </p>

          {/* RSVP Button */}
          <div className='animate-fade-in-delay-3 lg:pt-20 md:pt-30 pt-0'>
            <Button as='link' href={`/${locale}/rsvp`} variant='home'>
              {t.home.rsvpButton}
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
