import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Main screen component
const UpcomingTripsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header with Search and Profile */}
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" />
          <TextInput 
            style={styles.searchInput} 
            placeholder="Search" 
            placeholderTextColor="#666"
          />
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-circle" size={36} color="#1E88E5" />
        </TouchableOpacity>
      </View>
      
      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>Upcoming Trips</Text>
      </View>
      
      {/* Trips List */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Trip Card - Los Angeles */}
        <TripCard 
          destination="City of Los Angeles"
          location="USA, Los Angeles"
          imageSource={require('assets/los-angeles.jpg')}
        />
        
        {/* Trip Card - Maldives */}
        <TripCard 
          destination="Maldives"
          location="South Asia"
          timeframe="3 weeks"
          imageSource={require('assets/maldives.jpg')}
        />
        
        {/* Trip Card - Tokyo */}
        <TripCard 
          destination="Tokyo"
          location="Japan"
          timeframe="2 months"
          imageSource={require('assets/tokyo.jpg')}
        />
      </ScrollView>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Saved')}>
          <Ionicons name="location" size={24} color="#000" />
          <Text style={styles.navText}>Trips</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#999" />
          <Text style={styles.navTextInactive}>Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="settings-outline" size={24} color="#999" />
          <Text style={styles.navTextInactive}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Trip card component (reusable)
const TripCard = ({ destination, location, timeframe, imageSource }) => {
  return (
    <View style={styles.card}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.destinationImage} />
      </View>
      
      {/* Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.locationText}>{location}</Text>
        <Text style={styles.destinationText}>{destination}</Text>
        
        {timeframe && (
          <View style={styles.timeframeContainer}>
            <View style={styles.timeframeDot} />
            <Text style={styles.timeframeText}>{timeframe}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    flex: 1,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  profileButton: {
    padding: 4,
  },
  titleContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    marginBottom: 24,
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  imageContainer: {
    height: 180,
    position: 'relative',
  },
  destinationImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  destinationText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  timeframeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeframeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#666',
    marginRight: 6,
  },
  timeframeText: {
    fontSize: 14,
    color: '#666',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
    padding: 8,
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: '#000',
    fontWeight: '500',
  },
  navTextInactive: {
    fontSize: 12,
    marginTop: 4,
    color: '#999',
  },
});

export default UpcomingTripsScreen;
