import { use } from 'react';
import Image from 'next/image';
import { getTranslations } from '@/lib/translations';
import { validateLocale } from '@/utils/locale';
import PageLayout from '@/components/PageLayout';
import PageTitle from '@/components/ui/PageTitle';
import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/ui/Container';
import VinylSearchClient from './VinylSearchClient';
import PaymentOptions from '@/components/registry/PaymentOptions';

export default function RegistryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeString } = use(params);
  const locale = validateLocale(localeString);
  const t = getTranslations(locale);

  return (
    <PageLayout locale={locale} t={t} currentPath='registry'>
      <Container align='center'>
        <PageTitle>{t.registry.title}</PageTitle>

        <div className='max-w-3xl mx-auto space-y-12'>
          {/* Intro Message */}
          <div className='text-center'>
            <p className='text-text/80 font-sans text-lg'>
              {t.registry.message}
            </p>
          </div>

          {/* Vinyl Record Gift Info */}
          {t.registry.vinylInfo && (
            <div className='bg-surface/5 border border-text/20 rounded-lg p-8 transition-all duration-300'>
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
              <p className='text-text/70 font-sans mb-10 leading-relaxed'>
                {t.registry.vinylInfo}
              </p>
              <p className='text-text/60 font-sans text-sm italic mb-4'>
                {t.registry.vinylsPurchased}
              </p>
              <VinylSearchClient
                searchPlaceholder={t.registry.vinylSearchPlaceholder}
                searchButton={t.registry.vinylSearchButton}
              />
            </div>
          )}

          {/* Fund Contribution Options */}
          <div className='grid gap-4 md:grid-cols-2'>
            {t.registry.options.map((option, index) => {
              const fundType = option.name.toLowerCase().includes('honeymoon') ? 'honeymoon' : 'car';

              return (
                <div
                  key={index}
                  className='bg-surface/5 border border-text/20 rounded-lg p-6 transition-all duration-300'
                >
                  <h3 className='text-3xl font-heading text-heading mb-3 flex items-center justify-center gap-4'>
                    {option.name}
                    <Image
                      src={option.icon}
                      alt={`${option.name}`}
                      width={50}
                      height={50}
                      className='object-contain'
                    />
                  </h3>
                  <p className='text-text/70 font-sans mb-6'>
                    {option.description}
                  </p>
                  <PaymentOptions
                    fundType={fundType}
                    buttonText={t.registry.externalLinkLabel}
                    paymentOptions={t.registry.paymentOptions}
                    labels={t.registry.paymentLabels}
                  />
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </PageLayout>
  );
}
