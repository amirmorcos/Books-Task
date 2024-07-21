import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters/extend";
import { AppColors } from "themes/colors/types";
import { Typography } from "themes/fonts";

export default (colors: AppColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.WHITE,
    },
    scrollContent: {
      paddingBottom: verticalScale(120),
    },
    imgBg: {
      height: verticalScale(400),
    },
    imgBgImage: {
      opacity: 0.1,
    },
    imgBgContent: {
      alignItems: "center",
      justifyContent: "center",
    },
    detailsContainer: {
      marginTop: verticalScale(50),
      paddingHorizontal: scale(20),
    },
    bookTitle: {
      ...Typography.heading.h5,
      color: colors.BLACK,
    },
    bookAuthor: {
      ...Typography.heading.h6,
    },
    bookAuthorContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: verticalScale(5),
      marginBottom: verticalScale(30),
      justifyContent: "center",
      flexWrap: "wrap",
    },
    description: {
      ...Typography.body.xlarge,
      marginBottom: verticalScale(10),
    },
    bookContentContainer: {
      height: verticalScale(50),
      width: scale(300),
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      flexDirection: "row",
      backgroundColor: colors.WHITE,
      position: "absolute",
      top: verticalScale(370),
      borderRadius: 12,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    backIcon: {
      marginTop: verticalScale(45),
      marginBottom: verticalScale(10),
      marginStart: scale(20),
    },
    thumbnail: {
      height: verticalScale(150),
      width: scale(120),
    },
  });
