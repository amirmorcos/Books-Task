import { useAppTheme } from "hooks/useAppTheme";
import BookContent from "molecules/BookContent";
import BookImage from "molecules/BookImage";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import { BookItemProps } from "./types";

const BookItem = ({ onPress }: BookItemProps) => {
  const { colors } = useAppTheme();
  const themedStyles = styles(colors);

  return (
    <TouchableOpacity onPress={onPress} style={themedStyles.container}>
      <BookImage />
      <BookContent />
    </TouchableOpacity>
  );
};

export default BookItem;
