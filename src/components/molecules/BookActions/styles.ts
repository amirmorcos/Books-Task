import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters/extend";
import { AppColors } from "themes/colors/types";
import { shadowing } from "utils/constants";

export default (colors: AppColors) =>
  StyleSheet.create({
    favoriteButton: {
      height: scale(50),
      width: scale(50),
      borderRadius: 50,
      backgroundColor: colors.WHITE,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: verticalScale(15),
      right: verticalScale(20),
      ...shadowing,
    },
  });
