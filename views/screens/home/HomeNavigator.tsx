import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeNavigatorParamList } from "../NavigationTypes";
import { MenuNavigator, TransactionsScreen } from "..";

const Tab = createBottomTabNavigator<HomeNavigatorParamList>();

export default function HomeNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TransactionsScreen" component={TransactionsScreen} />
      <Tab.Screen name="MenuNavigator" component={MenuNavigator} />
    </Tab.Navigator>
  );
}
