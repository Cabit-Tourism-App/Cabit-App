import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "./Components/header";
import SearchBar from "./Components/searchBar";
import LanguageCard from "./Components/languageCard";
import Button from "./Components/button";

const LanguageSelectionScreen = ({navigation}) => {
  const [selectedLanguages, setSelectedLanguages] = useState([
    { name: "English", image: require("./Assets/Eng.png") }, // Replace with actual path
  ]);

  const handleRemove = (language) => {
    setSelectedLanguages(selectedLanguages.filter((lang) => lang.name !== language));
  };

  return (
    <View style={styles.container}>
      <Header username="Harsh" />
      <Text style={styles.title}>Selected Languages</Text>
      <ScrollView horizontal style={styles.languageContainer}>
        {selectedLanguages.map((lang, index) => (
          <LanguageCard key={index} language={lang.name} image={lang.image} onRemove={() => handleRemove(lang.name)} />
        ))}
        <LanguageCard language="" image={require("./Assets/add.png")} /> {/* Placeholder for adding */}
      </ScrollView>
      <Button title="Next" onPress={() => navigation.navigate("Navigation")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
  },
  languageContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
});

export default LanguageSelectionScreen;
