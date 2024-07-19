import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";

export type InputProps = TextInputProps & {
  leftIcon?: React.ReactNode;
  overrideInputStyle?: StyleProp<TextStyle>;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
