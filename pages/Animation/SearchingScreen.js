import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import SearchingText from "./Components/SearchingText";
import SearchingAnimation from "./Components/SearchingAnimation";

export default function SearchingScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("RideAcceptedAnimation"); // Navigate after 5s
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <SearchingText />
      <SearchingAnimation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE082",
  },
});
