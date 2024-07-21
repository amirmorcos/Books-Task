import { createStackNavigator } from "@react-navigation/stack";
import { DetailsScreen, FavoritesScreen } from "screens/index";
import { useNavigationOptions } from "hooks/useNavigationOptions";
import { FavoritesStackParamList } from "./types";

const Stack = createStackNavigator<FavoritesStackParamList>();

const FavoritesStackNavigation = () => {
  const { commonOptions, detailsOptions } = useNavigationOptions();
  return (
    <Stack.Navigator screenOptions={commonOptions}>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={detailsOptions}
      />
    </Stack.Navigator>
  );
};

export default FavoritesStackNavigation;
