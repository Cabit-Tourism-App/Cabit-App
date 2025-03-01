import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import "../global.css";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-gray-100">
      //Top Section with User Info
      <View className="h-2/5 relative">
        <Image
          source={{ uri: "https://source.unsplash.com/500x500/?nature" }}
          className="w-full h-full"
        />
        <LinearGradient
          colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.7)"]}
          className="absolute inset-0 rounded-b-3xl"
        />
        <View className="absolute top-12 left-6 flex-row items-center">
          <Image
            source={{ uri: "https://source.unsplash.com/100x100/?profile" }}
            className="w-16 h-16 rounded-full border-2 border-white"
          />
          <View className="ml-4">
            <Text className="text-lg font-bold text-white">Hello, John Doe</Text>
            <Text className="text-gray-300">Welcome back!</Text>
          </View>
        </View>
      </View>

      //Main Content
      <ScrollView className="flex-1 px-6 pt-6 pb-6 -mt-10 bg-white rounded-t-3xl shadow-lg">
        //Quick Actions
        <View className="flex-row justify-between mb-6">
          <TouchableOpacity className="p-4 bg-gray-200 rounded-xl flex items-center">
            <Icon name="bell" size={24} color="#007bff" />
            <Text className="text-sm mt-2 text-gray-700">Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-4 bg-gray-200 rounded-xl flex items-center">
            <Icon name="cog" size={24} color="#28a745" />
            <Text className="text-sm mt-2 text-gray-700">Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-4 bg-gray-200 rounded-xl flex items-center">
            <Icon name="sign-out" size={24} color="red" />
            <Text className="text-sm mt-2 text-gray-700">Logout</Text>
          </TouchableOpacity>
        </View>

        //Feature Cards
        <Text className="text-xl font-bold text-gray-800 mb-4">Explore Features</Text>
        <View className="space-y-4">
          <TouchableOpacity className="p-4 bg-blue-100 rounded-xl flex-row items-center">
            <Icon name="calendar" size={24} color="#007bff" />
            <Text className="ml-4 text-lg text-gray-800">Upcoming Events</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-4 bg-green-100 rounded-xl flex-row items-center">
            <Icon name="star" size={24} color="#28a745" />
            <Text className="ml-4 text-lg text-gray-800">Top Services</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-4 bg-yellow-100 rounded-xl flex-row items-center">
            <Icon name="users" size={24} color="#ffc107" />
            <Text className="ml-4 text-lg text-gray-800">Community</Text>
          </TouchableOpacity>
        </View>

        //Bottom Section
        <TouchableOpacity className="w-full bg-blue-500 p-4 rounded-xl items-center mt-6">
          <Text className="text-white text-lg font-semibold">Get Started</Text>
        </TouchableOpacity>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}
