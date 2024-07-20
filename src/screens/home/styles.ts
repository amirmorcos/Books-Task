import { StyleSheet } from "react-native";
import { AppColors } from "themes/colors/types";

export default (colors: AppColors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.WHITE,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
