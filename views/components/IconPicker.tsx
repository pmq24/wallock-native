import React from "react";

import { Button, Icon, Text } from "@rneui/themed";
import { Flex, Space } from ".";

export default function IconPicker() {
  return (
    <Space bottom={24}>
      <Flex alignItems="center">
        <Space bottom={8}>
          <Button
            icon={<Icon name="question" size={24} />}
            buttonStyle={{
              width: 56,
              height: 56,
              borderRadius: 50,
            }}
          />
        </Space>
        <Text>Pick icon</Text>
      </Flex>
    </Space>
  );
}
