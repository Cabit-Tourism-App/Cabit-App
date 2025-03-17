import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Main screen component
const SavedDestinationsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header with "Saved" title and profile icon */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Saved</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Image 
            source={require('assets/profile-icon.png')} 
            style={styles.profileAvatar} 
          />
        </TouchableOpacity>
      </View>
      
      {/* Search bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.searchIcon}>
          <Ionicons name="search" size={20} color="#999" />
        </TouchableOpacity>
      </View>
      
      {/* Destinations list */}
      <ScrollView 
        style={styles.destinationsList} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <DestinationCard 
          name="Delhi"
          description="Discover new places and find new adventures."
          price="$500"
          bgColor="#f3ebff"
          image={require('assets/delhi.jpg')}
        />
        
        <DestinationCard 
          name="Goa"
          description="Discover new places and find new adventures."
          price="$500"
          bgColor="#e6f4ff"
          image={require('assets/goa.jpg')}
        />
        
        <DestinationCard 
          name="Bali"
          description="Discover new places and find new adventures."
          price="$500"
          bgColor="#e6fff9"
          image={require('assets/bali.jpg')}
        />
        
        <DestinationCard 
          name="Shimla"
          description="Discover new places and find new adventures."
          price="$500"
          bgColor="#fff9e6"
          image={require('assets/shimla.jpg')}
        />
        
        <DestinationCard 
          name="Manali"
          description="Discover new places and find new adventures."
          price="$500"
          bgColor="#ffe6e6"
          image={require('assets/manali.jpg')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// Destination card component (reusable)
const DestinationCard = ({ name, description, price, bgColor, image }) => {
  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <View style={styles.cardContent}>
        <TouchableOpacity style={styles.removeButton}>
          <Ionicons name="close" size={16} color="#000" />
        </TouchableOpacity>
        
        <View style={styles.cardInner}>
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.destinationImage} />
          </View>
          
          <View style={styles.destinationInfo}>
            <View style={styles.destinationNameRow}>
              <Text style={styles.destinationName}>{name}</Text>
              <View style={styles.priceTag}>
                <Text style={styles.priceText}>{price}</Text>
              </View>
            </View>
            <Text style={styles.destinationDescription}>{description}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 10, // Added top padding to push everything down
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20, // Increased top padding
    paddingBottom: 24, // Increased bottom padding
  },
  headerTitle: {
    fontSize: 30, // Slightly larger title
    fontWeight: 'bold',
    color: '#000',
  },
  profileButton: {
    width: 42, // Slightly larger profile button
    height: 42,
    borderRadius: 21,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  profileAvatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 24, // Increased margin below search bar
    height: 50, // Taller search bar
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
  },
  searchIcon: {
    padding: 12,
  },
  destinationsList: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30, // Add padding at the bottom of scroll content
  },
  card: {
    borderRadius: 16,
    marginBottom: 20, // Increased margin between cards
    overflow: 'hidden',
  },
  cardContent: {
    padding: 0,
    position: 'relative',
  },
  removeButton: {
    position: 'absolute',
    left: 14,
    top: 14,
    width: 26, // Slightly larger remove button
    height: 26,
    borderRadius: 13,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  cardInner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    height: 120, // Increased height of card inner content
  },
  imageContainer: {
    width: 120, // Larger image container
    height: 120, // Larger image container
    justifyContent: 'center',
    alignItems: 'center',
  },
  destinationImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  destinationInfo: {
    flex: 1,
    padding: 14, // Slightly more padding
  },
  destinationNameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6, // Slightly more margin
  },
  destinationName: {
    fontSize: 22, // Larger font for destination name
    fontWeight: 'bold',
    color: '#000',
  },
  priceTag: {
    backgroundColor: '#ffe082',
    paddingHorizontal: 12, // Slightly larger price tag
    paddingVertical: 6,
    borderRadius: 14,
  },
  priceText: {
    fontSize: 15, // Slightly larger price text
    fontWeight: 'bold',
    color: '#000',
  },
  destinationDescription: {
    fontSize: 15, // Slightly larger description text
    color: '#666',
    lineHeight: 22, // Increased line height
  },
});

export default SavedDestinationsScreen;
