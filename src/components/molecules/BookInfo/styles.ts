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
      paddingHorizontal: scale(10),
      paddingVertical: verticalScale(5),
      backgroundColor: colors.LIGHT_YELLOW,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
    },
    rating: {
      ...Typography.body.smallBold,
      marginStart: scale(5),
    },
    categoriesContainer: {
      backgroundColor: colors.LIGHT_BLUE,
      borderRadius: 8,
      alignItems: "center",
      paddingHorizontal: scale(10),
      paddingVertical: verticalScale(5),
      flexDirection: "row",
    },
    category: {
      ...Typography.body.smallBold,
      color: colors.BLACK,
      marginEnd: scale(5),
    },
    pageContainer: {
      alignItems: "center",
    },
  });
