import React, { useState } from "react";
import { Image } from "react-native";
import FallbackView from "./FallbackView";
import { styles } from "../styles/ImageStyles"; // Optional: for better modular styling

const FullScreenImage = ({ uri }) => {
  const [hasError, setHasError] = useState(false);

  return hasError ? (
    <FallbackView />
  ) : (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
      accessible={true}
      accessibilityLabel="Onboarding screen background image"
      accessibilityRole="image"
      onError={() => setHasError(true)}
      testID="onboarding-image"
    />
  );
};

export default FullScreenImage;
