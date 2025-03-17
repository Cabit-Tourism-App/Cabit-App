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
  ImageBackground,
} from "react-native";

// Import Components
import InputField from "./Components/InputField";
import SignupButton from "./Components/SignupButton";
import Divider from "./Components/Divider";
import SocialIconsBar from "./Components/SocialIconsBar";
import InputFieldLocation from "./Components/InputFieldLocation";
const { width, height } = Dimensions.get("window");

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Renders the Signup Page with input fields for name, email, password, and confirm password.
 * Displays a background image and a header image. Includes a signup button and social icons bar.
 * Allows navigation to the sign-in page. Utilizes a keyboard avoiding view for better UI on mobile devices.
 */

/******  1d6b11e8-8554-4e01-ba2c-5bd4b5e5fafd  *******/
export default function BookTripPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <ImageBackground
      source={require("../../assets/mapIMG.png")}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      resizeMode="cover"
    >
      <SafeAreaView className="flex-1 bg-gray-100">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          {/* Image Covering Top 35% */}
          <Image
            source={require("./Assets/BookTripFront.png")}
            style={{
              width: width*1.1,
              height: height * 0.26,
              resizeMode: "cover",
              marginTop:-100
            }}
          />

          {/* Bottom Content */}
          <View className="flex-1 items-center mt-10 px-5">
            <Text
              className="text-3xl font-bold text-center"
              style={{ fontFamily: "ComicSansMS", fontSize: 60, marginLeft: 80 }}
            >
              Book a Trip
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
              <InputFieldLocation value={name} setValue={setName} placeholder="Pickup Location" />
              <InputField value={email} setValue={setEmail} placeholder="No of passenger" />
              <InputField
                value={password}
                setValue={setPassword}
                placeholder="Enter Phone number"
                isPassword
              />
              <InputField
                value={confirmPassword}
                setValue={setConfirmPassword}
                placeholder="Preffered language"
                isPassword
              />

              {/* Signup Button */}
              <SignupButton title="Continue" onPress={() => alert("Signup Clicked")} />
            </View>

         
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}
