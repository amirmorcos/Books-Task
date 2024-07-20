import { Book } from "models/Book";
import { useAppNavigation } from "navigation/types";
import BookList from "organisms/BookList";
import React from "react";
import { Text, View } from "react-native";
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
      emptyComponent={() => (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>No Favorites</Text>
        </View>
      )}
    />
  );
};

export default FavoritesScreen;
