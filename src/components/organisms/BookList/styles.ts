import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters/extend";

export default StyleSheet.create({
  content: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(5),
  },
});
