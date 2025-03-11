import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground
} from "react-native";

// Import Components
import InputField from "./Components/InputField";
import LoginButton from "./Components/LoginButton";
import Divider from "./Components/Divider";
import SocialIconsBar from "./Components/SocialIconsBar";

const { width, height } = Dimensions.get("window");

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
    source={require("../../assets/mapIMG.png")} // Replace with your image path
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
    resizeMode="cover"
  >
    <SafeAreaView className="flex-1 bg-gray-100" style={{
      background:"../assets/mapIMG.png"
     }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        {/* Image Covering Top 35% */}
        <Image
          source={require("../../assets/loginPageFront.png")}
          style={{
            width: width,
            height: height * 0.35,
            resizeMode: "cover",
          }}
        />

        {/* Bottom Content */}
        <View className="flex-1 items-center mt-10 px-5">
          <Text className="text-3xl font-bold text-center" style={{ fontFamily: "ComicSansMS" , fontSize:42,
                          marginLeft: 110,

          }}>
            Welcome to
          </Text>

          <Image
            source={require("../../assets/logo.png")}
            style={{
              width: 250,
              height: 250,
              resizeMode: "contain",
              marginTop: -60,
              marginLeft: 80,
            }}
          />

          {/* Input Fields */}
          <View className="w-full max-w-sm mt-5">
            <InputField value={email} setValue={setEmail} placeholder="Enter Email" />
            <InputField value={password} setValue={setPassword} placeholder="Enter Password" isPassword />

            {/* Forgot Password */}
            <TouchableOpacity className="self-end mt-2" style={{ marginLeft: "65%" }}>
              <Text className="text-blue-500 text-sm" style={{color:"red"}} >Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <LoginButton title="Login" onPress={() => alert("Login Clicked")} />
          </View>

          {/* Divider */}
          <Divider />

          {/* Social Icons (Optional) */}
          <SocialIconsBar />

          {/* Sign Up Link */}
          <TouchableOpacity>
            <Text className="text-gray-500"
              style={{ marginLeft: "25%",marginTop:40 }}>
              Don't have an account? <Text className="text-blue-500">Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
    </ImageBackground>

  );
}
