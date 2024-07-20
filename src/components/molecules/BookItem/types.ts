import { Book } from "models/Book";

export type BookItemProps = {
  onPress: () => void;
  item: Book;
};
