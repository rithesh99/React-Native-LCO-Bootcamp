import firebase from "firebase";

class Firebase {
  constructor() {
    this.init();
    this.observeAuth();
  }

  init = () => {
    var firebaseConfig = {
      apiKey: "AIzaSyCbkr3pHh2xYz6q3oDcUGTl8-3tPAh9Lls",
      authDomain: "reactnativechatapp-be415.firebaseapp.com",
      databaseURL: "https://reactnativechatapp-be415.firebaseio.com",
      projectId: "reactnativechatapp-be415",
      storageBucket: "reactnativechatapp-be415.appspot.com",
      messagingSenderId: "116082336477",
      appId: "1:116082336477:web:65f9c407e588fe2a4e7134",
      measurementId: "G-R3VT4BCYBT"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  };

  observeAuth = () => {
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  };

  onAuthStateChanged = user => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {}
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref("message");
  }

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);

    const message = {
      _id,
      timestamp,
      text,
      user
    };
    return message;
  };

  on = callback => {
    this.ref
      .limitToLast(50)
      .on("child_added", snapshot => callback(this.parse(snapshot)));
  };

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp
      };
      this.append(message);
    }
  };

  append = message => this.ref.push(message);

  off() {
    this.ref.off();
  }
}

Firebase.shared = new Firebase();
export default Firebase;
