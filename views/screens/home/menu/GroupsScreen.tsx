import React from "react";
import { SafeAreaView, Text } from "react-native";

import { GroupTree } from "../../../components";

export default function GroupsScreen() {
  return (
    <SafeAreaView>
      <Text>Groups</Text>
      <GroupTree />
    </SafeAreaView>
  );
}
