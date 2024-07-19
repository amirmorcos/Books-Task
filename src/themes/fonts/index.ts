import { moderateScale } from "react-native-size-matters/extend";

const Fonts = {
  regular: "Roboto-Regular",
  semibold: "Roboto-semibold",
  bold: "Roboto-Bold",
  medium: "Roboto-Medium",
  openSansBold: "OpenSans-Bold",
};

export const Typography = {
  heading: {
    h1: {
      fontFamily: Fonts.openSansBold,
      fontSize: moderateScale(40),
    },
    h2: {
      fontFamily: Fonts.openSansBold,
      fontSize: moderateScale(32),
    },
    h3: {
      fontFamily: Fonts.openSansBold,
      fontSize: moderateScale(24),
    },
    h4: {
      fontFamily: Fonts.openSansBold,
      fontSize: moderateScale(20),
    },
    h5: {
      fontFamily: Fonts.openSansBold,
      fontSize: moderateScale(18),
    },
    h6: {
      fontFamily: Fonts.openSansBold,
      fontSize: moderateScale(16),
    },
  },
  body: {
    xlarge: {
      fontFamily: Fonts.medium,
      fontSize: moderateScale(18),
    },
    largeSemiBold: {
      fontFamily: Fonts.semibold,
      fontSize: moderateScale(16),
    },
    largeMedium: {
      fontFamily: Fonts.medium,
      fontSize: moderateScale(16),
    },
    large: {
      fontFamily: Fonts.regular,
      fontSize: moderateScale(16),
    },
    mediumSemiBold: {
      fontFamily: Fonts.semibold,
      fontSize: moderateScale(14),
    },
    mediumBold: {
      fontFamily: Fonts.bold,
      fontSize: moderateScale(14),
    },
    medium: {
      fontFamily: Fonts.medium,
      fontSize: moderateScale(14),
    },
    mediumRegular: {
      fontFamily: Fonts.regular,
      fontSize: moderateScale(14),
    },
    smallSemiBold: {
      fontFamily: Fonts.semibold,
      fontSize: moderateScale(12),
    },
    smallBold: {
      fontFamily: Fonts.bold,
      fontSize: moderateScale(12),
    },
    smallMedium: {
      fontFamily: Fonts.medium,
      fontSize: moderateScale(12),
    },
    small: {
      fontFamily: Fonts.regular,
      fontSize: moderateScale(12),
    },
  },
};
