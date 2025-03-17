import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/taxi.png")} // Replace with actual image
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFC107",
    height: width * 0.7,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  image: {
    width: "80%",
    height: "100%",
    resizeMode: "contain",
  },
});
