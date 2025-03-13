import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import FullScreenImage from "./Components/FullScreenImage";
import { IMAGE_URI } from "./constants/imageUri";

const { width, height } = Dimensions.get("window");

const Splash = () => (
  <View style={styles.container}>
    <FullScreenImage uri={IMAGE_URI} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
  },
});

export default Splash;
