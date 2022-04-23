import { Button, ButtonProps, Input } from "@rneui/themed";
import React from "react";
import { TextInput } from "react-native-paper";
import NavigationContainerRef from "../screens/NavigationContainerRef";

type Props = {
  label: string;
  onPicked?: (groupName: string) => void;
  onBlur?: (e: any) => void;
  value?: string;
};

export default function GroupPicker(props: Props) {
  return (
    <TextInput
      label={props.label}
      value={props.value}
      onBlur={props.onBlur}
      onFocus={() => {
        NavigationContainerRef.navigate("PickGroupScreen", {
          onPicked: props.onPicked,
        });
      }}
    />
  );
}
