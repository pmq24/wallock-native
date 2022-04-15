import { Input } from "@rneui/themed";
import React, { ChangeEvent } from "react";

type Props = {
  label: string;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  onBlur: (e: any) => void;
  value: string;
  errorMessage?: string;
};

export default function TextField(props: Props) {
  return (
    <Input
      placeholder={props.label}
      onChangeText={props.onChangeText}
      onBlur={props.onBlur}
      shake={() => {}}
      errorMessage={props.errorMessage}
    />
  );
}
