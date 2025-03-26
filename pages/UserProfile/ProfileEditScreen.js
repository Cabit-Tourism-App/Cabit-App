// ProfileScreen/index.js
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import InputField from './Components/InputField';
// Import components
import Header from './Components/Header';
import ProfileAvatar from './Components/ProfileAvatar';
import MenuOption from './Components/MenuOption';
import CurvedBackground from './Components/CurvedBackground';
import Button from './Components/Button';
const EditProfileScreen = ({ navigation }) => {
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
    navigation.navigate('EditProfile');
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
            <View style={styles.inputContainer}>
<InputField value={"name"} setValue={"setName"} placeholder="Name" />
<InputField value={"email"} setValue={"setEmail"} placeholder="Email" keyboardType="email-address" />
<InputField value={"phone"} setValue={"setPhone"} placeholder="Phone Number" keyboardType="phone-pad" />
<Button title="Save"></Button>
</View>
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
    backgroundColor: '#00000',
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
    backgroundColor: '#00000',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  menuOptions: {
    paddingBottom: 24,
  },
  inputContainer:{
    marginTop: 40,
    marginLeft:-20
  }
});

export default EditProfileScreen;



// <View style={styles.inputContainer}>
// <InputField value={name} setValue={setName} placeholder="Name" />
// <InputField value={email} setValue={setEmail} placeholder="Email" keyboardType="email-address" />
// <InputField value={phone} setValue={setPhone} placeholder="Phone Number" keyboardType="phone-pad" />
// </View>
