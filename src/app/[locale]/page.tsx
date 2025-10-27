import { getTranslations, Locale } from '@/lib/translations';
import Image from 'next/image';
import Header from '@/components/Header';

export default function Home({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = getTranslations(locale);

  return (
    <div className='bg-black relative min-h-screen'>
      { /* Background Image */ }
      <Image
        src='/home-bg-1.jpeg'
        alt='Home Background Image'
        fill
        className='object-cover'
        quality={85}
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-wedding-black/70 to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">        
        <Header locale={locale} t={t} currentPath='' />

        {/* Hero Section */}
        <main className='flex-1 flex flex-col items-center justify-top text-center'>
          <p className='font-heading text-wedding-cream text-xl text-glow uppercase tracking-widest mt-8 mb-2'>{t.home.tagline}</p>

          <h1 className='text-8xl font-script text-wedding-cream text-glow'>{t.home.couple.bride} {t.home.couple.and} {t.home.couple.groom}</h1>

          <p className='font-heading text-wedding-cream text-xl text-glow uppercase tracking-widest'>{t.when.dateString}</p>
        </main>

        {/* RSVP Button */}
        <div className='pb-12 flex justify-center'>
          <button className='bg-wedding-cream text-wedding-olive px-20 py-2 rounded-full text-2xl font-sans uppercase insert-shadow-sm shadow-xl'>
            {t.home.rsvpButton}
          </button>
        </div>
      </div>
    </div>
  );
}