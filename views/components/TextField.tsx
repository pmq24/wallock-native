import { Input } from "@rneui/themed";
import React from "react";

type Props = {
  label: string;
};

export default function TextField(props: Props) {
  return <Input placeholder={props.label} shake={() => {}} />;
}
