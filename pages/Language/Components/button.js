import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFD36E",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Button;
