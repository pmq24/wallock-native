import React, { useLayoutEffect } from "react";
import { Button, SafeAreaView, Text } from "react-native";

import * as NavigationContainerRef from "../../NavigationContainerRef";
import { GroupTree } from "../../../components";
import { MenuNavigatorScreenProps } from "../../NavigationTypes";

type Props = MenuNavigatorScreenProps<"GroupsScreen">;

export default function GroupsScreen(props: Props) {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Button
          title="New group"
          onPress={() => {
            NavigationContainerRef.navigate("NewGroupScreen", undefined);
          }}
        />
      ),
    });
  }, [props.navigation]);

  return (
    <SafeAreaView>
      <Text>Groups</Text>
      <GroupTree />
    </SafeAreaView>
  );
}
