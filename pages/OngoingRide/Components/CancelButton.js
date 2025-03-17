import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function CancelButton({navigation}) {
  return (
    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Cancel")}>
      <Text style={styles.text}>Cancel Your Booking</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFC107",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
