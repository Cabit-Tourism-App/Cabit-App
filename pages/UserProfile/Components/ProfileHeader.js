// // import React from 'react';

// // const ProfileHeader = () => {
// //   return (
// //     <div className="w-96 h-20 relative">
// //       <Image
// //         className="absolute left-[347px] top-[29px] w-6 h-6"
// //         src={"https://placehold.co/23x26"}
// //         alt="Icon"
// //       />
// //       <Image
// //         className="absolute left-[32px] top-[22px] w-10 h-10 rounded-full"
// //         src={"https://placehold.co/42x41"}
// //         alt="User"
// //       />
// //     </div>
// //   );
// // };

// // export default ProfileHeader;
// import React from 'react';
// import { View, Image, StyleSheet } from 'react-native';

// const ProfileHeader = () => {
//   return (
//     <View style={styles.container}>
//       {/* Right Icon */}
//       <Image 
//         source={{ uri: "https://placehold.co/23x26" }} 
//         style={styles.icon} 
//       />

//       {/* User Profile Image */}
//       <Image 
//         source={{ uri: "https://placehold.co/42x41" }} 
//         style={styles.profileImage} 
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: 384, // 96 * 4 (assuming tailwind w-96)
//     height: 80, // 20 * 4 (assuming tailwind h-20)
//     position: 'relative',
//   },
//   icon: {
//     position: 'absolute',
//     left: 347,
//     top: 29,
//     width: 24, // Adjusted size to match w-6 (6*4)
//     height: 24, // Adjusted size to match h-6 (6*4)
//   },
//   profileImage: {
//     position: 'absolute',
//     left: 32,
//     top: 22,
//     width: 40, // Adjusted size to match w-10 (10*4)
//     height: 40, // Adjusted size to match h-10 (10*4)
//     borderRadius: 50, // Makes it a circle
//   },
// });

// export default ProfileHeader;

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      {/* Right Icon */}
      <Image 
        source={{ uri: "https://placehold.co/23x26" }} 
        style={styles.icon} 
      />

      {/* User Profile Image */}
      <Image 
        source={{ uri: "https://placehold.co/42x41" }} 
        style={styles.profileImage} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 384, // 96 * 4 (assuming tailwind w-96)
    height: 80, // 20 * 4 (assuming tailwind h-20)
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    left: 347,
    top: 29,
    width: 24, // Adjusted size to match w-6 (6*4)
    height: 24, // Adjusted size to match h-6 (6*4)
  },
  profileImage: {
    position: 'absolute',
    left: 32,
    top: 22,
    width: 40, // Adjusted size to match w-10 (10*4)
    height: 40, // Adjusted size to match h-10 (10*4)
    borderRadius: 50, // Makes it a circle
  },
});

export default ProfileHeader;
