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
    <header className='p-4 md:p-6 flex justify-between items-center relative'>
      {/* Logo - left side */}
      <div className='font-script text-3xl sm:text-4xl md:text-5xl tracking-wide'>
        {t.home.couple.bride} {t.home.couple.and} {t.home.couple.groom}
      </div>

      {/* Desktop: Nav - center (hidden on mobile) */}
      <nav className='hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8'>
        <Link
          href={`/${locale}`}
          className='font-sans font-semibold uppercase text-base tracking-wide text-wedding-cream/70 hover:text-wedding-cream hover:border-b-2 hover:border-wedding-cream pb-1 transition-all duration-200'
        >
          {t.nav.home}
        </Link>
        <Link
          href={`/${locale}/details`}
          className='font-sans font-semibold uppercase text-base tracking-wide text-wedding-cream/70 hover:text-wedding-cream hover:border-b-2 hover:border-wedding-cream pb-1 transition-all duration-200'
        >
          {t.nav.details}
        </Link>
        <Link
          href={`/${locale}/registry`}
          className='font-sans font-semibold uppercase text-base tracking-wide text-wedding-cream/70 hover:text-wedding-cream hover:border-b-2 hover:border-wedding-cream pb-1 transition-all duration-200'
        >
          {t.nav.registry}
        </Link>
        <Link
          href={`/${locale}/photos`}
          className='font-sans font-semibold uppercase text-base tracking-wide text-wedding-cream/70 hover:text-wedding-cream hover:border-b-2 hover:border-wedding-cream pb-1 transition-all duration-200'
        >
          {t.nav.photos}
        </Link>
      </nav>

      {/* Desktop: Language toggle - right side (hidden on mobile) */}
      <div className='hidden md:flex gap-2'>
        <Link
          href={`/en${basePath}`}
          className={`px-3 py-1 rounded font-sans uppercase text-base tracking-wide ${
            locale === 'en'
              ? 'border border-wedding-cream/50 bg-wedding-cream/10'
              : 'border border-transparent hover:border-wedding-cream/30'
          }`}
        >
          EN
        </Link>
        <Link
          href={`/cz${basePath}`}
          className={`px-3 py-1 rounded font-sans uppercase text-base tracking-wide ${
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
        className='md:hidden flex flex-col gap-1.5 p-2 hover:opacity-70 transition-opacity'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label='Toggle menu'
      >
        <span
          className={`w-6 h-0.5 bg-wedding-cream transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-wedding-cream transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-wedding-cream transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </button>

      {/* Mobile: Dropdown menu (shown when hamburger clicked) */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-wedding-black/95 backdrop-blur-sm border-t border-wedding-cream/20 flex flex-col p-6 gap-4 z-50 transition-all duration-300 ${
          isMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {/* Language toggle */}
        <div className='flex gap-2 justify-center pb-4 border-b border-wedding-cream/20'>
          <Link
            href={`/en${basePath}`}
            className={`px-4 py-2 rounded font-sans uppercase text-base tracking-wide transition-all ${
              locale === 'en'
                ? 'border border-wedding-cream/50 bg-wedding-cream/10'
                : 'border border-transparent hover:border-wedding-cream/30'
            }`}
          >
            EN
          </Link>
          <Link
            href={`/cz${basePath}`}
            className={`px-4 py-2 rounded font-sans uppercase text-base tracking-wide transition-all ${
              locale === 'cz'
                ? 'border border-wedding-cream/50 bg-wedding-cream/10'
                : 'border border-transparent hover:border-wedding-cream/30'
            }`}
          >
            CZ
          </Link>
        </div>

        {/* Nav links */}
        <Link
          href={`/${locale}`}
          className='text-center font-sans uppercase text-base tracking-wide py-2 hover:text-wedding-cream/70 transition-colors'
        >
          {t.nav.home}
        </Link>
        <Link
          href={`/${locale}/details`}
          className='text-center font-sans uppercase text-base tracking-wide py-2 hover:text-wedding-cream/70 transition-colors'
        >
          {t.nav.details}
        </Link>
        <Link
          href={`/${locale}/registry`}
          className='text-center font-sans uppercase text-base tracking-wide py-2 hover:text-wedding-cream/70 transition-colors'
        >
          {t.nav.registry}
        </Link>
        <Link
          href={`/${locale}/photos`}
          className='text-center font-sans uppercase text-base tracking-wide py-2 hover:text-wedding-cream/70 transition-colors'
        >
          {t.nav.photos}
        </Link>
      </div>
    </header>
  );
}
