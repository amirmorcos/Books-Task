import Button from "atoms/Button";
import { useAppTheme } from "hooks/useAppTheme";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./styles";
import FavoriteIcon from "assets/icons/FavoriteIcon";
import { Images } from "themes/images";

const BookActions = () => {
  const { colors } = useAppTheme();
  const { bottom } = useSafeAreaInsets();
  const themedStyles = styles(colors);

  return (
    <View style={[themedStyles.container, { bottom }]}>
      <TouchableOpacity style={themedStyles.favoriteButton}>
        <Image source={Images.heart} />
      </TouchableOpacity>
      <Button
        overrideContainerStyle={themedStyles.buyButton}
        label="Buy now"
        size="large"
        onPress={() => {}}
      />
    </View>
  );
};

export default BookActions;
