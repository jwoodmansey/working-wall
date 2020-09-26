import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import firebase from "firebase/app";
import "firebase/firestore";

// eslint-disable-next-line @typescript-eslint/no-var-requires
// require("dotenv").config({ debug: true });

//   console.log("PROCESS", process.env.FIREBASE_CONFIG);
const firebaseConfig = process.env.FIREBASE_CONFIG
  ? JSON.parse(process.env.FIREBASE_CONFIG)
  : {
      apiKey: "AIzaSyC2HUqp0j9kaRRTnTa6kV8HtKUlo_yBD1c",
      authDomain: "working-wall.firebaseapp.com",
      databaseURL: "https://working-wall.firebaseio.com",
      projectId: "working-wall",
      storageBucket: "working-wall.appspot.com",
      messagingSenderId: "918611508376",
      appId: "1:918611508376:web:1ef0ba4545baab3b21e4ed",
    };

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
