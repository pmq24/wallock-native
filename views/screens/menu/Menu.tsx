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

  export type NavProp = NativeStackNavigationProp<ScreensParams>;

  type ScreenProp = {
    navigation: NavProp;
  };

  export function Screen({ navigation }: ScreenProp) {
    useLayoutEffect(() => hideHeader());

    return (
      <Stack.Navigator initialRouteName={Main.NAME}>
        <Stack.Screen name={Main.NAME} component={Main.Screen} />
        <Stack.Screen name={Groups.NAME} component={Groups.Screen} />
      </Stack.Navigator>
    );

    function hideHeader() {
      navigation.setOptions({ headerShown: false });
    }
  }
}

export default Menu;

namespace Main {
  export const NAME = "Main";

  export type Param = undefined;

  type ScreenProp = {
    navigation: Menu.NavProp;
  };

  export function Screen({ navigation }: ScreenProp) {
    useLayoutEffect(() => setHeaderTitle("Menu"));
    return (
      <SafeAreaView>
        <Button
          title="Groups"
          onPress={() => navigation.navigate(Groups.NAME)}
        />
      </SafeAreaView>
    );

    function setHeaderTitle(title: string) {
      navigation.setOptions({ headerTitle: title });
    }
  }
}
