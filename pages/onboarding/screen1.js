import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Onboarding1 from "../assets/Onboarding1.svg"; // Import SVG

const { width, height } = Dimensions.get("window");

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <Onboarding1 width={width} height={height} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Adjust background if needed
  },
});

export default OnboardingScreen;

