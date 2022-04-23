import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Provider as PaperProvider } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";

import { RootNavigator } from "./views/screens";
import NavigationContainerRef from "./views/screens/NavigationContainerRef";
import VaultContextProvider from "./model/VaultContextProvider";


export default function App() {
  return (
    <VaultContextProvider vaultName="app-database">
      <PaperProvider>
        <SafeAreaProvider>
          <NavigationContainer ref={NavigationContainerRef.navigationRef}>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </VaultContextProvider>
  );
}
