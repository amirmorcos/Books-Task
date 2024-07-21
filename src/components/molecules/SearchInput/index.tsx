import { Input } from "atoms/index";
import { useAppTheme } from "hooks/useAppTheme";
import React from "react";
import SearchIcon from "../../../../assets/icons/SearchIcon";
import styles from "./styles";
import { SearchInputProps } from "./types";

const SearchInput = ({
  onSearch,
  overrideContainerStyle,
  ...props
}: SearchInputProps) => {
  const { colors } = useAppTheme();
  const themedStyles = styles(colors);

  return (
    <Input
      {...props}
      onChangeText={onSearch}
      placeholder="Search"
      overrideInputStyle={themedStyles.input}
      overrideContainerStyle={overrideContainerStyle}
      leftIcon={<SearchIcon />}
    />
  );
};

export default SearchInput;
