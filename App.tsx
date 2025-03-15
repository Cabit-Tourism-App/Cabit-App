import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "./global.css"
// Import Screens

import RideConfirmScreen from "pages/Onboarding/RideConfirmScreen";
import RatingScreen from "pages/FinalPayment/RatingScreen";
import ProfileScreen from "pages/UserProfile/ProfileScreen"
import PaymentMethodScreen from "pages/Payment/PaymentMethodScreen";
import OnboardingScreen11 from "./pages/Onboarding/OnboardingScreen11";
import OnboardingScreen12 from "./pages/Onboarding/OnboardingScreen12";
import OnboardingScreen13 from "./pages/Onboarding/OnboardingScreen13";
import CancelBookingScreen from "pages/Cancel_Booking/CancelBookingScreen";
import LoginScreen from "./pages/Login/Login";
import NavigationScreen from "./pages/Navigation/navigation";
import LanguageSelectionScreen from "./pages/Language/language";
import BookingLocationScreen from "./pages/CabBooking/chooseLocationBooking";
import MapScreen from "./pages/CabBooking/booking";
import RideAcceptedScreen from "./pages/CabBooking/rideAccepted";
import SignupPage from "pages/SignUp/Signup";
import SplashScreen0 from "pages/Onboarding/SplashScreen0";
// new comment
// Create Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen0" screenOptions={{ headerShown: false }}>
        
        {/* Splash Screen */}
        {/* <Stack.Screen name="Splash" component={Splash} /> */}

        {/* Onboarding Screens */}
        <Stack.Screen name="SplashScreen0" component={SplashScreen0} />

        <Stack.Screen name="Onboarding11" component={OnboardingScreen11} />
        <Stack.Screen name="Onboarding12" component={OnboardingScreen12} />
        <Stack.Screen name="Onboarding13" component={OnboardingScreen13} />

        {/* Login Screen */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupPage} />

        {/* Main Navigation Screen */}
        <Stack.Screen name="Navigation" component={NavigationScreen} />

        {/* Language Selection */}
        <Stack.Screen name="LanguageSelection" component={LanguageSelectionScreen} />

        {/* Booking Flow */}
        <Stack.Screen name="BookingLocation" component={BookingLocationScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="RideAccepted" component={RideAcceptedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
