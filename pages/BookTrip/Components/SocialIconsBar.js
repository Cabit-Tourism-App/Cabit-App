import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

export default function SocialIconsBar() {
  return (
    <View className="flex-row space-x-5 mt-2" style={{
        display: "flex",
        flexDirection: "row",
        marginLeft:130,
        marginTop:20,
    }}>
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        padding: 12,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
      }}
    >
      <Image
        source={require("../Assets/google.png")}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>

    <TouchableOpacity
      style={{
        backgroundColor: "white",
        padding: 12,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
      }}
    >
      <Image
        source={require("../Assets/facebook.png")}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>

    <TouchableOpacity
      style={{
        backgroundColor: "white",
        padding: 12,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
      }}
    >
      <Image
        source={require("../Assets/apple.png")}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
  </View>
  );
}
