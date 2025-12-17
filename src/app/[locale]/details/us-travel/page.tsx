import { use } from 'react';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import PageTitle from '@/components/ui/PageTitle';
import SectionHeading from '@/components/ui/SectionHeading';
import Image from 'next/image';
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
        <Button as='link' href={`/${locale}/details`} variant='back' className='mb-14'>
          <span>←</span>
          <span>Back to Details</span>
        </Button>

        <PageTitle>Information for US Guests</PageTitle>

        {/* Sections */}
        <div className='space-y-12 text-text text-sm md:text-lg animate-fade-in'>
          {/* General Intro Information */}
          <section className='space-y-4 md:space-y-6'>
            <p>
              Walker typing here... I want to start by saying thank you so much for considering
              traveling so far for this special day, it means the world to us both.
            </p>
            <p>
              Below you will find information that is related to the various travel details you will
              need.
            </p>
            <p>If you have any questions or concerns, please do not hesitate to contact me at:</p>
            <div className='space-y-2'>
              <p>
                <strong>Email:</strong>{' '}
                <a
                  href='mailto:thompsonwalker222@gmail.com'
                  className='text-text hover:text-text/80 transition-colors underline font-bold'
                >
                  thompsonwalker222@gmail.com
                </a>
              </p>
              <p>
                <strong>WhatsApp:</strong> +420 731 742 805
              </p>
            </div>
            <p>Thank you again for going through the trouble to celebrate with us!</p>
          </section>

          {/* Getting to CZ */}
          <section>
            <SectionHeading>Details</SectionHeading>
            <div className='font-sans text-text/90 space-y-3 leading-relaxed'>
              <div className='mb-8 md:mb-16'>
                <h3 className='flex items-center justify-center gap-4 mb-4'>
                  <strong className='text-text text-lg md:text-2xl'>Airport</strong>
                  <Image src='/details/airport.png' alt='' width={40} height={40} />
                </h3>
                <div className='max-w-2xl mx-auto'>
                  <p>Václav Havel Airport Prague (PRG)</p>
                </div>
              </div>

              <div className='mb-8 md:mb-16'>
                <h3 className='flex items-center justify-center gap-4 mb-4'>
                  <Image src='/details/arrive.png' alt='' width={40} height={40} />
                  <strong className='text-text text-lg md:text-2xl'>When to Arrive</strong>
                </h3>
                <div className='max-w-2xl mx-auto'>
                  <p>
                    We are having a special dinner the day before the wedding for any American
                    guests that wish to come. If you do wish to come to this dinner, you should
                    arrive to the <strong>Prague Main Train Station</strong> by{' '}
                    <strong>3:30 pm on June 19th</strong>. We are using the Train Station over the
                    Airport because many guests will likely arrive at various times that day and/or
                    stay in Prague before/after the days of the celebration.
                  </p>
                  <br />
                  <p>
                    This means that it is important that your flight arrives in time to allow for
                    customs and travel to the Main Station. There is a bus, or you can uber/bolt.
                    Make sure to plan accordingly based on your travel plans.
                  </p>
                  <br />
                  <p>
                    If you are not attending the dinner at all, the ceremony begins at 1:00 pm on
                    the 20th.
                  </p>
                </div>
              </div>

              <div className='mb-8 md:mb-16'>
                <h3 className='flex items-center justify-center gap-4 mb-4'>
                  <strong className='text-text text-lg md:text-2xl'>Getting to the Venue</strong>
                  <Image src='/details/transportation.png' alt='' width={40} height={40} />
                </h3>
                <div className='max-w-2xl mx-auto flex flex-col gap-6 md:flex-row-reverse md:items-center md:gap-8'>
                  <div className='md:text-left'>
                    <p>
                      We will offer transportation by bus between Prague and the town of the venue
                      for those who want us to organize it for them.
                    </p>
                    <br />
                    <p>
                      Please email{' '}
                      <strong className='underline'>thompsonwalker222@gmail.com</strong> when you
                      have booked your flights, so that we can arrange your transportation.
                    </p>
                    <br />
                    <p>
                      The wedding is not in Prgaue but a town outside of it. You can look at this
                      map drawn by Sofí to get an idea of the distance.
                    </p>
                  </div>
                  <Image
                    src='/details/map.png'
                    alt='Hand-drawn map showing route from Prague to wedding venue'
                    width={400}
                    height={400}
                    className='w-auto max-w-xs md:max-w-lg lg:max-w-xl h-auto object-contain mx-auto'
                  />
                </div>
              </div>

              <div className='mb-8 md:mb-16'>
                <h3 className='flex items-center justify-center gap-4 mb-4'>
                  <Image src='/details/stay.png' alt='' width={40} height={40} />
                  <strong className='text-text text-lg md:text-2xl'>Where to Stay</strong>
                </h3>
                <div className='max-w-2xl mx-auto'>
                  <p>
                    For accommodations on the nights of June 19th and 20th, go to the general
                    details page{' '}
                    <a href={`/${locale}/details`} className='underline font-bold'>
                      HERE
                    </a>
                    .
                  </p>
                  <p className='mt-4'>
                    If you wish to stay in Prague beyond those dates, and are having a hard time
                    booking something... please reach out. We don't have experience staying in
                    Prague hotels, so we can't actually recommend anything specific, but we would
                    love to help if you are struggling.
                  </p>
                </div>
              </div>

              <div className='mb-8 md:mb-16'>
                <h3 className='flex items-center justify-center gap-4 mb-4'>
                  <Image src='/details/cz-flag.png' alt='' width={40} height={40} />
                  <strong className='text-text text-lg md:text-2xl'>
                    Note on Cultural Differences
                  </strong>
                  <Image src='/details/us-flag.png' alt='' width={40} height={40} />
                </h3>
                <div className='max-w-2xl mx-auto'>
                  There are many things that are different in the Czech Republic. I won't flood you
                  with too much information, but I want to note a few things that are important.
                  <br />
                  <br />
                  <ul className='list-disc list-outside max-w-xl mx-auto text-left pl-6 pr-2'>
                    <li>
                      <strong>Length of celebration:</strong> The wedding tends to be a much longer
                      event over here, so don't be alarmed by the schedule length (the current end
                      time is a compromise, believe it or not haha). That being said, you are
                      welcome to politely depart at any point after the "party" portion of the
                      evening begins.
                    </li>
                    <li>
                      <strong>Language:</strong> As you (likely) know, the language over here is not
                      English natively. Many guests will be Czechs with varying degrees of English
                      levels. As you socialize, please be considerate of this. Many people will be
                      nervous to use english, so speak slowly and pronounce things as clearly as you
                      can :)
                    </li>
                    <li>
                      <strong>Traditions:</strong> We are trying to balance traditions well, so
                      expect to have a unique experience that might overall differ from the weddings
                      you are used to
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </PageLayout>
  );
}
