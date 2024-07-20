import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters/extend";
import { AppColors } from "themes/colors/types";
import { Typography } from "themes/fonts";
import { shadowing } from "utils/constants";

export default (colors: AppColors) =>
  StyleSheet.create({
    container: {
      height: verticalScale(50),
      width: scale(300),
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: scale(20),
      flexDirection: "row",
      backgroundColor: colors.WHITE,
      position: "absolute",
      top: verticalScale(370),
      borderRadius: 12,
      ...shadowing,
    },
    ratingContainer: {
      height: verticalScale(16),
      backgroundColor: "#FFF8E0",
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      paddingHorizontal: scale(4),
    },
    rating: {
      ...Typography.body.smallBold,
      marginStart: scale(5),
    },
    categoriesContainer: {
      height: verticalScale(16),
      backgroundColor: "#CBF5FF",
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 10,
    },
    category: {
      ...Typography.body.smallBold,
      color: colors.BLACK,
    },
    pageContainer: {
      alignItems: "center",
    },
  });
