'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Locale, Translations } from '@/lib/translations';

type HeaderProps = {
  locale: Locale;
  t: Translations;
  currentPath?: string; // Optional, defaults to empty (Home)
};

export default function Header({ locale, t, currentPath = '' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const basePath = currentPath ? `/${currentPath}` : '';

  return (
    <header className='p-6 flex justify-between items-center relative'>
      {/* Logo - left side */}
      <div className='font-script text-4xl tracking-wide'>
        {t.home.couple.bride} {t.home.couple.and} {t.home.couple.groom}
      </div>

      {/* Desktop: Nav - center (hidden on mobile) */}
      <nav className='hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8'>
        <Link
          href={`/${locale}`}
          className='font-sans font-semibold uppercase text-md tracking-wide text-wedding-cream/70 hover:text-wedding-cream hover:border-b-2 hover:border-wedding-cream pb-1 transition-all duration-200'
        >
          {t.nav.home}
        </Link>
        <Link
          href={`/${locale}/details`}
          className='font-sans font-semibold uppercase text-md tracking-wide text-wedding-cream/70 hover:text-wedding-cream hover:border-b-2 hover:border-wedding-cream pb-1 transition-all duration-200'
        >
          {t.nav.details}
        </Link>
        <Link
          href={`/${locale}/registry`}
          className='font-sans font-semibold uppercase text-md tracking-wide text-wedding-cream/70 hover:text-wedding-cream hover:border-b-2 hover:border-wedding-cream pb-1 transition-all duration-200'
        >
          {t.nav.registry}
        </Link>
        <Link
          href={`/${locale}/photos`}
          className='font-sans font-semibold uppercase text-md tracking-wide text-wedding-cream/70 hover:text-wedding-cream hover:border-b-2 hover:border-wedding-cream pb-1 transition-all duration-200'
        >
          {t.nav.photos}
        </Link>
      </nav>

      {/* Desktop: Language toggle - right side (hidden on mobile) */}
      <div className='hidden md:flex gap-2'>
        <Link
          href={`/en${basePath}`}
          className={`px-3 py-1 rounded font-sans uppercase text-sm tracking-wide ${
            locale === 'en'
              ? 'border border-wedding-cream/50 bg-wedding-cream/10'
              : 'border border-transparent hover:border-wedding-cream/30'
          }`}
        >
          EN
        </Link>
        <Link
          href={`/cz${basePath}`}
          className={`px-3 py-1 rounded font-sans uppercase text-sm tracking-wide ${
            locale === 'cz'
              ? 'border border-wedding-cream/50 bg-wedding-cream/5'
              : 'border border-transparent hover:border-wedding-cream/30'
          }`}
        >
          CZ
        </Link>
      </div>

      {/* Mobile: Hamburger button (hidden on desktop) */}
      <button
        className='md:hidden flex flex-col gap-1'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label='Toggle menu'
      >
        <span className='w-6 h-0.5 bg-white'></span>
        <span className='w-6 h-0.5 bg-white'></span>
        <span className='w-6 h-0.5 bg-white'></span>
      </button>

      {/* Mobile: Dropdown menu (shown when hamburger clicked) */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-700 flex flex-col p-6 gap-4'>
          {/* Language toggle */}
          <div className='flex gap-2 justify-center pb-4 border-b border-gray-700'>
            <Link href={`/en${basePath}`} className='px-3 py-1 rounded'>
              EN
            </Link>
            <Link href={`/cz${basePath}`} className='px-3 py-1 rounded'>
              CZ
            </Link>
          </div>

          {/* Nav links */}
          <Link href={`/${locale}`} className='text-center'>
            {t.nav.home}
          </Link>
          <Link href={`/${locale}/details`} className='text-center'>
            {t.nav.details}
          </Link>
          <Link href={`/${locale}/registry`} className='text-center'>
            {t.nav.registry}
          </Link>
          <Link href={`/${locale}/photos`} className='text-center'>
            {t.nav.photos}
          </Link>
        </div>
      )}
    </header>
  );
}
