import { useAppTheme } from "hooks/useAppTheme";
import React from "react";
import { Image, View } from "react-native";
import { Images } from "themes/images";
import styles from "./styles";

const BookImage = () => {
  const { colors } = useAppTheme();
  const themedStyles = styles(colors);
  return (
    <View style={themedStyles.container}>
      <Image
        resizeMode="contain"
        source={Images.book}
        style={themedStyles.image}
      />
    </View>
  );
};

export default BookImage;
