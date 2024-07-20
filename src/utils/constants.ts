import { Platform } from "react-native";

export const ApiUrls = {
  BASE_URL: "https://www.googleapis.com/books/v1/",
  GET_BOOKS_LIST: "volumes",
};

export const fixImageProtocol = (image: string) => {
  return image.replace("http", "https");
};

export const shadowing = Platform.select({
  android: {
    shadowColor: "#000",
    elevation: 5,
  },
  ios: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
