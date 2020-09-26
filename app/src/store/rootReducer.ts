import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore

const rootReducer = combineReducers({
  firebaseReducer,
  firestoreReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
