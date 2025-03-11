import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function LoginButton({ title, onPress }) {
  return (
    <TouchableOpacity
      className="bg-blue-500 py-3 rounded-full shadow-md mt-5 w-full items-center"
      onPress={onPress}
      style={{
        backgroundColor: "#FFB61D",
        padding: 15,
        borderRadius: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        width: "50%",
        marginLeft: 100,
        marginTop: 10,
      }}
    >
      <Text className="text-white font-bold text-lg">{title}</Text>
    </TouchableOpacity>
  );
}
