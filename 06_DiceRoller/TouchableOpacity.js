import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';

export default class Touchable extends Component {
    constructor(){
        super();
        this.state = {
          uri1: require("./src/images/dice1.png"),
          uri2: require("./src/images/dice1.png")
        };
      }
    
      getRandomValue = () => {
        return(
          Math.floor((Math.random() * 6) + 1)
        )
      }
    
      playButtonPressed = () => {
        //Alert.alert("hii :" + getRandomvalue() );
        var number1 = this.getRandomValue();
        var number2 = this.getRandomValue();
        switch (number1) {
          case 1:
            this.setState({
              uri1: require("./src/images/dice1.png")
            })
            break;
            case 2:
            this.setState({
              uri1: require("./src/images/dice2.png")
            })
            break;
    
            case 3:
            this.setState({
              uri1: require("./src/images/dice3.png")
            })
            break;
    
            case 4:
            this.setState({
              uri1: require("./src/images/dice4.png")
            })
            break;
    
            case 5:
            this.setState({
              uri1: require("./src/images/dice5.png")
            })
            break;
    
            case 6:
            this.setState({
              uri1: require("./src/images/dice6.png")
            })
            break;

            default:
            this.setState({
              uri1: require("./src/images/dice1.png")
            })
            break;
            
        }
        switch (number2) {
            case 1:
              this.setState({
                uri2: require("./src/images/dice1.png")
              })
              break;
              case 2:
              this.setState({
                uri2: require("./src/images/dice2.png")
              })
              break;
      
              case 3:
              this.setState({
                uri2: require("./src/images/dice3.png")
              })
              break;
      
              case 4:
              this.setState({
                uri2: require("./src/images/dice4.png")
              })
              break;
      
              case 5:
              this.setState({
                uri2: require("./src/images/dice5.png")
              })
              break;
      
              case 6:
              this.setState({
                uri2: require("./src/images/dice6.png")
              })
              break;
  
              default:
              this.setState({
                uri2: require("./src/images/dice1.png")
              })
              break;
              
          }
        
      }
    
    render() {
        return (
            <View style={{flex:1, flexDirection: "column"}}>
                <View style={{flex:1, flexDirection: "row"}}>
                    <Image source={this.state.uri1} style={{width:100, height:100, marginLeft: 50, marginTop: 150 }}/>
                    <Image source={this.state.uri2} style={{width:100, height:100, marginLeft: 50, marginTop: 150}}/>
                </View>
                <TouchableOpacity onPress={this.playButtonPressed} >
                    <Text style={styles.gamebutton}>Play game</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    gamebutton: {
      width: 150,
      height: 40,
      marginLeft:100,
      textAlign: "center",
      marginBottom: 250,
      fontSize: 20, 
      color: "white",
      fontWeight: "bold",
      borderWidth: 2,
    //   paddingHorizontal: 130,
      paddingVertical: 6,
      borderRadius: 5,
      borderColor: "white"
    }
  });
  