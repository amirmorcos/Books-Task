import { useAppTheme } from "hooks/useAppTheme";
import BookContent from "molecules/BookContent";
import BookImage from "molecules/BookImage";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import { BookItemProps } from "./types";

const BookItem = ({ onPress, item }: BookItemProps) => {
  const { colors } = useAppTheme();
  const themedStyles = styles(colors);

  return (
    <TouchableOpacity onPress={onPress} style={themedStyles.container}>
      <BookImage image={item.volumeInfo.imageLinks.thumbnail} />
      <BookContent
        title={item.volumeInfo.title}
        authors={item.volumeInfo.authors}
      />
    </TouchableOpacity>
  );
};

export default BookItem;
