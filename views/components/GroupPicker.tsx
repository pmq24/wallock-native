import { Input } from "@rneui/themed";
import React from "react";

type Props = {
  label: string;
};

export default function GroupPicker(props: Props) {
  return <Input placeholder={props.label} shake={() => {}} />;
}
