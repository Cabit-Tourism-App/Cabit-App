// import React from "react";
// import { View, TextInput, StyleSheet } from "react-native";

// const SearchBar = () => {
//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Search"
//         placeholderTextColor="#666"
//         accessibilityLabel="Search locations"
//         accessibilityHint="Enter text to search locations"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: "#fff",
//   },
//   input: {
//     height: 48,
//     backgroundColor: "#f5f5f5",
//     borderRadius: 8,
//     paddingHorizontal: 16,
//     fontSize: 16,
//     fontFamily: "Nunito-Regular",
//   },
// });

// export default SearchBar;
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#666"
        accessibilityLabel="Search locations"
        accessibilityHint="Enter text to search locations"
        accessibilityRole="search"
        keyboardType="default"
        autoCorrect={false} // Disable autocorrect for search
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  input: {
    height: 48,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: "Nunito-Regular",
    borderWidth: 1, // Improved UI feedback
    borderColor: "#ddd",
  },
});

export default SearchBar;
