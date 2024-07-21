import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import Colors from "themes/colors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useNavigationOptions } from "../hooks/useNavigationOptions";
import BottomTabNavigation from "./bottomNavigation";

const queryClient = new QueryClient();

const MainNavigation = () => {
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
        <BottomTabNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default MainNavigation;
