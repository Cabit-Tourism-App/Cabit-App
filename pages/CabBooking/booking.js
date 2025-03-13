import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const cabs = [
  { id: 1, name: "Toyota Camry", capacity: "4-5 person", price: "$7.00", img: require("../../assets/logo.png") },
  { id: 2, name: "Lexus R700", capacity: "4-5 person", price: "$9.00", img: require("../../assets/logo.png"), highlight: true },
  { id: 3, name: "Mercedes W90", capacity: "4-5 person", price: "$12.00", img: require("../../assets/logo.png") },
];

const BookingScreen = ({navigation}) => {
  const [selectedCab, setSelectedCab] = useState(cabs[1]); // Default selected cab

  return (
    <View style={styles.container}>
      {/* Map */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
      </MapView>

      {/* Ride Selection Drawer */}
      <View style={styles.drawer}>
        <Text style={styles.heading}>Choose your ride</Text>

        {cabs.map((cab) => (
          <TouchableOpacity
            key={cab.id}
            style={[styles.cabRow, cab.highlight ? styles.highlightedCab : styles.normalCab]}
            onPress={() => setSelectedCab(cab)}
          >
            <Image source={cab.img} style={styles.cabImage} />
            <View style={styles.cabInfo}>
              <Text style={styles.cabName}>{cab.name}</Text>
              <Text style={styles.cabCapacity}>{cab.capacity}</Text>
            </View>
            <Text style={styles.cabPrice}>{cab.price}</Text>
          </TouchableOpacity>
        ))}

        {/* Payment & Booking */}
        <View style={styles.paymentRow}>
  <View style={styles.paymentOption}>
    <View style={{display:"flex", flexDirection:"row"}}>
    <Text style={styles.paymentText}>Cash</Text>
    <Ionicons name="chevron-down" size={18} color="black" style={styles.dropdownIcon} />
    </View>
  </View>
  <TouchableOpacity>
    <Text style={styles.promoCode}>Promo code</Text>
  </TouchableOpacity>
</View>

        <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('RideAccepted')}>
          <Text style={styles.bookText}>Book this car</Text>
          <Text style={styles.bookPrice}>{selectedCab.price}</Text>
          <Ionicons name="arrow-forward" size={18} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: width,
    height: "200%", // 55% for the map
  },
  drawer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    paddingTop: 25,
    height: height * 0.50, // 45% for the drawer
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
  },
  heading: {
    fontSize: 24  ,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  cabRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 8,
  },
  normalCab: {
    backgroundColor: "#F8F8F8",
  },
  highlightedCab: {
    backgroundColor: "#FFD700", // Yellow highlight
  },
  cabImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  cabInfo: {
    flex: 1,
  },
  cabName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  cabCapacity: {
    fontSize: 14,
    color: "gray",
  },
  cabPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  paymentText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  promoCode: {
    fontSize: 14,
    color: "#007AFF",
  },
  bookButton: {
    flexDirection: "row",
    backgroundColor: "#FFD700",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 30,
    width:"75%",
    marginLeft:45
  },
  bookText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  bookPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});

export default BookingScreen;
