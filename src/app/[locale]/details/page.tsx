import { use } from 'react';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import PageTitle from '@/components/ui/PageTitle';
import SectionHeading from '@/components/ui/SectionHeading';
import { getTranslations } from '@/lib/translations';
import { validateLocale } from '@/utils/locale';

export default function DetailsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeString } = use(params);
  const locale = validateLocale(localeString);
  const t = getTranslations(locale);

  return (
    <PageLayout locale={locale} t={t} currentPath='details'>
      <Container align='center'>
          <PageTitle>{t.details.pageTitle}</PageTitle>

        {/* US Travel Callout Banner */}
        <Button
          as='link'
          href={`/${locale}/details/us-travel`}
          variant='link'
          className='mb-8 -mt-20'
        >
          <span className='underline underline-offset-6 decoration-1 hover:decoration-2 hover:underline-offset-4'>
            <strong>Traveling from the US?</strong> Click here for extra information.
          </span>
          <span className='group-hover:translate-x-1 transition-transform'>→</span>
        </Button>

        {/* Main Details Content */}
        <div className='space-y-12'>
          {/* Venue & Date/Time - Side by Side on Desktop */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in'>
            {/* Venue Section */}
            <section>
              <SectionHeading className='mt-8'>{t.details.venue.sectionTitle}</SectionHeading>
              <div className='font-sans text-text/90 space-y-2 leading-relaxed'>
                <p className='text-2xl font-semibold'>{t.details.venue.name}</p>
                <p>
                  {t.details.venue.address.number} {t.details.venue.address.street}
                </p>
                <p>
                  {t.details.venue.address.city}, {t.details.venue.address.country}
                </p>
              </div>
            </section>

            {/* Date & Time */}
            <section>
              <SectionHeading className='mt-8'>{t.details.dateAndTime.sectionTitle}</SectionHeading>
              <div className='font-sans text-text/90 leading-relaxed'>
                <p className='text-2xl font-semibold'>{t.when.dateString}</p>
                <p>{t.when.time}</p>
              </div>
            </section>
          </div>

          {/* Schedule - 3-Day Timeline */}
          <section className='animate-fade-in-delay-1'>
            <SectionHeading className='mt-15'>{t.details.schedule.sectionTitle}</SectionHeading>

            {/* Desktop: Horizontal 3-column layout */}
            <div className='hidden md:grid md:grid-cols-[2fr_3fr_2fr] gap-6 font-sans text-text'>
              {/* Day Before */}
              {/* <div className='p-4 rounded-lg border border-text/20 bg-surface/5'>
                <h3 className='text-lg font-heading text-text/70 mb-2'>
                  {t.details.schedule.dayBefore.title}
                </h3>
                <p className='text-sm text-text/60 leading-relaxed'>
                  {t.details.schedule.dayBefore.description}
                </p>
              </div> */}

              {/* Main Day - Emphasized */}
              <div className='p-8 rounded-lg border-2 border-text shadow-lg shadow-text/20 bg-surface/10'>
                <div className='space-y-4'>
                  <div>
                    <p className='text-lg font-semibold text-text'>
                      {t.details.schedule.ceremonyTime} -{' '}
                      {t.details.schedule.ceremony}
                    </p>
                  </div>
                  <div>
                    <p className='text-lg font-semibold text-text'>
                      {t.details.schedule.receptionTime} -{' '}
                      {t.details.schedule.reception}
                    </p>
                  </div>
                </div>
              </div>

              {/* Day After */}
              {/* <div className='p-4 rounded-lg border border-text/20 bg-surface/5'>
                <h3 className='text-lg font-heading text-text/70 mb-2'>
                  {t.details.schedule.dayAfter.title}
                </h3>
                <p className='text-sm text-text/60 leading-relaxed'>
                  {t.details.schedule.dayAfter.description}
                </p>
                </div> */}
              </div>

            {/* Mobile: Vertical with emphasis */}
            <div className='md:hidden space-y-6 font-sans text-text'>
              {/* Day Before - Small */}
              {/* <div className='p-4 rounded-lg border border-text/20 bg-surface/5'>
                <h3 className='text-base font-heading text-text/70 mb-2'>
                  {t.details.schedule.dayBefore.title}
                </h3>
                <p className='text-xs text-text/60 leading-relaxed'>
                  {t.details.schedule.dayBefore.description}
                </p>
              </div> */}

              {/* Main Day - Large emphasized card */}
              <div className='p-6 rounded-lg border-2 border-text shadow-lg shadow-text/20 bg-surface/10'>
                <div className='space-y-3'>
                  <div>
                    <p className='text-lg font-semibold text-text'>
                      {t.details.schedule.ceremonyTime} -{' '}
                      {t.details.schedule.ceremony}
                    </p>
                  </div>
                  <div>
                    <p className='text-lg font-semibold text-text'>
                      {t.details.schedule.receptionTime} -{' '}
                      {t.details.schedule.reception}
                    </p>
                  </div>
                </div>
              </div>

              {/* Day After - Small */}
              {/* <div className='p-4 rounded-lg border border-text/20 bg-surface/5'>
                <h3 className='text-base font-heading text-text/70 mb-2'>
                  {t.details.schedule.dayAfter.title}
                </h3>
                <p className='text-xs text-text/60 leading-relaxed'>
                  {t.details.schedule.dayAfter.description}
                </p>
              </div> */}
            </div>
          </section>

          {/* Accommodations */}
          <section className='animate-fade-in-delay-2'>
            <SectionHeading className='mt-15'>
              {t.details.accommodations.sectionTitle}
            </SectionHeading>

            {/* Accommodation Cards Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {t.details.accommodations.options.map((hotel, index) => (
                <div
                  key={index}
                  className='rounded-lg overflow-hidden border border-text/20 hover:border-text/40 transition-all hover:shadow-lg hover:shadow-text/10'
                >
                  {/* Background image section */}
                  <div
                    className='h-48 bg-cover bg-center'
                    style={{ backgroundImage: `url(${hotel.image})` }}
                  />
                  {/* Details overlay at bottom */}
                  <div className='p-4 bg-surface/10 border-t border-text/20'>
                    <h3 className='text-xl font-heading text-text mb-2'>{hotel.name}</h3>
                    <p className='text-base text-text/70 font-sans'>{hotel.description}</p>
                    <p className='text-base text-text/70 font-sans'>{hotel.priceRange}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Dress Code */}
          <section className='animate-fade-in-delay-3'>
            <SectionHeading className='mt-15'>{t.details.dressCode.sectionTitle}</SectionHeading>
            <img
              src='/details/color-palette.png'
              alt='schedule'
              className='opacity-100'
              style={{ position: 'sticky', top: '12rem' }}
            />
            <p className='font-sans text-text/90 leading-relaxed'>
              {t.details.dressCode.description}
            </p>
          </section>
        </div>
      </Container>
    </PageLayout>
  );
}
