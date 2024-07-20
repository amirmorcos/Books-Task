import { Image } from "react-native";

export const Images = {
  book: Image.resolveAssetSource(
    require("../../../assets/images/content.jpeg")
  ),
  cover: Image.resolveAssetSource(require("../../../assets/images/cover.jpeg")),
};
