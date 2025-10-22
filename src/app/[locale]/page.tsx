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
          <p className='text-sm uppercase tracking-widest mb-8'>{t.home.tagline}</p>

          <h1 className='text-6xl mb-2'>{t.home.couple.groom}</h1>
          <p className='text-4xl italic mb-2'>{t.home.couple.and}</p>
          <h1 className='text-6xl mb-8'>{t.home.couple.bride}</h1>

          <p className='text-lg'>{t.home.date}</p>
        </main>

        {/* RSVP Button */}
        <div className='pb-12 flex justify-center'>
          <button className='border-2 border-black px-12 py-3 rounded-full text-lg'>
            {t.home.rsvpButton}
          </button>
        </div>
      </div>
    </div>
  );
}