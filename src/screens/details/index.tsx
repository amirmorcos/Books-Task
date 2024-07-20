import BackIconContainer from "atoms/BackIconContainer";
import { useAppTheme } from "hooks/useAppTheme";
import React from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters/extend";
import styles from "./styles";
import { useAppRoute } from "navigation/types";
import BookInfo from "molecules/BookInfo";
import { fixImageProtocol } from "utils/constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BookActions from "molecules/BookActions";

const DetailsScreen = () => {
  const { colors } = useAppTheme();
  const { params } = useAppRoute();
  const bookItem = params.item ?? {};

  const themedStyles = styles(colors);

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

            <Image
              resizeMode="contain"
              source={{
                uri: fixImageProtocol(bookItem.volumeInfo.imageLinks.thumbnail),
              }}
              style={{
                height: verticalScale(150),
                width: scale(120),
              }}
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
          <Text>{bookItem.volumeInfo.description}</Text>
        </View>
      </ScrollView>
      <BookActions />
    </>
  );
};

export default DetailsScreen;
