import { useAppTheme } from "hooks/useAppTheme";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import type { ButtonProps } from "./types";

const Button = ({
  onPress,
  size = "large",
  variant = "primary",
  label,
  overrideContainerStyle,
  overrideTitleStyle,
  disabled,
}: ButtonProps) => {
  const { colors } = useAppTheme();
  const themedStyles = styles(colors);
  const { fontFamily, fontSize, ...sizeStyle } = themedStyles[size];
  const { color, ...variantStyle } = themedStyles[variant];

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        themedStyles.container,
        sizeStyle,
        variantStyle,
        disabled && themedStyles.disabled,
        overrideContainerStyle,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          { color, fontSize, fontFamily },
          disabled && themedStyles.disabledText,
          overrideTitleStyle,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
