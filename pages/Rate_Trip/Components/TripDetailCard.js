import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const TripDetailCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trip Detail</Text>
      <View style={styles.row}>
        <Icon name="circle" size={10} color="orange" />
        <Text style={styles.text}>Pattaya Beach</Text>
      </View>
      <View style={styles.row}>
        <Icon name="map-marker-alt" size={16} color="red" />
        <Text style={styles.text}>Home</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  text: {
    fontSize: 14,
    marginLeft: 8,
  },
});

export default TripDetailCard;
