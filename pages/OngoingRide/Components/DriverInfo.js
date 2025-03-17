import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function DriverInfo() {
  return (
    <View style={styles.container}>
      {/* Driver Profile Image */}
      <Image source={require("../../../assets/logo.png")} style={styles.profileImage} />

      {/* Driver Name & Rating */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Harsh Aditya</Text>
        <Text style={styles.rating}>⭐ 4.9</Text>
      </View>

      {/* Chat Icon */}
      <TouchableOpacity>
        <Image source={require("../../../assets/logo.png")} style={styles.chatIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rating: {
    color: "gray",
  },
  chatIcon: {
    width: 30,
    height: 30,
  },
});
