import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Using FontAwesome for the location icon

export default function InputFieldLocation({ value, setValue, placeholder, isPassword }) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor="#9E9E9E"
        secureTextEntry={isPassword}
        style={styles.input}
      />
      <FontAwesome name="map-marker" size={18} color="#9E9E9E" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 350,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginLeft:45
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#424242",
    fontWeight: "600",
  },
  icon: {
    marginLeft: 10,
  },
});
