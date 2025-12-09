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
      labels: {
        roomTypes: string;
        available: string;
        unavailable: string;
        price: string;
        contactToBook: string;
        photos: string;
      };
      contact: {
        phoneLabel: string;
        email: string;
        phone: string;
      };
      options: Array<{
        name: string;
        details: string;
        image: string;
        gallery?: string[];
        roomTypes: Array<{
          type: string;
          available: boolean;
          price: string;
        }>;
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
      day: '20',
      month: '06',
      year: '2026',
      time: 'The ceremony begins at 2:00 pm',
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
      },
      dateAndTime: {
        sectionTitle: 'Date & Time',
      },
      schedule: {
        sectionTitle: 'Schedule',
        activities: [
          {
            name: 'Welcome Drink',
            time: '12:00 pm',
            icon: 'cocktail.png',
          },
          {
            name: 'Ceremony',
            time: '1:00 pm',
            icon: 'ceremony.png',
          },
          {
            name: 'Food & Traditions',
            time: '3:30 pm',
            icon: 'traditions.png',
          },
          {
            name: 'Celebration',
            time: '7:00 pm',
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
        details:
          'Below are two options for staying near the venue the night of the 20th. We have reserved spots for guests who wish to stay here.',
        labels: {
          roomTypes: 'Room Types',
          available: 'Available',
          unavailable: 'Unavailable',
          price: 'Price',
          contactToBook: 'Contact Us to Book',
          photos: 'Photos',
        },
        contact: {
          phoneLabel: 'WhatsApp',
          email: 'thompsonwalker222@gmail.com',
          phone: '+420 731 742 805',
        },
        options: [
          {
            name: 'Pension Merano',
            details: '[ Describe this hotel ]',
            image: '/accommodations/hotel1.jpg',
            roomTypes: [
              { type: 'Double Room', available: true, price: '€70/night' },
              { type: 'Family Suite', available: false, price: '€120/night' },
            ],
          },
          {
            name: 'Hotel Florian Sedlčany',
            details: '[ Describe this hotel ]',
            image: '/accommodations/hotel2.jpg',
            roomTypes: [
              { type: 'Standard Room', available: true, price: '€60/night' },
              { type: 'Deluxe Room', available: true, price: '€90/night' },
            ],
          },
        ],
      },
      dressCode: {
        sectionTitle: 'Dress Code',
        description:
          'Sed volutpat quis urna vehicula eleifend. Fusce tincidunt, velit eu lacinia sollicitudin, dolor nisi elementum neque, quis posuere diam ante in sapien.\n\nPhasellus mollis lacus eu nisi viverra, et tincidunt lacus auctor. ',
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
      successMessage: 'Thank you! Your RSVP has been received. See you soon!',
      declineSuccessMessage: "Thank you for letting us know. We are sorry you can't make it, but we hope to see you soon!",
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
      day: '20.',
      month: '6.',
      year: '2026',
      time: 'Svatební obřad začíná ve 14:00',
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
      },
      dateAndTime: {
        sectionTitle: 'Datum a čas',
      },
      schedule: {
        sectionTitle: 'Harmonogram',
        activities: [
          {
            name: '"Welcome drink"',
            time: '12:00',
            icon: 'cocktail.png',
          },
          {
            name: 'Obřad',
            time: '13:00',
            icon: 'ceremony.png',
          },
          {
            name: 'Jidlo a tradice',
            time: '15:30',
            icon: 'traditions.png',
          },
          {
            name: 'Party',
            time: '19:00',
            icon: 'party.png',
          },
          {
            name: 'Konec',
            time: '00:00',
            icon: 'end.png',
          },
        ],
      },
      accommodations: {
        sectionTitle: 'Ubytování',
        details: 'tady můžeš najít možnosti kde se ubytovat ze soboty 20. 6. na neděli 21.6.\n\n ubytování si každý hradí sám, ale rádi ti pomůžeme se zařízením ubytování. pokud se chceš ubytovat v nějaké z těchto možností, kontaktuj prosím Sofi... \n\nsofiebendova@gmail.com\ntel. č.: 773593573',
        labels: {
          roomTypes: 'Typy pokojů',
          available: 'Dostupné',
          unavailable: 'Nedostupné',
          price: 'Cena',
          contactToBook: 'Kontaktujte nás pro rezervaci',
          photos: 'Fotografie',
        },
        contact: {
          phoneLabel: 'Telefonní číslo',
          email: 'sofiebendova@gmail.com',
          phone: '773 593 573',
        },
        options: [
          {
            name: 'Pension Merano',
            details: '',
            image: '/accommodations/hotel1.jpg',
            roomTypes: [
              { type: 'Dvoulůžkový pokoj', available: true, price: ' czk/noc' },
              { type: 'Rodinný apartmán', available: false, price: ' czk/noc' },
            ],
          },
          {
            name: 'Hotel Florian Sedlčany',
            details: '',
            image: '/accommodations/hotel2.jpg',
            roomTypes: [
              { type: 'Standardní pokoj', available: true, price: ' czk/noc' },
              { type: 'Deluxe pokoj', available: true, price: ' czk/noc' },
            ],
          },
        ],
      },
      dressCode: {
        sectionTitle: '"Dress code"',
        description: 'Pokud tě nenapadá co si vzít na sebe, můžeš se inspirovat z palety barev, kterou jsme po náš den připravili - rozhodně to není podmínkou:) Nepustíme tě jen v případě, že budeš mít bílé šaty;)',
      },
    },
    photos: {
      title: 'Fotky',
      placeholder: 'Vrať se po svatbě :)',
    },
    rsvp: {
      pageTitle: 'Potvrzení účasti',
      searchPrompt: 'Zde prosím zadej své jméno pro nalezení pozvánky',
      searchPlaceholder: 'Zadej své jméno...',
      searchButton: 'Hledat',
      searching: 'Hledám...',
      notFound: 'Pozvánka nenalezena. Zkontroluj prosím pravopis nebo nás kontaktuj.',
      resultsPrompt: 'Vyber své jméno nebo skupinu z výsledků:',
      selectGuest: 'Vybrat',
      alreadySubmitted:
        'Tvoje skupina již odeslala potvrzení účasti. Pokud potřebuješ provést změny, kontaktuj nás prosím přímo.',
      contactPrompt: 'Pokud potřebuješ provést změny ve svém potvrzení:',
      groupLabel: 'Potvrzuji účast za:',
      attendingLabel: 'Účast',
      emailLabel: 'E-mailová adresa',
      emailPlaceholder: 'tvuj.email@priklad.cz',
      songLabel:
        'Písnička na přání (Tohle je tvoje šance na písničku na přání v čase svatební party! Ale nic neslibujeme xoxo;)',
      songPlaceholder: 'Sem napiš svoji písničku na přání',
      dietaryLabel: 'Dietní omezení nebo alergie ',
      dietaryPlaceholder: 'např. vegetarián, bezlepková strava, alergie na ořechy...',
      submitButton: 'Odeslat potvrzení',
      submitting: 'Odesílám...',
      declineButton: 'Nemůžeme se zúčastnit',
      declining: 'Odesílám...',
      successMessage: 'Děkujeme! Tvoje potvrzení účasti bylo přijato.',
      declineSuccessMessage: 'Děkujeme že jsi nám dal/a vědět! Moc nás mrzí, že nemůžeš dorazit. Snad se uvidíme brzy<3',
      confirmationSent: 'Potvrzení bylo odesláno na:',
      viewDetails: 'Zobrazit podrobnosti o svatbě',
      errorMessage: 'Něco se pokazilo. Zkus to prosím znovu.',
      wrongEmail: 'Špatný email?',
      updateEmail: 'Aktualizovat a znovu odeslat',
      updatingEmail: 'Aktualizuji...',
      emailUpdated: 'Email aktualizován a potvrzení znovu odesláno!',
      emailUpdateFailed: 'Nepodařilo se aktualizovat email. Zkus to prosím znovu.',
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
          name: 'Fond na svatební cestu',
          description:
            'Rádi bychom si užili naše první společné dobrodružství jako manželé, ale všechny naše penízky putují na přípravu svatby. Pokud bys nám s tím chtěl/a pomoct, tady je to pravé místo!',
          icon: '/registry/honeymoon.png',
        },
        {
          name: 'Fond na auto',
          description: "Pokud jsi spíše na praktičtější věci, tak ani jeden z nás nemá auto :)",
          icon: '/registry/car.png',
        },
      ],
      externalLinkLabel: 'Přispět',
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
        scanQr: 'Naskenuj pomocí své bankovní aplikace',
      },
    },
  },
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
