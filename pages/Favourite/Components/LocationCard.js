// // import React from "react";
// // import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
// // import CloseIcon from "./CloseIcon";

// // const LocationCard = ({ id, name, description, image, onRemove }) => {
// //   return (
// //     <View style={styles.card}>
// //       <View style={styles.imageContainer}>
// //         <TouchableOpacity
// //           style={styles.closeButton}
// //           onPress={() => onRemove(id)}
// //           accessibilityLabel={`Remove ${name}`}
// //         >
// //           <CloseIcon />
// //         </TouchableOpacity>
// //         <Image
// //           source={{ uri: image }}
// //           style={styles.image}
// //           accessibilityLabel={name}
// //         />
// //       </View>
// //       <View style={styles.content}>
// //         <Text style={styles.title}>{name}</Text>
// //         <Text style={styles.description}>{description}</Text>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   card: {
// //     backgroundColor: "#fff",
// //     borderRadius: 12,
// //     marginBottom: 16,
// //     shadowColor: "#000",
// //     shadowOffset: {
// //       width: 0,
// //       height: 2,
// //     },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 3,
// //   },
// //   imageContainer: {
// //     position: "relative",
// //   },
// //   closeButton: {
// //     position: "absolute",
// //     top: 20,
// //     left: 20,
// //     zIndex: 1,
// //   },
// //   image: {
// //     width: "100%",
// //     height: 200,
// //     borderTopLeftRadius: 12,
// //     borderTopRightRadius: 12,
// //   },
// //   content: {
// //     padding: 16,
// //   },
// //   title: {
// //     fontSize: 20,
// //     fontWeight: "700",
// //     fontFamily: "Nunito-Bold",
// //     marginBottom: 8,
// //   },
// //   description: {
// //     fontSize: 16,
// //     color: "#666",
// //     fontFamily: "Nunito-Regular",
// //   },
// // });

// // export default LocationCard;
// import React from "react";
// import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
// import CloseIcon from "./CloseIcon";

// const LocationCard = ({ id, name, description, image, onRemove }) => {
//   return (
//     <View style={styles.card}>
//       <View style={styles.imageContainer}>
//         {/* Improved Close Button Clickability */}
//         <TouchableOpacity
//           style={styles.closeButton}
//           onPress={() => onRemove(id)}
//           accessibilityLabel={`Remove ${name}`}
//           accessibilityRole="button"
//         >
//           <CloseIcon />
//         </TouchableOpacity>

//         {/* Handled Image Loading Issues */}
//         <Image
//           source={{ uri: image }}
//           style={styles.image}
//           accessibilityLabel={`${name} Image`}
//           defaultSource={require("assets/icon.png")} // Ensure a local placeholder image
//         />
//       </View>

//       <View style={styles.content}>
//         <Text style={styles.title} accessibilityRole="header">
//           {name}
//         </Text>
//         <Text style={styles.description}>{description}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 4, // Ensures shadow works on Android
//     overflow: "hidden", // Ensures no clipping
//   },
//   imageContainer: {
//     position: "relative",
//   },
//   closeButton: {
//     position: "absolute",
//     top: 16, // Adjusted for better visibility
//     left: 16,
//     padding: 8, // Increased padding for better touch area
//     backgroundColor: "rgba(255, 255, 255, 0.6)", // Improved visibility
//     borderRadius: 20,
//   },
//   image: {
//     width: "100%",
//     height: 200,
//     borderTopLeftRadius: 12,
//     borderTopRightRadius: 12,
//   },
//   content: {
//     padding: 16,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "700",
//     fontFamily: "Nunito-Bold", // Ensure font is installed
//     marginBottom: 8,
//     color: "#333",
//   },
//   description: {
//     fontSize: 16,
//     color: "#666",
//     fontFamily: "Nunito-Regular",
//   },
// });

// export default LocationCard;
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import CloseIcon from "./CloseIcon";

const LocationCard = ({ id, name, description, image, onRemove }) => {
  // Provide a fallback image in case `image` is undefined
  const imageSource =
    image && image.trim() !== ""
      ? { uri: image }
      : require("assets/icon.png"); // Use a valid local image

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {/* Improved Close Button Clickability */}
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => onRemove(id)}
          accessibilityLabel={`Remove ${name}`}
          accessibilityRole="button"
        >
          <CloseIcon />
        </TouchableOpacity>

        {/* Handled Image Loading Issues */}
        <Image
          source={imageSource} // Now properly handles missing images
          style={styles.image}
          accessibilityLabel={`${name} Image`}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title} accessibilityRole="header">
          {name}
        </Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4, // Ensures shadow works on Android
    overflow: "hidden", // Ensures no clipping
  },
  imageContainer: {
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 16, // Adjusted for better visibility
    left: 16,
    padding: 8, // Increased padding for better touch area
    backgroundColor: "rgba(255, 255, 255, 0.6)", // Improved visibility
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Nunito-Bold", // Ensure font is installed
    marginBottom: 8,
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#666",
    fontFamily: "Nunito-Regular",
  },
});

export default LocationCard;
