import { useAppTheme } from "hooks/useAppTheme";
import { BookList } from "organisms/index";
import React from "react";
import styles from "./styles";

const HomeScreen = () => {
  const { colors } = useAppTheme();
  const themedStyles = styles(colors);
  const onItemPress = () => {};

  return (
    <BookList
      overrideContainerStyle={themedStyles.container}
      data={[1, 2, 3, 4, 5]}
      onItemPress={onItemPress}
    />
  );
};

export default HomeScreen;
