import React from "react";
import { View, Dimensions, StyleSheet,Pressable } from "react-native";
import FullScreenImage from "./Components/FullScreenImage";
import { IMAGE_URI } from "./constants/ImageUri1";

const { width, height } = Dimensions.get("window");

const OnboardingScreen12 = ({navigation}) => (
  <Pressable style={styles.container} onPress={() => navigation.navigate("Onboarding13")}>
    <FullScreenImage uri={IMAGE_URI} />
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
  },
});

export default OnboardingScreen12;
