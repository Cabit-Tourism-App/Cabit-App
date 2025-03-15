// ProfileScreen/components/MenuOption.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MenuOption = ({ 
  icon, 
  title, 
  subtitle, 
  isSwitch, 
  isActive, 
  onToggle, 
  onPress,
  isLogout
}) => {
  return (
    <TouchableOpacity 
      style={styles.optionContainer} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={24} color="#000" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      {isSwitch && (
        <Switch
          value={isActive}
          onValueChange={onToggle}
          trackColor={{ false: '#DDDDDD', true: '#FFCC66' }}
          thumbColor={isActive ? '#FFAA33' : '#f4f3f4'}
        />
      )}
      {isLogout && (
        <View style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={24} color="#000" />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFCC66',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
  },
  logoutButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#FFCC66',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MenuOption;