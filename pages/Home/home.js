// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import Icon from "react-native-vector-icons/FontAwesome";
// import "../global.css";

// export default function HomeScreen() {
//   return (
//     <View className="flex-1 bg-gray-100">
//       //Top Section with User Info
//       <View className="h-2/5 relative">
//         <Image
//           source={{ uri: "https://source.unsplash.com/500x500/?nature" }}
//           className="w-full h-full"
//         />
//         <LinearGradient
//           colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.7)"]}
//           className="absolute inset-0 rounded-b-3xl"
//         />
//         <View className="absolute top-12 left-6 flex-row items-center">
//           <Image
//             source={{ uri: "https://source.unsplash.com/100x100/?profile" }}
//             className="w-16 h-16 rounded-full border-2 border-white"
//           />
//           <View className="ml-4">
//             <Text className="text-lg font-bold text-white">Hello, John Doe</Text>
//             <Text className="text-gray-300">Welcome back!</Text>
//           </View>
//         </View>
//       </View>

//       //Main Content
//       <ScrollView className="flex-1 px-6 pt-6 pb-6 -mt-10 bg-white rounded-t-3xl shadow-lg">
//         //Quick Actions
//         <View className="flex-row justify-between mb-6">
//           <TouchableOpacity className="p-4 bg-gray-200 rounded-xl flex items-center">
//             <Icon name="bell" size={24} color="#007bff" />
//             <Text className="text-sm mt-2 text-gray-700">Notifications</Text>
//           </TouchableOpacity>
//           <TouchableOpacity className="p-4 bg-gray-200 rounded-xl flex items-center">
//             <Icon name="cog" size={24} color="#28a745" />
//             <Text className="text-sm mt-2 text-gray-700">Settings</Text>
//           </TouchableOpacity>
//           <TouchableOpacity className="p-4 bg-gray-200 rounded-xl flex items-center">
//             <Icon name="sign-out" size={24} color="red" />
//             <Text className="text-sm mt-2 text-gray-700">Logout</Text>
//           </TouchableOpacity>
//         </View>

//         //Feature Cards
//         <Text className="text-xl font-bold text-gray-800 mb-4">Explore Features</Text>
//         <View className="space-y-4">
//           <TouchableOpacity className="p-4 bg-blue-100 rounded-xl flex-row items-center">
//             <Icon name="calendar" size={24} color="#007bff" />
//             <Text className="ml-4 text-lg text-gray-800">Upcoming Events</Text>
//           </TouchableOpacity>
//           <TouchableOpacity className="p-4 bg-green-100 rounded-xl flex-row items-center">
//             <Icon name="star" size={24} color="#28a745" />
//             <Text className="ml-4 text-lg text-gray-800">Top Services</Text>
//           </TouchableOpacity>
//           <TouchableOpacity className="p-4 bg-yellow-100 rounded-xl flex-row items-center">
//             <Icon name="users" size={24} color="#ffc107" />
//             <Text className="ml-4 text-lg text-gray-800">Community</Text>
//           </TouchableOpacity>
//         </View>

//         //Bottom Section
//         <TouchableOpacity className="w-full bg-blue-500 p-4 rounded-xl items-center mt-6">
//           <Text className="text-white text-lg font-semibold">Get Started</Text>
//         </TouchableOpacity>
//       </ScrollView>

//       <StatusBar style="auto" />
//     </View>
//   );
// }
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// Sample guide data
const guides = [
  { id: '1', name: 'Michelle Saunier', distance: '1.7km', image: require('./assets/guide1.jpg') },
  { id: '2', name: 'Angela Lahm', distance: '6.7km', image: require('./assets/guide2.jpg') },
  { id: '3', name: 'Trevor McHall', distance: '2.7km', image: require('./assets/guide3.jpg') },
];

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hey McHardyan!</Text>
        <Text style={styles.locationLabel}>Where your next trip going to be?</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>Jammu Kashmir</Text>
        </View>
      </View>

      {/* Near Your Location Section */}
      <Text style={styles.sectionTitle}>Near Your Location</Text>
      <View style={styles.imageCard}>
        <Image 
          source={require('./assets/placeholder.jpg')} // Replace with actual image path
          style={styles.image}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.locationName}>Dal Lake, Jammu and Kashmir</Text>

      {/* Find Your Guide Section */}
      <Text style={styles.sectionTitle}>Find Your Guide!</Text>
      <FlatList
        data={guides}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.guideCard}>
            <Image source={item.image} style={styles.guideImage} />
            <Text style={styles.guideName}>{item.name}</Text>
            <Text style={styles.guideDistance}>{item.distance}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.seeAllButton}>
        <Text style={styles.seeAllText}>See All</Text>
      </TouchableOpacity>

      {/* Planner Section */}
      <View style={styles.plannerContainer}>
        <Text style={styles.plannerText}>Location added to Planner</Text>
      </View>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  locationLabel: {
    fontSize: 14,
    color: '#777',
  },
  locationContainer: {
    backgroundColor: '#FDE291',
    borderRadius: 15,
    padding: 10,
    marginTop: 10,
  },
  location: {
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  imageCard: {
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#FDE291',
    borderRadius: 20,
    padding: 10,
  },
  addButtonText: {
    fontWeight: 'bold',
  },
  locationName: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  guideCard: {
    backgroundColor: '#FDE291',
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  guideImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 5,
  },
  guideName: {
    fontWeight: 'bold',
  },
  guideDistance: {
    color: '#777',
  },
  seeAllButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  seeAllText: {
    fontWeight: 'bold',
    color: '#0A74DA',
  },
  plannerContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#E1FFC7',
    borderRadius: 10,
    alignItems: 'center',
  },
  plannerText: {
    fontWeight: 'bold',
  },
});
