// background svg component

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Image } from 'react-native-svg';

const BackgroundSVG = () => {
  return (
    <View style={styles.container}>
      <Svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <Image
          href={require('./assets/background.svg')} 
          width="100%"
          height="100%"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default BackgroundSVG;

// animated logo component

import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const AnimatedLogo = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('C:\Users\harsh\OneDrive\Documents\GitHub\Cabit-App\assets\Cab.gif')} 
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 150,
    height: 150,
  },
});

export default AnimatedLogo;

// App Name SVG Component

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Text } from 'react-native-svg';

const AppNameSVG = () => {
  return (
    <View style={styles.container}>
      <Svg width="100" height="40">
        <Text
          x="50%"
          y="50%"
          textAnchor="middle"
          fontSize="24"
          fill="white"
          fontWeight="bold"
        >
          Cabit
        </Text>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
});

export default AppNameSVG;

// splash screen component

import React from 'react';
import { View, StyleSheet } from 'react-native';
import BackgroundSVG from './BackgroundSVG';
import AnimatedLogo from './AnimatedLogo';
import AppNameSVG from './AppNameSVG';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <BackgroundSVG />
      <AnimatedLogo />
      <AppNameSVG />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF3C8', // Light yellowish gradient
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
