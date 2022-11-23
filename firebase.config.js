// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAYnuRC66xTLuD6_W-3e-winblPUkiy6Q8",
  authDomain: "hungrysoul-e5712.firebaseapp.com",
  databaseURL: "https://hungrysoul-e5712-default-rtdb.firebaseio.com",
  projectId: "hungrysoul-e5712",
  storageBucket: "hungrysoul-e5712.appspot.com",
  messagingSenderId: "542444295512",
  appId: "1:542444295512:web:802e8377f982ebf393012d",
  measurementId: "G-1XEZ120DQP"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };