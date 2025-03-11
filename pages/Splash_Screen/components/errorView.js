import React from 'react';
import { View, Text } from 'react-native';

const ErrorView = () => (
  <View className="absolute">
    <Text className="text-red-500 text-center">Failed to load image</Text>
  </View>
);

export default ErrorView;
