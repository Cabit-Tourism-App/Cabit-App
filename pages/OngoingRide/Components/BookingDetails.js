import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BookingDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.detailRow}>
        <Text style={styles.detailTitle}>Distance</Text>
        <Text style={styles.detailValue}>1.4 km</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailTitle}>Time</Text>
        <Text style={styles.detailValue}>6 min</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailTitle}>Price</Text>
        <Text style={styles.detailValue}>$9.00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  detailRow: {
    alignItems: "center",
  },
  detailTitle: {
    color: "gray",
    fontSize: 14,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
