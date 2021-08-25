import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6nQM0ffQyJ6K__T7Fqwj6IkCdwONwUfg",
  authDomain: "ace-scan.firebaseapp.com",
  projectId: "ace-scan",
  storageBucket: "ace-scan.appspot.com",
  messagingSenderId: "952391748144",
  appId: "1:952391748144:web:1d65ad8c7e4fb45585fbf5",
  measurementId: "G-58TBGHGCHJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// firebase.auth().onAuthStateChanged((user) => {
//   store.dispatch("fetchUser", user);
// });

export default firebaseApp.firestore();
