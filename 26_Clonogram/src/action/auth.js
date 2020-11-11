import auth from '@react-native-firebase/auth'
import database from "@react-native-firebase/database";
import Snackbar from 'react-native-snackbar';

export const signUp = (data) => async (dispatch) => {
    console.log(data);
    const { name, instaUserName, bio, email, password, country, image } = data

    auth().createUserWithEmailAndPassword(email,password)
    .then((data) => {
        console.log(data);
        console.log("User created successfully!!!");

        database()
        .ref('/users/' + data.user.uid)
        .set({
            name,
            instaUserName, 
            country, 
            image, 
            bio, 
            uid: data.user.uid
        })
        .then(() => console.log("data set success"))
        Snackbar.show({
            text: "account created",
            textColor: "white",
            backgroundColor: "#1b262c"
        })
    })
    .catch(err => {
        console.log(err);
        Snackbar.show({
            text: "Signup failed",
            textColor: "white",
            backgroundColor: "red"
        })
    })
    
} 

export const signIn = (data) => async (dispatch) => {
    console.log(data);
    const { email, password } = data
    
    auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        console.log("Signin success");
        Snackbar.show({
            text: "Account signin",
            textColor: "white",
            backgroundColor: "#1b262c"
        })
    })
    .catch(err => {
        console.log(err);
        Snackbar.show({
            text: "Signin failed",
            textColor: "white",
            backgroundColor: "red"
        })
    })
}

export const signOut = () => async (dispatch) => {
    auth()
    .signOut()
    .then(() => {
        console.log("Signout success");
        Snackbar.show({
            text: "Account signin",
            textColor: "white",
            backgroundColor: "#1b262c"
        })
    })
    .catch(err => {
        console.log(err);
        Snackbar.show({
            text: "Signout failed",
            textColor: "white",
            backgroundColor: "red"
        })
    })
}

