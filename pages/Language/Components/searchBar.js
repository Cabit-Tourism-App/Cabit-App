import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
// import { Search } from "lucide-react-native";

const SearchBar = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      {/* <Search size={20} color="gray" /> */}
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
    marginTop: 10,
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
});

export default SearchBar;
