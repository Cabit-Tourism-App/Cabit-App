// import React from 'react';

// const UserDetails = () => {
//   return (
//     <div className="w-96 h-72 relative">
//       <div className="absolute left-[142px] top-[25px] text-stone-900 text-4xl font-semibold">
//         Profile
//       </div>
//       <img
//         className="absolute left-[145px] top-[90px] w-24 h-28"
//         src="https://placehold.co/104x105"
//         alt="Profile"
//       />
//       <div className="absolute left-[70px] top-[207px] text-stone-900 text-3xl font-medium">
//         Hey
//       </div>
//       <div className="absolute left-[138px] top-[207px] text-stone-900 text-3xl font-semibold">
//         McHardyan!
//       </div>
//     </div>
//   );
// };

// export default UserDetails;
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserDetails = () => {
  return (
    <View style={styles.container}>
      {/* Profile Heading */}
      <Text style={styles.profileText}>Profile</Text>

      {/* Profile Image */}
      <Image 
        source={{ uri: "https://placehold.co/104x105" }} 
        style={styles.profileImage} 
      />

      {/* Greeting Text */}
      <View style={styles.greetingContainer}>
        <Text style={styles.heyText}>Hey</Text>
        <Text style={styles.nameText}>McHardyan!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 384, // w-96 * 4 (assuming Tailwind width scaling)
    height: 288, // h-72 * 4
    position: 'relative',
    alignItems: 'center',
  },
  profileText: {
    position: 'absolute',
    top: 25,
    fontSize: 32, // text-4xl equivalent
    fontWeight: '600',
    color: '#292524', // text-stone-900
  },
  profileImage: {
    position: 'absolute',
    top: 90,
    width: 104,
    height: 105,
  },
  greetingContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 207,
  },
  heyText: {
    fontSize: 24, // text-3xl equivalent
    fontWeight: '500',
    color: '#292524', // text-stone-900
    marginRight: 5,
  },
  nameText: {
    fontSize: 24, // text-3xl equivalent
    fontWeight: '600',
    color: '#292524', // text-stone-900
  },
});

export default UserDetails;
