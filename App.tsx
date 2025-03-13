import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "./global.css"
// Import Screens
import Splash from "./pages/Splash_Screen/Splash";
import OnboardingScreen11 from "./pages/Onboarding/OnboardingScreen11";
import OnboardingScreen12 from "./pages/Onboarding/OnboardingScreen12";
import OnboardingScreen13 from "./pages/Onboarding/OnboardingScreen13";
import LoginScreen from "./pages/Login/Login";
<<<<<<< HEAD
import Splash from "pages/Splash_Screen/Splash";
import MapScreen from "pages/CabBooking/booking";
import PaymentScreen from "pages/Payment/PaymentScreen";
import OnboardingScreen11 from "pages/Onboarding/OnboardingScreen11";
import OnboardingScreen12 from "pages/Onboarding/OnboardingScreen12";
import OnboardingScreen13 from "pages/Onboarding/OnboardingScreen13";
import SplashScreen0 from "pages/Onboarding/SplashScreen0";
import UserProfile from "pages/UserProfile/UserProfile";
import LocationScreen from "./pages/Favourite/screen";
=======
>>>>>>> fd75d9a85324f3659f8f75c7c72b47490753e3ee
import NavigationScreen from "./pages/Navigation/navigation";
import LanguageSelectionScreen from "./pages/Language/language";
import BookingLocationScreen from "./pages/CabBooking/chooseLocationBooking";
import MapScreen from "./pages/CabBooking/booking";
import RideAcceptedScreen from "./pages/CabBooking/rideAccepted";
import SignupPage from "pages/SignUp/Signup";
// Create Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
<<<<<<< HEAD
   <SplashScreen0/>
  );
=======
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding11" screenOptions={{ headerShown: false }}>
        
        {/* Splash Screen */}
        {/* <Stack.Screen name="Splash" component={Splash} /> */}

        {/* Onboarding Screens */}
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
>>>>>>> fd75d9a85324f3659f8f75c7c72b47490753e3ee
}
