import React from "react";
import { StatusBar } from "react-native";
import AppNavigator from "./navigation"; // Adjust the path based on your file structure

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </>
  );
}
