// ProfileScreen/components/CurvedBackground.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const CurvedBackground = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.bottomCurve} />
      </View>
      <View style={styles.bottomSection}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    height: '35%',
    backgroundColor: '#FFCC66',
    position: 'relative',
  },
  bottomCurve: {
    position: 'absolute',
    bottom: -30,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
  },
});

export default CurvedBackground;