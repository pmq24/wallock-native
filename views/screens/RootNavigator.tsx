import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootNavigatorParamList } from "./NavigationTypes";
import { HomeNavigator, NewGroupScreen } from ".";

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
      <Stack.Screen name="NewGroupScreen" component={NewGroupScreen} />
    </Stack.Navigator>
  );
}
