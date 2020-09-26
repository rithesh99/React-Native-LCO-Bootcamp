import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import Touchable from "./TouchableOpacity"
export default class App extends React.Component {
 

  render() {
    return (
      <View style={styles.container}>
        <Touchable />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#E74292',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
