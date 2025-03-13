import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";
import { Svg, Circle } from "react-native-svg";

const RideAcceptedScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Pickup Location"
        />
        <Marker
          coordinate={{ latitude: 37.782, longitude: -122.439 }}
          title="Destination"
          pinColor="red"
        />
      </MapView>

      <View style={styles.drawer}>
        <Text style={styles.rideAccepted}>
          <Text style={{ fontWeight: "bold" }}>Ride Accepted</Text>
        </Text>

        <View style={styles.progressContainer}>
          <Svg height="120" width="120">
            <Circle
              cx="60"
              cy="60"
              r="50"
              stroke="#FFC107"
              strokeWidth="6"
              fill="none"
              strokeDasharray="314"
              strokeDashoffset="50"
            />
          </Svg>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/45.jpg" }}
            style={styles.profileImage}
          />
        </View>

        {/* Payment Section */}
        <View style={styles.paymentContainer}>
          <TouchableOpacity style={styles.paymentButton}>
            <Text style={styles.paymentText}>Cash</Text>
            <FontAwesome name="caret-down" size={16} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.promoButton}>
            <Text style={styles.promoText}>Promo code</Text>
          </TouchableOpacity>
        </View>

        {/* Proceed Button */}
        <TouchableOpacity style={styles.proceedButton}>
          <Text style={styles.proceedText}>Proceed</Text>
          <Text style={styles.priceText}>$9.00</Text>
          <FontAwesome name="arrow-right" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RideAcceptedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  map: {
    height: "100%",
    width: "100%",
  },
  drawer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: "center",
    elevation: 5,
  },
  rideAccepted: {
    fontSize: 18,
    color: "#000",
  },
  progressContainer: {
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    position: "absolute",
    width: 80,
    height: 80,
    borderRadius: 70,
  },
  paymentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  paymentButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentText: {
    fontSize: 16,
    marginRight: 5,
  },
  promoButton: {
    backgroundColor: "#eee",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
  },
  promoText: {
    fontSize: 14,
    color: "#555",
  },
  proceedButton: {
    flexDirection: "row",
    backgroundColor: "#FFC107",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  proceedText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
});
