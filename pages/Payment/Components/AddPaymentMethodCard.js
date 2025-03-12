import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const AddPaymentMethodCard = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={require("assets/icon.png")} style={styles.icon} />
      <Text style={styles.text}>Add a new Payment Method</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default AddPaymentMethodCard;
