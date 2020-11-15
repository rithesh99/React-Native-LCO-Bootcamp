import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//screen imports
import Home from "./components/Home";
import Chat from "./components/Chat";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{         
              title:"Chat Room",
              headerStyle:{
                backgroundColor: "#fd0759"
              },
              headerTintColor:"#FFF"
            }}
            />
        <Stack.Screen 
          name="Chat" 
          component={Chat} 
          
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;