export type Locale = 'en' | 'cz';

export type Translations = {
    nav: {
        home: string;
        details: string;
        registry: string;
        photos: string;
    };
    when: {
        dayOfWeek: string;
        dayBefore: string;
        dayAfter: string;
        day: string;
        month: string;
        year: string;
        time: string;
        dateString: string;
    };
    home: {
        tagline: string;
        couple: {
            groom: string;
            and: string;
            bride: string;
        };
        rsvpButton: string;
    };
    details: {
        pageTitle: string;
        usOnly: {
            usTravelButton: string;
        };
        venue: {
            sectionTitle: string;
            name: string;
            address: {
                street: string;
                number: string;
                city: string;
                country: string;
            };
            instructions: string;
        };
        dateAndTime: {
            sectionTitle: string;
        }
        schedule: {
            sectionTitle: string;
            schedule: {
                ceremonyHeader: string;
                ceremonyDescription: string;
                receptionHeader: string;
                receptionDescription: string;
            }
        };
        accommodations: {
            sectionTitle: string;
        }
        dressCode: {
            sectionTitle: string;
            description: string;
        };
    };
    photos: {
        title: string;
        placeholder: string;
    };
    rsvp: {
        pageTitle: string;
        searchPrompt: string;
        searchPlaceholder: string;
        searchButton: string;
        searching: string;
        notFound: string;
        resultsPrompt: string;
        selectGuest: string;
        alreadySubmitted: string;
        groupLabel: string;
        attendingLabel: string;
        guestNameLabel: string;
        guestNamePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        dietaryLabel: string;
        dietaryPlaceholder: string;
        submitButton: string;
        submitting: string;
        successMessage: string;
        errorMessage: string;
    };
};

