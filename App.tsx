import { View, Text } from "react-native";
import './global.css';
import LoginScreen from "./pages/Login/Login";
import Splash from "pages/Splash_Screen/Splash";
import MapScreen from "pages/CabBooking/booking";
import OnboardingScreen11 from "pages/Onboarding/OnboardingScreen11";
import OnboardingScreen12 from "pages/Onboarding/OnboardingScreen12";
import OnboardingScreen13 from "pages/Onboarding/OnboardingScreen13";
import NavigationScreen from "./pages/Navigation/navigation";
import LanguageSelectionScreen from "pages/Language/language";
// import HomeScreen from "pages/home_screen";
// import OnboardingScreen from "pages/onboarding/screen1";
// import NavigatorPage from "pages/navigation_screen";
export default function App() {
  return (
   <Splash/>
  );
}
