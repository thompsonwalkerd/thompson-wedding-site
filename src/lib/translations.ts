export type Locale = 'en' | 'cz';

export type Translations = {
  nav: {
    home: string;
    details: string;
    registry: string;
    photos: string;
    rsvp: string;
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
    };
    schedule: {
      sectionTitle: string;
      activities: Array<{
        name: string;
        time: string;
        icon: string;
      }>;
    };
    accommodations: {
      sectionTitle: string;
      details: string;
      options: Array<{
        name: string;
        details: string;
        image: string;
        url: string;
      }>;
    };
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
    contactPrompt: string;
    groupLabel: string;
    attendingLabel: string;
    emailLabel: string;
    emailPlaceholder: string;
    songLabel: string;
    songPlaceholder: string;
    dietaryLabel: string;
    dietaryPlaceholder: string;
    submitButton: string;
    submitting: string;
    declineButton: string;
    declining: string;
    successMessage: string;
    declineSuccessMessage: string;
    confirmationSent: string;
    viewDetails: string;
    errorMessage: string;
    wrongEmail: string;
    updateEmail: string;
    updatingEmail: string;
    emailUpdated: string;
    emailUpdateFailed: string;
  };
  registry: {
    title: string;
    message: string;
    vinylTitle: string;
    vinylInfo: string;
    vinylsPurchased: string;
    vinylSearchPlaceholder: string;
    vinylSearchButton: string;
    albumRegistration: {
      title: string;
      searchPlaceholder: string;
      searchButton: string;
      searching: string;
      noResults: string;
      selectAlbum: string;
      registeredBadge: string;
      registerButton: string;
      registering: string;
      success: string;
      registerAnother: string;
      error: string;
    };
    options: Array<{
      name: string;
      description: string;
      icon: string;
    }>;
    externalLinkLabel: string;
    paymentOptions: Array<{
      type: 'zelle' | 'venmo' | 'qr';
      label: string;
      value?: string;
      qrImage?: string;
    }>;
    paymentLabels: {
      copyButton: string;
      copiedButton: string;
      scanQr: string;
    };
  };
};

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: 'Home',
      details: 'Details',
      registry: 'Registry',
      photos: 'Photos',
      rsvp: 'RSVP',
    },
    when: {
      dayOfWeek: 'Saturday',
      dayBefore: 'Friday',
      dayAfter: 'Sunday',
      day: '20',
      month: '06',
      year: '2026',
      time: 'The ceremony begins at 12:00 pm',
      dateString: 'June 20th, 2026',
    },
    home: {
      tagline: 'Celebrate the wedding of',
      couple: {
        groom: 'Walker',
        and: '&',
        bride: 'Sofí',
      },
      rsvpButton: 'RSVP',
    },
    details: {
      pageTitle: 'Important Details for Guests',
      venue: {
        sectionTitle: 'Venue',
        name: 'Červený Hrádek U Sedlčan',
        address: {
          street: 'Na Červeném Hrádku',
          number: '751',
          city: 'Sedlčany',
          country: 'CZ',
        },
        instructions: '[Instructions....]',
      },
      dateAndTime: {
        sectionTitle: 'Date & Time',
      },
      schedule: {
        sectionTitle: 'Schedule',
        activities: [
          {
            name: 'Cocktail Hour',
            time: '1:00 pm',
            icon: 'cocktail.png',
          },
          {
            name: 'Ceremony',
            time: '2:00 pm',
            icon: 'ceremony.png',
          },
          {
            name: 'Traditions',
            time: '3:00 pm',
            icon: 'traditions.png',
          },
          {
            name: 'Party',
            time: '8:00 pm',
            icon: 'party.png',
          },
          {
            name: 'End',
            time: '12:00 am',
            icon: 'end.png',
          },
        ],
      },
      accommodations: {
        sectionTitle: 'Accommodations',
        details: 'Below you will find the options for your stay the night of the 20th.',
        options: [
          {
            name: 'Pension Merano',
            details: 'This hotel is a hotel that has what hotels have.',
            image: '/accommodations/hotel1.jpg',
            url: '',
          },
          {
            name: 'Hotel Florian Sedlčany',
            details: 'This is also a hotel, but this one has what hotels never have.',
            image: '/accommodations/hotel2.jpg',
            url: '',
          },
        ],
      },
      dressCode: {
        sectionTitle: 'Dress Code',
        description:
          'Vestibulum ut mi finibus, mattis justo imperdiet, fermentum velit.\n\n Sed volutpat quis urna vehicula eleifend. Morbi sodales ex sed massa lacinia fringilla. Fusce tincidunt, velit eu lacinia sollicitudin, dolor nisi elementum neque, quis posuere diam ante in sapien.\n\nPraesent vitae lectus at justo interdum finibus. Sed ac enim vitae turpis egestas bibendum.\n\nPhasellus mollis lacus eu nisi viverra, et tincidunt lacus auctor. ',
      },
    },
    photos: {
      title: 'Photos',
      placeholder: 'Come back a bit after the wedding :)',
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
      alreadySubmitted:
        'Your group has already submitted an RSVP. If you need to make changes, please contact us directly.',
      contactPrompt: 'If you need to make changes to your RSVP:',
      groupLabel: 'RSVPing for:',
      attendingLabel: 'Attending',
      emailLabel: 'Email Address for Confirmation',
      emailPlaceholder: 'your.email@example.com',
      songLabel: 'Song Requests (this is your chance to ask for a song, no promises ;)',
      songPlaceholder: 'Put your songs here',
      dietaryLabel: 'Dietary Restrictions or Food Allergies',
      dietaryPlaceholder: 'e.g., vegetarian, gluten-free, nut allergy...',
      submitButton: 'Submit RSVP',
      submitting: 'Submitting...',
      declineButton: 'We Cannot Attend',
      declining: 'Submitting...',
      successMessage: 'Thank you! Your RSVP has been received.',
      declineSuccessMessage: 'Thank you for letting us know.',
      confirmationSent: 'A confirmation has been sent to:',
      viewDetails: 'View Wedding Details',
      errorMessage: 'Something went wrong. Please try again.',
      wrongEmail: 'Wrong email?',
      updateEmail: 'Update & Resend',
      updatingEmail: 'Updating...',
      emailUpdated: 'Email updated and confirmation resent!',
      emailUpdateFailed: 'Failed to update email. Please try again.',
    },
    registry: {
      title: 'Gift Registry',
      message:
        'Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have the following (non-traditional) options for you. You can of course also bring anything you wish that is not below.',
      vinylTitle: "What's your favorite album?",
      vinylInfo:
        'We would love to hear it too! Bring an album you love in vinyl record or CD form. Feel free to write a note inside so we know who blessed our ears :)',
      vinylsPurchased: 'Make sure you have a unique choice',
      vinylSearchPlaceholder: 'Search album or artist...',
      vinylSearchButton: 'Check',
      albumRegistration: {
        title: 'Register Your Vinyl Gift',
        searchPlaceholder: 'Search for artist or album...',
        searchButton: 'Search',
        searching: 'Searching...',
        noResults: 'No albums found. Try a different search.',
        selectAlbum: 'Click an available album to register it',
        registeredBadge: 'REGISTERED',
        registerButton: 'Register This Album',
        registering: 'Registering...',
        success: 'Album registered successfully!',
        registerAnother: 'Register Another Album',
        error: 'Something went wrong. Please try again.',
      },
      options: [
        {
          name: 'Honeymoon Fund',
          description:
            'We would love some help to enjoy our first adventure as a married couple. If you wanna help us out, this is the place!',
          icon: '/registry/honeymoon.png',
        },
        {
          name: 'Car Fund',
          description: "If you're a little more practical, we are also both carless :)",
          icon: '/registry/car.png',
        },
      ],
      externalLinkLabel: 'Contribute',
      paymentOptions: [
        {
          type: 'zelle',
          label: 'Zelle',
          value: 'thompsonwalker222@gmail.com',
        },
        {
          type: 'venmo',
          label: 'Venmo',
          value: '@walker_thompson',
        },
        {
          type: 'qr',
          label: 'Czech Bank Transfer (QR Code)',
          qrImage: '/registry/qr-code.png',
        },
      ],
      paymentLabels: {
        copyButton: 'Copy',
        copiedButton: 'Copied!',
        scanQr: 'Scan with your banking app',
      },
    },
  },
  cz: {
    nav: {
      home: 'Domů',
      details: 'Detaily',
      registry: 'Svatební dary',
      photos: 'Fotky',
      rsvp: 'Potvrzení účasti',
    },
    when: {
      dayOfWeek: 'sobota',
      dayBefore: 'pátek',
      dayAfter: 'neděle',
      day: '20.',
      month: '6.',
      year: '2026',
      time: 'Svatební obřad začíná ve 12:00',
      dateString: '20. června 2026',
    },
    home: {
      tagline: 'Oslavte svatbu',
      couple: {
        groom: 'Walkera',
        and: '&',
        bride: 'Sofí',
      },
      rsvpButton: 'Potvrzení účasti',
    },
    details: {
      pageTitle: 'Důležité informace pro hosty',
      venue: {
        sectionTitle: 'Místo konání',
        name: 'Červený Hrádek U Sedlčan',
        address: {
          street: 'Na Červeném Hrádku',
          number: '751',
          city: 'Sedlčany',
          country: 'CZ',
        },
        instructions: '[Návod....]',
      },
      dateAndTime: {
        sectionTitle: 'Datum a čas',
      },
      schedule: {
        sectionTitle: 'Harmonogram',
        activities: [
          {
            name: '',
            time: '',
            icon: 'cocktail.png',
          },
        ],
      },
      accommodations: {
        sectionTitle: 'Ubytování',
        details: '[[ FILL ME IN ]]',
        options: [
          {
            name: 'Pension Merano',
            details: '',
            image: '/accommodations/hotel1.jpg',
            url: '',
          },
          {
            name: 'Hotel Příklad 2',
            details: '',
            image: '/accommodations/hotel2.jpg',
            url: '',
          },
        ],
      },
      dressCode: {
        sectionTitle: '"Dress code"',
        description: "[Zde je uveden 'dress code']",
      },
    },
    photos: {
      title: 'Fotky',
      placeholder: 'Vrať se po svatbě :)',
    },
    rsvp: {
      pageTitle: 'Potvrzení účasti',
      searchPrompt: 'Zadej prosím své jméno pro nalezení pozvánky',
      searchPlaceholder: 'Zadej své jméno...',
      searchButton: 'Hledat',
      searching: 'Hledám...',
      notFound: 'Pozvánka nenalezena. Zkontroluj prosím pravopis nebo nás kontaktuj.',
      resultsPrompt: 'Vyber své jméno z výsledků:',
      selectGuest: 'Vybrat',
      alreadySubmitted:
        'Vaše skupina již odeslala potvrzení účasti. Pokud potřebuješ provést změny, kontaktuj nás prosím přímo.',
      contactPrompt: 'Pokud potřebuješ provést změny ve svém potvrzení:',
      groupLabel: 'Potvrzuji účast za:',
      attendingLabel: 'Účast',
      emailLabel: 'E-mailová adresa',
      emailPlaceholder: 'tvuj.email@priklad.cz',
      songLabel:
        'Písnička na přání (Tohle je tvoje šance na písničku na přání v čase svatební party! Ale nic neslibujeme xoxo;)',
      songPlaceholder: 'Napiš svoji písničku na přání sem',
      dietaryLabel: 'Dietní omezení nebo potravinové alergie',
      dietaryPlaceholder: 'např. vegetarián, bezlepková strava, alergie na ořechy...',
      submitButton: 'Odeslat potvrzení',
      submitting: 'Odesílám...',
      declineButton: 'Nemůžeme se zúčastnit',
      declining: 'Odesílám...',
      successMessage: 'Děkujeme! Tvoje potvrzení účasti bylo přijato.',
      declineSuccessMessage: 'Děkujeme, že jste nám dali vědět.',
      confirmationSent: 'Potvrzení bylo odesláno na:',
      viewDetails: 'Zobrazit podrobnosti o svatbě',
      errorMessage: 'Něco se pokazilo. Zkus to prosím znovu.',
      wrongEmail: 'Špatný email?',
      updateEmail: 'Aktualizovat a znovu odeslat',
      updatingEmail: 'Aktualizuji...',
      emailUpdated: 'Email aktualizován a potvrzení znovu odesláno!',
      emailUpdateFailed: 'Nepodařilo se aktualizovat email. Zkuste to znovu.',
    },
    registry: {
      title: 'Svatební dary',
      message:
        'Vaše přítomnost na naší svatbě je největším darem. Pokud nás však chcete poctít darem, zaregistrovali jsme se v následujících obchodech:',
      vinylTitle: 'Preferujete hotovost?',
      vinylInfo:
        'Pokud preferujete peněžní dar, hotovost nebo šeky jsou vřele vítány a půjdou do naší společné budoucnosti.',
      vinylsPurchased: 'Ujistěte se, že máte jedinečný výběr',
      vinylSearchPlaceholder: 'Hledat album nebo umělce...',
      vinylSearchButton: 'Zkontrolovat',
      albumRegistration: {
        title: 'Registrovat vinylový dar',
        searchPlaceholder: 'Hledat umělce nebo album...',
        searchButton: 'Hledat',
        searching: 'Hledám...',
        noResults: 'Žádná alba nenalezena. Zkuste jiné vyhledávání.',
        selectAlbum: 'Klikněte na dostupné album a zaregistrujte ho',
        registeredBadge: 'REGISTROVÁNO',
        registerButton: 'Registrovat toto album',
        registering: 'Registruji...',
        success: 'Album úspěšně zaregistrováno!',
        registerAnother: 'Registrovat další album',
        error: 'Něco se pokazilo. Zkuste to prosím znovu.',
      },
      options: [
        {
          name: 'Honeymoon Fund',
          description:
            'We would love some help to enjoy our first adventure as a married couple. If you wanna help us out, this is the place!',
          icon: '/registry/honeymoon.png',
        },
        {
          name: 'Car Fund',
          description: "If you're a little more practical, we are also both carless :)",
          icon: '/registry/car.png',
        },
      ],
      externalLinkLabel: 'Zobrazit seznam',
      paymentOptions: [
        {
          type: 'zelle',
          label: 'Zelle',
          value: 'thompsonwalker222@gmail.com',
        },
        {
          type: 'venmo',
          label: 'Venmo',
          value: '@walker_thompson',
        },
        {
          type: 'qr',
          label: 'Bankovní převod (QR kód)',
          qrImage: '/registry/qr-code.png',
        },
      ],
      paymentLabels: {
        copyButton: 'Kopírovat',
        copiedButton: 'Zkopírováno!',
        scanQr: 'Naskenujte pomocí bankovní aplikace',
      },
    },
  },
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
