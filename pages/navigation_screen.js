import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const NavigatorPage = () => {
  return (
    <ImageBackground source={require('./path/to/your/background/image.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Cabit</Text>
        <Text style={styles.subtitle}>Your Journey, Your Choice</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Want to book a cab?</Text>
          <Text style={styles.buttonSubText}>Book seamless cab experience</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Want to book a trip?</Text>
          <Text style={styles.buttonSubText}>Plan a tour as your wish</Text>
          <Text style={styles.buttonSubText}>Plan tours according to you</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 40,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonSubText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
});

export default NavigatorPage;
