import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters/extend";
import { AppColors } from "themes/colors/types";
import { shadowing } from "utils/constants";

export default (colors: AppColors) =>
  StyleSheet.create({
    container: {
      position: "absolute",
      height: verticalScale(80),
      width: "100%",
      backgroundColor: colors.WHITE,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: scale(10),
      justifyContent: "space-between",
      ...shadowing,
    },
    favoriteButton: {
      height: scale(50),
      width: scale(50),
      borderRadius: 50,
      backgroundColor: colors.WHITE,
      justifyContent: "center",
      alignItems: "center",
      ...shadowing,
    },
    buyButton: {
      width: scale(280),
    },
  });
