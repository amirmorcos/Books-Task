import { Input } from "atoms/index";
import { useAppTheme } from "hooks/useAppTheme";
import React from "react";
import SearchIcon from "../../../../assets/icons/SearchIcon";
import styles from "./styles";
import { SearchInputProps } from "./types";

const SearchInput = ({
  onSearch,
  overrideContainerStyle,
}: SearchInputProps) => {
  const { colors } = useAppTheme();
  const themedStyles = styles(colors);

  return (
    <Input
      placeholder="Search"
      overrideInputStyle={themedStyles.input}
      overrideContainerStyle={overrideContainerStyle}
      leftIcon={<SearchIcon />}
    />
  );
};

export default SearchInput;
