import { createStackNavigator } from "@react-navigation/stack";
import { DetailsScreen, FavoritesScreen } from "screens/index";
import { useNavigationOptions } from "hooks/useNavigationOptions";

const Stack = createStackNavigator();

const FavoritesStackNavigation = () => {
  const { commonOptions, homeOptions } = useNavigationOptions();
  return (
    <Stack.Navigator screenOptions={commonOptions}>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={homeOptions}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: false,
        }}
        // options={homeOptions}
      />
    </Stack.Navigator>
  );
};

export default FavoritesStackNavigation;
