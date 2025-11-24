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

        <PageTitle>Information for US Guests</PageTitle>

        {/* Sections */}
        <div className='space-y-12 text-text text-sm md:text-lg animate-fade-in'>

          {/* General Intro Information */}
          <section>
            <p className='pb-5 md:pb-10'>
              Walker typing here... I want to start by saying thank you so much for considering traveling so far for this special day, it means the world to us both.
            </p>
            <p className='pb-5 md:pb-10'>
              Below you will find information that is related to the various travel details you will need.
            </p>
            <p className='pb-5 md:pb-10'>
              If you have any questions or concerns, please do not hesitate to contact me at...
            </p>
            <p>Email:
              <a
              href='mailto:thompsonwalker222@gmail.com'
              className='text-text hover:text-text/80 transition-colors underline'
              >
                <strong> thompsonwalker222@gmail.com</strong>
              </a>
            </p>
            <p className='pb-5 md:pb-10'>WhatsApp: <strong>+420 731 742 805</strong></p>
            <p>
              Thank you again for going through the trouble to celebrate with us!
            </p>
          </section>

          {/* Getting to CZ */}
          <section>
            <SectionHeading>Details</SectionHeading>
            <div className='font-sans text-text/90 space-y-3 leading-relaxed'>
              <p className='mb-8 md:mb-12'>
                <strong className='text-text text-xl'>Airport</strong><br />
                Václav Havel Airport Prague (PRG)
              </p>
              <p className='mb-8 md:mb-12'>
                <strong className='text-text text-xl'>When to Arrive</strong><br />
                We are having a special dinner the day before the wedding for any American guests that wish to come.
                If you do wish to come to this dinner, you should arrive to the <strong>Prague airport</strong> by <strong>2:30 pm on June 19th</strong>.
              </p>
              <p className='mb-8 md:mb-12'>
                <strong className='text-text text-xl'>Getting to the Venue</strong><br />
                We will offer transportation from Prague, to and from the venue.
                Please email
                <a
                  href='mailto:thompsonwalker222@gmail.com'
                  className='text-text hover:text-text/80 transition-colors underline'
                >
                  <strong className='underline'> thompsonwalker222@gmail.com</strong>
                </a>
                when you have booked your flights, so that we can arrange your transportation.
              </p>
              <p className='mb-8 md:mb-12'>
                <strong className='text-text text-xl'>Where to Stay</strong><br />
                For accommodations on the nights of June 19th and 20th, go to the general details page <a href="../details/" className='underline font-bold'>HERE</a>.<br /><br />
                If you wish to stay in Prague beyond those dates, and are having a hard time booking something... please reach out.
                We don't have experience staying in Prague hotels, so we can't actually reccommend anything specifc, but we would love to help if you sre struggling.
              </p>
              <p>
                <strong className='text-text text-xl'>Info Highlight Reel</strong>
              </p>
              <ul className='list-disc list-inside'>
                <li>Airport by 2:30 pm on June 19th</li>
                <li>Contact us when you book your flight for transportation coordination</li>
                <li>Refer to general details page for accommodations</li>
              </ul>
            </div>
          </section>

          {/* Accommodation */}
          {/* 
              - refer to details page for wedding stay
              - offer advice for prague stay on other days
          */}

          {/* Transportation */}
          {/*
              - providing transportation from and to Prague for wedding if they want it
              - public transportation details
              
          */}

          {/* Money */}

          {/* Useful Phrases */}
          {/* <section>
            <SectionHeading>Useful Czech Phrases</SectionHeading>
            <div className='font-sans text-text/90 space-y-2 leading-relaxed'>
              <p>
                <strong className='text-text'>Dobrý den</strong> - Good day/Hello
              </p>
              <p>
                <strong className='text-text'>Děkuji</strong> - Thank you
              </p>
              <p>
                <strong className='text-text'>Prosím</strong> - Please/You're welcome
              </p>
              <p>
                <strong className='text-text'>Na zdraví!</strong> - Cheers!
              </p>
            </div>
          </section> */}
        </div>
      </Container>
    </PageLayout>
  );
}
