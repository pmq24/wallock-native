import React from "react";
import { SafeAreaView, Text } from "react-native";
import { TextField } from "../components";

export default function TestScreen() {
  return (
    <SafeAreaView style={{ padding: 8 }}>
      <TextField label="Test" />
    </SafeAreaView>
  );
}
