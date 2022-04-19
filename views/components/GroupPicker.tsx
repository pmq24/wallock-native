import { Input } from "@rneui/themed";
import React from "react";
import * as NavigationContainerRef from "../screens/NavigationContainerRef";

type Props = {
  label: string;
};

export default function GroupPicker(props: Props) {
  return (
    <Input
      placeholder={props.label}
      shake={() => {}}
      onFocus={() => {
        NavigationContainerRef.navigate("PickGroupScreen", undefined);
      }}
    />
  );
}
