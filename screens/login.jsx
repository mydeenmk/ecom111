//364744233732-pmao6hvt5eftv0jjp11o2m8sejs0k78u.apps.googleusercontent.com

import React, { useEffect } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  ClientId: '334659503843-i9hmh6pi23sp54opu3nogtvs7ujpsv4p.apps.googleusercontent.com', // Replace with your actual Web Client ID
});

function LoginScreen({ navigation }) {
  useEffect(() => {
    GoogleSignin.signOut(); // For demonstration purposes, sign out the user every time the component mounts
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info:', userInfo); // For debugging
      navigation.navigate('Home');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.error('User cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.error('Operation (e.g. sign in) is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.error('Play services not available or outdated');
      } else {
        console.error('Some other error happened:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Sign in with Google" onPress={signIn} />
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

export default LoginScreen;


