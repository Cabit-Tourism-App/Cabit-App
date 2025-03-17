import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SearchingText() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hang in tight <Text style={styles.highlight}>there</Text>
      </Text>
      <Text style={styles.subtitle}>SEARCHING YOUR DRIVER</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  highlight: {
    color: "#FFC107",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
  },
});
