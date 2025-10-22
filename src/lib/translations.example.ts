export type Locale = 'en' | 'cz';

export type Translations = {
    nav: {
        home: string;
        details: string;
        registry: string;
        photos: string;
    };
    home: {
        tagline: string;
        couple: {
            groom: string;
            and: string;
            bride: string;
        };
        date: string;
        rsvpButton: string;
    };
    details: {
        prompt: string;
        usButton: string;
        czButton: string;
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
        home: {
            tagline: 'Celebrate the wedding of',
            couple: {
                groom: 'John',
                and: 'and',
                bride: 'Jane',
            },
            date: 'on Saturday 29th of September 2026',
            rsvpButton: 'RSVP',
        },
        details: {
            prompt: 'Are you traveling from the US, or already in the Czech Republic?',
            usButton: 'United States',
            czButton: 'Czech Republic',
        },
    },
    cz: {
        nav: {
            home: 'Domov',
            details: 'Detaily',
            registry: 'Svatební dary',
            photos: "Fotky",
        },
        home: {
            tagline: 'Oslavte svatbu',
            couple: {
                groom: 'Jan',
                and: 'a',
                bride: 'Jany',
            },
            date: 'v sobotu 29. září 2026',
            rsvpButton: 'Potvrzení účasti',
        },
        details: {
            prompt: 'Cestujete z USA, nebo už jste v České republice?',
            usButton: 'USA',
            czButton: 'Česká republika',
        },
    }
};

export function getTranslations(locale: Locale): Translations {
    return translations[locale];
}