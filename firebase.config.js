import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAotcCy57nwRmADCsHu2O_2VudD6YKOrYk",
    authDomain: "bettina-snacks.firebaseapp.com",
    databaseURL: "https://bettina-snacks-default-rtdb.firebaseio.com",
    projectId: "bettina-snacks",
    storageBucket: "bettina-snacks.appspot.com",
    messagingSenderId: "911647183535",
    appId: "1:911647183535:web:f5c87a6179456722b17a5a",
  };
  
// Initialise the app only if there is no app otherwise it will get reinitialise everytime the page gets refreshed
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig) 

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage}