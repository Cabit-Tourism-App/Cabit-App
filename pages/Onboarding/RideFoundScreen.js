import React, { useState, useEffect } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import FullScreenImage from "./Components/FullScreenImage";
import Searching from "./Components/Searching";
import DriverFound from "./Components/DriverFound";
import { IMAGE_URI } from "./constants/ImageUri5";

const RideFoundScreen = ({ navigation }) => {
  const [showDriverFound, setShowDriverFound] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDriverFound(true);
    }, 5000); // Switch after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Cancel")}
    >
      <FullScreenImage uri={IMAGE_URI} />

      {/* Show Searching first, then switch to Driver Found */}
      <View style={styles.cardContainer}>
        {/* <DriverFound /> */}
        {showDriverFound ? <DriverFound /> : <Searching />}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    position: "absolute",
    bottom: 200,
  },
});

export default RideFoundScreen;
