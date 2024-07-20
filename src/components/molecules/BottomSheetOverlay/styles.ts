import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters/extend";

export default StyleSheet.create({
  container: {
    borderRadius: 22,
    padding: scale(20),
  },
  content: {
    paddingBottom: verticalScale(70),
  },
});
