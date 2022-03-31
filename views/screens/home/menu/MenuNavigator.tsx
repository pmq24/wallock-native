import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MenuNavigatorParamList } from "../../NavigationTypes";
import { GroupsScreen, MenuScreen } from "../..";

const Stack = createNativeStackNavigator<MenuNavigatorParamList>();

export default function MenuNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MenuScreen" component={MenuScreen} />
      <Stack.Screen name="GroupsScreen" component={GroupsScreen} />
    </Stack.Navigator>
  );
}
