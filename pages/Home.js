import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 bg-gray-100">
    Home
    </View>
  );
}
