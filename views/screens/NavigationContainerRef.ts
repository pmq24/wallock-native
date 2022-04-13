import { createNavigationContainerRef } from "@react-navigation/native";
import { RootNavigatorParamList } from "./NavigationTypes";

export const navigationRef =
  createNavigationContainerRef<RootNavigatorParamList>();

export function navigate(name: keyof RootNavigatorParamList, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
