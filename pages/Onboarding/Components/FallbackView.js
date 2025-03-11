import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/ImageStyles"; // Optional: for better modular styling

const FallbackView = () => (
  <View style={styles.fallbackContainer}>
    <Text style={styles.fallbackText}>Image failed to load.</Text>
  </View>
);

export default FallbackView;
