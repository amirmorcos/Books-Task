import { Book } from "models/Book";
import { FlatListProps, StyleProp, ViewStyle } from "react-native";

export type BookListProps = {
  data: Book[];
  onItemPress: (item: any) => void;
  onRefresh?: () => void;
  emptyMessage?: string;
  overrideContainerStyle?: StyleProp<ViewStyle>;
  ListHeaderComponent?: () => React.ReactElement;
};
