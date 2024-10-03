/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyYlD5AGWuwTckCcI4NGM8JmKy62h-u5w",
  authDomain: "agora-1c17a.firebaseapp.com",
  projectId: "agora-1c17a",
  storageBucket: "agora-1c17a.appspot.com",
  messagingSenderId: "145808880125",
  appId: "1:145808880125:web:cf58b1784d39e643dae994",
  measurementId: "G-P6FWW5Q72T",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
