import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, LogBox } from "react-native";
import { Provider } from "react-redux";
import AppNavigator from "./src/navigation";
import store from "./src/config/store";

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
