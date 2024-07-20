import StarIcon from "assets/icons/StarIcon";
import { useAppTheme } from "hooks/useAppTheme";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import type { BookInfoProps } from "./types";

const BookInfo = ({ categories, pageCount, rating }: BookInfoProps) => {
  const { colors } = useAppTheme();
  const themedStyles = styles(colors);
  return (
    <View style={themedStyles.container}>
      {rating && (
        <View style={themedStyles.ratingContainer}>
          <StarIcon />
          <Text style={themedStyles.rating}>{rating.toFixed(1)}</Text>
        </View>
      )}
      <View style={themedStyles.categoriesContainer}>
        {categories.map((category) => (
          <Text key={category} style={themedStyles.category}>
            {category}
          </Text>
        ))}
      </View>
      <View style={themedStyles.pageContainer}>
        <Text>{pageCount} pages</Text>
      </View>
    </View>
  );
};

export default BookInfo;
