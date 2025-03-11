import { View, Text } from "react-native";
import './global.css';
import LoginScreen from "./pages/Login/Login";
import SplashScreen from "pages/Splash_Screen/Splash";
import MapScreen from "pages/CabBooking/booking";
import OnboardingScreen11 from "pages/Onboarding/OnboardingScreen11";
// import HomeScreen from "pages/home_screen";
// import OnboardingScreen from "pages/onboarding/screen1";
// import NavigatorPage from "pages/navigation_screen";
export default function App() {
  return (
   <OnboardingScreen11/>
  );
}
