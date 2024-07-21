import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters/extend";
import { AppColors } from "themes/colors/types";
import { Typography } from "themes/fonts";

export default (colors: AppColors) =>
  StyleSheet.create({
    content: {
      flexGrow: 1,
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(5),
    },
    emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    empty: {
      ...Typography.body.mediumRegular,
      color: colors.BLACK,
    },
  });
