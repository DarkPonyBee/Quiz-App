import { NavigationContainerRef } from "@react-navigation/native";
import * as React from "react";

export const navigationRef: React.RefObject<NavigationContainerRef> = React.createRef();

export class NavigationService {
  static navigate(name: string, params?: object) {
    navigationRef.current?.navigate(name, params);
  }
}
