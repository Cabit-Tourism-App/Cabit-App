// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput, StatusBar } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// // Main screen component
// const AddedLocationsScreen = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [locations, setLocations] = useState([
//     { id: 1, name: 'Red Fort', description: 'Discover new places and find new adventures.', bgColor: '#F3E5FF', image: require('assets/red-fort.png') },
//     { id: 2, name: 'Lotus Temple', description: 'Discover new places and find new adventures.', bgColor: '#E5EEFF', image: require('assets/lotus-temple.png') },
//     { id: 3, name: 'Haus Khas', description: 'Discover new places and find new adventures.', bgColor: '#E5FFF5', image: require('assets/haus-khas.png') },
//     { id: 4, name: 'Qutub Minar', description: 'Discover new places and find new adventures.', bgColor: '#FFF5E5', image: require('assets/qutub-minar.png') },
//   ]);

//   const handleRemove = (id) => {
//     const filteredLocations = locations.filter((location) => location.id !== id);
//     setLocations(filteredLocations);
//   };

//   const filteredLocations = locations.filter((location) =>
//     location.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" />
      
//       {/* Header with "Added Locations" title and profile icon */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Added Locations</Text>
//         <TouchableOpacity style={styles.profileButton}>
//           <Image 
//             source={require('assets/profile-icon.png')} 
//             style={styles.profileAvatar} 
//           />
//         </TouchableOpacity>
//       </View>
      
//       {/* Search bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search"
//           placeholderTextColor="#999"
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//         />
//         <TouchableOpacity style={styles.searchIcon}>
//           <Ionicons name="search" size={20} color="#999" />
//         </TouchableOpacity>
//       </View>
      
//       {/* Destinations list */}
//       <ScrollView 
//         style={styles.destinationsList} 
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContent}
//       >
//         {filteredLocations.map((location) => (
//           <LocationCard
//             key={location.id}
//             id={location.id}
//             name={location.name}
//             description={location.description}
//             bgColor={location.bgColor}
//             image={location.image}
//             onRemove={handleRemove}
//           />
//         ))}
        
//         {/* Extra space to ensure the bottom button doesn't cover content */}
//         <View style={styles.bottomSpace} />
//       </ScrollView>
      
//       {/* Book a Trip Button */}
//       <View style={styles.bookButtonContainer}>
//         <TouchableOpacity style={styles.bookButton}>
//           <Text style={styles.bookButtonText}>Book a Trip</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// // Location card component (reusable)
// const LocationCard = ({ id, name, description, bgColor, image, onRemove }) => {
//   return (
//     <View style={[styles.card, { backgroundColor: bgColor }]}>
//       <View style={styles.cardContent}>
//         <TouchableOpacity style={styles.removeButton} onPress={() => onRemove(id)}>
//           <Ionicons name="close" size={16} color="#000" />
//         </TouchableOpacity>
        
//         <View style={styles.cardInner}>
//           <View style={styles.imageContainer}>
//             <Image source={image} style={styles.locationImage} />
//           </View>
          
//           <View style={styles.locationInfo}>
//             <Text style={styles.locationName}>{name}</Text>
//             <Text style={styles.locationDescription}>{description}</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 16,
//     paddingTop: 10,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingTop: 15,
//     paddingBottom: 20,
//   },
//   headerTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   profileButton: {
//     width: 38,
//     height: 38,
//     borderRadius: 19,
//     overflow: 'hidden',
//     backgroundColor: '#F2F7FF',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   profileAvatar: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     borderRadius: 25,
//     marginBottom: 20,
//     height: 46,
//     backgroundColor: '#FCFCFC',
//   },
//   searchInput: {
//     flex: 1,
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     fontSize: 16,
//     color: '#333',
//   },
//   searchIcon: {
//     padding: 10,
//     marginRight: 5,
//   },
//   destinationsList: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingBottom: 80, // Ensure content isn't hidden behind the book button
//   },
//   card: {
//     borderRadius: 16,
//     marginBottom: 16,
//     overflow: 'hidden',
//   },
//   cardContent: {
//     position: 'relative',
//   },
//   removeButton: {
//     position: 'absolute',
//     left: 10,
//     top: 10,
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 1,
//     elevation: 2,
//   },
//   cardInner: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     overflow: 'hidden',
//     minHeight: 90,
//     paddingRight: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   imageContainer: {
//     width: 100, // fixed width
//     height: 100, // fixed height
//     borderRadius: 12, // rounded corners if desired
//     overflow: 'hidden', // ensure image doesn't overflow container
//     marginRight: 10,
//   },
// locationImage: {
//   width: '100%', // take full width
//   height: '100%', // take full height
//   resizeMode: 'cover', // fill the space without empty gaps
// },
//   locationInfo: {
//     flex: 1,
//     padding: 10,
//   },
//   locationName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: 4,
//   },
//   locationDescription: {
//     fontSize: 14,
//     color: '#666',
//     lineHeight: 20,
//   },
//   bottomSpace: {
//     height: 20,
//   },
//   bookButtonContainer: {
//     position: 'absolute',
//     bottom: 30,
//     left: 16,
//     right: 16,
//   },
//   bookButton: {
//     backgroundColor: '#FFCC66',
//     borderRadius: 25,
//     height: 54,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   bookButtonText: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#000',
//   },
// });

