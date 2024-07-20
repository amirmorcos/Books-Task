import { StyleProp, ViewStyle } from "react-native";

export type BookListProps = {
  data: [];
  onItemPress: (item: any) => void;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
