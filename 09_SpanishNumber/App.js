import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Audio } from "expo-av"

const App = () => {
 

const listBackgroundColors = {
  1: "#E44236",
  2: "#CC3E8A",
  3: "#3498DB",
  4: "#4834DF",
  5: "#6A89CC",
  6: "#67E6DC",
  7: "#26ae60",
  8: "#F5C469",
  9: "#2C3335",
  10: "#F5BCBA"
}

const soundList = {
  one: require("./assets/one.wav"),
  two: require("./assets/two.wav"),
  three: require("./assets/three.wav"),
  four: require("./assets/four.wav"),
  five: require("./assets/five.wav"),
  six: require("./assets/six.wav"),
  seven: require("./assets/seven.wav"),
  eight: require("./assets/eight.wav"),
  nine: require("./assets/nine.wav"),
  ten: require("./assets/ten.wav"),
}

const playSound = async number => {
    const soundObject = new Audio.Sound()
    try {
      let path = soundList[number]
      await soundObject.loadAsync(path)
      await soundObject
      .playAsync()
      .then( async playbackStatus => {
        setTimeout(() => {
          soundObject.unloadAsync
        }, playbackStatus.playableDurationMillis);
      })
      .catch(error => {
        console.log(error)
      })
    } catch (error) {
      console.log(error)
    }
};

  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.gridContainer}>
        <Image 
          style= {styles.logo}
          source ={require("./assets/logo.png")}
          />
          <Text style={styles.heading}>LEARN SPANISH</Text>
          <View style={styles.rowContainer}>
            <TouchableOpacity 
              style={[{backgroundColor: listBackgroundColors[1]}, styles.item]}
              onPress={() => {
                playSound("one")
              }}
            >
              <Text style={styles.itemText}>One</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[{backgroundColor: listBackgroundColors[2]}, styles.item]}
              onPress={() => {
                playSound("two")
              }}
            >
              <Text style={styles.itemText}>Two</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity 
              style={[{backgroundColor: listBackgroundColors[3]}, styles.item]}
              onPress={() => {
                playSound("three")
              }}
            >
              <Text style={styles.itemText}>Three</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[{backgroundColor: listBackgroundColors[4]}, styles.item]}
              onPress={() => {
                playSound("four")
              }}
            >
              <Text style={styles.itemText}>Four</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity 
              style={[{backgroundColor: listBackgroundColors[5]}, styles.item]}
              onPress={() => {
                playSound("five")
              }}
            >
              <Text style={styles.itemText}>Five</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[{backgroundColor: listBackgroundColors[6]}, styles.item]}
              onPress={() => {
                playSound("six")
              }}
            >
              <Text style={styles.itemText}>Six</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity 
              style={[{backgroundColor: listBackgroundColors[7]}, styles.item]}
              onPress={() => {
                playSound("seven")
              }}
            >
              <Text style={styles.itemText}>Seven</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[{backgroundColor: listBackgroundColors[8]}, styles.item]}
              onPress={() => {
                playSound("eight")
              }}
            >
              <Text style={styles.itemText}>Eight</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity 
              style={[{backgroundColor: listBackgroundColors[9]}, styles.item]}
              onPress={() => {
                playSound("nine")
              }}
            >
              <Text style={styles.itemText}>Nine</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[{backgroundColor: listBackgroundColors[10]}, styles.item]}
              onPress={() => {
                playSound("ten")
              }}
            >
              <Text style={styles.itemText}>Ten</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 40,
    textAlign: "center",
    padding: 20
  },
  gridContainer: {
    flex: 1,
    margin: 5
  },
  logo: {
    alignSelf: "center",
    marginTop: 15,
  },
  rowContainer: {
    flexDirection: "row"
  },
  item: {
    flex: 1,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    margin: 2
  },
  itemText: {
    color: "#fff",
    fontSize: 20
  }
});
