import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  Animated,
  PanResponder,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styled } from "nativewind";

const { height, width } = Dimensions.get("window");

// Mock cab data
const cabs = [
  { id: 1, latitude: 37.78825, longitude: -122.4324 },
  { id: 2, latitude: 37.78925, longitude: -122.4354 },
  { id: 3, latitude: 37.78625, longitude: -122.4384 },
];

const StyledView = styled(View);
const StyledText = styled(Text);

const MapScreen = () => {
  const translateY = useRef(new Animated.Value(height - 150)).current;
  const [isOpen, setIsOpen] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        const newY = Math.max(height - 400, Math.min(height - 150, gesture.moveY));
        translateY.setValue(newY);
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.moveY < height - 300) {
          Animated.spring(translateY, { toValue: height - 400, useNativeDriver: false }).start();
          setIsOpen(true);
        } else {
          Animated.spring(translateY, { toValue: height - 150, useNativeDriver: false }).start();
          setIsOpen(false);
        }
      },
    })
  ).current;

  return (
    <StyledView className="flex-1">
      {/* Map */}
      <MapView
        style={{ width, height }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {cabs.map((cab) => (
          <Marker
            key={cab.id}
            coordinate={{ latitude: cab.latitude, longitude: cab.longitude }}
            title={`Cab ${cab.id}`}
            description="Available"
          />
        ))}
      </MapView>

      {/* Bottom Drawer */}
      <Animated.View style={{ transform: [{ translateY }] }} className="absolute bottom-0 w-full bg-white rounded-t-2xl p-5 h-[400px] shadow-lg">
        {/* Drag Handle */}
        <StyledView {...panResponder.panHandlers} className="w-12 h-1.5 bg-gray-400 rounded-full self-center my-2" />

        <StyledText className="text-lg font-bold text-gray-800 mb-2">Available Cabs</StyledText>
        {cabs.map((cab) => (
          <StyledText key={cab.id} className="text-gray-600 text-base">
            🚖 Cab {cab.id}: ({cab.latitude.toFixed(3)}, {cab.longitude.toFixed(3)})
          </StyledText>
        ))}
      </Animated.View>
    </StyledView>
  );
};

export default MapScreen;
