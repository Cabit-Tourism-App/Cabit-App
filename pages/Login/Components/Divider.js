import React from "react";
import { View, Text } from "react-native";

export default function Divider() {
  return (
    <View className="flex-row items-center w-3/5 my-5" style={{ marginLeft: "45%", marginTop: 20 }}>
      <View className="flex-1 h-[1px] bg-gray-400" />
      <Text className="mx-2 text-gray-500">OR</Text>
      <View className="flex-1 h-[1px] bg-gray-400" />
    </View>
  );
}
