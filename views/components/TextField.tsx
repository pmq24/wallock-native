import React from "react";
import { ChangeEvent } from "react";
import { HelperText, TextInput } from "react-native-paper";

type Props = {
  label: string;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  onBlur: (e: any) => void;
  value: string;
  errorMessage?: string;
};

export default function TextField(props: Props) {
  return (
    <>
      <TextInput
        label={props.label}
        value={props.value}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
      />
      <HelperText
        type={
          props.errorMessage && props.errorMessage !== "" ? "error" : "info"
        }
        visible={props.errorMessage !== null && props.errorMessage !== ""}
      >
        {props.errorMessage}
      </HelperText>
    </>
  );
}
