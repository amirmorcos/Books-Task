import { useQuery } from "@tanstack/react-query";
import { useAppTheme } from "hooks/useAppTheme";
import { Book } from "models/Book";
import SearchInput from "molecules/SearchInput";
import { useAppNavigation } from "navigation/types";
import BookList from "organisms/BookList";
import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import BooksApi from "services/books";
import { useDebouncedCallback } from "use-debounce";
import styles from "./styles";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const navigation = useAppNavigation();
  const { colors } = useAppTheme();

  const themedStyles = styles(colors);

  const fetchBooks = async (search: string) => {
    const data = await BooksApi.getBooksList(search);
    return data;
  };
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["books", searchText],
    queryFn: ({ queryKey }) => {
      return fetchBooks(queryKey[1]);
    },
    enabled: false,
  });

  const apiDebounced = useDebouncedCallback(refetch, 1000);

  const onSearch = (text: string) => {
    setSearchText(text);
    apiDebounced();
  };

  const onItemPress = (item: Book) => {
    navigation.navigate("Details", { item });
  };

  if (isLoading) {
    return (
      <View style={themedStyles.loadingContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.searchContainer}>
        <SearchInput value={searchText} onSearch={onSearch} />
      </View>
      <BookList data={data?.items ?? []} onItemPress={onItemPress} />
    </View>
  );
};

export default SearchScreen;
