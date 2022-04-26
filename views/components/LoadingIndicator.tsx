import React from "react";
import { Text } from "react-native";

import Flex from "./Flex";

export default function LoadingIndicator() {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Text>Loading...</Text>
    </Flex>
  );
}
