// import React from "react";
// import { View, Text, Image, StyleSheet } from "react-native";

// const Header = () => {
//   return (
//     <View style={styles.header}>
//       <Text style={styles.title}>Added Locations</Text>
//       <Image
//         source={{
//           uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb617dcfc4532402a37fef237f68eef620db4b51",
//         }}
//         style={styles.logo}
//         accessibilityLabel="Logo"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 16,
//     backgroundColor: "#fff",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "700",
//     fontFamily: "Nunito-Bold",
//   },
//   logo: {
//     width: 40,
//     height: 40,
//     resizeMode: "contain",
//   },
// });

// export default Header;
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title} accessibilityRole="header">
        Added Locations
      </Text>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb617dcfc4532402a37fef237f68eef620db4b51",
        }}
        style={styles.logo}
        accessibilityLabel="Company Logo"
        defaultSource={require("assets/icon.png")} // Ensure you have a local placeholder
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "Nunito-Bold", // Ensure you have this font or use a fallback
    flex: 1, // Ensures text takes up available space
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});

export default Header;
