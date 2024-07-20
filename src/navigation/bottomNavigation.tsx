import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ActiveFavoriteIcon from "assets/icons/ActiveFavoriteIcon";
import ActiveHomeIcon from "assets/icons/ActiveHomeIcon";
import FavoriteIcon from "assets/icons/FavoriteIcon";
import HomeIcon from "assets/icons/HomeIcon";
import FavoritesStackNavigation from "./favoritesStackNavigation";
import HomeStackNavigation from "./homeStackNavigation";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStackNavigation}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveHomeIcon /> : <HomeIcon />,
        }}
      />
      <BottomTab.Screen
        name="FavoritesStack"
        component={FavoritesStackNavigation}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveFavoriteIcon /> : <FavoriteIcon />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
