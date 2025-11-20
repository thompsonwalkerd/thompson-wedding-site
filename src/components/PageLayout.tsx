import Image from 'next/image';
import Header from '@/components/Header';
import { Locale, Translations } from '@/lib/translations';

type PageLayoutProps = {
  locale: Locale;
  t: Translations;
  currentPath: string;
  backgroundImage?: string;
  children: React.ReactNode;
};

export default function PageLayout({
  locale,
  t,
  currentPath,
  backgroundImage = '',
  children,
}: PageLayoutProps) {
  return (
    <div className='bg-bg relative min-h-screen'>
      <Image
        src={backgroundImage}
        alt='Background'
        fill
        className='object-cover'
        quality={85}
        priority
      />

      <div className='absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/70 to-transparent pointer-events-none z-10' />

      <div className='relative z-10 flex flex-col min-h-screen'>
        <Header locale={locale} t={t} currentPath={currentPath} />

        <main className='flex-1'>{children}</main>
      </div>
    </div>
  );
}
