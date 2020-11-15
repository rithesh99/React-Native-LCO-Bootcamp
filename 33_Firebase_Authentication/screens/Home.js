import React, { useEffect,useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "native-base";
import firebase from "firebase";

const Home = ({navigation}) =>  {
  const [state, setState] = useState({
      name: "",
      email: ""
    })
  
    const {name, email} = state;

useEffect(() => {
  firebase.auth().onAuthStateChanged(authenticate => {
    if (authenticate) {
     setState({
        email: authenticate.email,
        name: authenticate.displayName
      });
    } else {
     navigation.replace("Signin");
    }
  });
}, [])
  
    
  

  const signOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Sign out");
      })
      .catch(error => alert(error.message));
  };

    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.png")} />
          <Text>Firebase Auth</Text>
        </View>
        <View style={styles.userDetails}>
          <Text> Hey {name}</Text>
          <Text>You are signed in as: {email}</Text>
        </View>
        <Button
          style={styles.button}
          full
          rounded
          success
          onPress={() => {
            signOutUser()
          }}
        >
          <Text style={styles.buttonText}>SignOut</Text>
        </Button>
      </View>
    );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 20
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100
  },
  userDetails: {},

  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  }
});
