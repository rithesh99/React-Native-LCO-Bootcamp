import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import NameText from './src/components/NameText'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container} >
        <NameText name="Rithesh" />
        <Image 
        source={require("./src/images/email.png")} 
        />
        <Image 
         source={{
           uri: "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
         }}
         style={{width: 350, height: 250}}
         />
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  }
});