import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import MapView from "react-native-maps";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const BookingLocationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Top Map Section */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.7749,
            longitude: -122.4194,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        />
        {/* Navbar */}
        <View style={styles.navbar}>
          <Ionicons name="menu" size={26} color="black" />
          <Text style={styles.brand}>CabIt</Text>
          <FontAwesome name="user-circle-o" size={26} color="black" />
        </View>
      </View>

      {/* Booking Section */}
      <View style={styles.bookingContainer}>
        <Text style={styles.title}>Where are you going today?</Text>

        {/* Pickup Point */}
        <View style={styles.inputRow}>
          <MaterialIcons name="radio-button-checked" size={20} color="#FFD700" />
          <TextInput
            style={styles.input}
            placeholder="Choose pick up point"
            placeholderTextColor="#888"
          />
        </View>

        {/* Destination */}
        <View style={styles.inputRow}>
          <MaterialIcons name="location-pin" size={20} color="#FF4081" />
          <TextInput
            style={styles.input}
            placeholder="Choose your destination"
            placeholderTextColor="#888"
          />
        </View>

        {/* Quick Selection: Home & Office */}
        <View style={styles.quickSelection}>
          <TouchableOpacity style={styles.quickButton} onPress={() => navigation.navigate("MapScreen")}>
            <MaterialIcons name="home" size={16} color="black" />
            <Text style={styles.quickText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.quickButton, styles.officeButton]}>
            <MaterialIcons name="business" size={16} color="black" />
            <Text style={styles.quickText}>Office</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Locations */}
        <View style={styles.recentContainer}>
          <View style={styles.recentItem}>
            <Text style={styles.city}>Lucknow</Text>
            <Text style={styles.address}>28/6 Vrindavan Colony</Text>
          </View>
          <View style={styles.recentItem}>
            <Text style={styles.city}>Meerut</Text>
            <Text style={styles.address}>56/8 Sant Lousia</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookingLocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",r
  },
  mapContainer: {
    width: "100%",
    height: height * 0.4,
    position: "relative",
  },
  map: {
    width: "100%",
    height: "200%",
  },
  navbar: {
    position: "absolute",
    top: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD700",
  },
  bookingContainer: {
    backgroundColor: "#ffff",
    padding: 40,
    // marginTop: -20,
    // paddingTop:-50,
    borderTopLeftRadius: 30, // More curve from top
    borderTopRightRadius: 30,
    height: 460, // Smaller height
    position: "absolute",
    bottom: 0,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    padding: 12,
    borderRadius: 30,
    marginBottom: 10,
  },
  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  quickSelection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 15,
  },
  quickButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFD700",
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    width: 120,
    paddingLeft:22
    // height:50
  },
  officeButton: {
    backgroundColor: "#E0E0E0",
  },
  quickText: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  recentContainer: {
    backgroundColor: "#F9F9F9",
    padding: 10,
    borderRadius: 10,
    width:600,
    marginLeft:-40,
  },
  recentItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    
  },
  city: {
    fontSize: 16,
    fontWeight: "bold",
  },
  address: {
    fontSize: 14,
    color: "#666",
  },
});
