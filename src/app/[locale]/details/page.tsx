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
      <Container>
        <PageTitle>{t.details.pageTitle}</PageTitle>

        {/* US Travel Callout Banner */}
        <Button as='link' href={`/${locale}/details/us-travel`} variant='link' className='mb-12'>
          <span className='underline underline-offset-6 decoration-1 hover:decoration-2 hover:underline-offset-4'>
            <strong>Traveling from the US?</strong> Click here for extra information.
          </span>
          <span className='group-hover:translate-x-1 transition-transform'>→</span>
        </Button>

        {/* Main Details Content */}
        <div>
          {/* Venue Section */}
          <section>
            <SectionHeading>{t.details.venue.sectionTitle}</SectionHeading>
            <div className='font-sans text-wedding-cream/90 space-y-2'>
              <p className='text-xl'>{t.details.venue.name}</p>
              <p>
                {t.details.venue.address.number} {t.details.venue.address.street}
              </p>
              <p>
                {t.details.venue.address.city}, {t.details.venue.address.country}
              </p>
            </div>
          </section>

          {/* Date & Time */}
          <section className='pt-10'>
            <SectionHeading>{t.details.dateAndTime.sectionTitle}</SectionHeading>
            <div className='font-sans text-wedding-cream/90'>
              <p className='text-xl'>{t.when.dateString}</p>
              <p>{t.when.time}</p>
            </div>
          </section>

          {/* Schedule */}
          <section className='pt-10'>
            <SectionHeading>{t.details.schedule.sectionTitle}</SectionHeading>
            <div className='font-sans text-wedding-cream/90 space-y-3'>
              <h3 className='text-2xl font-heading border-wedding-cream/30 pb-2 pt-4'>
                {t.when.dayOfWeek}
              </h3>
              <div>
                <p className='font-semibold'>{t.details.schedule.schedule.ceremonyHeader}</p>
                <p className='text-sm text-wedding-cream/70'>
                  {t.details.schedule.schedule.ceremonyDescription}
                </p>
              </div>
              <div>
                <p className='font-semibold'>{t.details.schedule.schedule.receptionHeader}</p>
                <p className='text-sm text-wedding-cream/70'>
                  {t.details.schedule.schedule.receptionDescription}
                </p>
              </div>
            </div>
            <div className='font-sans text-wedding-cream/90 space-y-3'>
              <h3 className='text-2xl font-heading border-wedding-cream/30 pt-10'>
                {t.when.dayAfter}
              </h3>
              <div>
                <p className='font-semibold'>{t.details.schedule.schedule.ceremonyHeader}</p>
                <p className='text-sm text-wedding-cream/70'>
                  {t.details.schedule.schedule.ceremonyDescription}
                </p>
              </div>
              <div>
                <p className='font-semibold'>{t.details.schedule.schedule.receptionHeader}</p>
                <p className='text-sm text-wedding-cream/70'>
                  {t.details.schedule.schedule.receptionDescription}
                </p>
              </div>
            </div>
          </section>

          {/* Accommodations */}
          <section className='pt-10 pb-10'>
            <SectionHeading>{t.details.accommodations.sectionTitle}</SectionHeading>
          </section>

          {/* Dress Code */}
          <section className='pt-10'>
            <SectionHeading>{t.details.dressCode.sectionTitle}</SectionHeading>
            <p className='font-sans text-wedding-cream/90'>{t.details.dressCode.description}</p>
          </section>
        </div>
      </Container>
    </PageLayout>
  );
}
