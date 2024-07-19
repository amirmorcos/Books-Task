export type AppColors = {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
} & {
  WHITE: string;
  YELLLOW: string;
  ORANGE: string;
  RED: string;
  BLUE: string;
  GREYSCALE: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  PRIMARY: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
};

export type AppTheme = {
  dark: boolean;
  colors: AppColors;
};
