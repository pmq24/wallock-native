import React from "react";

import { Button, Icon, Text } from "@rneui/themed";
import { Flex } from ".";

export default function IconPicker() {
  return (
    <Flex alignItems="center">
      <Button
        icon={<Icon name="question" size={24} />}
        buttonStyle={{ width: 48, height: 48, borderRadius: 50 }}
      />
      <Text>Pick icon</Text>
    </Flex>
  );
}
