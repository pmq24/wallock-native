import React, { createContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";

import { RootNavigator } from "./views/screens";
import { navigationRef } from "./views/screens/NavigationContainerRef";
import { ThemeProvider } from "@rneui/themed";
import Theme from "./views/Theme";
import VaultContext from "./model/VaultContext";
import Vault from "./model/Vault";

export default function App() {
  return (
    <VaultContext.Provider value={new Vault("App Vault")}>
      <SafeAreaProvider>
        <ThemeProvider theme={Theme}>
          <NavigationContainer ref={navigationRef}>
            <RootNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </VaultContext.Provider>
  );
}
