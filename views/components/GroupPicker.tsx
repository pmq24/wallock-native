import { Input } from "@rneui/themed";
import React from "react";
import NavigationContainerRef from "../screens/NavigationContainerRef";

type Props = {
  label: string;
  onPicked?: (groupName: string) => void;
  onBlur?: (e: any) => void;
  value?: string;
};

export default function GroupPicker(props: Props) {
  return (
    <Input
      placeholder={props.label}
      shake={() => {}}
      onBlur={props.onBlur}
      value={props.value}
      onFocus={() => {
        NavigationContainerRef.navigate("PickGroupScreen", {
          onPicked: props.onPicked,
        });
      }}
    />
  );
}
