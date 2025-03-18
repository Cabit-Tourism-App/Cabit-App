import React from "react";
import { View, Dimensions, StyleSheet,Pressable,Image } from "react-native";
import FullScreenImage from "./Components/FullScreenImage";
import { IMAGE_URI } from "./constants/ImageUri2";
// import styles from "./styles/ImageStyles";
const { width, height } = Dimensions.get("window");

const RideConfirmScreenFlow1 = ({navigation}) => (
  <Pressable style={styles.container} onPress={() => navigation.navigate("Ongoing")}>
 <Image
      source={require("./Assets/booked.png")}
      style={{
        height: "100%",
        width: "100%",
      }}
      resizeMode="cover"
      accessible={true}
      accessibilityLabel="Onboarding screen background image"
      accessibilityRole="image"
      // onError={() => setHasError(true)}
      testID="onboarding-image"
    />  </Pressable>
);

const styles= StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
  },
});

export default RideConfirmScreenFlow1;
