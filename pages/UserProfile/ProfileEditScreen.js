import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function ProfileEditScreen() {
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [bio, setBio] = useState("This is my bio...");
  const [phone, setPhone] = useState("+91 9222222222");

  const handleSave = () => {
    alert("Profile Saved!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Edit Profile</Text>

        {/* Profile Image */}
        <Image
          source={require("../../assets/logo.png")}
          style={styles.profileImage}
        />

        {/* Input Fields */}
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
 <Text style={styles.label}>Phone number</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
        />
        <Text style={styles.label}>Bio</Text>
        <TextInput
          style={styles.textarea}
          value={bio}
          onChangeText={setBio}
          multiline
        />

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#e0e0e0",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
  },
  textarea: {
    backgroundColor: "#e0e0e0",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    height: 120,
    marginBottom: 30,
  },
  saveButton: {
    backgroundColor: "#FFB61D",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
};


// <View style={styles.inputContainer}>
// <InputField value={name} setValue={setName} placeholder="Name" />
// <InputField value={email} setValue={setEmail} placeholder="Email" keyboardType="email-address" />
// <InputField value={phone} setValue={setPhone} placeholder="Phone Number" keyboardType="phone-pad" />
// </View>
