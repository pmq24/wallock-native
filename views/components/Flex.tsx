import React from "react";
import { View } from "react-native";

type Props = {
  direction?: /* default: column */ "row";
  justifyContent?: /* default: flex-start */
  "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  alignItems?: /* default: stretch */
  "flex-start" | "flex-end" | "center" | "baseline";
  children?: any;
};

export default function Flex(props: Props) {
  return (
    <View
      style={{
        flexDirection: props.direction,
        justifyContent: props.justifyContent,
        alignItems: props.alignItems,
      }}
    >
      {props.children}
    </View>
  );
}
