import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootNavigatorParamList = {
  HomeNavigator: undefined;
  NewGroupScreen: undefined;
  PickGroupScreen: undefined;
};

export type RootNavigatorScreenProps<
  Route extends keyof RootNavigatorParamList
> = NativeStackScreenProps<RootNavigatorParamList, Route>;

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
