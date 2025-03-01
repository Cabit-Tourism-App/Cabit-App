// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import Svg, { Circle, Rect } from 'react-native-svg';

// const MySvgImage: React.FC = () => {
//     return (
//         <View style={styles.container}>
//             <Svg width={200} height={200} viewBox="0 0 200 200">
//                 <Circle cx="100" cy="100" r="80" fill="#ffcc00" />
//                 <Rect x="50" y="50" width="100" height="100" fill="#007bff" />
//             </Svg>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f0f0f0' // Optional background color
//     }
// });

// export default MySvgImage;
import React from "react";
import Svg, { Text, G, Path } from "react-native-svg";

const SVGLogo = () => {
  return (
    <Svg width={120} height={50} viewBox="0 0 150 50" fill="none">
      <G>
        <Text
          x="10"
          y="35"
          fontSize="32"
          fontWeight="bold"
          fill="black"
          fontFamily="Arial"
        >
          Cab
        </Text>
        <Text
          x="72"
          y="35"
          fontSize="32"
          fontWeight="bold"
          fill="orange"
          fontFamily="Arial"
        >
          It
        </Text>
        <Path
          d="M120 12 L130 2 L140 12"
          stroke="orange"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};

export default SVGLogo;
