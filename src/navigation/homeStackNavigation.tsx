import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, DetailsScreen } from "screens/index";
import { RootStackParamList } from "./types";
import { useNavigationOptions } from "hooks/useNavigationOptions";

const Stack = createStackNavigator<RootStackParamList>();

const HomeStackNavigation = () => {
  const { commonOptions, homeOptions } = useNavigationOptions();
  return (
    <Stack.Navigator screenOptions={commonOptions}>
      <Stack.Screen name="Home" component={HomeScreen} options={homeOptions} />
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

export default HomeStackNavigation;
