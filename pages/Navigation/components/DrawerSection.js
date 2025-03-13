import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import InfoCard from './infoCard';

const DrawerSection = ({ navigation }) => {
  return (
    <View style={styles.drawerWrapper}>
      <ImageBackground 
        source={require('../../../assets/mapIMG.png')} // Image only for drawer
        style={styles.drawerBackground}
      >
        <View style={styles.drawerContainer}>
          {/* Heading inside the drawer */}
          <Text style={styles.drawerHeading}>Your Journey,</Text>
          <Text style={styles.drawerHeading2}>Your Choice</Text>

          <InfoCard 
            image={require('../../../assets/logo.png')}
            title="Want to book a cab?"
            subtitle="Book seamless cab experience"
            onPress={() => navigation.navigate('BookingLocation')}
          />
          
          <InfoCard 
            image={require('../../../assets/logo.png')}
            title="Want to book a trip?"
            subtitle="Book from our itineraries"
            onPress={() => navigation.navigate('BookingLocation')}
          />

          <InfoCard 
            image={require('../../../assets/logo.png')}
            title="Plan a tour as you wish"
            subtitle="Plan tours according to you"
            onPress={() => navigation.navigate('BookingLocation')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "55%", // Drawer height
  },
  drawerBackground: {
    flex: 1, // Ensures background image covers only the drawer
    width: "100%",
    height: "100%",
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    // padding: 20,
    // width: "100%",
    // height: "100%",
  },
  drawerContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.85)", // Semi-transparent white for contrast
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    width: "100%",
    height: "100%",
  },
  drawerHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFA500',
    textAlign: 'center',
    marginBottom: 5,
  },
  drawerHeading2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
  }
});

export default DrawerSection;
