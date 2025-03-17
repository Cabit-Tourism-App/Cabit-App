// PaymentScreen/index.js
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from 'react-native-svg';

// Import components
import Header from './Components/Header';
import PageTitle from './Components/PageTitle';
import PaymentOption from './Components/PaymentOption';
import AddPaymentButton from './Components/AddPaymentButton';
import ProceedButton from './Components/ProceedButton';

const { width } = Dimensions.get('window');

const PaymentMethodScreen = ({ navigation }) => {
  // State for selected payment method
  const [selectedPayment, setSelectedPayment] = useState('upi');

  // Handlers
  const handleClose = () => {
    navigation.goBack();
  };

  const handlePaymentSelect = (paymentType) => {
    setSelectedPayment(paymentType);
  };

  const handleAddPayment = () => {
    // Handle adding new payment method
  };

  const handleProceed = () => {
    // Handle proceeding with payment
  };

  // Payment methods data
  const paymentMethods = [
    {
      type: 'upi',
      title: 'UPI',
      subtitle: 'Balance : $250.00',
    },
    {
      type: 'cash',
      title: 'Cash',
      subtitle: 'Prepare your cash',
    },
    {
      type: 'credit-card',
      title: 'Credit Card',
      subtitle: 'Visa or Master Card',
    },
    {
      type: 'paypal',
      title: 'Paypal',
      subtitle: 'Pay with your paypal balance',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#FFCC66', '#FFC044']}
        style={styles.gradient}
      >
        <Header onClose={handleClose} />
        
        {/* Curved transition */}
        <View style={styles.curveContainer}>
          <Svg
            height="60"
            width={width}
            viewBox={`0 0 ${width} 60`}
          >
            <Path
              d={`M0,0 L${width},0 L${width},30 Q${width * 0.5},60 0,30 Z`}
              fill="white"
            />
          </Svg>
        </View>
        
        <View style={styles.contentContainer}>
          <PageTitle title="Choose Payment Method" />
          
          <View style={styles.paymentOptionsContainer}>
            {paymentMethods.map((method) => (
              <PaymentOption
                key={method.type}
                type={method.type}
                title={method.title}
                subtitle={method.subtitle}
                selected={selectedPayment === method.type}
                onSelect={handlePaymentSelect}
              />
            ))}
            
            <AddPaymentButton onPress={handleAddPayment} />
          </View>
          
          <View style={styles.footer}>
            <ProceedButton onPress={()=>navigation.navigate("Confirm")} />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCC66',
  },
  gradient: {
    flex: 1,
  },
  curveContainer: {
    zIndex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    zIndex: 2,
    marginTop: -20,
  },
  paymentOptionsContainer: {
    paddingHorizontal: 16,
  },
  footer: {
    marginTop: 'auto',
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 16,
  },
});

export default PaymentMethodScreen;