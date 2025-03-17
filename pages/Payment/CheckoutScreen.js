import React, { useState } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';

const CheckoutScreen = () => {
  const [payableAmount, setPayableAmount] = useState(600);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  // Backend API URL
  const API_URL = "http://localhost:3000/api";

  // Fetch payment sheet parameters
  const fetchPaymentSheetParams = async () => {
    try {
      const response = await fetch(`${API_URL}/payment-sheet`, {  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: payableAmount, // Amount in cents
          currency: "inr",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch payment sheet params");
      }

      const { paymentIntent, ephemeralKey, customer } = await response.json();
      return { paymentIntent, ephemeralKey, customer };
    } catch (error) {
      console.error("Error fetching payment sheet params:", error);
      Alert.alert("Error", "Could not fetch payment sheet parameters");
      return {};
    }
  };

  // Initialize Payment Sheet
  const initializePaymentSheet = async () => {
    setLoading(true);
    try {
      const { paymentIntent, ephemeralKey, customer } = await fetchPaymentSheetParams();

      if (!paymentIntent || !ephemeralKey || !customer) {
        throw new Error("Invalid payment sheet parameters");
      }

      const { error } = await initPaymentSheet({
        merchantDisplayName: "Akshit",
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        paymentIntentClientSecret: paymentIntent,
        allowsDelayedPaymentMethods: true,
        defaultBillingDetails: {
          name: "Akshit",
        },
      });

      if (error) {
        Alert.alert(`Error code: ${error.code}`, error.message);
      }
    } catch (error) {
      console.error("Error initializing payment sheet:", error);
      Alert.alert("Error", "Unable to initialize payment sheet");
    } finally {
      setLoading(false);
    }
  };

  // Open Payment Sheet
  const openPaymentSheet = async () => {
    if (loading) return;

    const { error } = await presentPaymentSheet();
    
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert("Success", "Your payment was successful!");
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
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CheckoutScreen;
