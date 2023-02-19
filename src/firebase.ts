import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC-lEPnR0yKpnmEpT6cTNHImrT5lvjQXnc",
  authDomain: "chatgpt-messenger-e4368.firebaseapp.com",
  projectId: "chatgpt-messenger-e4368",
  storageBucket: "chatgpt-messenger-e4368.appspot.com",
  messagingSenderId: "318422685763",
  appId: "1:318422685763:web:dc4e9efe47a9721dc31cf6",
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
