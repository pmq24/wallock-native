import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Menu } from "./menu";

namespace Home {
  const Tab = createBottomTabNavigator();

  export function Screen() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name={Menu.NAME} component={Menu.Screen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default Home;
