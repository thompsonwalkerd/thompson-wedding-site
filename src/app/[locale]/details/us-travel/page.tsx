import { getTranslations, Locale } from '@/lib/translations';
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function USTravel({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = getTranslations(locale);

  return (
    <div className='bg-wedding-black relative min-h-screen'>
      {/* Background */}
      <Image
        src='/second-bg.jpeg'
        alt='Background'
        fill
        className='object-cover'
        quality={85}
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-wedding-black/70 to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header locale={locale} t={t} currentPath='details/us-travel' />

        <main className='flex-1 px-6 py-12 max-w-4xl mx-auto'>
          {/* Back Button */}
          <Link 
            href={`/${locale}/details`}
            className='inline-flex items-center gap-2 mb-8 text-wedding-cream/70 hover:text-wedding-cream transition-colors font-sans'
          >
            <span>←</span>
            <span>Back to Details</span>
          </Link>

          {/* Page Title */}
          <h1 className='text-5xl font-heading text-wedding-cream mb-12 border-b border-wedding-cream/30 pb-4'>
            Travel Information for US Guests
          </h1>

          {/* Sections */}
          <div className='space-y-12 text-wedding-cream'>
            {/* Flights */}
            <section>
              <h2 className='text-3xl font-heading mb-4'>Flights</h2>
              <div className='font-sans text-wedding-cream/90 space-y-3'>
                <p><strong>Nearest Airport:</strong> Václav Havel Airport Prague (PRG)</p>
                <p><strong>From US:</strong> Direct flights available from major hubs (NYC, Chicago, etc.) or connect through European cities</p>
                <p><strong>Flight Duration:</strong> ~9-10 hours direct from East Coast</p>
              </div>
            </section>

            {/* Visa Requirements */}
            <section>
              <h2 className='text-3xl font-heading mb-4'>Visa & Entry</h2>
              <div className='font-sans text-wedding-cream/90 space-y-3'>
                <p>US citizens can enter Czech Republic visa-free for tourism up to 90 days.</p>
                <p><strong>Requirements:</strong></p>
                <ul className='list-disc ml-6 space-y-2'>
                  <li>Valid passport (at least 6 months beyond travel date)</li>
                  <li>Return ticket</li>
                  <li>Proof of accommodation</li>
                </ul>
              </div>
            </section>

            {/* Accommodation */}
            <section>
              <h2 className='text-3xl font-heading mb-4'>Accommodation</h2>
              <div className='font-sans text-wedding-cream/90 space-y-3'>
                <p>Recommended hotels near the venue:</p>
                <ul className='list-disc ml-6 space-y-2'>
                  <li>[Hotel Name 1] - [Distance from venue]</li>
                  <li>[Hotel Name 2] - [Distance from venue]</li>
                </ul>
              </div>
            </section>

            {/* Transportation */}
            <section>
              <h2 className='text-3xl font-heading mb-4'>Getting Around</h2>
              <div className='font-sans text-wedding-cream/90 space-y-3'>
                <p><strong>Airport to Venue:</strong> ~30 minutes by taxi or rental car</p>
                <p><strong>Options:</strong> Uber/Bolt available, public transit, rental car</p>
              </div>
            </section>

            {/* Money */}
            <section>
              <h2 className='text-3xl font-heading mb-4'>Currency & Money</h2>
              <div className='font-sans text-wedding-cream/90 space-y-3'>
                <p><strong>Currency:</strong> Czech Koruna (CZK)</p>
                <p>Credit cards widely accepted. ATMs available throughout the city.</p>
              </div>
            </section>

            {/* Useful Phrases */}
            <section>
              <h2 className='text-3xl font-heading mb-4'>Useful Czech Phrases</h2>
              <div className='font-sans text-wedding-cream/90 space-y-2'>
                <p><strong>Dobrý den</strong> - Good day/Hello</p>
                <p><strong>Děkuji</strong> - Thank you</p>
                <p><strong>Prosím</strong> - Please/You're welcome</p>
                <p><strong>Na zdraví!</strong> - Cheers!</p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}