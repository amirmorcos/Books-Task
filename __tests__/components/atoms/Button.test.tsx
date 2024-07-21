/**
 * @format
 */

import React from "react";

// Note: import explicitly to use the types shipped with jest.

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import { Button } from "atoms/index";

it("renders correctly", () => {
  const tree = renderer
    .create(<Button label="Test" onPress={jest.fn} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
