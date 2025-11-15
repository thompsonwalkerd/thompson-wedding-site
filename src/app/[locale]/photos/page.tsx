import { use } from 'react';
import PageLayout from '@/components/PageLayout';
import { getTranslations } from '@/lib/translations';
import { validateLocale } from '@/utils/locale';

export default function PhotosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeString } = use(params);
  const locale = validateLocale(localeString);
  const t = getTranslations(locale);

  return (
    <PageLayout locale={locale} t={t} currentPath='photos'>
      <div className='flex flex-col items-center justify-center text-center px-6 h-full'>
        <h1 className='text-5xl md:text-6xl lg:text-7xl mb-6 mt-12 font-heading text-wedding-cream animate-fade-in'>
          {t.photos.title}
        </h1>
        <p className='text-xl md:text-2xl font-sans text-wedding-cream/70 leading-relaxed animate-fade-in-delay-1'>
          {t.photos.placeholder}
        </p>
      </div>
    </PageLayout>
  );
}
