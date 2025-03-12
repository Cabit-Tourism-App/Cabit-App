import React from "react";
import { View, Text, Image, StyleSheet, TextInput, ImageBackground,TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import icons

const Header = ({ username }) => {
  return (
    <View style={styles.headerContainer}>
      <ImageBackground
        source={require("../Assets/background.png")} // Replace with your background image
        style={styles.background}
        imageStyle={styles.imageBorder} // Apply border radius to the image
      >
        <View style={styles.mainContainer}>
          <View style={styles.iconContainer}>
                {/* <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity> */}
  <TouchableOpacity>
              <Ionicons name="compass-outline" size={28} color="#00000" style={styles.icon} />
            </TouchableOpacity>
          {/* Bell Icon */}
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={28} color="#00000" style={styles.icon} />
          </TouchableOpacity>
          </View>
        <View style={styles.container}>
          {/* <Image source={require("../Assets/background.png")} style={styles.logo} /> */}
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.username}>{username}</Text>
          <TextInput style={styles.searchBar} placeholder="Search..." placeholderTextColor="#000000" />
        </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    position: "relative",
  },
  headerContainer: {
    overflow: "hidden", // Ensures the radius is applied properly
    borderBottomLeftRadius: 30, // Adjust as needed
    borderBottomRightRadius: 30, // Adjust as needed
  },
  background: {
    width: "100%",
    height: 300, // Adjust the height as needed
    justifyContent: "center",
  },
  imageBorder: {
    borderBottomLeftRadius: 30, // Match with headerContainer
    borderBottomRightRadius: 30, // Match with headerContainer
  },
  container: {
    alignItems: "left",
    paddingLeft: 30,
    marginTop: 40,
  },
  iconContainer: {
    display:"flex",
    flexDirection: "row",
    position:"absolute",
    left:"75%",
    top:30
  },
  icon: {
    marginLeft: 15,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: "contain",
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: "600",
    color: "#000000",
    fontFamily: "Arial",
  },
  username: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00000",
    fontFamily: "Arial",
    marginBottom: 10,
  },
  searchBar: {
    width: "80%",
    height: 40,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent background
    color: "black",
  },
});

export default Header;
