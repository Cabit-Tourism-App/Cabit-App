import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import '../global.css';

export default function LoginScreen() {
  return (
    <View className="flex-1 bg-gray-100">
      {/* Top Image with Shape */}
      <View className="h-2/5 relative">
        <Image
          source={{ uri: "https://source.unsplash.com/500x500/?technology" }}
          className="w-full h-full"
        />
        <LinearGradient
          colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.7)"]}
          className="absolute inset-0 rounded-b-3xl"
        />
      </View>

      {/* Login Form Drawer */}
      <View className="flex-1 px-16 pt-10 pb-6 bg-white rounded-t-3xl shadow-lg -mt-10">
        <Text className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome Back!
        </Text>

        {/* Input Fields */}
        <TextInput
          placeholder="Username"
          className="w-full bg-gray-200 p-4 rounded-xl mb-4 text-lg text-gray-700"
          placeholderTextColor="#666"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          className="w-full bg-gray-200 p-4 rounded-xl mb-4 text-lg text-gray-700"
          placeholderTextColor="#666"
        />

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text className="text-right text-blue-500 mb-4">Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity className="w-full bg-blue-500 p-4 rounded-xl items-center">
          <Text className="text-white text-lg font-semibold">Login</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center my-6">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-3 text-gray-500">Or Login with</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Social Login Buttons */}
        <View className="flex-row justify-center space-x-4">
          <TouchableOpacity className="p-3 bg-gray-200 rounded-xl">
            <Icon name="google" size={24} color="red" />
          </TouchableOpacity>
          <TouchableOpacity className="p-3 bg-gray-200 rounded-xl">
            <Icon name="facebook" size={24} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity className="p-3 bg-gray-200 rounded-xl">
            <Icon name="apple" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Register Link */}
        <TouchableOpacity>
          <Text className="text-center text-blue-500 mt-6">
            Don't have an account? Register
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
