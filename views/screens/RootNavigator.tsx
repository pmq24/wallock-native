import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootNavigatorParamList } from "./NavigationTypes";
import { HomeNavigator, NewGroupScreen, TestScreen } from ".";

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="TestScreen">
      <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
      <Stack.Screen name="NewGroupScreen" component={NewGroupScreen} />
      <Stack.Screen name="TestScreen" component={TestScreen} />
    </Stack.Navigator>
  );
}
