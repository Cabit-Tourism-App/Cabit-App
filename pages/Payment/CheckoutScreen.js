import React, { useState } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';

const CheckoutScreen = () => {
  const [payableAmount, setpayableAmount] = useState(600);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  // This function would call your backend to create a payment intent
  const API_URL = "http://localhost:8080";
  const fetchPaymentSheetParams = async () => {
    // Call your backend to create a PaymentIntent and get the data needed for the payment sheet
    const response = await fetch('${API_URL}/payment-sheet', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: payableAmount, // Amount in cents
        currency: 'inr',
      }),
    });
    
    const { paymentIntent, ephemeralKey, customer } = await response.json();
    
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    setLoading(true);
    
    try {
      const { paymentIntent, ephemeralKey, customer } = await fetchPaymentSheetParams();
      
      const { error } = await initPaymentSheet({
        merchantDisplayName: 'Akshit',
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        paymentIntentClientSecret: paymentIntent,
        allowsDelayedPaymentMethods: true,
        defaultBillingDetails: {
          name: 'Akshit',
        }
      });
      
      if (error) {
        Alert.alert(`Error code: ${error.code}`, error.message);
      }
    } catch (error) {
      console.log('Error initializing payment sheet:', error);
      Alert.alert('Error', 'Unable to initialize payment sheet');
    } finally {
      setLoading(false);
    }
  };

  const openPaymentSheet = async () => {
    if (loading) return;
    
    const { error } = await presentPaymentSheet();
    
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your payment was successful!');
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Checkout"
        onPress={async () => {
          await initializePaymentSheet().then(async () => {
          await openPaymentSheet();
          });
        }}
        disabled={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CheckoutScreen;
