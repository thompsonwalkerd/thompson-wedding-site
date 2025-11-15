import { use } from 'react';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import PageTitle from '@/components/ui/PageTitle';
import SectionHeading from '@/components/ui/SectionHeading';
import { getTranslations } from '@/lib/translations';
import { validateLocale } from '@/utils/locale';

export default function USTravelPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeString } = use(params);
  const locale = validateLocale(localeString);
  const t = getTranslations(locale);

  return (
    <PageLayout locale={locale} t={t} currentPath='details/us-travel'>
      <Container align='center'>
        {/* Back Button */}
        <Button as='link' href={`/${locale}/details`} variant='back' className='mb-8'>
          <span>←</span>
          <span>Back to Details</span>
        </Button>

        <PageTitle>Travel Information for US Guests</PageTitle>

        {/* Sections */}
        <div className='space-y-12 text-wedding-cream animate-fade-in'>
          {/* Flights */}
          <section>
            <SectionHeading>Flights</SectionHeading>
            <div className='font-sans text-wedding-cream/90 space-y-3 leading-relaxed'>
              <p>
                <strong className='text-wedding-cream'>Nearest Airport:</strong> Václav Havel
                Airport Prague (PRG)
              </p>
              <p>
                <strong className='text-wedding-cream'>From US:</strong> Direct flights available
                from major hubs (NYC, Chicago, etc.) or connect through European cities
              </p>
              <p>
                <strong className='text-wedding-cream'>Flight Duration:</strong> ~9-10 hours direct
                from East Coast
              </p>
            </div>
          </section>

          {/* Visa Requirements */}
          <section>
            <SectionHeading>Visa & Entry</SectionHeading>
            <div className='font-sans text-wedding-cream/90 space-y-3 leading-relaxed'>
              <p>US citizens can enter Czech Republic visa-free for tourism up to 90 days.</p>
              <p>
                <strong className='text-wedding-cream'>Requirements:</strong>
              </p>
              <ul className='list-disc ml-6 space-y-2'>
                <li>Valid passport (at least 6 months beyond travel date)</li>
                <li>Return ticket</li>
                <li>Proof of accommodation</li>
              </ul>
            </div>
          </section>

          {/* Accommodation */}
          <section>
            <SectionHeading>Accommodation</SectionHeading>
            <div className='font-sans text-wedding-cream/90 space-y-3 leading-relaxed'>
              <p>Recommended hotels near the venue:</p>
              <ul className='list-disc ml-6 space-y-2'>
                <li>[Hotel Name 1] - [Distance from venue]</li>
                <li>[Hotel Name 2] - [Distance from venue]</li>
              </ul>
            </div>
          </section>

          {/* Transportation */}
          <section>
            <SectionHeading>Getting Around</SectionHeading>
            <div className='font-sans text-wedding-cream/90 space-y-3 leading-relaxed'>
              <p>
                <strong className='text-wedding-cream'>Airport to Venue:</strong> ~30 minutes by
                taxi or rental car
              </p>
              <p>
                <strong className='text-wedding-cream'>Options:</strong> Uber/Bolt available, public
                transit, rental car
              </p>
            </div>
          </section>

          {/* Money */}
          <section>
            <SectionHeading>Currency & Money</SectionHeading>
            <div className='font-sans text-wedding-cream/90 space-y-3 leading-relaxed'>
              <p>
                <strong className='text-wedding-cream'>Currency:</strong> Czech Koruna (CZK)
              </p>
              <p>Credit cards widely accepted. ATMs available throughout the city.</p>
            </div>
          </section>

          {/* Useful Phrases */}
          <section>
            <SectionHeading>Useful Czech Phrases</SectionHeading>
            <div className='font-sans text-wedding-cream/90 space-y-2 leading-relaxed'>
              <p>
                <strong className='text-wedding-cream'>Dobrý den</strong> - Good day/Hello
              </p>
              <p>
                <strong className='text-wedding-cream'>Děkuji</strong> - Thank you
              </p>
              <p>
                <strong className='text-wedding-cream'>Prosím</strong> - Please/You're welcome
              </p>
              <p>
                <strong className='text-wedding-cream'>Na zdraví!</strong> - Cheers!
              </p>
            </div>
          </section>
        </div>
      </Container>
    </PageLayout>
  );
}
