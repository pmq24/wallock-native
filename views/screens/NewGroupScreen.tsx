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
    <SafeAreaView style={{ padding: 24 }}>
      <IconPicker />
      <TextField label="Group name" />
      <GroupPicker label="Parent group" />
    </SafeAreaView>
  );
}
