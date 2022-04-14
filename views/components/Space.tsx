import React from "react";
import { View } from "react-native";

type Props = {
  all?: number;
  vertical?: number;
  horizontal?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  children?: JSX.Element;
};

export default function Space(props: Props) {
  return (
    <View
      style={{
        margin: props.all,
        marginVertical: props.vertical,
        marginHorizontal: props.horizontal,
        marginTop: props.top,
        marginBottom: props.bottom,
        marginLeft: props.left,
        marginRight: props.right,
      }}
    >
      {props.children}
    </View>
  );
}
