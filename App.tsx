import React, { createContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";

import { RootNavigator } from "./views/screens";
import NavigationContainerRef from "./views/screens/NavigationContainerRef";
import { ThemeProvider } from "@rneui/themed";
import Theme from "./views/Theme";
import VaultContextProvider from "./model/VaultContextProvider";

export default function App() {
  return (
    <VaultContextProvider vaultName="app-database">
      <SafeAreaProvider>
        <ThemeProvider theme={Theme}>
          <NavigationContainer ref={NavigationContainerRef.navigationRef}>
            <RootNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </VaultContextProvider>
  );
}
