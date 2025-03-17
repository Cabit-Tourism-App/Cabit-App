import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; // Make sure to install expo/vector-icons

// TripItem component for each trip entry
const TripItem = ({ origin, destination, driverName, driverRating, price, time, driverImage }) => {
  return (
    <View style={styles.tripItemContainer}>
      {/* Route information */}
      <View style={styles.routeContainer}>
        <View style={styles.locationLine}>
          <View style={styles.originDot} />
          <View style={styles.verticalLine} />
          <MaterialIcons name="location-on" size={16} color="#FF6B6B" style={styles.locationIcon} />
        </View>
        <View style={styles.locationTextContainer}>
          <View style={styles.locationItem}>
            <Text style={styles.locationText}>{origin}</Text>
            <Text style={styles.timeText}>{time.origin}</Text>
          </View>
          <View style={styles.locationItem}>
            <Text style={styles.locationText}>{destination}</Text>
            <Text style={styles.timeText}>{time.destination}</Text>
          </View>
        </View>
      </View>

      {/* Driver information (if available) */}
      {driverName && (
        <View style={styles.driverInfoContainer}>
          <View style={styles.driverDetails}>
            <Image source={{ uri: driverImage }} style={styles.driverImage} />
            <View style={styles.driverTextContainer}>
              <Text style={styles.driverName}>{driverName}</Text>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={14} color="#FFD700" />
                <Text style={styles.ratingText}>{driverRating}</Text>
              </View>
            </View>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Price</Text>
            <Text style={styles.priceValue}>${price}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

// Filter button component
const FilterButton = ({ label, active, onPress }) => {
  return (
    <TouchableOpacity 
      style={[styles.filterButton, active && styles.activeFilterButton]} 
      onPress={onPress}
    >
      <Text style={[styles.filterButtonText, active && styles.activeFilterText]}>{label}</Text>
    </TouchableOpacity>
  );
};

// Dropdown button component
const DropdownButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.dropdownButton} onPress={onPress}>
      <Text style={styles.dropdownButtonText}>{label}</Text>
      <MaterialIcons name="keyboard-arrow-down" size={18} color="white" />
    </TouchableOpacity>
  );
};

// Header component
const Header = ({ onClose }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Ionicons name="close" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Trip History</Text>
      <View style={styles.placeholder} />
    </View>
  );
};

// Main component
const TripHistoryScreen = () => {
  const [activeFilter, setActiveFilter] = React.useState('History');
  
  const tripData = [
    {
      id: '1',
      origin: 'State Park',
      destination: 'Home',
      time: { origin: '7:34 AM', destination: '7:48 AM' },
      driverName: 'Michael Bracewell',
      driverRating: '4.9',
      price: '9.00',
      driverImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: '2',
      origin: 'Home',
      destination: 'Office',
      time: { origin: '8:30 AM', destination: '8:47 AM' },
      driverName: 'David Willey',
      driverRating: '4.9',
      price: '9.00',
      driverImage: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      id: '3',
      origin: 'OM University',
      destination: 'Home',
      time: { origin: '11:24 AM', destination: '11:52 AM' },
      driverName: 'Wayne Parnell',
      driverRating: '4.9',
      price: '9.00',
      driverImage: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFC857" />
      
      {/* Yellow background */}
      <View style={styles.yellowBackground}>
        <Header onClose={() => console.log('Close pressed')} />
      </View>
      
      {/* White overlay */}
      <View style={styles.whiteOverlay}>
        {/* Filter section */}
        <View style={styles.filterContainer}>
          <FilterButton
            label="History"
            active={activeFilter === 'History'}
            onPress={() => setActiveFilter('History')}
          />
          <DropdownButton label="This Month" onPress={() => console.log('Show dropdown')} />
        </View>

        {/* Trip list */}
        <FlatList
          data={tripData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TripItem
              origin={item.origin}
              destination={item.destination}
              driverName={item.driverName}
              driverRating={item.driverRating}
              price={item.price}
              time={item.time}
              driverImage={item.driverImage}
            />
          )}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC857', // Yellow background
  },
  yellowBackground: {
    backgroundColor: '#FFC857',
    height: 100, // Adjust based on your design
    paddingTop: 10,
  },
  whiteOverlay: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20, // Overlap the yellow background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    left: 16,
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  placeholder: {
    width: 24,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  activeFilterButton: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  filterButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  activeFilterText: {
    fontWeight: 'bold',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  dropdownButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    marginRight: 4,
  },
  listContainer: {
    padding: 16,
  },
  tripItemContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  routeContainer: {
    flexDirection: 'row',
  },
  locationLine: {
    width: 20,
    alignItems: 'center',
    marginRight: 12,
  },
  originDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFD700',
    borderWidth: 2,
    borderColor: 'white',
  },
  verticalLine: {
    width: 2,
    height: 30,
    backgroundColor: '#D3D3D3',
    marginVertical: 4,
  },
  locationIcon: {
    marginTop: -2,
  },
  locationTextContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  locationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  locationText: {
    fontSize: 14,
    fontWeight: '500',
  },
  timeText: {
    fontSize: 12,
    color: '#888',
  },
  driverInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  driverDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  driverTextContainer: {
    marginLeft: 8,
  },
  driverName: {
    fontSize: 14,
    fontWeight: '500',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    marginLeft: 2,
    color: '#444',
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  priceLabel: {
    fontSize: 12,
    color: '#888',
  },
  priceValue: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default TripHistoryScreen;