// export default AddedLocationsScreen;

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Main screen component
const AddedLocationsScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locations, setLocations] = useState([
    { id: 1, name: 'Red Fort', description: 'Discover new places and find new adventures.', bgColor: '#F3E5FF', image: require('assets/red-fort.png') },
    { id: 2, name: 'Lotus Temple', description: 'Discover new places and find new adventures.', bgColor: '#E5EEFF', image: require('assets/lotus-temple.png') },
    { id: 3, name: 'Haus Khas', description: 'Discover new places and find new adventures.', bgColor: '#E5FFF5', image: require('assets/haus-khas.png') },
    { id: 4, name: 'Qutub Minar', description: 'Discover new places and find new adventures.', bgColor: '#FFF5E5', image: require('assets/qutub-minar.png') },
  ]);

  const handleRemove = (id) => {
    const filteredLocations = locations.filter((location) => location.id !== id);
    setLocations(filteredLocations);
  };

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header with "Added Locations" title and profile icon */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Added Locations</Text>
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
          value={searchQuery}
          onChangeText={setSearchQuery}
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
        {filteredLocations.map((location) => (
          <LocationCard
            key={location.id}
            id={location.id}
            name={location.name}
            description={location.description}
            bgColor={location.bgColor}
            image={location.image}
            onRemove={handleRemove}
          />
        ))}
        
        {/* Extra space to ensure the bottom button doesn't cover content */}
        <View style={styles.bottomSpace} />
      </ScrollView>
      
      {/* Book a Trip Button */}
      <View style={styles.bookButtonContainer}>
        <TouchableOpacity style={styles.bookButton} onPress={()=> navigation.navigate('Confirm')}>
          <Text style={styles.bookButtonText}>Book a Trip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Location card component (reusable)
const LocationCard = ({ id, name, description, bgColor, image, onRemove }) => {
  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <View style={styles.cardContent}>
        <TouchableOpacity style={styles.removeButton} onPress={() => onRemove(id)}>
          <Ionicons name="close" size={16} color="#000" />
        </TouchableOpacity>
        
        {/* White box with shadow */}
        <View style={styles.whiteBoxContainer}>
          <View style={styles.cardInner}>
            <View style={styles.imageContainer}>
              <Image source={image} style={styles.locationImage} />
            </View>
            
            <View style={styles.locationInfo}>
              <Text style={styles.locationName}>{name}</Text>
              <Text style={styles.locationDescription}>{description}</Text>
            </View>
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
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  profileButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    overflow: 'hidden',
    backgroundColor: '#F2F7FF',
    justifyContent: 'center',
    alignItems: 'center',
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
    borderColor: '#E0E0E0',
    borderRadius: 25,
    marginBottom: 20,
    height: 46,
    backgroundColor: '#FCFCFC',
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
  },
  searchIcon: {
    padding: 10,
    marginRight: 5,
  },
  destinationsList: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80, // Ensure content isn't hidden behind the book button
  },
  card: {
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  cardContent: {
    position: 'relative',
  },
  removeButton: {
    position: 'absolute',
    left: 10,
    top: 10,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  whiteBoxContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginTop: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardInner: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 90,
    paddingRight: 10,
  },
  imageContainer: {
    width: 100, // fixed width
    height: 100, // fixed height
    borderRadius: 12, // rounded corners if desired
    overflow: 'hidden', // ensure image doesn't overflow container
    marginRight: 10,
  },
  locationImage: {
    width: '100%', // take full width
    height: '100%', // take full height
    resizeMode: 'cover', // fill the space without empty gaps
  },
  locationInfo: {
    flex: 1,
    padding: 10,
  },
  locationName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  locationDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  bottomSpace: {
    height: 20,
  },
  bookButtonContainer: {
    position: 'absolute',
    bottom: 30,
    left: 16,
    right: 16,
  },
  bookButton: {
    backgroundColor: '#FFCC66',
    borderRadius: 25,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bookButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
});

export default AddedLocationsScreen;
