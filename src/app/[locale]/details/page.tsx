import { getTranslations, Locale } from "@/lib/translations";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Details({ params }: { params: { locale: string }}) {
    const locale = params.locale as Locale;
    const t = getTranslations(locale);

    return (
        <div className='bg-wedding-black relative min-h-screen'>
            { /* Background */}
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
                <Header locale={locale} t={t} currentPath='details' />

                <main className='flex-1 px-6 py-12 max-w-4xl mx-auto'>
                    { /* Page Title */ }
                    <h1 className='text-5xl font-heading text-wedding-cream mb-6 border-b border-wedding-cream/30 pb-4'>
                        {t.details.pageTitle}
                    </h1>

                    { /* US Travel Callout Banner */ }
                    <Link
                        href={`/${locale}/details/us-travel`}
                        className='inline-flex items-center gap-2 mb-12 text-wedding-cream/70 hover:text-wedding-cream transition-colors font-sans text-lg group'
                    >
                        <span className="underline underline-offset-6 decoration-1 hover:decoration-2 hover:underline-offset-4"><strong>Traveling from the US?</strong> Click here for extra information.</span>
                        <span className='group-hover:translate-x-1 transition-transform'>→</span>
                    </Link>

                    { /* Main Details Content */ }
                    <div>
                        { /* Venue Section */}
                        <section>
                            <h2 className='text-3xl font-heading mb-4 border-b border-wedding-cream/30 pb-2'>
                                {t.details.venue.sectionTitle}
                            </h2>
                            <div className='font-sans text-wedding-cream/90 space-y-2'>
                                <p className='text-xl'>{t.details.venue.name}</p>
                                <p>{t.details.venue.address.number} {t.details.venue.address.street}</p>
                                <p>{t.details.venue.address.city}, {t.details.venue.address.country}</p>
                            </div>
                        </section>

                        {/* Date & Time */}
                        <section className='pt-10'>
                            <h2 className='text-3xl font-heading mb-4 border-b border-wedding-cream/30 pb-2'>
                                {t.details.dateAndTime.sectionTitle}
                            </h2>
                            <div className='font-sans text-wedding-cream/90'>
                                <p className='text-xl'>{t.when.dateString}</p>
                                <p>{t.when.time}</p>
                            </div>
                        </section>

                        {/* Schedule */}
                        <section className='pt-10'>
                            <h2 className='text-3xl font-heading mb-4 border-b border-wedding-cream/30'>
                                {t.details.schedule.sectionTitle}
                            </h2>
                            <div className='font-sans text-wedding-cream/90 space-y-3'>
                                <h3 className='text-2xl font-heading border-wedding-cream/30 pb-2 pt-4'>
                                    {t.when.dayOfWeek}
                                </h3>
                                <div>
                                    <p className='font-semibold'>{t.details.schedule.schedule.ceremonyHeader}</p>
                                    <p className='text-sm text-wedding-cream/70'>{t.details.schedule.schedule.ceremonyDescription}</p> 
                                </div>
                                <div>
                                    <p className='font-semibold'>{t.details.schedule.schedule.receptionHeader}</p>
                                    <p className='text-sm text-wedding-cream/70'>{t.details.schedule.schedule.receptionDescription}</p> 
                                </div>
                            </div>
                            <div className='font-sans text-wedding-cream/90 space-y-3'>
                                <h3 className='text-2xl font-heading border-wedding-cream/30 pt-10'>
                                    {t.when.dayAfter}
                                </h3>
                                <div>
                                    <p className='font-semibold'>{t.details.schedule.schedule.ceremonyHeader}</p>
                                    <p className='text-sm text-wedding-cream/70'>{t.details.schedule.schedule.ceremonyDescription}</p> 
                                </div>
                                <div>
                                    <p className='font-semibold'>{t.details.schedule.schedule.receptionHeader}</p>
                                    <p className='text-sm text-wedding-cream/70'>{t.details.schedule.schedule.receptionDescription}</p> 
                                </div>
                            </div>
                        </section>

                        {/* Accommodations */}
                        <section className='pt-10 pb-10'>
                            <h2 className='text-3xl font-heading mb-4 border-b border-wedding-cream/30 pb-2'>
                                {t.details.accommodations.sectionTitle}
                            </h2>
                        </section>

                        {/* Dress Code */}
                        <section className='pt-10'>
                            <h2 className='text-3xl font-heading mb-4 border-b border-wedding-cream/30 pb-2'>
                                {t.details.dressCode.sectionTitle}
                            </h2>
                            <p className='font-sans text-wedding-cream/90'>
                                {t.details.dressCode.description}
                            </p>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}