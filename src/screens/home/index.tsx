import { useAppTheme } from "hooks/useAppTheme";
import { BookList } from "organisms/index";
import React from "react";
import styles from "./styles";
import { useAppNavigation } from "navigation/types";

const HomeScreen = () => {
  const { colors } = useAppTheme();
  const { navigate } = useAppNavigation();

  const themedStyles = styles(colors);

  const onItemPress = () => {
    navigate("Details");
  };

  return (
    <BookList
      overrideContainerStyle={themedStyles.container}
      data={[1, 2, 3, 4, 5]}
      onItemPress={onItemPress}
    />
  );
};

export default HomeScreen;
