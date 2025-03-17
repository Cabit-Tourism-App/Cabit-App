import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, Dimensions, Animated } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.65;
const ITEM_SPACING = width * 0.05;

// Header Component
const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.menuButton}>
        <Ionicons name="menu" size={24} color="#333" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.searchButton}>
        <Ionicons name="search" size={22} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

// User Greeting Component
const UserGreeting = ({ name, image }) => {
  return (
    <View style={styles.greetingContainer}>
      <View>
        <Text style={styles.greetingText}>Hey <Text style={styles.userName}>{name}!</Text></Text>
        <Text style={styles.subGreetingText}>Where your next trip going to be?</Text>
      </View>
      <Image 
        source={{ uri: image }} 
        style={styles.userImage} 
      />
    </View>
  );
};

// Location Selector Component
const LocationSelector = ({ location }) => {
  return (
    <View style={styles.locationSelectorWrapper}>
      <TouchableOpacity style={styles.locationSelector}>
        <Ionicons name="location" size={16} color="#333" />
        <Text style={styles.locationSelectorText}>{location}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Location Card Component
const LocationCard = ({ location, image, isActive = false, index, scrollX }) => {
  // Calculate dynamic scaling based on position
  const inputRange = [
    (index - 1) * (ITEM_WIDTH + ITEM_SPACING),
    index * (ITEM_WIDTH + ITEM_SPACING),
    (index + 1) * (ITEM_WIDTH + ITEM_SPACING),
  ];
  
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.85, 1, 0.85],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.locationCardContainer,
        { transform: [{ scale }] }
      ]}
    >
      <TouchableOpacity 
        style={[styles.locationCard, isActive && styles.activeLocationCard]} 
        activeOpacity={0.9}
      >
        <View style={styles.locationImageContainer}>
          <Image 
            source={{ uri: image }} 
            style={styles.locationImage} 
            resizeMode="cover"
          />
        </View>
        <Text style={styles.locationCardText}>{location}</Text>
        {isActive && (
          <View style={styles.locationDotsContainer}>
            <View style={styles.locationDot} />
          </View>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

// Nearby Locations Section
const NearbyLocations = ({ locations, scrollX }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Near Your Location</Text>
      
      <Animated.FlatList
        data={locations}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.locationCardsContainer}
        snapToInterval={ITEM_WIDTH + ITEM_SPACING}
        decelerationRate="fast"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => (
          <LocationCard 
            location={item.name}
            image={item.image}
            isActive={item.isActive}
            index={index}
            scrollX={scrollX}
          />
        )}
        snapToAlignment="center"
        scrollEventThrottle={16}
      />
    </View>
  );
};

// Guide Card Component
const GuideCard = ({ name, image, distance, onPress }) => {
  return (
    <TouchableOpacity style={styles.guideCard} onPress={onPress} activeOpacity={0.9}>
      <View style={styles.guideImageContainer}>
        <Image 
          source={{ uri: image }} 
          style={styles.guideImage} 
          resizeMode="cover"
        />
      </View>
      <Text style={styles.guideName}>{name}</Text>
      <Text style={styles.guideDistance}>{distance}</Text>
    </TouchableOpacity>
  );
};

// Guides Section
const GuidesSection = ({ guides }) => {
  return (
    <View style={styles.guideSectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Find Your Guide!</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.guidesContainer}>
        {guides.map((guide) => (
          <GuideCard 
            key={guide.id}
            name={guide.name}
            image={guide.image}
            distance={guide.distance}
            onPress={() => console.log(`Selected guide: ${guide.name}`)}
          />
        ))}
      </View>
    </View>
  );
};

