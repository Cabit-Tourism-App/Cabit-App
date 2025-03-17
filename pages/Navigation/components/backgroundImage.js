import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const BackgroundImage = ({ children }) => {
  return (
    <ImageBackground
      source={require("../../../assets/bg.png")} // Replace with your background image
      style={styles.background}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

export default BackgroundImage;
