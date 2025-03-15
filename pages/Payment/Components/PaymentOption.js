import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome5, FontAwesome, Entypo } from '@expo/vector-icons';

const PaymentOption = ({ 
  type, 
  title, 
  subtitle, 
  selected, 
  onSelect 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'upi':
        return (
          <View style={[styles.iconContainer, { backgroundColor: '#FFCC66' }]}>
            <Text style={styles.upiText}>UPI</Text>
          </View>
        );
      case 'cash':
        return (
          <View style={[styles.iconContainer, { backgroundColor: '#FFCC66' }]}>
            <FontAwesome5 name="money-bill-wave" size={24} color="#087f23" />
          </View>
        );
      case 'credit-card':
        return (
          <View style={[styles.iconContainer, { backgroundColor: '#FFCC66' }]}>
            <FontAwesome name="credit-card" size={24} color="#0d47a1" />
          </View>
        );
      case 'paypal':
        return (
          <View style={[styles.iconContainer, { backgroundColor: '#FFCC66' }]}>
            <FontAwesome5 name="paypal" size={24} color="#002f86" />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => onSelect(type)}
      activeOpacity={0.7}
    >
      {getIcon()}
      
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        
        <View style={styles.discountContainer}>
          <Ionicons name="gift-outline" size={16} color="#333" />
          <Text style={styles.discountText}>Get $1 discount</Text>
        </View>
      </View>
      
      <View style={[
        styles.radioButton, 
        selected ? styles.radioSelected : styles.radioUnselected
      ]}>
        {selected && <View style={styles.radioInner} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  upiText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountText: {
    fontSize: 13,
    color: '#333',
    marginLeft: 6,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    borderColor: '#FFCC66',
  },
  radioUnselected: {
    borderColor: '#DDDDDD',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFCC66',
  },
});

export default PaymentOption;