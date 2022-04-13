import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootNavigatorParamList = {
  HomeNavigator: undefined;
  NewGroupScreen: undefined;
};

export type HomeNavigatorParamList = {
  TransactionsScreen: undefined;
  MenuNavigator: undefined;
};

export type MenuNavigatorParamList = {
  MenuScreen: undefined;
  GroupsScreen: undefined;
};

export type MenuNavigatorScreenProps<
  Route extends keyof MenuNavigatorParamList
> = NativeStackScreenProps<MenuNavigatorParamList, Route>;
