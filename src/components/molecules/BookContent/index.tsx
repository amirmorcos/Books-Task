import { useAppTheme } from "hooks/useAppTheme";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const BookContent = () => {
  const { colors } = useAppTheme();
  const themedStyles = styles(colors);

  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.title} numberOfLines={2} ellipsizeMode="tail">
        React Native for Mobile Development
      </Text>
      <View style={themedStyles.bottomContainer}>
        <View>
          <Text style={themedStyles.author}>Akshat Paul</Text>
        </View>

        {/* <View
            style={{
              backgroundColor: "#FFF8E0",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              borderRadius: 12,
              height: verticalScale(16),
            }}
          >
            <StarIcon />
            <Text style={{ marginStart: 8, ...Typography.body.small }}>
              4.0
            </Text>
          </View> */}
      </View>
    </View>
  );
};

export default BookContent;
