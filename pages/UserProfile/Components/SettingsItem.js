// import React from 'react';

// const SettingsItem = ({ title, description, image, rightIcon }) => {
//   return (
//     <div className="w-full h-28 relative bg-transparent">
//       <div className="absolute left-0 top-0 w-full h-28 border rounded-lg"></div>
//       <img
//         className="absolute left-6 top-6 w-14 h-14 rounded-3xl"
//         src={image}
//         alt={title}
//       />
//       <div className="absolute left-24 top-8 text-gray-600 text-sm font-normal">{title}</div>
//       <div className="absolute left-24 top-16 text-neutral-300 text-xs font-normal">{description}</div>
//       {rightIcon && (
//         <img
//           className="absolute right-6 top-10 w-10 h-10 rounded-2xl"
//           src={rightIcon}
//           alt="Action Icon"
//         />
//       )}
//     </div>
//   );
// };

// export default SettingsItem;
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SettingsItem = ({ title, description, image, rightIcon }) => {
  return (
    <View style={styles.container}>
      {/* Background Border */}
      <View style={styles.borderBox}></View>

      {/* Left Icon */}
      <Image source={{ uri: image }} style={styles.leftIcon} />

      {/* Title and Description */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      {/* Right Icon (if available) */}
      {rightIcon && <Image source={{ uri: rightIcon }} style={styles.rightIcon} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 112, // h-28 (28 * 4)
    position: 'relative',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  borderBox: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: 112, // h-28
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D1D5DB', // Approximate gray
  },
  leftIcon: {
    position: 'absolute',
    left: 24, // left-6 (6 * 4)
    top: 24, // top-6
    width: 56, // w-14 (14 * 4)
    height: 56, // h-14
    borderRadius: 28, // rounded-3xl
  },
  title: {
    position: 'absolute',
    left: 96, // left-24 (24 * 4)
    top: 32, // top-8
    fontSize: 14, // text-sm
    fontWeight: '400',
    color: '#4B5563', // text-gray-600
  },
  description: {
    position: 'absolute',
    left: 96, // left-24
    top: 64, // top-16
    fontSize: 12, // text-xs
    fontWeight: '400',
    color: '#D1D5DB', // text-neutral-300
  },
  rightIcon: {
    position: 'absolute',
    right: 24, // right-6 (6 * 4)
    top: 40, // top-10
    width: 40, // w-10
    height: 40, // h-10
    borderRadius: 20, // rounded-2xl
  },
});

export default SettingsItem;
