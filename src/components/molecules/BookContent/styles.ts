import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters/extend";
import { AppColors } from "themes/colors/types";
import { Typography } from "themes/fonts";

export default (colors: AppColors) =>
  StyleSheet.create({
    container: {
      padding: scale(10),
    },
    title: {
      ...Typography.body.medium,
      color: colors.GREYSCALE[900],
    },
    bottomContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    author: {
      ...Typography.body.smallBold,
      marginTop: verticalScale(10),
    },
  });
