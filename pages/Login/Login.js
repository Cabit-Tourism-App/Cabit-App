import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 bg-gray-100">
      {/* PNG Image Covering Top 35% */}
      <Image
        source={require("../assets/loginPageFront.png")} // Ensure file exists
        style={{
          width: width,
          height: height * 0.35,
          resizeMode: "cover",
        }}
      />

      {/* Bottom Content */}
      <View className="flex-1 items-center mt-10">
        {/* Welcome Text */}
        <Text className="text-2xl font-bold" style={{ fontFamily: "ComicSansMS", fontSize: 40,marginLeft:100 }}>
          Welcome to
        </Text>

        {/* Logo Below Welcome Text */}
        <Image
          source={require("../assets/logo.png")} // Ensure this file exists
          style={{
            width: 230,
            height: 230,
            resizeMode: "contain",
            marginTop: -50,
            marginLeft:70
          }}
        />

        {/* Input Fields */}
        <View className="mt-5 w-1/5">
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter Email"
            placeholderTextColor="gray"
            keyboardType="email-address"
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
              width: 350,
              marginLeft: 50,
            }}
          />

          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter Password"
            placeholderTextColor="gray"
            secureTextEntry
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
              width: 350,
              marginLeft: 50,
            }}
          />

          {/* Forgot Password (Right Aligned) */}
          <TouchableOpacity className="self-end mt-2" style={{marginLeft:"60%"}}>
            <Text className="text-blue-500 text-sm">Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-blue-500 p-3 rounded-full shadow mt-5"
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
              marginLeft:120,
              marginTop:10
            }}
          >
            <Text className="text-white font-bold text-lg">Login</Text>
          </TouchableOpacity>
        </View>

        {/* Divider with OR */}
        <View className="flex-row items-center w-3/5 my-5" style={{marginLeft:"50%",marginTop:20}}>
          <View className="flex-1 h-[1px] bg-gray-400" />
          <Text className="mx-2 text-gray-500">OR</Text>
          <View className="flex-1 h-[1px] bg-gray-400" />
        </View>

        {/* Social Login Buttons */}
        {/* <View className="flex-row space-x-5">
          <TouchableOpacity className="bg-white p-3 rounded-full shadow">
            <Image source={require("../assets/google.png")} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
          <TouchableOpacity className="bg-white p-3 rounded-full shadow">
            <Image source={require("../assets/facebook.png")} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
          <TouchableOpacity className="bg-white p-3 rounded-full shadow">
            <Image source={require("../assets/apple.png")} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View> */}

        {/* Sign Up Link */}
        <TouchableOpacity className="mt-5">
          <Text className="text-gray-500">
            Don't have an account? <Text className="text-blue-500">Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}