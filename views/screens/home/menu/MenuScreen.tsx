import React from "react";
import { Button, SafeAreaView, Text } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { MenuNavigatorParamList } from "../../NavigationTypes";

type Props = NativeStackScreenProps<MenuNavigatorParamList, "MenuScreen">;

export default function MenuScreen(props: Props) {
  return (
    <SafeAreaView>
      <Text>Menu</Text>
      <Button title="Groups" onPress={navigateToGroupsScreen} />
    </SafeAreaView>
  );

  function navigateToGroupsScreen() {
    props.navigation.navigate("GroupsScreen");
  }
}
