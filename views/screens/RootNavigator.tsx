import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeNavigator } from ".";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
    </Stack.Navigator>
  );
}
