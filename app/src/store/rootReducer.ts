import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export type RootState = ReturnType<typeof rootReducer>;