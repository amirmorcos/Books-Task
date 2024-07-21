/**
 * @format
 */

import React from "react";

// Note: import explicitly to use the types shipped with jest.

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

import { BookList } from "organisms/index";

const bookList = [
  {
    kind: "books#volume",
    id: "sjGWCgAAQBAJ",
    etag: "rlVL/M4/RxI",
    selfLink: "https://www.googleapis.com/books/v1/volumes/sjGWCgAAQBAJ",
    volumeInfo: {
      title: "Mop Hop",
      authors: ["Sharon  Coan"],
      publisher: "Teacher Created Materials",
      publishedDate: "2012-03-01",
      description:
        "Featuring clear text and lively illustrations, beginning readers will learn words that feature rhyming -op sounds such as pop, bop, and hop. The creative storyline and accommodating sight words help readers progress in their early literacy and phonemic skills.",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9781433398919",
        },
        {
          type: "ISBN_10",
          identifier: "1433398915",
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 10,
      printType: "BOOK",
      categories: ["Juvenile Fiction"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.1.2.0.preview.1",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=sjGWCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=sjGWCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.com.eg/books?id=sjGWCgAAQBAJ&printsec=frontcover&dq=Mop&hl=&cd=1&source=gbs_api",
      infoLink:
        "http://books.google.com.eg/books?id=sjGWCgAAQBAJ&dq=Mop&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/Mop_Hop.html?hl=&id=sjGWCgAAQBAJ",
    },
    saleInfo: {
      country: "EG",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "EG",
      viewability: "ALL_PAGES",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          "http://books.google.com.eg/books/download/Mop_Hop-sample-pdf.acsm?id=sjGWCgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=sjGWCgAAQBAJ&hl=&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "Featuring clear text and lively illustrations, beginning readers will learn words that feature rhyming -op sounds such as pop, bop, and hop.",
    },
  },
  {
    kind: "books#volume",
    id: "055MAQAAIAAJ",
    etag: "edJv3TJyT0U",
    selfLink: "https://www.googleapis.com/books/v1/volumes/055MAQAAIAAJ",
    volumeInfo: {
      title: "Miss Osborne-the-Mop",
      authors: ["Wilson Gage"],
      publisher: "Putnam Publishing Group",
      publishedDate: "1963",
      description:
        "Jody discovers she has magic powers, and turns a mop into a person.",
      industryIdentifiers: [
        {
          type: "OTHER",
          identifier: "STANFORD:36105049223816",
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 168,
      printType: "BOOK",
      categories: ["Juvenile Fiction"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.3.1.0.preview.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=055MAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=055MAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.com.eg/books?id=055MAQAAIAAJ&q=Mop&dq=Mop&hl=&cd=2&source=gbs_api",
      infoLink:
        "http://books.google.com.eg/books?id=055MAQAAIAAJ&dq=Mop&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/Miss_Osborne_the_Mop.html?hl=&id=055MAQAAIAAJ",
    },
    saleInfo: {
      country: "EG",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "EG",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=055MAQAAIAAJ&hl=&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "Jody discovers she has magic powers, and turns a mop into a person.",
    },
  },
  {
    kind: "books#volume",
    id: "xDRMCU8bEwMC",
    etag: "3Y5cMVo+PAw",
    selfLink: "https://www.googleapis.com/books/v1/volumes/xDRMCU8bEwMC",
    volumeInfo: {
      title: "Mop Top",
      authors: ["Don Freeman"],
      publisher: "Puffin",
      publishedDate: "1978",
      description:
        "Reprint of the ed. published: New York: Viking Press, 1955.",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "0140503269",
        },
        {
          type: "ISBN_13",
          identifier: "9780140503265",
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 42,
      printType: "BOOK",
      categories: ["Juvenile Nonfiction"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.4.1.0.preview.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=xDRMCU8bEwMC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=xDRMCU8bEwMC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.com.eg/books?id=xDRMCU8bEwMC&q=Mop&dq=Mop&hl=&cd=3&source=gbs_api",
      infoLink:
        "http://books.google.com.eg/books?id=xDRMCU8bEwMC&dq=Mop&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/Mop_Top.html?hl=&id=xDRMCU8bEwMC",
    },
    saleInfo: {
      country: "EG",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "EG",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=xDRMCU8bEwMC&hl=&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "Reprint of the ed. published: New York: Viking Press, 1955.",
    },
  },
  {
    kind: "books#volume",
    id: "L_wkvWMsPTIC",
    etag: "96jQh8WTlr0",
    selfLink: "https://www.googleapis.com/books/v1/volumes/L_wkvWMsPTIC",
    volumeInfo: {
      title: "Floppy Mop",
      authors: ["Bobby Lynn Maslen"],
      publisher: "Bob Books Kids",
      publishedDate: "1996-12",
      description:
        "Stories and pictures to help with learning letters, sounds and words.",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "0439175607",
        },
        {
          type: "ISBN_13",
          identifier: "9780439175609",
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 20,
      printType: "BOOK",
      categories: ["Automobiles"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "1.4.2.0.preview.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=L_wkvWMsPTIC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=L_wkvWMsPTIC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.com.eg/books?id=L_wkvWMsPTIC&q=Mop&dq=Mop&hl=&cd=4&source=gbs_api",
      infoLink:
        "http://books.google.com.eg/books?id=L_wkvWMsPTIC&dq=Mop&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/Floppy_Mop.html?hl=&id=L_wkvWMsPTIC",
    },
    saleInfo: {
      country: "EG",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "EG",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=L_wkvWMsPTIC&hl=&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "Stories and pictures to help with learning letters, sounds and words.",
    },
  },
  {
    kind: "books#volume",
    id: "E9z76PkePX4C",
    etag: "tT7RATm5Xuo",
    selfLink: "https://www.googleapis.com/books/v1/volumes/E9z76PkePX4C",
    volumeInfo: {
      title: "Mop Men",
      subtitle: "Inside the World of Crime Scene Cleaners",
      authors: ["Alan Emmins"],
      publisher: "Macmillan",
      publishedDate: "2009-01-20",
      description:
        "Neal Smither doesn't hide his work. The side of his van reads: \"Crime Scene Cleaners: Homicides, Suicides and Accidental Death.\" Whenever a hotel guest permanently checks out, the cops finish an investigation, or an accidental death is reported, Smither's crew pick up the pieces after the police cruisers and ambulances have left. Alan Emmins offers a glimpse at this little-known aspect of America's most gruesome deaths. Filled with details as fascinating as they are gory, Mop Men examines not just the public fascination with murder but also how a self-made success like Smither can make a fortune just by praying for death.",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9781429988049",
        },
        {
          type: "ISBN_10",
          identifier: "1429988045",
        },
      ],
      readingModes: {
        text: true,
        image: false,
      },
      pageCount: 275,
      printType: "BOOK",
      categories: ["True Crime"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "1.3.4.0.preview.2",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=E9z76PkePX4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=E9z76PkePX4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.com.eg/books?id=E9z76PkePX4C&printsec=frontcover&dq=Mop&hl=&cd=5&source=gbs_api",
      infoLink:
        "https://play.google.com/store/books/details?id=E9z76PkePX4C&source=gbs_api",
      canonicalVolumeLink:
        "https://play.google.com/store/books/details?id=E9z76PkePX4C",
    },
    saleInfo: {
      country: "EG",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 359.02,
        currencyCode: "EGP",
      },
      retailPrice: {
        amount: 359.02,
        currencyCode: "EGP",
      },
      buyLink:
        "https://play.google.com/store/books/details?id=E9z76PkePX4C&rdid=book-E9z76PkePX4C&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 359020000,
            currencyCode: "EGP",
          },
          retailPrice: {
            amountInMicros: 359020000,
            currencyCode: "EGP",
          },
        },
      ],
    },
    accessInfo: {
      country: "EG",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: true,
        acsTokenLink:
          "http://books.google.com.eg/books/download/Mop_Men-sample-epub.acsm?id=E9z76PkePX4C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=E9z76PkePX4C&hl=&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "Alan Emmins offers a glimpse at this little-known aspect of America&#39;s most gruesome deaths.",
    },
  },
  {
    kind: "books#volume",
    id: "vfuXzQEACAAJ",
    etag: "kdaoV8HCSrw",
    selfLink: "https://www.googleapis.com/books/v1/volumes/vfuXzQEACAAJ",
    volumeInfo: {
      title: "The Mop and Dad at the Top",
      authors: ["Gemma McMullen"],
      publisher: "BookLife Readers",
      publishedDate: "2020-07-09",
      description:
        "The MopSam and Tim are baking a cake with the help of their little friend.I am the Boss!Dan and Dad are enjoying a lovely sunny day outside, but Sam the dog accidentally spoils it!",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "1839272716",
        },
        {
          type: "ISBN_13",
          identifier: "9781839272714",
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 32,
      printType: "BOOK",
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "preview-1.0.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=vfuXzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=vfuXzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.com.eg/books?id=vfuXzQEACAAJ&dq=Mop&hl=&cd=6&source=gbs_api",
      infoLink:
        "http://books.google.com.eg/books?id=vfuXzQEACAAJ&dq=Mop&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/The_Mop_and_Dad_at_the_Top.html?hl=&id=vfuXzQEACAAJ",
    },
    saleInfo: {
      country: "EG",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "EG",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=vfuXzQEACAAJ&hl=&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "The Mop Sam and Tim are baking a cake with the help of their little friend. I am the Boss! Dan and Dad are enjoying a lovely sunny day outside, but Sam the dog accidentally spoils it!",
    },
  },
  {
    kind: "books#volume",
    id: "0ps7AQAAMAAJ",
    etag: "7/ciEP17UAU",
    selfLink: "https://www.googleapis.com/books/v1/volumes/0ps7AQAAMAAJ",
    volumeInfo: {
      title: "Dry Goods Reporter and Midwest Merchant-economist",
      publishedDate: "1915",
      industryIdentifiers: [
        {
          type: "OTHER",
          identifier: "NYPL:33433018879399",
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 920,
      printType: "BOOK",
      categories: ["Dry-goods"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "2.6.5.0.full.1",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=0ps7AQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=0ps7AQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.com.eg/books?id=0ps7AQAAMAAJ&pg=PA39&dq=Mop&hl=&cd=7&source=gbs_api",
      infoLink:
        "https://play.google.com/store/books/details?id=0ps7AQAAMAAJ&source=gbs_api",
      canonicalVolumeLink:
        "https://play.google.com/store/books/details?id=0ps7AQAAMAAJ",
    },
    saleInfo: {
      country: "EG",
      saleability: "FREE",
      isEbook: true,
      buyLink:
        "https://play.google.com/store/books/details?id=0ps7AQAAMAAJ&rdid=book-0ps7AQAAMAAJ&rdot=1&source=gbs_api",
    },
    accessInfo: {
      country: "EG",
      viewability: "ALL_PAGES",
      embeddable: true,
      publicDomain: true,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
        downloadLink:
          "http://books.google.com.eg/books/download/Dry_Goods_Reporter_and_Midwest_Merchant.epub?id=0ps7AQAAMAAJ&hl=&output=epub&source=gbs_api",
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=0ps7AQAAMAAJ&hl=&source=gbs_api",
      accessViewStatus: "FULL_PUBLIC_DOMAIN",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "... <b>MOP</b> GETS INTO THE CORNERS Self Feeding Adjustable Handle OF1 FOR THE PRICE OF DUST <b>MOP</b> Interchangeable Here is the big value <b>mop</b> combination that has been awarded the highest award given to mops at the Pan- ama - Pacific Exposition&nbsp;...",
    },
  },
  {
    kind: "books#volume",
    id: "z2HaNZ8Bf_UC",
    etag: "+Q1NHD6k5uE",
    selfLink: "https://www.googleapis.com/books/v1/volumes/z2HaNZ8Bf_UC",
    volumeInfo: {
      title: "Skin Therapy",
      authors: ["William J Cunliffe", "Ronald Marks"],
      publisher: "CRC Press",
      publishedDate: "1994-01-01",
      description:
        "A collection of articles examining recent developements in skin therapy, and discussing issues of importance for the effective management of patients.",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "1853171379",
        },
        {
          type: "ISBN_13",
          identifier: "9781853171376",
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 220,
      printType: "BOOK",
      categories: ["Medical"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.3.5.0.preview.1",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=z2HaNZ8Bf_UC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=z2HaNZ8Bf_UC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.com.eg/books?id=z2HaNZ8Bf_UC&pg=PA19&dq=Mop&hl=&cd=8&source=gbs_api",
      infoLink:
        "http://books.google.com.eg/books?id=z2HaNZ8Bf_UC&dq=Mop&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/Skin_Therapy.html?hl=&id=z2HaNZ8Bf_UC",
    },
    saleInfo: {
      country: "EG",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "EG",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          "http://books.google.com.eg/books/download/Skin_Therapy-sample-pdf.acsm?id=z2HaNZ8Bf_UC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=z2HaNZ8Bf_UC&hl=&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "... <b>MOP</b> . 8 - <b>MOP</b> is given using a liquid filled capsule in the USA ( Oxpsoralen Ultra ) , the dose usually being 0.5 mg / kg bodyweight given 1 to 1.25 h before UVA radia- tion . Less rapidly absorbed forms of 8- <b>MOP</b> require slightly&nbsp;...",
    },
  },
  {
    kind: "books#volume",
    id: "AfRrAAAACAAJ",
    etag: "TqXEtdpKw88",
    selfLink: "https://www.googleapis.com/books/v1/volumes/AfRrAAAACAAJ",
    volumeInfo: {
      title: "Morris the Messy Mop",
      authors: ["Jo Marsden"],
      publishedDate: "2006-09",
      description:
        "Step inside the magical world of the Hoo Ha House and meet Morris the messy mop. He loves making a mess, but when things get a little out of hand in the kitchen, can he clean it up before Beryl the bucket returns?",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "1904725309",
        },
        {
          type: "ISBN_13",
          identifier: "9781904725305",
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 32,
      printType: "BOOK",
      categories: ["Children's stories, English"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "preview-1.0.0",
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=AfRrAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=AfRrAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.com.eg/books?id=AfRrAAAACAAJ&dq=Mop&hl=&cd=9&source=gbs_api",
      infoLink:
        "http://books.google.com.eg/books?id=AfRrAAAACAAJ&dq=Mop&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/Morris_the_Messy_Mop.html?hl=&id=AfRrAAAACAAJ",
    },
    saleInfo: {
      country: "EG",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "EG",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=AfRrAAAACAAJ&hl=&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "Step inside the magical world of the Hoo Ha House and meet Morris the messy mop. He loves making a mess, but when things get a little out of hand in the kitchen, can he clean it up before Beryl the bucket returns?",
    },
  },
];

it("renders correctly", () => {
  const tree = renderer
    .create(<BookList data={bookList} onItemPress={jest.fn} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
