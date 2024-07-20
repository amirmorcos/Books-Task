import { BookItem } from "molecules/index";
import React, { useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import styles from "./styles";
import { BookListProps } from "./types";

const BookList = ({
  data,
  onItemPress,
  onRefresh,
  emptyComponent,
  overrideContainerStyle,
}: BookListProps) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onDataRefresh = () => {
    if (onRefresh) {
      setIsRefreshing(true);
      onRefresh();
      setIsRefreshing(false);
    }
  };

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onDataRefresh} />
      }
      showsVerticalScrollIndicator={false}
      numColumns={2}
      style={overrideContainerStyle}
      data={data}
      contentContainerStyle={styles.content}
      renderItem={({ item }) => (
        <BookItem item={item} onPress={() => onItemPress(item)} />
      )}
      ListEmptyComponent={emptyComponent}
    />
  );
};

export default BookList;
