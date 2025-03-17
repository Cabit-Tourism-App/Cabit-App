import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const TripDestinationScreen = () => {
  // Sample data - replace with your actual data
  const destination = {
    name: 'Great Pattaya Beach',
    location: 'Pattaya',
    description: 'Pattaya Beach is a vibrant crescent-shaped shoreline known for its lively atmosphere, water sports, and stunning views of the Gulf of Thailand.',
    price: 'Rp. 25 / km',
    images: [
      require('assets/beach_main.jpg'),
      require('assets/gallery1.jpg'),
      require('assets/gallery2.jpg'),
      require('assets/gallery3.jpg'),
      require('assets/gallery4.jpg'),
    ],
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          bounces={false}
        >
          {/* Header Card with Back Button */}
          <View style={styles.headerCard}>
            <Image
              source={destination.images[0]}
              style={styles.headerImage}
              resizeMode="cover"
            />
            <TouchableOpacity style={styles.backButton}>
            <Image
                source={require('assets/icon.png')}
                style={styles.backIcon}
            />
            </TouchableOpacity>
            <View style={styles.headerOverlay}>
              <Text style={styles.headerTitle}>{destination.name}</Text>
              <Text style={styles.headerLocation}>{destination.location}</Text>
            </View>
          </View>

          {/* Description Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{destination.description}</Text>
            <TouchableOpacity>
              <Text style={styles.showMoreText}>Show More</Text>
            </TouchableOpacity>
          </View>

          {/* Gallery Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Gallery</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.galleryContainer}
            >
              {destination.images.slice(1).map((image, index) => (
                <Image
                  key={index}
                  source={image}
                  style={styles.galleryImage}
                  resizeMode="cover"
                />
              ))}
            </ScrollView>
          </View>

          {/* Location Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Location</Text>
            <View style={styles.mapContainer}>
              <Image
                source={require('assets/map_background.jpg')}
                style={styles.mapImage}
                resizeMode="cover"
              />
            </View>
          </View>

          {/* Extra space to ensure content isn't hidden behind bottom bar */}
          <View style={styles.bottomSpace} />
        </ScrollView>

        {/* Fixed Bottom Navigation Bar */}
        <View style={styles.bottomBar}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Price</Text>
            <Text style={styles.priceText}>{destination.price}</Text>
          </View>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  scrollContent: {
    paddingTop: StatusBar.currentHeight || 0,
    paddingBottom: 16,
  },
  headerCard: {
    position: 'relative',
    margin: 16,
    borderRadius: 20,
    overflow: 'hidden',
    height: width * 0.6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    padding: 8, // Invisible padding for better touch area
    zIndex: 10,
  },
  backIcon: {
    width: 20, // Control width (smaller)
    height: 20, // Control height (smaller)
    borderRadius: 4, // Optional: rounded corners if your icon isn't already circular
    resizeMode: 'contain', // Keep aspect ratio without distortion
  },
  headerOverlay: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  headerLocation: {
    fontSize: 16,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  section: {
    padding: 16,
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  showMoreText: {
    color: '#F9A826',
    fontWeight: '600',
    marginTop: 8,
  },
  galleryContainer: {
    paddingVertical: 8,
  },
  galleryImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 8,
  },
  mapContainer: {
    height: 150,
    borderRadius: 12,
    overflow: 'hidden',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  bottomSpace: {
    height: 80,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10,
  },
  priceContainer: {
    flex: 1,
  },
  priceLabel: {
    fontSize: 14,
    color: '#888',
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  bookButton: {
    backgroundColor: '#F9A826',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TripDestinationScreen;
