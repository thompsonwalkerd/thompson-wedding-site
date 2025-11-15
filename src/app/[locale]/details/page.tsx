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
      {/* Floating decorative images - positioned fixed relative to viewport */}
      {/* Venue decoration - left side */}
      {/* <div className='hidden lg:block fixed left-8 top-32 pointer-events-none border-2 border-red-500 z-10'>
        <img
          src='/decorations/venue.png'
          alt=''
          className='w-32 opacity-100'
          style={{ position: 'sticky', top: '8rem' }}
        />
      </div> */}

      {/* Schedule decoration - right side */}
      {/* <div className='hidden lg:block fixed right-8 top-96 pointer-events-none border-2 border-red-500 z-10'>
        <img
          src='/decorations/schedule.png'
          alt='schedule'
          className='w-32 opacity-100'
          style={{ position: 'sticky', top: '12rem' }}
        />
      </div> */}

      {/* Accommodations decoration - left side */}
      {/* <div className='hidden lg:block fixed left-8 top-[800px] pointer-events-none border-2 border-red-500 z-10'>
        <img
          src='/decorations/accommodations.png'
          alt=''
          className='w-32 opacity-100'
          style={{ position: 'sticky', top: '16rem' }}
        />
      </div> */}

      {/* Dress Code decoration - right side */}
      {/* <div className='hidden lg:block fixed right-8 top-[1000px] pointer-events-none border-2 border-red-500 z-10'>
        <img
          src='/decorations/dress-code.png'
          alt=''
          className='w-32 opacity-100'
          style={{ position: 'sticky', top: '20rem' }}
        />
      </div> */}

      <Container align='center'>
          <PageTitle>{t.details.pageTitle}</PageTitle>

        {/* US Travel Callout Banner */}
        <Button
          as='link'
          href={`/${locale}/details/us-travel`}
          variant='link'
          className='mb-20 -mt-10'
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
              <div className='font-sans text-wedding-cream/90 space-y-2 leading-relaxed'>
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
              <div className='font-sans text-wedding-cream/90 leading-relaxed'>
                <p className='text-2xl font-semibold'>{t.when.dateString}</p>
                <p>{t.when.time}</p>
              </div>
            </section>
          </div>

          {/* Schedule - 3-Day Timeline */}
          <section className='animate-fade-in-delay-1'>
            <SectionHeading className='mt-15'>{t.details.schedule.sectionTitle}</SectionHeading>

            {/* Desktop: Horizontal 3-column layout */}
            <div className='hidden md:grid md:grid-cols-[2fr_3fr_2fr] gap-6 font-sans text-wedding-cream'>
              {/* Day Before */}
              <div className='p-4 rounded-lg border border-wedding-cream/20 bg-wedding-cream/5'>
                <h3 className='text-lg font-heading text-wedding-cream/70 mb-2'>
                  {t.details.schedule.dayBefore.title}
                </h3>
                <p className='text-sm text-wedding-cream/60 leading-relaxed'>
                  {t.details.schedule.dayBefore.description}
                </p>
              </div>

              {/* Main Day - Emphasized */}
              <div className='p-8 rounded-lg border-2 border-wedding-cream shadow-lg shadow-wedding-cream/20 bg-wedding-cream/10'>
                <h3 className='text-2xl font-heading text-wedding-cream mb-4'>
                  {t.details.schedule.mainDay.title}
                </h3>
                <div className='space-y-4'>
                  <div>
                    <p className='text-lg font-semibold text-wedding-cream'>
                      {t.details.schedule.mainDay.ceremonyTime} -{' '}
                      {t.details.schedule.mainDay.ceremony}
                    </p>
                  </div>
                  <div>
                    <p className='text-lg font-semibold text-wedding-cream'>
                      {t.details.schedule.mainDay.receptionTime} -{' '}
                      {t.details.schedule.mainDay.reception}
                    </p>
                  </div>
                </div>
              </div>

              {/* Day After */}
              <div className='p-4 rounded-lg border border-wedding-cream/20 bg-wedding-cream/5'>
                <h3 className='text-lg font-heading text-wedding-cream/70 mb-2'>
                  {t.details.schedule.dayAfter.title}
                </h3>
                <p className='text-sm text-wedding-cream/60 leading-relaxed'>
                  {t.details.schedule.dayAfter.description}
                </p>
              </div>
            </div>

            {/* Mobile: Vertical with emphasis */}
            <div className='md:hidden space-y-6 font-sans text-wedding-cream'>
              {/* Day Before - Small */}
              <div className='p-4 rounded-lg border border-wedding-cream/20 bg-wedding-cream/5'>
                <h3 className='text-base font-heading text-wedding-cream/70 mb-2'>
                  {t.details.schedule.dayBefore.title}
                </h3>
                <p className='text-xs text-wedding-cream/60 leading-relaxed'>
                  {t.details.schedule.dayBefore.description}
                </p>
              </div>

              {/* Main Day - Large emphasized card */}
              <div className='p-6 rounded-lg border-2 border-wedding-cream shadow-lg shadow-wedding-cream/20 bg-wedding-cream/10'>
                <h3 className='text-2xl font-heading text-wedding-cream mb-4'>
                  {t.details.schedule.mainDay.title}
                </h3>
                <div className='space-y-3'>
                  <div>
                    <p className='text-lg font-semibold text-wedding-cream'>
                      {t.details.schedule.mainDay.ceremonyTime} -{' '}
                      {t.details.schedule.mainDay.ceremony}
                    </p>
                  </div>
                  <div>
                    <p className='text-lg font-semibold text-wedding-cream'>
                      {t.details.schedule.mainDay.receptionTime} -{' '}
                      {t.details.schedule.mainDay.reception}
                    </p>
                  </div>
                </div>
              </div>

              {/* Day After - Small */}
              <div className='p-4 rounded-lg border border-wedding-cream/20 bg-wedding-cream/5'>
                <h3 className='text-base font-heading text-wedding-cream/70 mb-2'>
                  {t.details.schedule.dayAfter.title}
                </h3>
                <p className='text-xs text-wedding-cream/60 leading-relaxed'>
                  {t.details.schedule.dayAfter.description}
                </p>
              </div>
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
                  className='rounded-lg overflow-hidden border border-wedding-cream/20 hover:border-wedding-cream/40 transition-all hover:shadow-lg hover:shadow-wedding-cream/10'
                >
                  {/* Background image section */}
                  <div
                    className='h-48 bg-cover bg-center'
                    style={{ backgroundImage: `url(${hotel.image})` }}
                  />
                  {/* Details overlay at bottom */}
                  <div className='p-4 bg-wedding-cream/10 border-t border-wedding-cream/20'>
                    <h3 className='text-xl font-heading text-wedding-cream mb-2'>{hotel.name}</h3>
                    <p className='text-base text-wedding-cream/70 font-sans'>{hotel.description}</p>
                    <p className='text-base text-wedding-cream/70 font-sans'>{hotel.priceRange}</p>
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
            <p className='font-sans text-wedding-cream/90 leading-relaxed'>
              {t.details.dressCode.description}
            </p>
          </section>
        </div>
      </Container>
    </PageLayout>
  );
}
