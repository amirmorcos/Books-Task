import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters/extend";
import { AppColors } from "themes/colors/types";

export default (colors: AppColors) =>
  StyleSheet.create({
    input: {
      marginStart: scale(10),
    },
  });
