import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function SignupButton({ title, onPress }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#007BFF",
        padding: 15,
        borderRadius: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        width: "50%",
        marginLeft: 120,
        marginTop: 10,
      }}
      onPress={onPress}
    >
      <Text className="text-white font-bold text-lg">{title}</Text>
    </TouchableOpacity>
  );
}
