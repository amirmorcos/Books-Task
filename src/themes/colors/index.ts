import { DefaultTheme } from "@react-navigation/native";
import { AppColors } from "./types";

const Colors: AppColors = {
  ...DefaultTheme.colors,
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  YELLLOW: "#FBAE05",
  ORANGE: "#FF8C39",
  RED: "#EF5A56",
  BLUE: "#3784FB",
  GREYSCALE: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#E8E8E8",
    300: "#D6D6D6",
    400: "B8B8B8",
    500: "#A6A6A6",
    600: "#7A7A7A",
    700: "#454545",
    800: "#292929",
    900: "#121212",
  },
  PRIMARY: {
    50: "#FAF9FD",
    100: "#E5DEF8",
    200: "#CABCEF",
    300: "#A28CE0",
    400: "#7D64C3",
    500: "#54408C",
    600: "#352368",
    700: "#251554",
    800: "#10052F",
    900: "#09031B",
  },
};

export default Colors;
