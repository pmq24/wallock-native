import React from "react";

import { Button, Icon } from "@rneui/themed";

export default function IconPicker() {
  return (
    <Button
      icon={<Icon name="question" size={16} />}
      buttonStyle={{ width: 40, height: 40, borderRadius: 100 }}
    />
  );
}
