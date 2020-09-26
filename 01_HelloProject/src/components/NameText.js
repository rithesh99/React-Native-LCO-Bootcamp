import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

export default class NameText extends Component {
  render() {
    return (
        <Text style={styles.textStyle} >{this.props.name}</Text>
    )
  }
}



const styles = StyleSheet.create({
  textStyle : {
    fontSize: 22,
    color: "white",
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 5,
  }
});