import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MenuScreen, TransactionsScreen } from "..";

const Tab = createBottomTabNavigator();

export default function HomeNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TransactionsScreen" component={TransactionsScreen} />
      <Tab.Screen name="MenuScreen" component={MenuScreen} />
    </Tab.Navigator>
  );
}
