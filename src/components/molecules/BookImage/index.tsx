import { useAppTheme } from "hooks/useAppTheme";
import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";
import type { BookImageProps } from "./types";

const BookImage = ({ image }: BookImageProps) => {
  const { colors } = useAppTheme();
  const themedStyles = styles(colors);
  return (
    <View style={themedStyles.container}>
      <Image
        resizeMode="contain"
        source={{ uri: image.replace("http", "https") }}
        style={themedStyles.image}
      />
    </View>
  );
};

export default BookImage;
