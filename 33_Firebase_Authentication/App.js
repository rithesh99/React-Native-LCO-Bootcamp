import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Loading from './screens/Loading';

import firebase from "firebase/app"

var firebaseConfig = {
  apiKey: "AIzaSyDTyg0gc4WQtqrYPd5SYC3u9EHadFM3QWA",
  authDomain: "reactnativeauth-9f73b.firebaseapp.com",
  databaseURL: "https://reactnativeauth-9f73b.firebaseio.com",
  projectId: "reactnativeauth-9f73b",
  storageBucket: "reactnativeauth-9f73b.appspot.com",
  messagingSenderId: "979047687728",
  appId: "1:979047687728:web:dd6fc8670fdaa3139eaff5",
  measurementId: "G-NX9PJCBN2L"
};

firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Loading"
        >
        <Stack.Screen 
          name="Loading" 
          component={Loading}
          options={{
            headerTitle:""
          }}
          />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Stack.Screen 
          name="Signup"  
          component={Signup} 
          options={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Stack.Screen 
          name="Signin" 
          component={Signin} 
          options={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
