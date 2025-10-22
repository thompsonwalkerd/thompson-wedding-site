import Link from 'next/link';
import Image from 'next/image';
import { getTranslations, Locale } from '@/lib/translations';

export default function Home({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = getTranslations(locale);

  return (
    <div className='bg-black relative min-h-screen'>
      { /* Background Image Layer */ }
      {/* <Image
        src='/home-bg.jpg'
        alt='Home Background Image'
        fill
        className='object-cover'
        quality={85}
        priority
      /> */}

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className='p-6 flex justify-between items-center'>
          {/* Logo - left side */}
          <div className='text-2xl'>Walker and Sofí</div>

          {/* Language toggle - center */}
          <div className='flex gap-2'>
            <Link href='/en' className='px-3 py-1 rounded'>EN</Link>
            <Link href='/cz' className='px-3 py-1 rounded'>CZ</Link>
          </div>

          {/* Nav - right side */}
          <nav className='flex gap-4'>
            <Link href={`/${locale}`}>{t.nav.home}</Link>
            <Link href={`/${locale}/details`}>{t.nav.details}</Link>
            <Link href={`/${locale}/registry`}>{t.nav.registry}</Link>
            <Link href={`/${locale}/photos`}>{t.nav.photos}</Link>
          </nav>
        </header>

        {/* Hero Section */}
        <main className='flex-1 flex flex-col items-center justify-center text-center'>
          <p className='text-sm uppercase tracking-widest mb-8'>{t.home.tagline}</p>

          <h1 className='text-6xl mb-2'>{t.home.names.groom}</h1>
          <p className='text-4xl italic mb-2'>and</p>
          <h1 className='text-6xl mb-8'>{t.home.names.bride}</h1>

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