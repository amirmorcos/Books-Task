import StarIcon from "assets/icons/StarIcon";
import BackIconContainer from "atoms/BackIconContainer";
import { useAppTheme } from "hooks/useAppTheme";
import React from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters/extend";
import { Typography } from "themes/fonts";
import { Images } from "themes/images";
import styles from "./styles";

const DetailsScreen = () => {
  const { colors } = useAppTheme();

  const themedStyles = styles(colors);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={themedStyles.container}
      contentContainerStyle={themedStyles.scrollContent}
    >
      <ImageBackground
        style={themedStyles.imgBg}
        imageStyle={themedStyles.imgBgImage}
        source={Images.cover}
      >
        <BackIconContainer
          overrideContainerStyle={{
            marginTop: 50,
            marginBottom: 10,
            marginStart: 20,
          }}
        />

        <View style={themedStyles.imgBgContent}>
          <Text style={themedStyles.bookTitle}>
            React native for mobile development
          </Text>
          <Text style={themedStyles.bookAuthor}>Akshat Paul</Text>
          <Image source={Images.book} />
        </View>
      </ImageBackground>
      <View style={themedStyles.bookContentContainer}>
        <View
          style={{
            height: verticalScale(16),
            backgroundColor: "#FFF8E0",
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingHorizontal: scale(4),
          }}
        >
          <StarIcon />
          <Text style={{ ...Typography.body.smallBold, marginStart: 5 }}>
            4.8
          </Text>
        </View>
        <View
          style={{
            height: verticalScale(16),
            // width: scale(37),
            backgroundColor: "#CBF5FF",
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ ...Typography.body.smallBold }}>Fantasy</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text>432 pages</Text>
        </View>
      </View>
      <View style={themedStyles.detailsContainer}>
        <Text style={themedStyles.description}>Description</Text>
        <Text>
          Develop native iOS and Android apps with ease using React Native.
          Learn by doing through an example-driven approach, and have a
          substantial running app at the end of each chapter. This second
          edition is fully updated to include ES7 (ECMAScript 7), the latest
          version of React Native (including Redux), and development on Android.
          You will start by setting up React Native and exploring the anatomy of
          React Native apps. You'll then move on to Redux data flow, how it
          differs from flux, and how you can include it in your React Native
          project to solve state management differently and efficiently. You
          will also learn how to boost your development by including popular
          packages developed by the React Native community that will help you
          write less; do more. Finally, you'll learn to how write test cases
          using Jest and submit your application to the App Store. React Native
          challenges the status quo of native iOS and Android development with
          revolutionary components, asynchronous execution, unique methods for
          touch handling, and much more. This book reveals the the path-breaking
          concepts of React.js and acquaints you with the React way of thinking
          so you can learn to create stunning user interfaces. What You'll Learn
          Build stunning iOS and Android applications Understand the Redux
          design pattern and use it in your project Interact with iOS and
          android device capabilities such as addressbook, camera, GPS and more
          with your apps Test and launch your application to the App StoreWho
          This Book Is For Anyone with JavaScript experience who wants to build
          native mobile applications but dreads the thought of programming in
          Objective-C or Java. Developers who have experience with JavaScript
          but are new or not acquainted to React Native or ReactJS.
        </Text>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
