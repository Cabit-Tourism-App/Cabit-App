import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';

const MySvgImage: React.FC = () => {
    return (
        <View style={styles.container}>
            <Svg width={200} height={200} viewBox="0 0 200 200">
                <Circle cx="100" cy="100" r="80" fill="#ffcc00" />
                <Rect x="50" y="50" width="100" height="100" fill="#007bff" />
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0' // Optional background color
    }
});

export default MySvgImage;
