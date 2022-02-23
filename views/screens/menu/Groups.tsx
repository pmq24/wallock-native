import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

namespace Groups {
  export const NAME = "Groups";
  export type Param = undefined;
  export function Screen() {
    return (
      <SafeAreaView>
        <Text>Group</Text>
      </SafeAreaView>
    );
  }
}

export default Groups;
