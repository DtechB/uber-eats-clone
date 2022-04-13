import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDoc,
  setDoc,
  addDoc,
  FieldValue,
} from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTYX4yTAlRg5VWqR5mLPEPVLYA3k51pFw",
  authDomain: "uber-eats-clone-e8147.firebaseapp.com",
  projectId: "uber-eats-clone-e8147",
  storageBucket: "uber-eats-clone-e8147.appspot.com",
  messagingSenderId: "133979695250",
  appId: "1:133979695250:web:5575c5dd73652761401e4b",
  measurementId: "G-SRD54CF8LP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDoc, setDoc, addDoc, FieldValue };
