// RatingScreen/components/DriverInfo.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DriverInfo = ({ driver }) => {
  return (
    <View style={styles.driverContainer}>
      <View style={styles.driverInfoRow}>
        <View style={styles.driverProfile}>
          <Image source={{ uri: driver.image }} style={styles.driverImage} />
          <View style={styles.driverDetails}>
            <Text style={styles.driverName}>{driver.name}</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.driverRating}>{driver.rating}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.chatButton}>
          <Ionicons name="chatbubble-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.tripQuestion}>How is your trip?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  driverContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  driverInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  driverProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  driverDetails: {
    marginLeft: 12,
  },
  driverName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverRating: {
    marginLeft: 4,
    fontSize: 14,
    color: '#555',
  },
  chatButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFEDBC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tripQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#000',
  },
});

export default DriverInfo;