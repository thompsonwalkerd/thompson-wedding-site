import Image from 'next/image';
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
        <Button as='link' href={`/${locale}/details/us-travel`} variant='link' className='mb-4'>
          <span className='text-sm md:text-lg underline underline-offset-6 decoration-1 hover:decoration-2 hover:underline-offset-4'>
            <strong>Traveling from the US?</strong> Click here for extra information.
          </span>
          <span className='group-hover:translate-x-1 transition-transform'>→</span>
        </Button>

        {/* Main Details Content */}
        <div className='space-y-12'>
          {/* Venue & Date/Time - Side by Side on Desktop */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in px-4'>
            {/* Venue Section */}
            <section>
              <SectionHeading className='mt-4 md:mt-8'>{t.details.venue.sectionTitle}</SectionHeading>
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
              <SectionHeading className='mt-4 md:mt-8'>{t.details.dateAndTime.sectionTitle}</SectionHeading>
              <div className='font-sans text-text/90 space-y-2 leading-relaxed'>
                <p className='text-xl md:text-2xl font-semibold'>{t.when.dateString}</p>
                <p className='text-sm md:text-base'>{t.when.time}</p>
              </div>
            </section>
          </div>

          {/* Schedule */}
          <section className='animate-fade-in-delay-1'>
            <SectionHeading className='mt-4 md:mt-8'>{t.details.schedule.sectionTitle}</SectionHeading>

            {/* Timeline Container - Desktop: center-aligned alternating, Mobile: left-aligned list */}
            <div className='max-w-3xl mx-auto py-8 px-4'>
              {/* Mobile: Left-aligned timeline layout */}
              <div className='md:hidden relative max-w-lg mx-auto'>
                {/* Vertical Line on the left */}
                <div className='absolute left-10 top-0 bottom-0 w-px bg-accent' />

                {t.details.schedule.activities.map((activity, index) => (
                  <div key={index} className='relative pb-8 last:pb-0 pl-22'>
                    {/* Dot on timeline - centered on vertical line, aligned with icon center */}
                    <div className='absolute left-10 top-5 w-2 h-2 rounded-full bg-bg border-accent border z-10 -translate-x-1/2' />

                    {/* Horizontal connector line from dot center to content */}
                    <div className='absolute left-10 top-5 w-18 h-px bg-accent translate-y-1' />

                    <div className='flex items-center gap-6'>
                      {/* Icon */}
                      <div className='shrink-0'>
                        <Image
                          src={`/schedule/${activity.icon}`}
                          alt={activity.name}
                          width={40}
                          height={40}
                          className='object-contain ml-10'
                        />
                      </div>
                      {/* Time and Name */}
                      <div className='flex-1 -mt-1 -ml-10'>
                        <h3 className='text-xl font-bold font-heading text-text'>
                          {activity.time}
                        </h3>
                        <p className='text-lg font-heading text-text'>{activity.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: Alternating timeline layout */}
              <div className='hidden md:block relative'>
                {/* Vertical Center Line */}
                <div className='absolute left-1/2 top-0 bottom-0 w-px bg-accent -translate-x-1/2' />

                {/* Timeline Items */}
                {t.details.schedule.activities.map((activity, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <div key={index} className='relative h-24'>
                      {/* Dot on timeline - absolutely centered */}
                      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-bg border-accent border z-10' />

                      {isEven ? (
                        // Left side layout: [Icon] ─ ● (line extends left from center)
                        <>
                          {/* Connector Line - extends from center to left */}
                          <div className='absolute left-1/2 top-1/2 -translate-y-1/2 w-12 h-px bg-accent origin-left -translate-x-full' />

                          {/* Icon - at the end of the connector line */}
                          <div
                            className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-full flex items-center justify-end'
                            style={{ marginLeft: '-64px', paddingRight: '8px' }}
                          >
                            <Image
                              src={`/schedule/${activity.icon}`}
                              alt={activity.name}
                              width={50}
                              height={50}
                              className='object-contain'
                            />
                          </div>

                          {/* Time and Name - Left side */}
                          <div className='absolute left-0 right-1/2 top-1/2 -translate-y-1/2 pr-35 text-right'>
                            <h3 className='text-3xl font-bold font-heading text-text'>
                              {activity.time}
                            </h3>
                            <p className='text-2xl font-heading text-text mt-2'>{activity.name}</p>
                          </div>
                        </>
                      ) : (
                        // Right side layout: ● ─ [Icon] (line extends right from center)
                        <>
                          {/* Connector Line - extends from center to right */}
                          <div className='absolute left-1/2 top-1/2 -translate-y-1/2 w-12 h-px bg-accent origin-left' />

                          {/* Icon - at the end of the connector line */}
                          <div
                            className='absolute left-1/2 top-1/2 -translate-y-1/2 flex items-center justify-start'
                            style={{ marginLeft: '64px', paddingLeft: '8px' }}
                          >
                            <Image
                              src={`/schedule/${activity.icon}`}
                              alt={activity.name}
                              width={50}
                              height={50}
                              className='object-contain'
                            />
                          </div>

                          {/* Time and Name - Right side */}
                          <div className='absolute right-0 left-1/2 top-1/2 -translate-y-1/2 pl-35 text-left'>
                            <h3 className='text-3xl font-bold font-heading text-text'>
                              {activity.time}
                            </h3>
                            <p className='text-2xl font-heading text-text mt-2'>{activity.name}</p>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Accommodations */}
          <section className='animate-fade-in-delay-2'>
            <SectionHeading className='mt-4 md:mt-8'>
              {t.details.accommodations.sectionTitle}
            </SectionHeading>

            {/* Accommodation Cards Grid */}
            <div className='grid grid-cols-2 justify-center mt-8'>
              {t.details.accommodations.options.map((hotel, index) => (
                <div
                  key={index}
                  className='md:w-70 w-50 justify-self-center rounded-md overflow-hidden transition-all hover:shadow-lg hover:shadow-text/10'
                >
                  {/* Background image section */}
                  <div
                    className='h-30 md:h-40 bg-cover bg-center'
                    style={{ backgroundImage: `url(${hotel.image})` }}
                  />
                  {/* Details overlay at bottom */}
                  <h3 className='p-1 md:p-3 bg-surface/10 border-t border-text/2 text-md md:text-xl font-heading text-text mb-1'>{hotel.name}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Dress Code */}
          <section className='animate-fade-in-delay-3'>
            <SectionHeading>{t.details.dressCode.sectionTitle}</SectionHeading>

            <div className='flex flex-col md:flex-row justify-around items-center gap-6 md:gap-8 px-4'>
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
