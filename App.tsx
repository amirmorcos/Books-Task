/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import "react-native-gesture-handler";

import MainNavigation from "navigation/mainNavigation";
import React from "react";

function App(): React.JSX.Element {
  if (__DEV__) {
    require("./ReactotronConfig");
  }
  return <MainNavigation />;
}

export default App;
