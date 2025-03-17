import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import IMAGE_URI from "./constants/ImageUri5"
const RideConfirmScreen = () => {
  const [driverFound, setDriverFound] = useState(false);

  useEffect(() => {
    // Simulate finding a driver after 3 seconds
    const timer = setTimeout(() => {
      setDriverFound(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image source={require("./Assets/bookingPage.png")} style={styles.backgroundImage} onError={(e) => console.log(e.nativeEvent.error)} />


      {/* Ride Searching */}
      {!driverFound ? (
        <View style={styles.card}>
          <Text style={styles.title}>Hang in tight</Text>
          <Text style={styles.subTitle}>there</Text>
          <Image
            source={{
              uri: "https://i.ibb.co/GpjshcN/loading-icon.png",
            }}
            style={styles.loader}
          />
          <Text style={styles.status}>SEARCHING YOUR DRIVER</Text>
        </View>
      ) : (
        /* Ride Accepted */
        <View style={styles.card}>
          <Text style={styles.title}>Ride</Text>
          <Text style={styles.subTitle}>Accepted</Text>
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/men/45.jpg",
            }}
            style={styles.driverImage}
          />
          <Text style={styles.status}>DRIVER FOUND!</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Proceed</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9D976",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    position: "absolute",
    top: 50,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  card: {
    backgroundColor: "#FFF",
    width: 350,
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 250,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
  },
  subTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#F4A100",
    marginBottom: 10,
  },
  loader: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginVertical: 15,
  },
  driverImage: {
    width: 120,
    height: 120,
    borderRadius: 80,
    marginVertical: 15,
    marginTop:40
  },
  status: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 10,
    marginTop:40
  },
  button: {
    backgroundColor: "#F4A100",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 35,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
});

export default RideConfirmScreen;
