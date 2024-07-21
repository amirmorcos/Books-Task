import { Book } from "models/Book";
import { useAppNavigation } from "navigation/types";
import BookList from "organisms/BookList";
import React from "react";
import { usefavoritesStore } from "store/index";

const FavoritesScreen = () => {
  const navigation = useAppNavigation();
  const userFavorites = usefavoritesStore((state) => state.userFavorites);

  const onItemPress = (item: Book) => {
    navigation.navigate("Details", { item });
  };
  return (
    <BookList
      data={userFavorites}
      overrideContainerStyle={{
        backgroundColor: "white",
      }}
      onItemPress={onItemPress}
      emptyMessage="No Favorites found"
    />
  );
};

export default FavoritesScreen;
