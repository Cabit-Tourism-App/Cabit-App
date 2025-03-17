import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  Image, 
  StatusBar,
  ImageBackground,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const CancelBookingScreen = ({ navigation }) => {
  const [selectedReason, setSelectedReason] = useState('I want to change the details of the journey.');
  
  const reasons = [
    "I don't need this journey.",
    "I want to change the details of the journey.",
    "The driver took too long to be appointed.",
    "Other"
  ];

  const handleClose = () => {
    navigation.goBack();
  };

  const handleSubmit = () => {
    // Process cancellation with the selected reason
    console.log('Cancellation reason:', selectedReason);
    navigation.goBack();
  };

  // Render a single reason option
  const renderReasonOption = (reason) => {
    const isSelected = selectedReason === reason;
    return (
      <TouchableOpacity 
        key={reason} 
        style={styles.optionContainer} 
        onPress={() => setSelectedReason(reason)}
      >
        <View style={[styles.radioButton, isSelected ? styles.radioButtonSelected : {}]}>
          {isSelected && <View style={styles.radioButtonInner} />}
        </View>
        <Text style={styles.optionText}>{reason}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Full screen container */}
      <View style={styles.fullContainer}>
        {/* Map Background with Routes - Top Half */}
        <View style={styles.mapContainer}>
          <ImageBackground 
            source={require('assets/map_background.jpg')} 
            style={styles.mapBackground}
            resizeMode="cover"
          >
            {/* Vertical Route Lines - Overlay on map */}
            <View style={[styles.routeLine, { left: '30%', backgroundColor: '#4eba6a' }]} />
            <View style={[styles.routeLine, { left: '36%', backgroundColor: '#71c9e0' }]} />
            <View style={[styles.routeLine, { left: '42%', backgroundColor: '#34a0e3' }]} />
          </ImageBackground>
        </View>
        
        {/* Header - Fixed on top */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Cancel Booking</Text>
          <View style={styles.placeholder} />
        </View>
        
        {/* Vehicle Circle with Icon - In the middle of the screen */}
        <View style={styles.cabInfoContainer}>
          <View style={styles.cabCircleContainer}>
            <Image
              source={require('assets/cab.jpg')}
              style={styles.cabImage}
              resizeMode="cover"
            />
            <View style={styles.cancelIconContainer}>
              <Ionicons name="close" size={16} color="#fff" />
            </View>
          </View>
        </View>
        
        {/* Cancellation Content - Bottom Half with curved top */}
        <View style={styles.cancellationPanel}>
          <View style={styles.curvedTopContainer}>
            <Text style={styles.questionText}>Why do you want to cancel?</Text>
            <View style={styles.optionsContainer}>
              {reasons.map(renderReasonOption)}
            </View>
          </View>
          
          {/* Submit Button */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={()=>navigation.navigate("Rate")}
            >
              <Text style={styles.submitButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  fullContainer: {
    flex: 1,
    position: 'relative',
  },
  mapContainer: {
    height: height * 0.5, // Map takes top half of screen
    width: width,
    position: 'absolute',
    top: 0,
  },
  mapBackground: {
    width: '100%',
    height: '100%',
  },
  routeLine: {
    position: 'absolute',
    width: 3,
    height: '100%',
    zIndex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  closeButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2da8e2',
  },
  placeholder: {
    width: 24,
  },
  cabInfoContainer: {
    position: 'absolute',
    top: height * 0.18, // Position in middle of map area
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 5,
  },
  cabCircleContainer: {
    width: 125,
    height: 125,
    borderRadius: 75,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 5.84,
    elevation: 10,
    position: 'relative',
  },
  cabImage: {
    width: 120,
    height: 120,
    borderRadius: 75,
  },
  cancelIconContainer: {
    position: 'absolute',
    bottom: 90,
    right: 5,
    backgroundColor: '#000000',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    zIndex: 6,
  },
  cancellationPanel: {
    position: 'absolute',
    top: height * 0.4, // Start below the middle of screen for overlap with map
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    zIndex: 4,
  },
  curvedTopContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 30,
    paddingHorizontal: 20,
    height: '100%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 10,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  optionsContainer: {
    marginBottom: 30,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginVertical: 4,
  },
  radioButton: {
    height: 22,
    width: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  radioButtonSelected: {
    borderColor: '#ffbf00',
  },
  radioButtonInner: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#ffbf00',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    zIndex: 6,
  },
  submitButton: {
    backgroundColor: '#ffbf00',
    borderRadius: 25,
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CancelBookingScreen;
