import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function DriverFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Ride <Text style={styles.highlight}>Accepted</Text>
      </Text>

      {/* Driver Image inside Circle */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/45.jpg" }}
          style={styles.profileImage}
        />
      </View>

      <Text style={styles.subtitle}>DRIVER FOUND!</Text>

      {/* Proceed Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "110%",
    borderRadius: 40,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    // height: "250%",
    bottom: -170,
    left:-14
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  highlight: {
    color: "#FFA000",
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "#212121",
  },
  imageContainer: {
    marginVertical: 20,
    width: 190,
    height: 190,
    borderRadius: 150,
    borderWidth: 6,
    borderColor: "#BDBDBD",
    borderTopColor: "#FFA000",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,

  },
  profileImage: {
    width: 170,
    height: 170,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#FFA000",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom:10
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
});
