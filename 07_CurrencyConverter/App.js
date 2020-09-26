import React from 'react';
import { StyleSheet, Text,Image, View, SafeAreaView, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041
}


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0"
    };
  }

  buttonPressed = currency => {
    if(this.state.inputValue === ""){
      Alert.alert("Enter some value");
    }
    let result = parseFloat(this.state.inputValue) * currencyPerRupee[currency]
    this.setState({
      resultValue: result.toFixed(2)
    })
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require("./email.png")} />
        <View style={styles.screenview}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>
              {this.state.resultValue}
            </Text>
          </View>
          <View style={styles.inputContainer}>
              <TextInput
                  style={styles.input}
                  selectionColor= "#FFFFFF"
                  keyboardType= "numeric"
                  placeholder= "Enter the value..."
                  value={this.state.inputValue}
                  onChangeText={input => this.setState({
                    inputValue: input
                  })}
                />
          </View>
          <View style={styles.converterButtonContainer}>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPressed("DOLLAR")}
              >
                <Text style={styles.converterButtonText}>$</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPressed("EURO")}
              >
                <Text style={styles.converterButtonText}>€</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPressed("POUND")}
              >
                <Text style={styles.converterButtonText}>£</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPressed("AUSDOLLAR")}
              >
                <Text style={styles.converterButtonText}>AUS$</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPressed("CANDOLLAR")}
              >
                <Text style={styles.converterButtonText}>CAN$</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPressed("YEN")}
              >
                <Text style={styles.converterButtonText}>¥</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPressed("DINAR")}
              >
                <Text style={styles.converterButtonText}>د.ك</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPressed("BITCOIN")}
              >
                <Text style={styles.converterButtonText}>BTC</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPressed("RUBEL")}
              >
                <Text style={styles.converterButtonText}>₽</Text>
              </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B8788',
    // marginTop:20,
  },
  image: {
     marginLeft: 120,
     marginTop: 20,
     borderColor: "white",
    //  borderWidth:2
  },
  screenview: {
    flex: 1,
    marginTop:5
  },
  resultContainer: {
    height: 70,
    marginTop: 0, 
    justifyContent: "center",
    borderColor: "white",
    backgroundColor: "black",
    alignItems: "center",
    borderWidth: 2
  },
  resultValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white"
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth:2,
    borderColor: "white",
    backgroundColor: "black"
  }, 
  input: {
    color: "white",
    fontSize: 25,
    textAlign:"center"
  },
  converterButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderColor: "white",
    borderWidth: 2  
  },
  converterButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 100,
    borderColor: "white",
    borderWidth: 2,
    width: "33.3%"
  },
  converterButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  }
});
