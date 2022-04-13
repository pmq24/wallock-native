import React, { useLayoutEffect } from "react";
import { Button, SafeAreaView, Text } from "react-native";

import { GroupTree } from "../../../components";
import { MenuNavigatorScreenProps } from "../../NavigationTypes";

type Props = MenuNavigatorScreenProps<"GroupsScreen">;

export default function GroupsScreen(props: Props) {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => <Button title="New group" />,
    });
  }, [props.navigation]);

  return (
    <SafeAreaView>
      <Text>Groups</Text>
      <GroupTree />
    </SafeAreaView>
  );
}
