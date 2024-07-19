import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type ButtonProps = {
  onPress: () => void;
  label: string;
  size?: "large" | "small" | "xsmall";
  variant?: "primary" | "secondary";
  overrideContainerStyle?: StyleProp<ViewStyle>;
  overrideTitleStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
};
