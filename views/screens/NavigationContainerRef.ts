import {
  createNavigationContainerRef,
  NavigationContainerRefWithCurrent,
} from "@react-navigation/native";
import { RootNavigatorParamList } from "./NavigationTypes";

const NavigationContainerRef: {
  navigationRef: NavigationContainerRefWithCurrent<RootNavigatorParamList>;
  navigate: (name: keyof RootNavigatorParamList, params: any) => any;
} = {
  navigationRef: createNavigationContainerRef<RootNavigatorParamList>(),
  navigate: function (name: keyof RootNavigatorParamList, params: any) {
    if (this.navigationRef.isReady()) {
      this.navigationRef.navigate(name, params);
    }
  },
};

export default NavigationContainerRef;
