import React, { useLayoutEffect } from "react";
import { Button, SafeAreaView, View } from "react-native";
import { Flex, GroupPicker, IconPicker, TextField } from "../components";
import { RootNavigatorScreenProps } from "./NavigationTypes";

type Props = RootNavigatorScreenProps<"NewGroupScreen">;

export default function NewGroupScreen(props: Props) {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: "New group",
      headerRight: () => <Button title="Save" />,
    });
  });

  return (
    <SafeAreaView style={{ margin: 16 }}>
      <Flex direction="row" justifyContent="space-between">
        <IconPicker />
        <View style={{ flex: 1 }}>
          <TextField label="Group name" />
        </View>
      </Flex>
      <GroupPicker label="Parent group" />
    </SafeAreaView>
  );
}
