import { createStackNavigator } from "@react-navigation/stack";
import { useNavigationOptions } from "hooks/useNavigationOptions";
import { DetailsScreen, HomeScreen, SearchScreen } from "screens/index";
import { RootStackParamList } from "./types";

const Stack = createStackNavigator<RootStackParamList>();

const HomeStackNavigation = () => {
  const { commonOptions, homeOptions, detailsOptions } = useNavigationOptions();
  return (
    <Stack.Navigator screenOptions={commonOptions}>
      <Stack.Screen name="Home" component={HomeScreen} options={homeOptions} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={detailsOptions}
      />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
