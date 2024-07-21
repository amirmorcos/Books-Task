import { StyleProp, TextInputProps, ViewStyle } from "react-native";

export type SearchInputProps = TextInputProps & {
  onSearch: (text: string) => void;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
