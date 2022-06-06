import firebase from 'firebase/app'
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyASl1BmSbD8YXmIdslQt0L9gvClYz7bDrE",
  authDomain: "react-firebase-todo-29447.firebaseapp.com",
  projectId: "react-firebase-todo-29447",
  storageBucket: "react-firebase-todo-29447.appspot.com",
  messagingSenderId: "296990367642",
  appId: "1:296990367642:web:b3d06cfc12cdbd6f7de423",
  measurementId: "G-NM4J5S8CCZ"
})

const db = firebase.firestore(firebaseApp)

export { db };

