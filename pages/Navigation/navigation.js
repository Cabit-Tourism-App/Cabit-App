// import React from 'react';
// import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

// const NavigationScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Image
//         source={{ uri: 'https://example.com/image.jpg' }} // Replace with your image URL
//         style={styles.backgroundImage}
//       />
//       <Text style={styles.header}>CabIt</Text>
//       <Text style={styles.subHeader}>Your Journey, Your Choice</Text>

//       <TouchableOpacity style={styles.card} onPress={() => alert('Book a cab')}>
//         <Image
//           source={{ uri: 'https://example.com/taxi-icon.png' }} // Replace with your icon URL
//           style={styles.icon}
//         />
//         <Text style={styles.cardText}>Want to book a cab?</Text>
//         <Text style={styles.cardDescription}>Book seamless cab experience</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.card} onPress={() => alert('Book a trip')}>
//         <Image
//           source={{ uri: 'https://example.com/trip-icon.png' }} // Replace with your icon URL
//           style={styles.icon}
//         />
//         <Text style={styles.cardText}>Want to book a trip?</Text>
//         <Text style={styles.cardDescription}>Book from our itineraries</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.card} onPress={() => alert('Plan a tour')}>
//         <Text style={styles.cardText}>Plan a tour as you wish</Text>
//         <Text style={styles.cardDescription}>Plan tours according to you</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   backgroundImage: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//     opacity: 0.5,
//   },
//   header: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     color: '#fff',
//     position: 'absolute',
//     top: 50,
//   },
//   subHeader: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: '#FFA500',
//     position: 'absolute',
//     top: 100,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     margin: 10,
//     alignItems: 'center',
//     width: '80%',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 5,
//   },
//   icon: {
//     width: 30,
//     height: 30,
//     marginBottom: 10,
//   },
//   cardText: {
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   cardDescription: {
//     fontSize: 14,
//     color: '#666',
//   },
// });

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/header';
import InfoCard from './components/infoCard';
import BackgroundImage from './components/backgroundImage';

const NavigationScreen = ({ navigation }) => {
  return (
    <BackgroundImage>
      <View style={styles.container}>
        <Header />
        
        <InfoCard 
          image={require('../../assets/logo.png')}
          title="Want to book a cab?"
          subtitle="Book seamless cab experience"
          onPress={() => navigation.navigate('CabBooking')}
        />
        
        <InfoCard 
          image={require('../../assets/logo.png')}
          title="Want to book a trip?"
          subtitle="Book from our itineraries"
          onPress={() => navigation.navigate('TripBooking')}
        />

        <InfoCard 
          image={require('../../assets/logo.png')}
          title="Plan a tour as your wish"
          subtitle="Plan tours according to you"
          onPress={() => navigation.navigate('TourPlanner')}
        />
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default NavigationScreen;
