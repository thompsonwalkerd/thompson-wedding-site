import Link from 'next/link';
import Image from 'next/image';
import { getTranslations, Locale } from '@/lib/translations';
import Header from '@/components/Header';

export default function Home({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = getTranslations(locale);

  return (
    <div className='bg-black relative min-h-screen'>
      { /* Background Image Layer */ }
      <Image
        src='/home-bg-2.jpeg'
        alt='Home Background Image'
        fill
        className='object-cover'
        quality={85}
        priority
      />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header locale={locale} t={t} />

        {/* Hero Section */}
        <main className='flex-1 flex flex-col items-center justify-center text-center'>
          <p className='font-heading text-wedding-cream text-xl uppercase tracking-widest mb-8'>{t.home.tagline}</p>

          <h1 className='text-8xl mb-2 font-heading text-wedding-olive'>{t.home.couple.groom} {t.home.couple.and} {t.home.couple.bride}</h1>
          {/* <p className='text-6xl italic mb-2 font-heading text-wedding-olive'>{t.home.couple.and}</p> */}
          {/* <h1 className='text-8xl mb-8 font-heading text-wedding-cream'>{t.home.couple.bride}</h1> */}

          <p className='font-heading text-wedding-cream text-xl uppercase tracking-widest mb-8'>{t.home.date}</p>
        </main>

        {/* RSVP Button */}
        <div className='pb-12 flex justify-center'>
          <button className='bg-wedding-cream text-wedding-olive px-12 py-3 rounded-full text-2xl font-sans uppercase'>
            {t.home.rsvpButton}
          </button>
        </div>
      </div>
    </div>
  );
}