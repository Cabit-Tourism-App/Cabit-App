// ProfileScreen/components/ProfileAvatar.js
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ProfileAvatar = ({ name, image }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.avatar} />
      <View style={styles.nameContainer}>
        <Text style={styles.greeting}>Hey</Text>
        <Text style={styles.name}>{name}!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    borderWidth: 4,
    borderColor: '#ddd',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    marginRight: 8,
    color:"#f5f5f5"

  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color:"#f5f5f5"
  },
});

export default ProfileAvatar;