import React from "react";
import { Button, SafeAreaView } from "react-native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { CategoriesScreen } from ".";

type RouteParamList = {
  UserMainScreen: undefined;
  CategoriesScreen: undefined;
};

const Stack = createNativeStackNavigator<RouteParamList>();

export default function UserScreen() {
  return (
    <Stack.Navigator initialRouteName="UserMainScreen">
      <Stack.Screen name="UserMainScreen" component={UserMainScreen} />
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
    </Stack.Navigator>
  );
}

type UserMainScreenProps = {
  navigation: NativeStackNavigationProp<RouteParamList>;
};

function UserMainScreen({ navigation }: UserMainScreenProps) {
  return (
    <SafeAreaView>
      <Button
        title="Categories"
        onPress={() => navigation.navigate("CategoriesScreen")}
      />
    </SafeAreaView>
  );
}
