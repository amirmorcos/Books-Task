import { StackNavigationOptions } from "@react-navigation/stack";
import { useAppTheme } from "./useAppTheme";
import { Typography } from "themes/fonts";
import { TouchableOpacity, ViewStyle } from "react-native";
import HomeSearchIcon from "assets/icons/HomeSearchIcon";
import { scale } from "react-native-size-matters/extend";

export const useNavigationOptions = () => {
  const { colors } = useAppTheme();

  const searchIconStyle: ViewStyle = {
    marginEnd: scale(16),
  };

  const onSearchIconPress = () => {};

  const commonOptions: StackNavigationOptions = {
    headerShadowVisible: false,
    headerTitleStyle: {
      ...Typography.heading.h4,
      color: colors.BLACK,
    },
  };

  const homeOptions: StackNavigationOptions = {
    headerRight: () => (
      <TouchableOpacity onPress={onSearchIconPress} style={searchIconStyle}>
        <HomeSearchIcon />
      </TouchableOpacity>
    ),
  };

  return {
    homeOptions,
    commonOptions,
  };
};
