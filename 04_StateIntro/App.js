import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
        style={styles.input}
        placeholder="Enter value here..."
        placeholderTextColor= "black"
        onChangeText={val => {
          this.setState({
            text: val
          })
        } }
        />
        <Text
        style={{
          marginTop:70,
          fontSize:25
        }}
        >{this.state.text
        .split(" ")
        .map(text => text && "😍")
        .join(" ")
        }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  input: {
     marginTop: 50, 
    height: 50, 
    width: 200,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    borderColor: "#23abab"
  }
});
