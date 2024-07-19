import { useAppTheme } from "hooks/useAppTheme";
import React, { useState } from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  View,
} from "react-native";
import styles from "./styles";
import { InputProps } from "./types";

const Input = ({
  overrideContainerStyle,
  overrideInputStyle,
  leftIcon,
  onFocus,
  onBlur,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const { colors } = useAppTheme();
  const themedStyles = styles(colors);

  const onInputFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const onInputBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <View
      style={[
        themedStyles.container,
        isFocused && themedStyles.focused,
        overrideContainerStyle,
      ]}
    >
      {leftIcon}
      <TextInput
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        style={[themedStyles.input, overrideInputStyle]}
        {...props}
      />
    </View>
  );
};

export default Input;
