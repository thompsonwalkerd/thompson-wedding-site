'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Locale, Translations } from '@/lib/translations';

type HeaderProps = {
    locale: Locale;
    t: Translations;
};

export default function Header({ locale, t}: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='p-6 flex justify-between items-center relative'>
            {/* Logo - left side */}
            <div className='font-heading text-xl tracking-wide'>
                {t.home.couple.groom} {t.home.couple.and} {t.home.couple.bride}
            </div>

            {/* Desktop: Language toggle - center (hidden on mobile) */}
            <div className='hidden md:flex absolute left-1/2 -translate-x-1/2 gap-2'>
                <Link href='/en' className='px-3 py-1 rounded font-sans uppercase text-sm tracking-wide'>EN</Link>
                <Link href='/cz' className='px-3 py-1 rounded font-sans uppercase text-sm tracking-wide'>CZ</Link>
            </div>

            {/* Desktop: Nav - right side (hidden on moile) */}
            <nav className='hidden md:flex gap-4'>
                <Link href={`/${locale}`} className='font-sans uppercase text-sm tracking-wide'>{t.nav.home}</Link>
                <Link href={`/${locale}/details`} className='font-sans uppercase text-sm tracking-wide'>{t.nav.details}</Link>
                <Link href={`/${locale}/registry`} className='font-sans uppercase text-sm tracking-wide'>{t.nav.registry}</Link>
                <Link href={`/${locale}/photos`} className='font-sans uppercase text-sm tracking-wide'>{t.nav.photos}</Link>
            </nav>

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
                        <Link href='/en' className='px-3 py-1 rounded'>EN</Link>
                        <Link href='/cz' className='px-3 py-1 rounded'>CZ</Link>
                    </div>

                    {/* Nav links */}
                    <Link href={`/${locale}`} className='text-center'>{t.nav.home}</Link>
                    <Link href={`/${locale}/details`} className='text-center'>{t.nav.details}</Link>
                    <Link href={`/${locale}/registry`} className='text-center'>{t.nav.registry}</Link>
                    <Link href={`/${locale}/photos`} className='text-center'>{t.nav.photos}</Link>
                </div>
            )}
        </header>
    );
}