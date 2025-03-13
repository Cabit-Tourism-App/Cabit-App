import React from "react";
import { View, Dimensions, StyleSheet,Pressable } from "react-native";
import FullScreenImage from "./Components/FullScreenImage";
import { IMAGE_URI } from "./constants/ImageUri";
// import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const OnboardingScreen11 = ({navigation}) => (
  <Pressable style={styles.container} onPress={() => navigation.navigate("Onboarding12")}>
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

export default OnboardingScreen11;
