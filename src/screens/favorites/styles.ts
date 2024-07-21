import { StyleSheet } from "react-native";
import { AppColors } from "themes/colors/types";

export default (colors: AppColors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.WHITE,
    },
  });
