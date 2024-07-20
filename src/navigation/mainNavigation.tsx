import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { HomeScreen, DetailsScreen } from "screens/index";
import Colors from "themes/colors";
import { RootStackParamList } from "./types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useNavigationOptions } from "../hooks/useNavigationOptions";

const Stack = createStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={AppTheme}>
        <Stack.Navigator screenOptions={commonOptions}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
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
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default MainNavigation;
