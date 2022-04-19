import { useNavigation } from "@react-navigation/native";
import { Input } from "@rneui/themed";
import React from "react";

type Props = {
  label: string;
};

export default function GroupPicker(props: Props) {
  const navigation = useNavigation();
  return (
    <Input
      placeholder={props.label}
      shake={() => {}}
      onFocus={() => {
        navigation.goBack();
      }}
    />
  );
}
