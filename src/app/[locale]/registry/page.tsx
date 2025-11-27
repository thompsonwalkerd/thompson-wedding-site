import Image from 'next/image';
import { use } from 'react';
import PageLayout from '@/components/PageLayout';
import Container from '@/components/ui/Container';
import PageTitle from '@/components/ui/PageTitle';
import { getTranslations } from '@/lib/translations';
import { validateLocale } from '@/utils/locale';
import AlbumRegistration from '@/components/registry/AlbumRegistration';
import RegistryClient from './RegistryClient';

export default function RegistryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeString } = use(params);
  const locale = validateLocale(localeString);
  const t = getTranslations(locale);

  return (
    <PageLayout locale={locale} t={t} currentPath='registry'>
      <Container align='center'>
        <PageTitle>{t.registry.title}</PageTitle>

        <div className='max-w-3xl mx-auto space-y-10'>
          {/* Intro Message */}
          <div className='text-center'>
            <p className='text-text/80 font-sans text-lg'>{t.registry.message}</p>
          </div>

          {/* Vinyl Record Gift Info */}
          {t.registry.vinylInfo && (
            <div className='bg-surface/5 border border-text/20 rounded-lg p-8 transition-all duration-300 mb-4 md:mb-6'>
              <h3 className='text-3xl font-heading text-heading mb-3 flex items-center justify-center gap-4'>
                {t.registry.vinylTitle}
                <Image
                  src='/registry/album.png'
                  alt='Vinyl record'
                  width={50}
                  height={50}
                  className='object-contain'
                />
              </h3>
              <p className='text-text/70 font-sans mb-7 md:mb-12 leading-relaxed'>{t.registry.vinylInfo}</p>
              <p className='text-text/50 font-sans text-sm italic mb-2'>
                {t.registry.vinylsPurchased}
              </p>
              <AlbumRegistration translations={t.registry.albumRegistration} />
            </div>
          )}

          {/* Fund Contribution Options */}
          <RegistryClient t={t} />
        </div>
      </Container>
    </PageLayout>
  );
}
