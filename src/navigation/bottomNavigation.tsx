import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoritesStackNavigation from "./favoritesStackNavigation";
import HomeStackNavigation from "./homeStackNavigation";
import { MainStackParamList } from "./types";
import { useNavigationOptions } from "hooks/useNavigationOptions";

const BottomTab = createBottomTabNavigator<MainStackParamList>();

const BottomTabNavigation = () => {
  const { tabOptions, homeTabOptions, favoritesTabOptions } =
    useNavigationOptions();
  return (
    <BottomTab.Navigator screenOptions={tabOptions}>
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStackNavigation}
        options={homeTabOptions}
      />
      <BottomTab.Screen
        name="FavoritesStack"
        component={FavoritesStackNavigation}
        options={favoritesTabOptions}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
