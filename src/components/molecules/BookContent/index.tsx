import { useAppTheme } from "hooks/useAppTheme";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { BookContentProps } from "./types";

const BookContent = ({ title, authors }: BookContentProps) => {
  const { colors } = useAppTheme();
  const themedStyles = styles(colors);

  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.title} numberOfLines={2} ellipsizeMode="tail">
        {title}
      </Text>
      <View style={themedStyles.bottomContainer}>
        <View style={themedStyles.authorContainer}>
          {authors.map((author) => (
            <Text key={author} style={themedStyles.author}>
              {author}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default BookContent;
