import { useFocusEffect } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { useAppTheme } from "hooks/useAppTheme";
import { Book } from "models/Book";
import { useAppNavigation } from "navigation/types";
import { BookList } from "organisms/index";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import BooksApi from "services/books";
import styles from "./styles";

const HomeScreen = () => {
  // get colors from theme object using the custom hook
  const { colors } = useAppTheme();
  const { navigate } = useAppNavigation();

  const focusedRef = React.useRef(true);

  // function to call books(volumes) from axios provider
  const fetchBooks = async () => {
    const data = await BooksApi.getBooksList();
    return data;
  };

  // focus effect fn is used to disable calling the api on screen blur just to to avoid re-rendering and enhance performance
  useFocusEffect(
    React.useCallback(() => {
      focusedRef.current = true;
      return () => {
        focusedRef.current = false;
      };
    }, [])
  );

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["books"],
    enabled: () => focusedRef.current,
    queryFn: fetchBooks,
  });

  const themedStyles = styles(colors);

  // function to navigate to details page and passing the book item
  const onItemPress = (item: Book) => {
    navigate("Details", { item });
  };

  // In case of loading , returns loading indicator
  if (isLoading) {
    return (
      <View style={themedStyles.loadingContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  // In case of retrieving the data , returns a grid of Book list consisting of 2 columns
  return (
    <BookList
      onRefresh={refetch}
      overrideContainerStyle={themedStyles.container}
      data={data?.items ?? []}
      onItemPress={onItemPress}
    />
  );
};

export default HomeScreen;
