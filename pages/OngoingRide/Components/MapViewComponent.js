import React from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { View, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function MapViewComponent() {
  const origin = { latitude: 37.7749, longitude: -122.4194 }; // Example origin
  const destination = { latitude: 37.7849, longitude: -122.4094 }; // Example destination

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: (origin.latitude + destination.latitude) / 2,
          longitude: (origin.longitude + destination.longitude) / 2,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        {/* Origin Marker */}
        <Marker coordinate={origin} title="Start Location" pinColor="black" />

        {/* Destination Marker */}
        <Marker coordinate={destination} title="Destination" pinColor="red" />

        {/* Route Line */}
        <Polyline
          coordinates={[origin, destination]}
          strokeColor="red"
          strokeWidth={4}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height*0.4,
  },
  map: {
    flex: 1,
  },
});
