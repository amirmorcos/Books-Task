import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters/extend";
import { AppColors } from "themes/colors/types";

export default (colors: AppColors) =>
  StyleSheet.create({
    container: {
      borderRadius: 30,
      backgroundColor: colors.WHITE,
      borderColor: colors.BLACK,
      borderWidth: 1,
      height: scale(30),
      width: scale(30),
      justifyContent: "center",
      alignItems: "center",
    },
  });
