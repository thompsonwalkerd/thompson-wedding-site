import Image from 'next/image';
import { use } from 'react';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import PageTitle from '@/components/ui/PageTitle';
import SectionHeading from '@/components/ui/SectionHeading';
import { getTranslations } from '@/lib/translations';
import { validateLocale } from '@/utils/locale';
import ScheduleTimeline from '@/components/details/ScheduleTimeline';
import HotelCard from '@/components/details/HotelCard';

export default function DetailsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeString } = use(params);
  const locale = validateLocale(localeString);
  const t = getTranslations(locale);

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
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in'>
            {/* Venue Section */}
            <section>
              <SectionHeading className='mt-4 md:mt-8'>
                {t.details.venue.sectionTitle}
              </SectionHeading>
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
              <SectionHeading className='mt-4 md:mt-8'>
                {t.details.dateAndTime.sectionTitle}
              </SectionHeading>
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
            <SectionHeading className='mt-4 md:mt-8'>
              {t.details.accommodations.sectionTitle}
            </SectionHeading>

            <p className='text-sm md:text-lg'>{t.details.accommodations.details}</p>

            {/* Accommodation Cards Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto mt-8'>
              {t.details.accommodations.options.map((hotel, index) => (
                <HotelCard
                  key={index}
                  name={hotel.name}
                  details={hotel.details}
                  image={hotel.image}
                />
              ))}
            </div>
          </section>

          {/* Dress Code */}
          <section className='animate-fade-in-delay-3'>
            <SectionHeading>{t.details.dressCode.sectionTitle}</SectionHeading>

            <div className='flex flex-col md:flex-row justify-around items-center gap-6 md:gap-8'>
              <Image
                src='/details/color-palette.png'
                width={300}
                height={300}
                alt='schedule'
                className='opacity-100 w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain'
              />
              <p className='font-sans text-text/90 text-base md:text-lg leading-relaxed whitespace-break-spaces max-w-xl text-center md:text-left'>
                {t.details.dressCode.description}
              </p>
            </div>
          </section>
        </div>
      </Container>
    </PageLayout>
  );
}
