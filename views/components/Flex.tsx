import React from "react";
import { View } from "react-native";

type Props = {
  direction?: /* default: column */ "row";
  justifyContent?: /* default: flex-start */
  "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  children?: any;
};

export default function Flex(props: Props) {
  return (
    <View
      style={{
        flexDirection: props.direction,
      }}
    >
      {props.children}
    </View>
  );
}
