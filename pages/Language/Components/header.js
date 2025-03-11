import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Bell, Grid } from "lucide-react-native"; // Icons

const Header = ({ username }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome,</Text>
      <Text style={styles.username}>{username}</Text>
      <View style={styles.icons}>
        <Bell size={24} color="black" />
        <Grid size={24} color="black" style={{ marginLeft: 10 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFD36E",
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  welcome: {
    fontSize: 22,
    fontWeight: "bold",
  },
  username: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },
  icons: {
    flexDirection: "row",
  },
});

export default Header;
