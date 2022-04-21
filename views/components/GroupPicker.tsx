import { Button, ButtonProps, Input } from "@rneui/themed";
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
    <Button
      {...createStyle(props)}
      onBlur={props.onBlur}
      onPress={() => {
        NavigationContainerRef.navigate("PickGroupScreen", {
          onPicked: props.onPicked,
        });
      }}
    />
  );
}

function createStyle(props: Props): ButtonProps {
  return {
    title: props.value !== "" ? props.value : props.label,
    type: "outline",
    buttonStyle: {
      padding: 16,
      paddingRight: 12,
      backgroundColor: "#0000",
      justifyContent: "flex-start",
      borderWidth: 1,
      borderRadius: 4,
      borderColor: "grey",
    },
    titleStyle: {
      fontSize: 16,
      fontWeight: "100",
      color: props.value !== "" ? "black" : "grey",
    },
  };
}
