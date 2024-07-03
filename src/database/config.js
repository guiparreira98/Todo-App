
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBMMTJM7OJkTFOyCYopt6fAdMA-Ziky7jk",
  authDomain: "tasks-f54ef.firebaseapp.com",
  projectId: "tasks-f54ef",
  storageBucket: "tasks-f54ef.appspot.com",
  messagingSenderId: "1047455723328",
  appId: "1:1047455723328:web:7bcc30138fee4cded254a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Firestore and Initialize Cloud  get a reference to the service
export const db = getFirestore(app);