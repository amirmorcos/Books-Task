/**
 * @format
 */

import React from "react";

// Note: import explicitly to use the types shipped with jest.

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import { BookItem } from "molecules/index";

const bookItemMocked = {
  kind: "books#volumes",
  totalItems: 534,
  items: [
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
      userInfo: {},
    },
  ],
};

it("renders correctly", () => {
  const tree = renderer
    .create(<BookItem item={bookItemMocked.items[0]} onPress={jest.fn} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
