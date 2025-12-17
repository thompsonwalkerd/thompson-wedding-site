'use client';

import AccommodationDetails from '@/components/details/AccommodationDetails';
import HotelCard from '@/components/details/HotelCard';
import ScheduleTimeline from '@/components/details/ScheduleTimeline';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import PageTitle from '@/components/ui/PageTitle';
import SectionHeading from '@/components/ui/SectionHeading';
import { getTranslations } from '@/lib/translations';
import { validateLocale } from '@/utils/locale';
import Image from 'next/image';
import { use, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function DetailsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeString } = use(params);
  const locale = validateLocale(localeString);
  const t = getTranslations(locale);

  const [expandedHotel, setExpandedHotel] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Body scroll lock when modal is open
  useEffect(() => {
    if (expandedHotel !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [expandedHotel]);

  const handleToggle = (index: number) => {
    setExpandedHotel(expandedHotel === index ? null : index);
  };

  const handleClose = () => {
    setExpandedHotel(null);
  };

  return (
    <PageLayout locale={locale} t={t} currentPath='details'>
      <Container align='center'>
        <PageTitle>{t.details.pageTitle}</PageTitle>

        {/* US Travel Callout Banner */}
        <Button as='link' href={`/${locale}/details/us-travel`} variant='link' className='mb-4'>
          <span className='text-sm md:text-lg underline underline-offset-6 decoration-1 hover:decoration-2 hover:underline-offset-4'>
            <strong>Traveling from the US?</strong> Click here for extra information.
          </span>
          <span className='group-hover:translate-x-1 transition-transform'>→</span>
        </Button>

        {/* Main Details Content */}
        <div className='space-y-16 md:space-y-20'>
          {/* Venue & Date/Time - Side by Side on Desktop */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in'>
            {/* Venue Section */}
            <section>
              <SectionHeading>{t.details.venue.sectionTitle}</SectionHeading>
              <div className='font-sans text-text/90 space-y-2 leading-relaxed'>
                <p className='text-xl md:text-2xl font-semibold'>{t.details.venue.name}</p>
                <p className='text-sm md:text-base'>
                  {t.details.venue.address.number} {t.details.venue.address.street}
                </p>
                <p className='text-sm md:text-base'>
                  {t.details.venue.address.city}, {t.details.venue.address.country}
                </p>
              </div>
            </section>

            {/* Date & Time */}
            <section>
              <SectionHeading>{t.details.dateAndTime.sectionTitle}</SectionHeading>
              <div className='font-sans text-text/90 space-y-2 leading-relaxed'>
                <p className='text-xl md:text-2xl font-semibold'>{t.when.dateString}</p>
                <p className='text-sm md:text-base'>{t.when.time}</p>
              </div>
            </section>
          </div>

          {/* Schedule */}
          <ScheduleTimeline
            sectionTitle={t.details.schedule.sectionTitle}
            activities={t.details.schedule.activities}
          />

          {/* Accommodations */}
          <section className='animate-fade-in-delay-2'>
            <SectionHeading>{t.details.accommodations.sectionTitle}</SectionHeading>

            <p className='text-md md:text-lg whitespace-pre-wrap'>
              {t.details.accommodations.details}
            </p>

            {/* Modal for both Mobile and Desktop */}
            {mounted &&
              expandedHotel !== null &&
              createPortal(
                <div
                  className='fixed inset-0 z-50 flex items-center justify-center p-4'
                  role='dialog'
                  aria-modal='true'
                  onClick={handleClose}
                >
                  {/* Backdrop with blur and overlay */}
                  <div className='absolute inset-0 bg-text/20 backdrop-blur-sm' />

                  {/* Modal Content */}
                  <div
                    className='relative bg-bg w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl'
                    onClick={e => e.stopPropagation()}
                  >
                    {/* Sticky Header with Close Button */}
                    <div className='sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-text/20 p-4 md:p-6 flex justify-between items-center'>
                      <h2 className='font-heading text-2xl md:text-3xl text-heading'>
                        {t.details.accommodations.options[expandedHotel].name}
                      </h2>
                      <button
                        onClick={handleClose}
                        className='text-3xl text-text hover:text-heading transition-colors'
                        aria-label='Close'
                      >
                        ×
                      </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className='p-4 md:p-6'>
                      <AccommodationDetails
                        contact={t.details.accommodations.contact}
                        hotel={t.details.accommodations.options[expandedHotel]}
                        labels={t.details.accommodations.labels}
                      />
                    </div>
                  </div>
                </div>,
                document.body,
              )}

            {/* Accommodation Cards Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 sm:gap-6 max-w-5xl mx-10 sm:mx-10 mt-8'>
              {t.details.accommodations.options.map((hotel, index) => (
                <HotelCard
                  key={index}
                  name={hotel.name}
                  image={hotel.image}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </section>

          {/* Dress Code */}
          <section className='animate-fade-in-delay-3'>
            <SectionHeading>{t.details.dressCode.sectionTitle}</SectionHeading>

            <div className='flex flex-col justify-around items-center'>
              <p className='text-text/90 text-md md:text-lg text-center'>
                {t.details.dressCode.description}
              </p>
              <Image
                src='/details/desktop-color-palette.png'
                width={1000}
                height={400}
                alt='color palette'
                className='p-12 hidden sm:block'
              />
              <Image
                src='/details/mobile-color-palette.png'
                width={600}
                height={400}
                alt='color palette'
                className='p-12 sm:hidden'
              />
            </div>
          </section>
        </div>
      </Container>
    </PageLayout>
  );
}
