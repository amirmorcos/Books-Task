import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters/extend";
import { AppColors } from "themes/colors/types";

export default (colors: AppColors) =>
  StyleSheet.create({
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.WHITE,
    },
    container: {
      flex: 1,
      backgroundColor: colors.WHITE,
    },
    searchContainer: {
      padding: scale(20),
    },
  });
