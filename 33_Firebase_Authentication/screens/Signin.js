import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity
} from "react-native";
import firebase from "firebase";
import { Form, Item, Input, Label, Button } from "native-base";

const Signin = ({navigation}) =>  {
  const [state, setState] = useState({
      email: "",
      password: ""
    })
  
    const {email, password} = state
    
 const signInUser = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.replace("Home");
      })
      .catch(error => {
        alert(error.message);
      });
  };

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="position"
        enabled
      >
        <View style={styles.logoContainer}>
          <Image size="5" source={require("../assets/logo.png")} />
          <Text>Firebase Auth</Text>
        </View>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={e => setState({...state, email:e })}
            />
          </Item>
          <Item floatingLabel>
            <Label>password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={e => setState({...state, password:e })}
            />
          </Item>
          <Button
            style={styles.button}
            full
            rounded
            onPress={() => {
              console.log(state);
              signInUser(email, password);
            }}
          >
            <Text style={styles.buttonText}>Sign in</Text>
          </Button>
        </Form>
        <View style={styles.footer}>
          <Text>OR</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            <Text>Create a new Account ?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }


export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20
  },
  form: {
    padding: 20,
    width: "100%",
    marginBottom: 30
  },
  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  footer: {
    alignItems: "center"
  }
});
