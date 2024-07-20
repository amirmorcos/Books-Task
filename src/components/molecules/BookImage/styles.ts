import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters/extend";
import { AppColors } from "themes/colors/types";

export default (colors: AppColors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.GREYSCALE["500"],
      borderTopLeftRadius: 12,
      borderTopEndRadius: 12,
      width: scale(169),
      height: verticalScale(178),
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      height: verticalScale(151),
      width: scale(98),
    },
  });
