import { useAppTheme } from "hooks/useAppTheme";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import { BookActionsProps } from "./types";
import FavoriteIcon from "assets/icons/FavoriteIcon";
import ActiveFavoriteIcon from "assets/icons/ActiveFavoriteIcon";

const BookActions = ({ onFavoriteItem, isFavorite }: BookActionsProps) => {
  const { colors } = useAppTheme();

  const themedStyles = styles(colors);

  return (
    <TouchableOpacity
      onPress={onFavoriteItem}
      style={themedStyles.favoriteButton}
    >
      {isFavorite ? <ActiveFavoriteIcon /> : <FavoriteIcon />}
    </TouchableOpacity>
  );
};

export default BookActions;
