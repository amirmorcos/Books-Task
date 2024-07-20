import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigationOptions } from "hooks/useNavigationOptions";
import React from "react";
import HomeScreen from "screens/home";
import Colors from "themes/colors";
import { RootStackParamList } from "./types";

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  const { commonOptions, homeOptions } = useNavigationOptions();

  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...Colors,
    },
  };

  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator screenOptions={commonOptions}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={homeOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
