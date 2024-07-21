import { useAppTheme } from "hooks/useAppTheme";
import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";
import type { BookImageProps } from "./types";
import FastImage from "react-native-fast-image";
import { fixImageProtocol } from "utils/constants";

const BookImage = ({ image }: BookImageProps) => {
  const { colors } = useAppTheme();
  const themedStyles = styles(colors);
  return (
    <View style={themedStyles.container}>
      <FastImage
        resizeMode="contain"
        source={{ uri: fixImageProtocol(image) }}
        style={themedStyles.image}
      />
    </View>
  );
};

export default BookImage;
