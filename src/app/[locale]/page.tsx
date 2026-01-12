import PageLayout from '@/components/PageLayout';
import Button from '@/components/ui/Button';
import { getTranslations } from '@/lib/translations';
import { validateLocale } from '@/utils/locale';
import Image from 'next/image';
import { use } from 'react';

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeString } = use(params);
  const locale = validateLocale(localeString);
  const t = getTranslations(locale);

  return (
    <PageLayout locale={locale} t={t} currentPath=''>
      {/* Mobile Background */}
      <Image
        src='/mobile-bg.jpeg'
        alt='Background'
        fill
        className='object-cover md:hidden -z-10'
        quality={85}
        priority
      />
      {/* Desktop Background */}
      <Image
        src='/home-bg.jpeg'
        alt='Background'
        fill
        className='object-cover hidden md:block -z-10'
        quality={85}
        priority
      />
      <div className='flex flex-col items-center justify-center h-full relative px-4 sm:px-6'>
        {/* Hero Section */}
        <div className='flex flex-col items-center justify-center text-center'>
          <p className='font-heading text-home-elements text-2xl text-glow tracking-widest animate-fade-in mt-10 md:mt-2'>
            {t.home.tagline}
          </p>

          <h1 className='text-7xl md:text-8xl font-script text-home-elements text-glow leading-tight -mt-2 animate-fade-in-delay-1'>
            {t.home.couple.bride} {t.home.couple.and} {t.home.couple.groom}
          </h1>

          <p className='font-heading text-home-elements text-2xl text-glow tracking-widest -mt-2 animate-fade-in-delay-2'>
            {t.when.dateString}
          </p>

          {/* RSVP Button */}
          <div className='animate-fade-in-delay-3 fixed top-[66.67vh] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>
            <Button as='link' href={`/${locale}/rsvp`} variant='home'>
              {t.home.rsvpButton}
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
