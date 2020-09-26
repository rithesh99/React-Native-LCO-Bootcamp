import React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      randomColorBg: null,
      randomColorTx: null
    }
  }

  getRandomColorBg = () => {
    return(
      "rgb(" +
      Math.floor((Math.random() * 256)) +
      "," +
      Math.floor((Math.random() * 256)) +
      "," +
      Math.floor((Math.random() * 256)) +
       ")"
    )
  }
  getRandomColorTx = () => {
    return(
      "rgb(" +
      Math.floor((Math.random() * 256)) +
      "," +
      Math.floor((Math.random() * 256)) +
      "," +
      Math.floor((Math.random() * 256)) +
       ")"
    )
  }

  myButtonPressed = () => {
    this.setState({
      randomColorBg: this.getRandomColorBg(),
      randomColorTx: this.getRandomColorTx()
    })
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.randomColorBg}]}> 
          
        <TouchableOpacity
         onPress={this.myButtonPressed}
        >
          {/* <Image source={require("./email.png")} /> */}
          <Text style={[styles.text, {backgroundColor: this.state.randomColorTx}]}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ffffff"
  }
});
