import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import firebase from "firebase";
import { Form, Item, Input, Label, Button } from "native-base";
import { ScrollView } from "react-native-gesture-handler";






const Signup = ({navigation}) => {
 
 
const [data, setData] = useState({
  email: "",
  password: "",
  name: ""
})

const {email, password, name} = data
  
const signupUser = (name, email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(authenticate => {
      return authenticate.user
        .updateProfile({
          displayName: name
        })
        .then(() => {
          navigation.replace("Home");
        });
    })
    .catch(error => {
      alert(error.message);
    });
};


    return (
      <ScrollView
      >
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.png")} />
          <Text>Firebase Auth</Text>
        </View>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="name-phone-pad"
              onChangeText={e => setData({...data, name:e })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={e => setData({...data, email:e })}
            />
          </Item>
          <Item floatingLabel>
            <Label>password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={e => setData({...data, password:e })}
            />
          </Item>
          <Button
            style={styles.button}
            full
            rounded
            onPress={() => {
              console.log(data);
             signupUser(name,email,password);
            }}
          >
            <Text style={styles.buttonText}>Sign in</Text>
          </Button>
        </Form>
        <View style={styles.footer}>
          <Text>OR</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Signin");
            }}
          >
            <Text>Already having an account ?</Text>
          </TouchableOpacity>
        </View>
        <View style={{height:300}}></View>
      </ScrollView>
    );
  
}

export default Signup;

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
    width: "100%"
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
