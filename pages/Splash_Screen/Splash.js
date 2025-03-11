import React from 'react';
import { View } from 'react-native';
import InputImage from '../components/inputImage';
import { INPUT_IMAGE_URI } from '../constants/imageUri';

const Splash = () => {
  return (
    <View
      className="flex-1 justify-center items-center"
      accessible={true}
      accessibilityRole="image"
      accessibilityLabel="Input design illustration"
    >
      <InputImage uri={INPUT_IMAGE_URI} />
    </View>
  );
};

export default Splash;
