import { use } from 'react';
import PageLayout from '@/components/PageLayout';
import Container from '@/components/ui/Container';
import PageTitle from '@/components/ui/PageTitle';
import { getTranslations } from '@/lib/translations';
import { validateLocale } from '@/utils/locale';

export default function PhotosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeString } = use(params);
  const locale = validateLocale(localeString);
  const t = getTranslations(locale);

  return (
    <PageLayout locale={locale} t={t} currentPath='photos'>
      <Container align='center'>
        <PageTitle>{t.photos.title}</PageTitle>
        <div className='flex flex-col items-center justify-center text-center px-6 h-full'>
          <p className='text-xl md:text-2xl font-sans text-text/70 leading-relaxed animate-fade-in-delay-1'>
            {t.photos.placeholder}
          </p>
        </div>
      </Container>
    </PageLayout>
  );
}
