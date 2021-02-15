import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen, QuizScreen, ResultScreen } from "../screens";
import { navigationRef } from "../config/navigationService";

export default function AppNavigator() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Quiz" component={QuizScreen}></Stack.Screen>
        <Stack.Screen name="Result" component={ResultScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
