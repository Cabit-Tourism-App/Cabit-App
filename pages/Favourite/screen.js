// import React from "react";
// import { View, ScrollView, StyleSheet } from "react-native";
// import Header from "./Header";
// import SearchBar from "./SearchBar";
// import LocationCard from "./LocationCard";
// import BookTripButton from "./BookTripButton";

// const locations = [
//   {
//     id: "1",
//     name: "Red Fort",
//     description: "Discover new places and find new adventures.",
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/93e96ced4afb082166f57d30e3ea98f443ed02df",
//   },
//   {
//     id: "2",
//     name: "Lotus Temple",
//     description: "Discover new places and find new adventures.",
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/56fefeeb181f3b72e3886e5ab02771123b1e63a5",
//   },
//   {
//     id: "3",
//     name: "Haus Khas",
//     description: "Discover new places and find new adventures.",
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/ff2f38300c276e6379642e309258fdba909deaa0",
//   },
//   {
//     id: "4",
//     name: "Qutub Minar",
//     description: "Discover new places and find new adventures.",
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/4c207f892fddc46bd4c751a9525d8959592b51a4",
//   },
// ];

// const LocationScreen = () => {
//   const handleLocationRemove = (id) => {
//     // Handle location removal
//     console.log("Remove location:", id);
//   };

//   return (
//     <View style={styles.container}>
//       <Header />
//       <SearchBar />
//       <ScrollView style={styles.scrollView}>
//         {locations.map((location) => (
//           <LocationCard
//             key={location.id}
//             id={location.id}
//             name={location.name}
//             description={location.description}
//             image={location.image}
//             onRemove={handleLocationRemove}
//           />
//         ))}
//       </ScrollView>
//       <BookTripButton />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   scrollView: {
//     flex: 1,
//     padding: 16,
//   },
// });

// export default LocationScreen;
import React, { useState, useCallback } from "react";
import { View, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import LocationCard from "./Components/LocationCard";
import BookTripButton from "./Components/BookTripButton";

const initialLocations = [
  {
    id: "1",
    name: "Red Fort",
    description: "Discover new places and find new adventures.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/93e96ced4afb082166f57d30e3ea98f443ed02df",
  },
  {
    id: "2",
    name: "Lotus Temple",
    description: "Discover new places and find new adventures.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/56fefeeb181f3b72e3886e5ab02771123b1e63a5",
  },
  {
    id: "3",
    name: "Hauz Khas",
    description: "Discover new places and find new adventures.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ff2f38300c276e6379642e309258fdba909deaa0",
  },
  {
    id: "4",
    name: "Qutub Minar",
    description: "Discover new places and find new adventures.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4c207f892fddc46bd4c751a9525d8959592b51a4",
  },
];

const LocationScreen = () => {
  const [locations, setLocations] = useState(initialLocations);

  const handleLocationRemove = useCallback((id) => {
    setLocations((prevLocations) => prevLocations.filter((loc) => loc.id !== id));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            id={location.id}
            name={location.name}
            description={location.description}
            image={location.image}
            onRemove={handleLocationRemove}
          />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <BookTripButton />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    padding: 16,
  },
  footer: {
    padding: 16,
    backgroundColor: "#fff",
  },
});

export default LocationScreen;
