import { Book } from "models/Book";
import { StyleProp, ViewStyle } from "react-native";

export type BookListProps = {
  data: Book[];
  onItemPress: (item: any) => void;
  onRefresh?: () => void;
  emptyComponent?: () => React.ReactElement;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
