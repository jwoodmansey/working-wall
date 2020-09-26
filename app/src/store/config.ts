import { configureStore } from "@reduxjs/toolkit";
import firebase from "firebase/app";
import { createFirestoreInstance } from "redux-firestore"; // <- needed if using firestore
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
});

export const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};
