// ProfileScreen/index.js
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Import components
import Header from './Components/Header';
import ProfileAvatar from './Components/ProfileAvatar';
import MenuOption from './Components/MenuOption';
import CurvedBackground from './Components/CurvedBackground';

const ProfileScreen = ({ navigation }) => {
  // State
  const [pushNotifications, setPushNotifications] = useState(true);

  // Mock data
  const userData = {
    name: 'McHardyan',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
  };

  // Handlers
  const handleClose = () => {
    navigation.goBack();
  };

  const handleSettings = () => {
    // Handle settings action
  };

  const handleLogout = () => {
    // Handle logout action
  };

  const handleProfileEdit = () => {
    // Handle profile edit action
  };

  const handleLanguageChange = () => {
    // Handle language change action
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#FFCC66', '#FFAA33']}
        style={styles.gradient}
      >
        <Header onClose={handleClose} onSettings={handleSettings} />
        
        <View style={styles.mainContent}>
          <View style={styles.profileSection}>
            <ProfileAvatar name={userData.name} image={userData.avatar} />
          </View>

          <View style={styles.curvedContainer}>
            <View style={styles.menuOptions}>
              <MenuOption
                icon="person-outline"
                title="Profile & Account"
                subtitle="Edit your profile"
                onPress={handleProfileEdit}
              />
              
              <MenuOption
                icon="notifications-outline"
                title="Push-Notifications"
                subtitle="Set up push notifications"
                isSwitch={true}
                isActive={pushNotifications}
                onToggle={setPushNotifications}
              />
              
              <MenuOption
                icon="language-outline"
                title="Language"
                subtitle="Change your Language"
                onPress={handleLanguageChange}
              />
              
              <MenuOption
                icon="lock-closed-outline"
                title="Logout"
                subtitle="Want to Logout"
                isLogout={true}
                onPress={handleLogout}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCC66',
  },
  gradient: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    position: 'relative',
  },
  profileSection: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 40,
  },
  curvedContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  menuOptions: {
    paddingBottom: 24,
  },
});

export default ProfileScreen;