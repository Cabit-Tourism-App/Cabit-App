import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import FullScreenImage from "./Components/FullScreenImage";

const { width, height } = Dimensions.get("window");

const OnboardingScreen12 = () => (
  <View style={styles.container}>
    <FullScreenImage uri={"https://cdn.builder.io/api/v1/image/assets/f03266481d0f44889ce0bf78d23d5c51/43d1ef1dfb25fa89bdc990f7a06c8d3353444a4ae7d8bffb93b30cae6579fa77?placeholderIfAbsent=true"} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
  },
});

export default OnboardingScreen12;
