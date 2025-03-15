// RatingScreen/index.js
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Alert } from 'react-native';

// Import components
import Header from './Components/Header';
import DriverInfo from './Components/DriverInfo';
import StarRating from './Components/StarRating';
import FeedbackInput from './Components/FeedbackInput';
import TripDetail from './Components/TripDetail';
import PaymentDetail from './Components/PaymentDetail';
import SubmitButton from './Components/SubmitButton';

const RatingScreen = ({ navigation }) => {
  // State
  const [rating, setRating] = useState(4);
  const [feedback, setFeedback] = useState('');

  // Mock data (in a real app, this would come from props or context)
  const driverData = {
    name: 'Akshit Agarwal',
    rating: '4.9',
    image: 'https://randomuser.me/api/portraits/men/32.jpg', // Placeholder image
  };

  const tripData = {
    origin: 'Pattaya Beach',
    destination: 'Home',
  };

  const paymentData = {
    tripExpense: 9.0,
    discount: 1.0,
    total: 8.0,
  };

  // Handlers
  const handleClose = () => {
    navigation.goBack();
  };

  const handleSubmit = () => {
    // In a real app, you would submit the rating to your backend
    Alert.alert(
      'Rating Submitted',
      `Thank you for rating your trip with ${rating} stars!`,
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <Header onClose={handleClose} />
        
        <DriverInfo driver={driverData} />
        
        <StarRating 
          rating={rating}

          onRatingChange={setRating} 
        />
        
        <FeedbackInput 
          value={feedback} 
          onChangeText={setFeedback} 
        />
        
        <TripDetail trip={tripData} />
        
        <PaymentDetail payment={paymentData} />
      </ScrollView>
      
      <SubmitButton onPress={handleSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 24,
  },
});

export default RatingScreen;