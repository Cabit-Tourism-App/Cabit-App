import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  StatusBar 
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const DestinationHomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.locationSelector}>
          <Text style={styles.locationText}>Select Location</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#888" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.notificationIcon}>
          <Ionicons name="notifications-outline" size={24} color="#000" />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={22} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search destinations near you"
            placeholderTextColor="#888"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
      
      {/* Category Filter */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryButtonActive}>
          <Text style={styles.categoryTextActive}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Malls</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Bars</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Market</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Temple</Text>
        </TouchableOpacity>
      </ScrollView>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Popular Destinations */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Destinations</Text>
          <TouchableOpacity>
            <Text style={styles.seeMoreText}>See more</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.destinationsContainer}>
          <TouchableOpacity style={styles.destinationCard} onPress={() => navigation.navigate('Iternary')}>
            <Image
              source={{ uri: 'https://i.pinimg.com/474x/28/2e/41/282e413009092e1c5a9e46a2979796c6.jpg' }}
              style={styles.destinationImage}
            />
            <View style={styles.destinationOverlay}>
              <View style={styles.destinationDetails}>
                <Ionicons name="location" size={18} color="#fff" />
                <Text style={styles.destinationDistance}>1.5 km</Text>
              </View>
              <Text style={styles.destinationName}>Chinatown</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.destinationCard}>
            <Image
              source={{ uri: 'https://i.pinimg.com/474x/69/84/d6/6984d65922207bedec20db93f0479bfe.jpg' }}
              style={styles.destinationImage}
            />
            <View style={styles.destinationOverlay}>
              <View style={styles.destinationDetails}>
                <Ionicons name="location" size={18} color="#fff" />
                <Text style={styles.destinationDistance}>1.5 km</Text>
              </View>
              <Text style={styles.destinationName}>Wat Phra Kaew</Text>
            </View>
          </TouchableOpacity>
          
          {/* New Destination Card */}
          <TouchableOpacity style={styles.destinationCard}>
            <Image
              source={{ uri: 'https://i.pinimg.com/474x/f1/3c/94/f13c9405bf7b2469f965f7a0586df833.jpg' }}
              style={styles.destinationImage}
            />
            <View style={styles.destinationOverlay}>
              <View style={styles.destinationDetails}>
                <Ionicons name="location" size={18} color="#fff" />
                <Text style={styles.destinationDistance}>2.3 km</Text>
              </View>
              <Text style={styles.destinationName}>Grand Palace</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        
        {/* Best Driver Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Driver for you</Text>
          <TouchableOpacity>
            <Text style={styles.seeMoreText}>See more</Text>
          </TouchableOpacity>
        </View>
        
        {/* Driver Cards */}
        <View style={styles.driversContainer}>
          <TouchableOpacity style={styles.driverCard}>
            <Image
              source={{ uri: 'https://i.pinimg.com/474x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg' }}
              style={styles.driverImage}
            />
            <View style={styles.driverInfo}>
              <Text style={styles.driverName}>Akshit Agarwal</Text>
              <Text style={styles.driverRate}>Rp. 25 / km</Text>
              <View style={styles.driverDetails}>
                <View style={styles.driverDetail}>
                  <FontAwesome name="car" size={16} color="#888" />
                  <Text style={styles.driverDetailText}>Swift</Text>
                </View>
                <View style={styles.driverDetail}>
                  <FontAwesome name="users" size={16} color="#888" />
                  <Text style={styles.driverDetailText}>4 Passengers</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.driverCard}>
            <Image
              source={{ uri: 'https://i.pinimg.com/474x/8d/95/03/8d9503a77e4c21ebf0ced6c252819a0e.jpg' }}
              style={styles.driverImage}
            />
            <View style={styles.driverInfo}>
              <Text style={styles.driverName}>Harsh Aditya</Text>
              <Text style={styles.driverRate}>Rp. 24 / km</Text>
              <View style={styles.driverDetails}>
                <View style={styles.driverDetail}>
                  <FontAwesome name="car" size={16} color="#888" />
                  <Text style={styles.driverDetailText}>SUV</Text>
                </View>
                <View style={styles.driverDetail}>
                  <FontAwesome name="users" size={16} color="#888" />
                  <Text style={styles.driverDetailText}>6 Passengers</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.driverCard}>
            <Image
              source={{ uri: 'https://i.pinimg.com/474x/97/ec/73/97ec731c273338ce05957d8e53d7c73b.jpg' }}
              style={styles.driverImage}
            />
            <View style={styles.driverInfo}>
              <Text style={styles.driverName}>Ath Tripathi</Text>
              <Text style={styles.driverRate}>Rp. 22 / km</Text>
              <View style={styles.driverDetails}>
                <View style={styles.driverDetail}>
                  <FontAwesome name="car" size={16} color="#888" />
                  <Text style={styles.driverDetailText}>BMW</Text>
                </View>
                <View style={styles.driverDetail}>
                  <FontAwesome name="users" size={16} color="#888" />
                  <Text style={styles.driverDetailText}>4 Passengers</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#FFB52E" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('History')}>
          <Ionicons name="bookmark-outline" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem2}>
          <Ionicons name="ellipse" size={36} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Upcoming')}>
          <Ionicons name="bulb-outline" size={24} color="#888" />
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={24} color="#888" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  locationSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    color: '#555',
    marginRight: 4,
  },
  notificationIcon: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE4A0',
    borderRadius: 50,
    paddingHorizontal: 16,
    height: 48,
    marginRight: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  filterButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#FFB52E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryContainer: {
    paddingLeft: 16,
    marginBottom: 20,
  },
  categoryButtonActive: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: '#FFB52E',
    borderRadius: 50,
    marginRight: 10,
  },
  categoryButton: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: '#F5F5F5',
    borderRadius: 50,
    marginRight: 10,
  },
  categoryTextActive: {
    color: '#fff',
    fontWeight: '500',
  },
  categoryText: {
    color: '#888',
    fontWeight: '500',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeMoreText: {
    fontSize: 14,
    color: '#888',
  },
  destinationsContainer: {
    paddingLeft: 16,
    marginBottom: 24,
  },
  destinationCard: {
    width: 180,
    height: 220,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 16,
  },
  destinationImage: {
    width: '100%',
    height: '100%',
  },
  destinationOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  destinationDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  destinationDistance: {
    color: '#fff',
    marginLeft: 4,
    fontSize: 12,
  },
  destinationName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  driversContainer: {
    paddingHorizontal: 16,
    marginBottom: 80, // Allow space for bottom navigation
  },
  driverCard: {
    flexDirection: 'row',
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  driverImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  driverInfo: {
    flex: 1,
    marginLeft: 12,
  },
  driverName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  driverRate: {
    fontSize: 14,
    color: '#FFB52E',
    fontWeight: '500',
    marginBottom: 8,
  },
  driverDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  driverDetailsPartial: {
    height: 20, // Just a placeholder since the image is cut off
  },
  driverDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverDetailText: {
    marginLeft: 6,
    color: '#888',
    fontSize: 14,
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    flexDirection: 'row',
    paddingBottom: 8,
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navItem2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: 11,
    // height: 64,
 
  },
});

export default DestinationHomeScreen;
