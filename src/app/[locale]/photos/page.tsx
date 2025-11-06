import { getTranslations } from '@/lib/translations';
import { validateLocale } from '@/utils/locale';
import PageLayout from '@/components/PageLayout';

export default function PhotosPage({ params }: { params: { locale: string } }) {
  const locale = validateLocale(params.locale);
  const t = getTranslations(locale);

  return (
    <PageLayout locale={locale} t={t} currentPath='photos'>
      <div className='flex flex-col items-center justify-center text-center px-6 h-full bg-wedding-olive'>
        <h1 className='text-6xl mb-4 font-heading text-wedding-cream'>
          {t.photos.title}
        </h1>
        <p className='text-xl font-sans text-wedding-cream/70'>
          {t.photos.placeholder}
        </p>
      </div>
    </PageLayout>
  );
}