// Bottom Bar Component
const BottomBar = () => {
  return (
    <View style={styles.bottomBar}>
      <View style={styles.bottomLeftSection}>
        <View style={styles.calendarContainer}>
          <AntDesign name="calendar" size={20} color="#333" />
        </View>
        <View style={styles.locationCountContainer}>
          <Text style={styles.locationCountText}>1</Text>
        </View>
        <Text style={styles.bottomBarText}>Location added to Planner</Text>
      </View>
      <TouchableOpacity style={styles.nextButton}>
        <AntDesign name="arrowright" size={18} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

// Main Component
const TravelHomeScreen = () => {
  const userImage = "https://randomuser.me/api/portraits/men/32.jpg";
  const scrollX = useRef(new Animated.Value(0)).current;
  
  const nearbyLocations = [
    {
      id: '1',
      name: 'Dal Lake, Jammu and Kashmir',
      image: 'https://i.pinimg.com/474x/93/ea/a6/93eaa663f1ea365176598a1dd2dc290b.jpg',
      isActive: true,
    },
    {
      id: '2',
      name: 'Gulmarg',
      image: 'https://images.unsplash.com/photo-1562832135-14a35d25edef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      isActive: false,
    },
    {
      id: '3',
      name: 'Pahalgam',
      image: 'https://images.unsplash.com/photo-1544461772-722f499fa2a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      isActive: false,
    },
  ];
  
  const guides = [
    {
      id: '1',
      name: 'Michelle Sanders',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      distance: '1.7km',
    },
    {
      id: '2',
      name: 'Angela Lahm',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      distance: '6.7km',
    },
    {
      id: '3',
      name: 'Trevor',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      distance: '2.7km',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F8F8" />
      
      <Header />
      <UserGreeting name="McHardyan" image={userImage} />
      <LocationSelector location="Jammu Kashmir" />
      <NearbyLocations locations={nearbyLocations} scrollX={scrollX} />
      <GuidesSection guides={guides} />
      <BottomBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F8F8',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingTop: 10,
      paddingBottom: 5,
    },
    menuButton: {
      backgroundColor: '#FFE4A0',
      padding: 8,
      borderRadius: 10,
    },
    searchButton: {
      backgroundColor: '#FFE4A0',
      padding: 8,
      borderRadius: 10,
    },
    greetingContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      marginTop: 15,
    },
    greetingText: {
      fontSize: 22,
      fontWeight: '400',
    },
    userName: {
      fontWeight: 'bold',
    },
    subGreetingText: {
      color: '#777',
      fontSize: 14,
      marginTop: 4,
    },
    userImage: {
      width: 45,
      height: 45,
      borderRadius: 22.5,
    },
    locationSelectorWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    locationSelector: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFE4A0',
      width: width * 0.6, // Reduced width to match image
      paddingVertical: 12,
      borderRadius: 25,
    },
    locationSelectorText: {
      fontWeight: '500',
      marginLeft: 6,
    },
    sectionContainer: {
      marginTop: 25,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      marginBottom: 15,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      paddingHorizontal: 16,
      marginBottom: 15,
    },
    seeAllText: {
      color: '#555',
      fontSize: 14,
      marginRight: 16,
    },
    locationCardsContainer: {
      paddingLeft: width * 0.1, // Dynamic padding based on screen width
      paddingRight: width * 0.1,
    },
    locationCardContainer: {
      width: ITEM_WIDTH,
      marginHorizontal: ITEM_SPACING / 2,
    },
    locationCard: {
      backgroundColor: '#FFE4A0',
      borderRadius: 20,
      width: '100%',
      height: 180,
      overflow: 'hidden',
      justifyContent: 'flex-end',
    },
    activeLocationCard: {
      // Additional styles for active card if needed
    },
    locationImageContainer: {
      position: 'absolute',
      top: 10,
      left: 10,
      right: 10,
      bottom: 35,
      borderRadius: 15,
      overflow: 'hidden',
    },
    locationImage: {
      width: '100%',
      height: '100%',
    },
    locationCardText: {
      paddingHorizontal: 15,
      paddingBottom: 10,
      fontWeight: '500',
      fontSize: 13,
    },
    locationDotsContainer: {
      position: 'absolute',
      bottom: 10,
      right: 15,
    },
    locationDot: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: '#333',
    },
    guideSectionContainer: {
      marginTop: 25,
      marginBottom: 70, // Add space at bottom for fixed bottom bar
    },
    guidesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      height: 140, // Increased height
    },
    guideCard: {
      alignItems: 'center',
      width: (width - 64) / 3, // Equal distribution with padding
      paddingVertical: 10,
    },
    guideImageContainer: {
      width: 120,
      height: 120,
      borderRadius: 20, // Updated to match image which shows more rounded corners
      backgroundColor: '#FFE4A0',
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    guideImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    guideName: {
      fontSize: 15,
      fontWeight: '500',
      marginTop: 8,
      textAlign: 'center',
    },
    guideDistance: {
      fontSize: 12,
      color: '#555',
      marginTop: 4,
    },
    bottomBar: {
      position: 'absolute',
      bottom: 20,
      left: 16,
      right: 16,
      backgroundColor: '#FFE4A0',
      borderRadius: 30,
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
    },
    bottomLeftSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    calendarContainer: {
      width: 40,
      height: 40,
      backgroundColor: '#FFF',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    locationCountContainer: {
      width: 24,
      height: 24,
      backgroundColor: '#FFF',
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    locationCountText: {
      fontSize: 12,
      fontWeight: 'bold',
    },
    bottomBarText: {
      fontSize: 14,
      fontWeight: '500',
      marginRight: 5,
    },
    nextButton: {
      width: 40,
      height: 40,
      backgroundColor: '#FFF',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default TravelHomeScreen;
