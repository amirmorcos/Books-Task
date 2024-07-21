import BackIconContainer from "atoms/BackIconContainer";
import { useAppTheme } from "hooks/useAppTheme";
import BookActions from "molecules/BookActions";
import BookInfo from "molecules/BookInfo";
import { useAppRoute } from "navigation/types";
import React from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import { usefavoritesStore } from "store/index";
import { fixImageProtocol } from "utils/constants";
import styles from "./styles";
import FastImage from "react-native-fast-image";

const DetailsScreen = () => {
  const { colors } = useAppTheme();
  const { params } = useAppRoute();
  const { addFavorites, userFavorites, removeFavorites } = usefavoritesStore(
    (state) => state
  );

  const bookItem = params.item ?? {};
  const isFavorite = !!userFavorites.find((item) => item.id == bookItem.id);
  const themedStyles = styles(colors);

  const onItemFavorite = () => {
    const message = isFavorite
      ? "Removed from Favorites"
      : "Added to Favorites";

    if (!isFavorite) addFavorites(bookItem);
    else {
      removeFavorites(bookItem.id);
    }
    Toast.show({
      type: "success",
      text1: message,
      position: "bottom",
    });
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={themedStyles.container}
        contentContainerStyle={themedStyles.scrollContent}
        bounces={false}
      >
        <ImageBackground
          style={themedStyles.imgBg}
          imageStyle={themedStyles.imgBgImage}
          source={{
            uri: fixImageProtocol(bookItem.volumeInfo.imageLinks.thumbnail),
          }}
        >
          <BackIconContainer overrideContainerStyle={themedStyles.backIcon} />

          <View style={themedStyles.imgBgContent}>
            <Text
              style={themedStyles.bookTitle}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {bookItem.volumeInfo.title}
            </Text>
            <View style={themedStyles.bookAuthorContainer}>
              {bookItem.volumeInfo.authors.map((author, index) => (
                <React.Fragment key={author}>
                  <Text style={themedStyles.bookAuthor}>{author}</Text>
                  {index < bookItem.volumeInfo.authors.length - 1 && (
                    <Text> - </Text>
                  )}
                </React.Fragment>
              ))}
            </View>

            <FastImage
              resizeMode="contain"
              source={{
                uri: fixImageProtocol(bookItem.volumeInfo.imageLinks.thumbnail),
              }}
              style={themedStyles.thumbnail}
            />
          </View>
        </ImageBackground>
        <BookInfo
          categories={bookItem.volumeInfo.categories}
          pageCount={bookItem.volumeInfo.pageCount}
          rating={bookItem.volumeInfo.ratingsCount}
        />
        <View style={themedStyles.detailsContainer}>
          <Text style={themedStyles.description}>Description</Text>
          <Text>
            {bookItem.volumeInfo.description ?? "No Description found"}
          </Text>
        </View>
      </ScrollView>

      <BookActions isFavorite={isFavorite} onFavoriteItem={onItemFavorite} />
    </>
  );
};

export default DetailsScreen;
