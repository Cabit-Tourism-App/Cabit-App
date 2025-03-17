import React, { useEffect } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";
import Svg, { Circle } from "react-native-svg";

export default function SearchingAnimation() {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  return (
    <View style={styles.container}>
      <Svg width="100" height="100" viewBox="0 0 100 100">
        {/* Grey background circle */}
        <Circle cx="50" cy="50" r="40" stroke="#E0E0E0" strokeWidth="5" fill="none" />
        
        {/* Animated Yellow Arc */}
        <Animated.View style={styles.animatedCircle}>
          <Circle
            cx="50"
            cy="50"
            r="40"
            stroke="#FFC107"
            strokeWidth="5"
            strokeDasharray="100"
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
          />
        </Animated.View>

        {/* User Icon in center */}
        <Circle cx="50" cy="50" r="20" fill="black" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  animatedCircle: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});
