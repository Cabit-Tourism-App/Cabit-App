import React from 'react';
import { View, StyleSheet ,Image} from 'react-native';
import Header from './components/header';
import BackgroundImage from './components/backgroundImage';
import DrawerSection from './components/DrawerSection';

const NavigationScreen = ({ navigation }) => {
  return (
    <BackgroundImage> {/* Upper Background Image */}
      <View style={styles.container}>
        {/* <Header /> */}
        <Image 
          source={require('../../assets/log1.png')}
          style={styles.logo}
        />
        <DrawerSection navigation={navigation} /> {/* Lower Section with Different Background */}
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 250,  // Adjust size as needed
    height: 100,
    position: 'absolute',
    top:"33%",
    left:"24%",
    marginBottom: -20, // Moves it slightly over the drawer
    zIndex: 2, // Ensure it's above the drawer
  },
});

export default NavigationScreen;
