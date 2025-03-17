import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

export default function Searching({ onComplete = () => {} }) {
  const [progress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 100,
      duration: 5000, // 5 seconds animation
      useNativeDriver: false,
    }).start(() => onComplete()); // ✅ Call onComplete only if defined
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hang in tight <Text style={styles.highlight}>there</Text>
      </Text>

      {/* Animated Circular Progress */}
      <View style={styles.circle}>
        <Animated.View
          style={[
            styles.progress,
            {
              width: progress.interpolate({
                inputRange: [0, 100],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>

      <Text style={styles.subtitle}>SEARCHING YOUR DRIVER</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 40,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    // height: "250%",
    bottom: -170,
    // left:-70
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  highlight: {
    color: "#FFA000",
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 80,
    fontSize: 20,
    fontWeight: "bold",
    color: "#212121",
    marginBottom: 50,
  },
  circle: {
    marginVertical: 20,
    width: 170,
    height: 170,
    borderRadius: 90,
    borderWidth: 6,
    borderColor: "#BDBDBD",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  progress: {
    height: "100%",
    backgroundColor: "#FFA000",
    borderRadius: 90,
  },
});
