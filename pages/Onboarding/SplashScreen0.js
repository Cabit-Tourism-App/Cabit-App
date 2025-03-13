// import React from "react";
// import { View, Dimensions, StyleSheet } from "react-native";
// import FullScreenImage from "./Components/FullScreenImage";
// import { IMAGE_URI } from "./constants/ImageUri3";

// const { width, height } = Dimensions.get("window");

// const OnboardingScreen14 = () => (
//   <View style={styles.container}>
//     <FullScreenImage uri={IMAGE_URI} />
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width,
//     height,
//   },
// });

// export default OnboardingScreen14;
import React, { useEffect, useRef } from "react";
import { View, Dimensions, StyleSheet, Animated } from "react-native";
import FullScreenImage from "./Components/FullScreenImage";
import { IMAGE_URI } from "./constants/ImageUri3";

const { width, height } = Dimensions.get("window");

const SplashScreen0 = () => {
  const moveX = useRef(new Animated.Value(-100)).current; // Start from left

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(moveX, {
          toValue: width / 2 - 150, // Move to center
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(moveX, {
          toValue: width, // Move out of screen
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(moveX, {
          toValue: -100, // Reset to starting position
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <FullScreenImage uri={IMAGE_URI} />

      {/* Moving GIF (Cab with Smoke) */}
      <Animated.Image
        source={require("assets/Cab.gif")} // Ensure the GIF is in assets
        style={[styles.gif, { transform: [{ translateX: moveX }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },
  gif: {
    width: 300, // Doubled the size
    height: 300,
    resizeMode: "contain",
    position: "absolute",
    bottom: "30%", // Shifted upwards
  },
});

export default SplashScreen0;
