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
              Walker typing here... I want to start by saying thank you so much for considering
              traveling so far for this special day, it means the world to us both.
            </p>
            <p className='pb-5 md:pb-10'>
              Below you will find information that is related to the various travel details you will
              need.
            </p>
            <p className='pb-5 md:pb-10'>
              If you have any questions or concerns, please do not hesitate to contact me at...
            </p>
            <p>
              Email:
              <a
                href='mailto:thompsonwalker222@gmail.com'
                className='text-text hover:text-text/80 transition-colors underline'
              >
                <strong> thompsonwalker222@gmail.com</strong>
              </a>
            </p>
            <p className='pb-5 md:pb-10'>
              WhatsApp: <strong>+420 731 742 805</strong>
            </p>
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
                <div className='flex items-center justify-center'>
                  <p className='w-2xl'>Václav Havel Airport Prague (PRG)</p>
                </div>
              </div>

              <div className='mb-8 md:mb-16'>
                <h3 className='flex items-center justify-center gap-4 mb-4'>
                  <Image src='/details/arrive.png' alt='' width={40} height={40} />
                  <strong className='text-text text-lg md:text-2xl'>When to Arrive</strong>
                </h3>
                <div className='flex items-center justify-center'>
                  <p className='w-2xl'>
                    We are having a special dinner the day before the wedding for any American
                    guests that wish to come. If you do wish to come to this dinner, you should
                    arrive to the <strong>Prague airport</strong> by{' '}
                    <strong>2:30 pm on June 19th</strong>.
                  </p>
                </div>
              </div>

              <div className='mb-8 md:mb-16'>
                <h3 className='flex items-center justify-center gap-4 mb-4'>
                  <strong className='text-text text-lg md:text-2xl'>Getting to the Venue</strong>
                  <Image src='/details/transportation.png' alt='' width={40} height={40} />
                </h3>
                <div className='flex items-center justify-center'>
                  <p className='w-2xl'>
                    We will offer transportation from Prague, to and from the venue. Please email
                    <a
                      href='mailto:thompsonwalker222@gmail.com'
                      className='text-text hover:text-text/80 transition-colors underline'
                    >
                      <strong className='underline'> thompsonwalker222@gmail.com </strong>
                    </a>
                    when you have booked your flights, so that we can arrange your transportation.
                  </p>
                </div>
              </div>

              <div className='mb-8 md:mb-16'>
                <h3 className='flex items-center justify-center gap-4 mb-4'>
                  <Image src='/details/stay.png' alt='' width={40} height={40} />
                  <strong className='text-text text-lg md:text-2xl'>Where to Stay</strong>
                </h3>
                <div className='flex items-center justify-center'>
                  <p className='w-2xl'>
                    For accommodations on the nights of June 19th and 20th, go to the general
                    details page{' '}
                    <a href='../details/' className='underline font-bold'>
                      HERE
                    </a>
                    .<br />
                    <br />
                    If you wish to stay in Prague beyond those dates, and are having a hard time
                    booking something... please reach out. We don't have experience staying in
                    Prague hotels, so we can't actually reccommend anything specifc, but we would
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
                <div className='max-w-2xl mx-auto px-4'>
                  There are many things that are different in the Czech Republic. I won't flood you
                  with too much information, but I want to note a few things that are important.
                  <br />
                  <br />
                  <ul className='list-disc list-outside max-w-xl mx-auto text-left pl-6'>
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
