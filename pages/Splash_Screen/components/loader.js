import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loader = () => (
  <View className="absolute">
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

export default Loader;
