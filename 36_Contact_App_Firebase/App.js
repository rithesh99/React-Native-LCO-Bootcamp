import React from 'react';

// install react-navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//TODO: import four screens
import HomeScreen from "./screens/HomeScreen";
import AddNewContact from "./screens/AddNewContact";
import ViewContact from "./screens/ViewContact";
import EditContact from "./screens/EditContact";

//TODO: import firebase
import firebase from "firebase";

// set up react navigation

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#B83227"
          },
          headerTitleStyle: {
            color: "#fff"
          }
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add" component={AddNewContact} />
        <Stack.Screen name="View" component={ViewContact} />
        <Stack.Screen name="Edit" component={EditContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

  


//TODO: Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAkKBdA9iIuO4I_IWIvag3Zk6FvnSdoXTw",
  authDomain: "reactnativecontactapp-f89f9.firebaseapp.com",
  databaseURL: "https://reactnativecontactapp-f89f9.firebaseio.com",
  projectId: "reactnativecontactapp-f89f9",
  storageBucket: "reactnativecontactapp-f89f9.appspot.com",
  messagingSenderId: "1080272896266",
  appId: "1:1080272896266:web:94661cf90565896947baf3",
  measurementId: "G-5NYV9S5K9N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//FirebaseTODO create firebase real-time database with rules

// {
//   "rules": {
//     ".read": true,
//     ".write": true
//   }
// }
export default App;
