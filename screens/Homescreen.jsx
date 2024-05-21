import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';



function HomeScreen({ navigation }) {
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      navigation.navigate('LandingPage');
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
