import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters/extend";
import { AppColors } from "themes/colors/types";
import { Typography } from "themes/fonts";

export default (colors: AppColors) =>
  StyleSheet.create({
    container: {
      borderRadius: 8,
      backgroundColor: colors.GREYSCALE[50],
      borderColor: colors.GREYSCALE[200],
      borderWidth: 1,
      width: "100%",
      height: verticalScale(48),
      paddingHorizontal: scale(15),
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      ...Typography.body.large,
    },
    focused: {
      borderColor: colors.GREYSCALE[900],
    },
  });
