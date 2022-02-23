import React, { useLayoutEffect } from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Button, SafeAreaView } from "react-native";
import { Groups } from ".";

namespace Menu {
  export const NAME = "Menu";

  type ScreensParams = {
    Main: Main.Param;
    Groups: Groups.Param;
  };

  const Stack = createNativeStackNavigator<ScreensParams>();

  export function Screen() {
    return (
      <Stack.Navigator initialRouteName={Main.NAME}>
        <Stack.Screen name={Main.NAME} component={Main.Screen} />
        <Stack.Screen name={Groups.NAME} component={Groups.Screen} />
      </Stack.Navigator>
    );
  }

  export type NavProp = NativeStackNavigationProp<ScreensParams>;
}

namespace Main {
  export const NAME = "Main";

  export type Param = undefined;

  type ScreenProp = {
    navigation: Menu.NavProp;
  };

  export function Screen({ navigation }: ScreenProp) {
    return (
      <SafeAreaView>
        <Button
          title="Categories"
          onPress={() => navigation.navigate(Groups.NAME)}
        />
      </SafeAreaView>
    );
  }
}

export default Menu;
