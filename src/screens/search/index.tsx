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

  // make enable property with false to make it lazy query (call api whenever needed)
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["books", searchText],
    queryFn: ({ queryKey }) => {
      return fetchBooks(queryKey[1]);
    },
    enabled: false,
  });

  // The purpose of the debouce callback is to delay invoking the api call to give the user the time needed to type in the input
  const apiDebounced = useDebouncedCallback(refetch, 1000);

  // This search function is storing the user input and calls the api
  const onSearch = (text: string) => {
    setSearchText(text);
    apiDebounced();
  };

  // the function navigates to details screen with proper book item
  const onItemPress = (item: Book) => {
    navigation.navigate("Details", { item });
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
    <View style={themedStyles.container}>
      <View style={themedStyles.searchContainer}>
        <SearchInput value={searchText} onSearch={onSearch} />
      </View>
      <BookList data={data?.items ?? []} onItemPress={onItemPress} />
    </View>
  );
};

export default SearchScreen;
