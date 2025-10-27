import { getTranslations, Locale } from '@/lib/translations';
import Header from '@/components/Header';
import Image from 'next/image';

export default function Home({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = getTranslations(locale);

  return (
    <div className='bg-black relative min-h-screen'>
      { /* Background Image */ }
      {/* <Image
        src='/home-bg-1.jpeg'
        alt='Home Background Image'
        fill
        className='object-cover'
        quality={85}
        priority
      /> */}

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-wedding-black/70 to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="bg-wedding-olive relative z-10 flex flex-col min-h-screen">
        <Header locale={locale} t={t} currentPath='photos' />

        {/* Placeholder Content */}
        <main className='flex-1 flex flex-col items-center justify-center text-center px-6'>
          <h1 className='text-6xl mb-4 font-heading text-wedding-cream'>
            {t.photos.title}
          </h1>
          <p className='text-xl font-sans text-wedding-cream/70'>
            {t.photos.placeholder}
          </p>
        </main>
      </div>
    </div>
  );
}