export const translations: Record<Locale, Translations> = {
    en: {
        nav: {
            home: 'Home',
            details: 'Details',
            registry: 'Registry',
            photos: "Photos",
        },
        when: {
            dayOfWeek: 'Saturday',
            dayBefore: 'Friday',
            dayAfter: 'Sunday',
            day: '29',
            month: 'September',
            year: '2026',
            time: 'The ceremony begins at 3:00 pm',
            dateString: 'Saturday the 29th of September 2026',
        },
        home: {
            tagline: 'Celebrate the wedding of',
            couple: {
                groom: 'John',
                and: 'and',
                bride: 'Jane',
            },
            rsvpButton: 'RSVP',
        },
        details: {
            pageTitle: 'Event Details',
            usOnly: {
                usTravelButton: 'Traveling from the US?',
            },
            venue: {
                sectionTitle: "Venue",
                name: "[Venue Name]",
                address: {
                    street: '[Street]',
                    number: '[Number]',
                    city: '[City]',
                    country: '[Country]',
                },
                instructions: "[Instructions...]"
            },
            dateAndTime: {
                sectionTitle: "Date & Time"
            },
            schedule: {
                sectionTitle: "Schedule",
                schedule: {
                    ceremonyHeader: '3:00 pm - Ceremony',
                    ceremonyDescription: '[Details...]',
                    receptionHeader: '4:00 pm - Reception',
                    receptionDescription: '[Details...]',
                },
            },
            accommodations: {
                sectionTitle: "Accommodations",
            },
            dressCode: {
                sectionTitle: "Dress Code",
                description: "[dress code here]",
            },
        },
        photos: {
            title: 'Photos',
            placeholder: 'Coming Soon',
        },
        rsvp: {
            pageTitle: 'RSVP',
            searchPrompt: 'Please enter your name to find your invitation',
            searchPlaceholder: 'Enter your name...',
            searchButton: 'Search',
            searching: 'Searching...',
            notFound: 'No invitation found. Please check your spelling or contact us.',
            resultsPrompt: 'Select your name from the results:',
            selectGuest: 'Select',
            alreadySubmitted: 'Your group has already submitted an RSVP. If you need to make changes, please contact us directly.',
            groupLabel: 'RSVPing for:',
            attendingLabel: 'Attending',
            guestNameLabel: "Guest's Name",
            guestNamePlaceholder: "Enter guest's name",
            emailLabel: 'Email Address for Confirmation (optional)',
            emailPlaceholder: 'your.email@example.com',
            dietaryLabel: 'Dietary Restrictions or Notes',
            dietaryPlaceholder: 'Any allergies, dietary restrictions, or special requests...',
            submitButton: 'Submit RSVP',
            submitting: 'Submitting...',
            successMessage: 'Thank you! Your RSVP has been received.',
            errorMessage: 'Something went wrong. Please try again.',
        },
    },
    cz: {
        nav: {
            home: 'Domov',
            details: 'Detaily',
            registry: 'Svatební dary',
            photos: "Fotky",
        },
        when: {
            dayOfWeek: 'sobota',
            dayBefore: 'pátek',
            dayAfter: 'neděle',
            day: '29',
            month: 'září',
            year: '2026',
            time: 'Svatební obřad začíná v 15:00',
            dateString: 'Sobota 29. září 2026',
        },
        home: {
            tagline: 'Oslavte svatbu',
            couple: {
                groom: 'Jan',
                and: 'a',
                bride: 'Jany',
            },
            rsvpButton: 'Potvrzení účasti',
        },
        details: {
            pageTitle: 'Detaily akce',
            usOnly: {
                usTravelButton: 'Cestujete z USA?',
            },
            venue: {
                sectionTitle: "Místo konání",
                name: "[Název místa konání]",
                address: {
                    street: '[ulice]',
                    number: '[číslo]',
                    city: '[město]',
                    country: '[země]',
                },
                instructions: "[Návod...]"
            },
            dateAndTime: {
                sectionTitle: "Datum a čas",
            },
            schedule: {
                sectionTitle: "Rozvrh",
                schedule: {
                    ceremonyHeader: '15:00 - Svatební obřad',
                    ceremonyDescription: '[Podrobnosti...]',
                    receptionHeader: '16:00 - Svatební hostina',
                    receptionDescription: '[Podrobnosti...]',
                },
            },
            accommodations: {
                sectionTitle: "Ubytování",
            },
            dressCode: {
                sectionTitle: "Oblečení",
                description: "[dress code zde]",
            },
        },
        photos: {
            title: 'Fotky',
            placeholder: 'Již brzy',
        },
        rsvp: {
            pageTitle: 'Potvrzení účasti',
            searchPrompt: 'Zadejte prosím své jméno pro nalezení pozvánky',
            searchPlaceholder: 'Zadejte své jméno...',
            searchButton: 'Hledat',
            searching: 'Hledám...',
            notFound: 'Pozvánka nenalezena. Zkontrolujte prosím pravopis nebo nás kontaktujte.',
            resultsPrompt: 'Vyberte své jméno z výsledků:',
            selectGuest: 'Vybrat',
            alreadySubmitted: 'Vaše skupina již odeslala potvrzení účasti. Pokud potřebujete provést změny, kontaktujte nás prosím přímo.',
            groupLabel: 'Potvrzuji účast za:',
            attendingLabel: 'Účast',
            guestNameLabel: 'Jméno hosta',
            guestNamePlaceholder: 'Zadejte jméno hosta',
            emailLabel: 'E-mailová adresa',
            emailPlaceholder: 'vas.email@priklad.cz',
            dietaryLabel: 'Dietní omezení nebo poznámky',
            dietaryPlaceholder: 'Alergie, dietní omezení nebo speciální požadavky...',
            submitButton: 'Odeslat potvrzení',
            submitting: 'Odesílám...',
            successMessage: 'Děkujeme! Vaše potvrzení účasti bylo přijato.',
            errorMessage: 'Něco se pokazilo. Zkuste to prosím znovu.',
        },
    }
};

export function getTranslations(locale: Locale): Translations {
    return translations[locale];
}