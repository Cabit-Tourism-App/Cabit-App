// import React from 'react';
// import ProfileHeader from './Components/ProfileHeader';
// import UserDetails from './Components/UserDetails';
// import SettingsItem from './Components/SettingsItem';

// const UserProfile = () => {
//   return (
//     <div className="w-96 h-[848px] bg-transparent overflow-hidden flex flex-col gap-2">
//       <ProfileHeader />
//       <UserDetails />
      
//       <div className="flex flex-col gap-4 px-6">
//         <SettingsItem 
//           title="Profile & Account"
//           description="Edit your profile"
//           image="https://placehold.co/53x53"
//         />
//         <SettingsItem 
//           title="Push-Notifications"
//           description="Set up push notifications"
//           image="https://placehold.co/53x52"
//           rightIcon="https://placehold.co/42x24"
//         />
//         <SettingsItem 
//           title="Language"
//           description="Change your Language"
//           image="https://placehold.co/53x52"
//         />
//         <SettingsItem 
//           title="Logout"
//           description="Want to Logout"
//           image="https://placehold.co/53x53"
//           rightIcon="https://placehold.co/58x55"
//         />
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ProfileHeader from './Components/ProfileHeader';
import UserDetails from './Components/UserDetails';
import SettingsItem from './Components/SettingsItem';

const UserProfile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileHeader />
      <UserDetails />

      {/* Settings List */}
      <View style={styles.settingsContainer}>
        <SettingsItem 
          title="Profile & Account"
          description="Edit your profile"
          image="https://placehold.co/53x53"
        />
        <SettingsItem 
          title="Push-Notifications"
          description="Set up push notifications"
          image="https://placehold.co/53x52"
          rightIcon="https://placehold.co/42x24"
        />
        <SettingsItem 
          title="Language"
          description="Change your Language"
          image="https://placehold.co/53x52"
        />
        <SettingsItem 
          title="Logout"
          description="Want to Logout"
          image="https://placehold.co/53x53"
          rightIcon="https://placehold.co/58x55"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    paddingBottom: 20, // To prevent last item from getting cut off
  },
  settingsContainer: {
    flexDirection: 'column',
    gap: 16, // Equivalent to gap-4
    paddingHorizontal: 24, // Equivalent to px-6
  },
});

export default UserProfile;
