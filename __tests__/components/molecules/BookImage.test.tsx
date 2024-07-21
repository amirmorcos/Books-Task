/**
 * @format
 */

import React from "react";

// Note: import explicitly to use the types shipped with jest.

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import { BookImage } from "molecules/index";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <BookImage image="http://books.google.com/books/content?id=sjGWCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
