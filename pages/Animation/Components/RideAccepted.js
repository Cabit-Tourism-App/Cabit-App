import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function RideAcceptedAnimation({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Ride <Text style={styles.highlight}>Accepted</Text>
      </Text>

      {/* Profile Circle */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          style={styles.profileImage}
        />
      </View>

      <Text style={styles.subtitle}>DRIVER FOUND!</Text>

      {/* Proceed Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Proceeding...")}
      >
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE082",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  highlight: {
    color: "#FFC107",
  },
  profileContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 5,
    borderColor: "#E0E0E0",
    marginVertical: 20,
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#FFC107",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
