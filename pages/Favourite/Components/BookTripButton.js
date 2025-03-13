// import React from "react";
// import { TouchableOpacity, Text, StyleSheet } from "react-native";
// import LinearGradient from "react-native-linear-gradient";

// const BookTripButton = () => {
//   return (
//     <TouchableOpacity
//       style={styles.container}
//       accessibilityLabel="Book a Trip"
//       accessibilityRole="button"
//     >
//       <LinearGradient
//         colors={["rgba(255, 182, 29, 0.4)", "#FFB61D"]}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 0 }}
//         style={styles.gradient}
//       >
//         <Text style={styles.text}>Book a Trip</Text>
//       </LinearGradient>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: "#fff",
//   },
//   gradient: {
//     borderRadius: 24,
//     padding: 16,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#000",
//     fontFamily: "Comic Sans MS",
//   },
// });

// export default BookTripButton;
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const BookTripButton = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      accessibilityLabel="Book a Trip"
      accessibilityRole="button"
    >
      <LinearGradient
        colors={["rgba(255, 182, 29, 0.4)", "#FFB61D"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <Text style={styles.text}>Book a Trip</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 24,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    fontFamily: "Comic Sans MS", // Ensure this font is available, or use a fallback
  },
});

export default BookTripButton;
