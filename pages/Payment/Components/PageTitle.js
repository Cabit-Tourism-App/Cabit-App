// PaymentScreen/components/PageTitle.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PageTitle = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default PageTitle;