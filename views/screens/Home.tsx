import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { UserScreen } from ".";

namespace Home {
  const Tab = createBottomTabNavigator();

  export function Screen() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="User" component={UserScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default Home;
