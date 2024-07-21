import { BookItem } from "molecules/index";
import React, { useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
import styles from "./styles";
import { BookListProps } from "./types";
import { useAppTheme } from "hooks/useAppTheme";

const BookList = ({
  data,
  onItemPress,
  onRefresh,
  emptyMessage,
  overrideContainerStyle,
  ListHeaderComponent,
}: BookListProps) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { colors } = useAppTheme();

  const themedStyles = styles(colors);

  const onDataRefresh = () => {
    if (onRefresh) {
      setIsRefreshing(true);
      onRefresh();
      setIsRefreshing(false);
    }
  };

  return (
    <FlatList
      ListHeaderComponent={ListHeaderComponent}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onDataRefresh} />
      }
      showsVerticalScrollIndicator={false}
      numColumns={2}
      style={overrideContainerStyle}
      data={data}
      contentContainerStyle={themedStyles.content}
      renderItem={({ item }) => (
        <BookItem item={item} onPress={() => onItemPress(item)} />
      )}
      ListEmptyComponent={() => (
        <View style={themedStyles.emptyContainer}>
          <Text>{emptyMessage}</Text>
        </View>
      )}
    />
  );
};

export default BookList;
