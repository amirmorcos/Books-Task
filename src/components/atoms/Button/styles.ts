import { StyleSheet } from "react-native";
import {
  moderateScale,
  scale,
  verticalScale,
} from "react-native-size-matters/extend";
import { AppColors } from "themes/colors/types";
import { Typography } from "themes/fonts";

export default (colors: AppColors) =>
  StyleSheet.create({
    container: {
      height: verticalScale(48),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 48,
    },
    large: {
      width: "100%",
      ...Typography.heading.h6,
    },
    small: {
      width: scale(92),
      ...Typography.body.mediumBold,
    },
    primary: {
      backgroundColor: colors.PRIMARY[500],
      color: colors.WHITE,
    },
    secondary: {
      backgroundColor: colors.PRIMARY[50],
      color: colors.PRIMARY[500],
    },
    disabled: {
      backgroundColor: colors.GREYSCALE[200],
      borderColor: colors.GREYSCALE[500],
      borderWidth: 1,
    },
    disabledText: {
      color: colors.GREYSCALE[500],
    },
    xsmall: {
      ...Typography.body.smallMedium,
      width: scale(65),
    },
  });
