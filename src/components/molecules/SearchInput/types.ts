import { StyleProp, ViewStyle } from "react-native";

export type SearchInputProps = {
  onSearch: (text: string) => void;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
