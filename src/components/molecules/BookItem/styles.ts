import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters/extend";
import { AppColors } from "themes/colors/types";

export default (colors: AppColors) =>
  StyleSheet.create({
    container: {
      height: verticalScale(275),
      width: scale(169),
      backgroundColor: colors.WHITE,
      borderRadius: 12,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginStart: scale(10),
      marginBottom: verticalScale(15),
    },
  });
