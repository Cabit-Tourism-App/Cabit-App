import React from "react";
import { View, SafeAreaView } from "react-native";
import MapViewComponent from "./Components/MapViewComponent";
import DriverInfo from "./Components/DriverInfo";
import LocationDetails from "./Components/LocationDetails";
import BookingDetails from "./Components/BookingDetails";
import CancelButton from "./Components/CancelButton";

export default function OngoingPage({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      {/* Map Component */}
      <MapViewComponent />

      {/* Driver Info */}
      <DriverInfo />

      {/* Location & Booking Details */}
      <LocationDetails />
      <BookingDetails />

      {/* Cancel Button */}
      <CancelButton navigation={navigation}/>
    </SafeAreaView>
  );
}
