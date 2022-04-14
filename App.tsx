import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";

import { RootNavigator } from "./views/screens";
import { navigationRef } from "./views/screens/NavigationContainerRef";
import { ThemeProvider } from "@rneui/themed";
import Theme from "./views/Theme";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={Theme}>
        <NavigationContainer ref={navigationRef}>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
