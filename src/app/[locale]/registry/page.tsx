import { use } from 'react';
import Image from 'next/image';
import { getTranslations } from '@/lib/translations';
import { validateLocale } from '@/utils/locale';
import PageLayout from '@/components/PageLayout';
import PageTitle from '@/components/ui/PageTitle';
import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/ui/Container';
import VinylSearchClient from './VinylSearchClient';

export default function RegistryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeString } = use(params);
  const locale = validateLocale(localeString);
  const t = getTranslations(locale);

  return (
    <PageLayout locale={locale} t={t} currentPath='registry'>
      <Container>
        <PageTitle>{t.registry.title}</PageTitle>

        <div className='max-w-3xl mx-auto space-y-12'>
          {/* Intro Message */}
          <div className='text-center'>
            <p className='text-wedding-cream/80 font-sans text-lg'>
              {t.registry.message}
            </p>
          </div>

          {/* Vinyl Record Gift Info */}
          {t.registry.vinylInfo && (
            <div className='bg-wedding-cream/5 border border-wedding-cream/20 rounded-lg p-6'>
              <div className='flex flex-col md:flex-row gap-6 items-start'>
                <div className='flex-1'>
                  <SectionHeading>{t.registry.vinylTitle}</SectionHeading>
                  <p className='text-wedding-cream/70 font-sans leading-relaxed mb-4'>
                    {t.registry.vinylInfo}
                  </p>
                  <p className='text-wedding-cream/60 font-sans text-sm italic mb-4'>
                    {t.registry.vinylsPurchased}
                  </p>
                  <VinylSearchClient
                    searchPlaceholder={t.registry.vinylSearchPlaceholder}
                    searchButton={t.registry.vinylSearchButton}
                  />
                </div>
                <div className='shrink-0'>
                  <Image
                    src='/registry/vinyl.png'
                    alt='Vinyl record'
                    width={200}
                    height={200}
                    className='rounded-lg'
                  />
                </div>
              </div>
            </div>
          )}

          {/* Fund Contribution Options */}
          <div className='grid gap-6 md:grid-cols-2'>
            {t.registry.options.map((option, index) => (
              <a
                key={index}
                href={option.url}
                target='_blank'
                rel='noopener noreferrer'
                className='group bg-wedding-cream/5 border border-wedding-cream/20 rounded-lg p-8 hover:bg-wedding-cream/10 hover:border-wedding-cream/40 transition-all duration-300'
              >
                <h3 className='text-2xl font-heading text-wedding-cream mb-3 group-hover:text-wedding-gold transition-colors'>
                  {option.name}
                </h3>
                <p className='text-wedding-cream/70 font-sans mb-4'>
                  {option.description}
                </p>
                <span className='text-wedding-gold font-sans text-sm group-hover:underline'>
                  {t.registry.externalLinkLabel} →
                </span>
              </a>
            ))}
          </div>

        </div>
      </Container>
    </PageLayout>
  );
}
