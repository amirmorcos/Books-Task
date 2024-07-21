import { StackNavigationOptions } from "@react-navigation/stack";
import { useAppTheme } from "./useAppTheme";
import { Typography } from "themes/fonts";
import { TouchableOpacity, ViewStyle } from "react-native";
import HomeSearchIcon from "assets/icons/HomeSearchIcon";
import { scale } from "react-native-size-matters/extend";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import ActiveHomeIcon from "assets/icons/ActiveHomeIcon";
import HomeIcon from "assets/icons/HomeIcon";
import ActiveFavoriteIcon from "assets/icons/ActiveFavoriteIcon";
import FavoriteIcon from "assets/icons/FavoriteIcon";

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

  const tabOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: false,
  };

  const homeTabOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({ focused }) => (focused ? <ActiveHomeIcon /> : <HomeIcon />),
  };

  const favoritesTabOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({ focused }) =>
      focused ? <ActiveFavoriteIcon /> : <FavoriteIcon />,
  };

  return {
    homeOptions,
    commonOptions,
    homeTabOptions,
    tabOptions,
    favoritesTabOptions,
  };
};
