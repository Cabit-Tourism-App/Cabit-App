import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

export default function InputField({ value, setValue, placeholder, keyboardType = "default" }) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor="#7D7D7D"
        style={styles.input}
        keyboardType={keyboardType} // Dynamic keyboard type
      />
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
    paddingHorizontal: 15,
    width: 350,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginLeft:45,
    marginTop:5
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#424242",
    fontWeight: "600",
  },
});
