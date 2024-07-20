import { BookItem } from "molecules/index";
import React from "react";
import { FlatList } from "react-native";
import styles from "./styles";
import { BookListProps } from "./types";

const BookList = ({
  data,
  onItemPress,
  overrideContainerStyle,
}: BookListProps) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      numColumns={2}
      style={overrideContainerStyle}
      data={data}
      contentContainerStyle={styles.content}
      renderItem={({ item }) => <BookItem onPress={() => onItemPress(item)} />}
    />
  );
};

export default BookList;
