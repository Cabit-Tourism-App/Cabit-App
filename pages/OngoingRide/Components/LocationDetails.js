import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LocationDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.locationRow}>
        <Text style={styles.locationIcon}>📍</Text>
        <Text style={styles.locationText}>Skate Park</Text>
      </View>

      <View style={styles.locationRow}>
        <Text style={styles.destinationIcon}>📍</Text>
        <Text style={styles.locationText}>Home</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  locationIcon: {
    fontSize: 18,
    marginRight: 10,
    color: "gold",
  },
  destinationIcon: {
    fontSize: 18,
    marginRight: 10,
    color: "red",
  },
  locationText: {
    fontSize: 16,
  },
});
