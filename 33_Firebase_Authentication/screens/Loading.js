import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import firebase from "firebase";


const Loading = ({navigation}) => {
    
    useEffect(() => {
       firebase.auth().onAuthStateChanged((authenticate) => {
            if (authenticate) {
                navigation.replace("Home")
            } else {
                navigation.replace("Signin")
            }
       })
    }, [])

  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" />
    </View>
  );
}

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
