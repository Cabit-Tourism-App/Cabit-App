// RatingScreen/components/TripDetail.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TripDetail = ({ trip }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Trip Detail</Text>
      <View style={styles.tripPath}>
        <View style={styles.locationContainer}>
          <View style={styles.originDot} />
          <Text style={styles.locationText}>{trip.origin}</Text>
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.locationContainer}>
          <View style={styles.destinationDot} />
          <Text style={styles.locationText}>{trip.destination}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  tripPath: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  originDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#FFCC00',
    marginRight: 12,
  },
  verticalLine: {
    width: 2,
    height: 20,
    backgroundColor: '#DDD',
    marginLeft: 7,
  },
  destinationDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#FF3366',
    marginRight: 12,
  },
  locationText: {
    fontSize: 16,
    color: '#333',
  },
});

export default TripDetail;