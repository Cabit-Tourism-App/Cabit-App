// RatingScreen/components/FeedbackInput.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const FeedbackInput = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Write your feedback"
        placeholderTextColor="#999"
        multiline
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#333',
  },
});

export default FeedbackInput;