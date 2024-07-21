jest.mock("react-native-size-matters/extend", () => ({
  scale: (size: number) => jest.fn(),
  verticalScale: (size: number) => jest.fn(),
  moderateScale: (size: number) => jest.fn(),
}));
