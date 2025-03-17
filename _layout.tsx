import React from 'react';
import { Stack } from "expo-router/stack";
import { StripeProvider } from '@stripe/stripe-react-native';

function RootLayout() {
  return (
    <StripeProvider publishableKey="pk_test_51R3ZKwInVeOdcxeldIU4wlt3wDlBr1u3XdMqA51n56e97xiQtCEL35IlG02vqmWEikD4nTKUIhvse6PxkEZDX9zu000ZQX6oWW">
      <Stack screenOptions={{}}>
        <Stack.Screen name="index" options={{ headerShown: false}}/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false}}/>
      </Stack>
    </StripeProvider>
  );
}

export default RootLayout;
