import React, { useState } from 'react';
import { Image, View } from 'react-native';
import Loader from './loader';
import ErrorView from './errorView';

const InputImage = ({ uri }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoadStart = () => {
    setIsLoading(true);
    setHasError(false);
  };

  const handleLoadEnd = () => setIsLoading(false);
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <View className="flex-1 justify-center items-center w-full h-full">
      <Image
        source={{ uri }}
        className="w-full h-full"
        resizeMode="contain"
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
        accessible={true}
        accessibilityLabel="Input design illustration"
      />
      
      {isLoading && <Loader />}
      {hasError && <ErrorView />}
    </View>
  );
};

export default InputImage;
