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
        rooms: string;
        priceNote: string;
        contactToBook: string;
        photos: string;
      };
      contact: {
        phoneLabel: string;
        email: string;
        phone: string;
        copyButton: string;
        copiedButton: string;
      };
      options: Array<{
        name: string;
        image: string;
        extraInfoNote: string;
        url: string;
        gallery?: string[];
        roomOptions: Array<{
          name: string;
          type?: string;
          size?: string;
          extraGuests?: string;
          price: string;
        }>;
      }>;
    };
    dressCode: {
      sectionTitle: string;
      style: string;
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
    confirmTitle: string;
    reviewDetails: string;
    missingGroupPlaceholder: string;
    noGuestsAttending: string;
    songRequestConfirmLabel: string;
    editFormButton: string; // implement
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
    albumRegistration: {
      title: string;
      searchPlaceholder: string;
      searchButton: string;
      searching: string;
      noResults: string;
      selectAlbum: string;
      registeredBadge: string;
      backToResultsButton: string;
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
      time: 'The ceremony begins at 1:00 pm',
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
            name: 'Party',
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
          'Here you can find accommodation options for the night of Saturday, June 20.\n\nEveryone pays for their own accommodation, but we are happy to help you arrange it. If you would like to stay at one of these options, please contact Walker...\n\nthompsonwalker222@gmail.com\nWhatsApp: +420 731 742 805',
        labels: {
          rooms: 'Rooms',
          priceNote: 'Prices may depend on number of guests',
          contactToBook: 'Contact Walker to book',
          photos: 'Photos',
        },
        contact: {
          phoneLabel: 'WhatsApp',
          email: 'thompsonwalker222@gmail.com',
          phone: '+420 731 742 805',
          copyButton: 'Copy',
          copiedButton: 'Copied!',
        },
        options: [
          {
            name: 'Pension Merano',
            image: '/accommodations/hotel1.jpg',
            extraInfoNote: 'For more details on the hotel, visit this link',
            url: 'Booking.com',
            gallery: [
              '/pm/1.jpg',
              '/pm/2.jpg',
              '/pm/3.jpg',
              '/pm/4.jpg',
              '/pm/5.jpg',
              '/pm/6.jpg',
              '/pm/7.jpg',
            ],
            roomOptions: [
              {
                name: 'Jantar',
                type: 'Apartment w/ kitchen',
                size: '2 Beds | 4 Guests',
                price: '$77-120/night',
              },
              {
                name: 'Reneta',
                type: 'Apartment w/o kitchen',
                size: '1 Bed | 2 Guests',
                price: '$62/night',
              },
              {
                name: 'Juno',
                type: 'Apartment w/ kitchen',
                size: '1 Bed | 2 Guests',
                extraGuests:
                  'Option to add 2 extra single beds (4 guests total), but not as comfortable',
                price: '$72-115/night',
              },
              {
                name: 'Rubín',
                type: 'Large apartment w/ kitchen',
                size: '5 Beds | 8 Guests',
                extraGuests:
                  'Option to add 2 extra single beds (10 guests total), but not as comfortable',
                price: '$125-270/night',
              },
              {
                name: 'Opál',
                type: 'Apartment w/ kitchen',
                size: '1 Bed | 2 Guests',
                extraGuests:
                  'Option to add 2 extra single beds (4 guests total), but not as comfortable',
                price: '$72-115/night',
              },
            ],
          },
          {
            name: 'Hotel Florian Sedlčany',
            image: '/accommodations/hotel2.jpg',
            extraInfoNote: 'For more details on the hotel, visit this link',
            url: 'Booking.com',
            gallery: ['/hfs/1.jpg', '/hfs/2.jpg', '/hfs/3.jpg', '/hfs/4.jpg'],
            roomOptions: [
              { name: 'Double Bed', size: '1 Bed | 2 Guests', price: '$90/night' },
              { name: 'Double Bed + Single Bed', size: '2 Bed | 3 Guests', price: '$90-115/night' },
            ],
          },
        ],
      },
      dressCode: {
        sectionTitle: 'Dress Code',
        style: 'Cocktail',
        description:
          "If you can't think of what to wear, you can draw inspiration from the color palette we've prepared—but it's definitely not a requirement. We won't turn you away :)",
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
      confirmTitle: 'Confirm your RSVP',
      reviewDetails: 'Please review your details before submitting',
      missingGroupPlaceholder: 'Your Group',
      noGuestsAttending: 'No one attending',
      songRequestConfirmLabel: 'Song Requests',
      editFormButton: 'Edit Form',
      successMessage: 'Thank you! Your RSVP has been received. See you soon!',
      declineSuccessMessage:
        "Thank you for letting us know. We are sorry you can't make it, but we hope to see you soon!",
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
      albumRegistration: {
        title: 'Register Your Album',
        searchPlaceholder: 'Search for artist or album...',
        searchButton: 'Search',
        searching: 'Searching...',
        noResults: 'No albums found. Try a different search.',
        selectAlbum: 'Click an available album to register it',
        registeredBadge: 'REGISTERED',
        backToResultsButton: 'Back to Results',
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
      time: 'Svatební obřad začíná ve 13:00',
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
            name: 'Jídlo a tradice',
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
        details:
          'tady můžeš najít možnosti kde se ubytovat ze soboty 20. 6. na neděli 21. 6.\n\n ubytování si každý hradí sám, ale rádi ti pomůžeme se zařízením ubytování. pokud se chceš ubytovat v nějaké z těchto možností, kontaktuj prosím Sofi... \n\nsofiebendova@gmail.com\ntel. č.: 773 593 573',
        labels: {
          rooms: 'Typy pokojů',
          priceNote: 'Cena pokoje může záviset na počtu ubytovaných',
          contactToBook: 'Pro objednání pokoje prosím kontaktuj Sofi…',
          photos: 'Fotografie',
        },
        contact: {
          phoneLabel: 'Telefonní číslo',
          email: 'sofiebendova@gmail.com',
          phone: '773 593 573',
          copyButton: 'Kopírovat',
          copiedButton: 'Zkopírováno!',
        },
        options: [
          {
            name: 'Pension Merano',
            image: '/accommodations/hotel1.jpg',
            extraInfoNote: 'Pro detailnější informace se můžeš podívat přímo na webové stránky',
            url: 'https://www.pensionmerano.eu/',
            gallery: [
              '/pm/1.jpg',
              '/pm/2.jpg',
              '/pm/3.jpg',
              '/pm/4.jpg',
              '/pm/5.jpg',
              '/pm/6.jpg',
              '/pm/7.jpg',
            ],
            roomOptions: [
              {
                name: 'Jantar',
                type: 'Apartmán s kuchyní',
                size: 'Čtyřlůžkový pokoj se dvěma manželskými postelemi',
                price: '1600-2500 Kč/noc',
              },
              {
                name: 'Reneta',
                type: 'Apartmán s kuchyní',
                size: 'Dvoulůžkový pokoj s manželskou postelí',
                price: '1280 Kč/noc',
              },
              {
                name: 'Juno',
                type: 'Apartmán s kuchyní',
                size: 'Dvoulůžkový pokoj s manželskou postelí',
                extraGuests: 'Možnost přidat dvě přistýlky',
                price: '1500-2400 Kč/noc',
              },
              {
                name: 'Rubín',
                type: 'Velký apartmán s kuchyní',
                size: 'Osmilůžkový apartmán se třemi manželskými postelemi a dvěma jednolůžky',
                extraGuests: 'Možnost přidat dvě přistýlky',
                price: '4 osoby 2400 Kč/noc\n+ každá další osoba 500 Kč',
              },
              {
                name: 'Opál',
                type: 'Apartmán s kuchyní',
                size: 'Dvoulůžkový pokoj s manželskou postelí',
                extraGuests: 'Možnost přidat dvě přistýlky',
                price: '1500-2400 Kč/noc',
              },
              {
                name: 'Rondo',
                type: 'Pokoj ve formě společenské místnosti',
                size: '',
                extraGuests: 'Možnost přistýlek 2+1',
                price: '1600-2200 Kč/noc',
              },
            ],
          },
          {
            name: 'Hotel Florian Sedlčany',
            image: '/accommodations/hotel2.jpg',
            extraInfoNote: 'Pro detailnější informace se můžeš podívat přímo na webové stránky',
            url: 'https://www.hotel-florian.cz/',
            gallery: ['/hfs/1.jpg', '/hfs/2.jpg', '/hfs/3.jpg', '/hfs/4.jpg'],
            roomOptions: [
              { name: 'Dvoulůžkový pokoj', size: '1 manželská postel', price: '1900 Kč/noc' },
              {
                name: 'Třílůžkový pokoj',
                size: '1 manželská postel + 1 jednolůžko',
                price: '2400 Kč/noc',
              },
            ],
          },
        ],
      },
      dressCode: {
        sectionTitle: '"Dress code"',
        style: 'Společenský oděv',
        description:
          'Pokud tě nenapadá co si vzít na sebe, můžeš se inspirovat z palety barev, kterou jsme po náš den připravili - rozhodně to není podmínkou:) Nepustíme tě jen v případě, že budeš mít bílé šaty;)',
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
      dietaryLabel: 'Dietní omezení nebo alergie',
      dietaryPlaceholder: 'např. vegetarián, bezlepková strava, alergie na ořechy...',
      submitButton: 'Odeslat potvrzení',
      submitting: 'Odesílám...',
      declineButton: 'Nemůžeme se zúčastnit',
      declining: 'Odesílám...',
      confirmTitle: 'Confirm your RSVP', // TRANSLATE
      reviewDetails: 'Please review your details before submitting', // TRANSLATE
      missingGroupPlaceholder: 'Your group', // TRANSLATE
      noGuestsAttending: 'No guests attending', //TRANSLATE
      songRequestConfirmLabel: 'Písnička na přání',
      editFormButton: 'Edit Form', // TRANSLATE
      successMessage: 'Děkujeme! Tvoje potvrzení účasti bylo přijato.',
      declineSuccessMessage:
        'Děkujeme že jsi nám dal/a vědět! Moc nás mrzí, že nemůžeš dorazit. Snad se uvidíme brzy<3',
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
        'Tvoje přítomnost na naší svatbě je tím největším darem. Pokud bys nás ale chtěl/a poctít svatebním darem, máme připravených pár (trochu netradičních:) možností. Samozřejmě můžeš také přinést cokoliv, co v nabídce není.',
      vinylTitle: 'Jaké je tvoje oblíbené album?',
      vinylInfo:
        'Rádi bychom ho měli v naší budoucí sbírce! Můžeš přinést album které máš rád/a ve formě gramofonové desky (vinyl) nebo CD. Kdybys chtěl/a, můžeš dovnitř napsat vzkaz abychom věděli, od koho je a pokaždé, když ho budeme poslouchat, vzpomeneme si na tebe.<3',
      vinylsPurchased: 'Ujisti se, že máš jedinečný výběr',
      vinylSearchPlaceholder: 'Hledat album nebo umělce...',
      albumRegistration: {
        title: 'Zaregistruj svůj hudební dárek',
        searchPlaceholder: 'Hledat umělce nebo album...',
        searchButton: 'Hledat',
        searching: 'Hledám...',
        noResults: 'Žádná alba nenalezena. Zkuste jiné vyhledávání.',
        selectAlbum: 'Klikněte na dostupné album a zaregistrujte ho',
        registeredBadge: 'REGISTROVÁNO',
        backToResultsButton: 'Zpět do výsledků',
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
          description: 'Pokud jsi spíše na praktičtější věci, tak ani jeden z nás nemá auto :)',
          icon: '/registry/car.png',
        },
      ],
      externalLinkLabel: 'Přispět',
      paymentOptions: [
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
