import { useAppTheme } from "hooks/useAppTheme";
import { Book } from "models/Book";
import { useAppNavigation } from "navigation/types";
import BookList from "organisms/BookList";
import React from "react";
import { usefavoritesStore } from "store/index";
import styles from "./styles";

const FavoritesScreen = () => {
  // get colors from theme object using the custom hook
  const { colors } = useAppTheme();
  const navigation = useAppNavigation();
  const userFavorites = usefavoritesStore((state) => state.userFavorites);

  const themedStyles = styles(colors);

  const onItemPress = (item: Book) => {
    navigation.navigate("Details", { item });
  };
  return (
    <BookList
      data={userFavorites}
      overrideContainerStyle={themedStyles.container}
      onItemPress={onItemPress}
      emptyMessage="No Favorites found"
    />
  );
};

export default FavoritesScreen;
