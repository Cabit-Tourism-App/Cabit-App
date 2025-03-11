import React from "react";
import { TextInput } from "react-native";

export default function InputField({ value, setValue, placeholder, isPassword }) {
  return (
    <TextInput
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      placeholderTextColor="gray"
      secureTextEntry={isPassword}
      className="bg-gray-200 p-4 rounded-full shadow-md text-lg text-center w-full"
      style={{
        backgroundColor: "#F5F5F5",
        padding: 12,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        fontSize: 16,
        textAlign: "center",
        marginBottom: 10,
        width: 400,
        marginLeft: 20,
      }}
    />
  );
}
