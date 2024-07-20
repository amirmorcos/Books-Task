import { useFocusEffect } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { useAppTheme } from "hooks/useAppTheme";
import { Book } from "models/Book";
import { useAppNavigation } from "navigation/types";
import { BookList } from "organisms/index";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import BooksApi from "../../services/books";
import styles from "./styles";

const HomeScreen = () => {
  const { colors } = useAppTheme();
  const { navigate } = useAppNavigation();

  const focusedRef = React.useRef(true);

  const fetchBooks = async () => {
    const data = await BooksApi.getBooksList();
    return data;
  };

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

  const onItemPress = (item: Book) => {
    navigate("Details", { item });
  };

  if (isLoading) {
    return (
      <View style={themedStyles.loadingContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <BookList
      onRefresh={() => refetch()}
      overrideContainerStyle={themedStyles.container}
      data={data?.items ?? []}
      onItemPress={onItemPress}
    />
  );
};

export default HomeScreen;
