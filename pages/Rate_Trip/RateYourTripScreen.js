import React from "react";
import { View, ScrollView } from "react-native";
import Header from "../components/Header";
import DriverInfoCard from "../components/DriverInfoCard";
import RatingStars from "../components/RatingStars";
import FeedbackInput from "../components/FeedbackInput";
import TripDetailCard from "../components/TripDetailCard";
import PaymentDetailCard from "../components/PaymentDetailCard";

const RateYourTripScreen = () => {
  return (
    <ScrollView>
      <Header />
      <DriverInfoCard />
      <RatingStars />
      <FeedbackInput />
      <TripDetailCard />
      <PaymentDetailCard />
    </ScrollView>
  );
};

export default RateYourTripScreen;
