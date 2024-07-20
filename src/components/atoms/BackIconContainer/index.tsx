import BackIcon from "assets/icons/BackIcon";
import { useAppTheme } from "hooks/useAppTheme";
import { useAppNavigation } from "navigation/types";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import type { BackIconContainerProps } from "./types";

const BackIconContainer = ({
  overrideContainerStyle,
}: BackIconContainerProps) => {
  const { goBack } = useAppNavigation();
  const { colors } = useAppTheme();

  const themedStyles = styles(colors);
  return (
    <TouchableOpacity
      style={[themedStyles.container, overrideContainerStyle]}
      onPress={goBack}
    >
      <BackIcon />
    </TouchableOpacity>
  );
};

export default BackIconContainer;
