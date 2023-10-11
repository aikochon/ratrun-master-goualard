import { initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
//import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
//import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getAuth, connectAuthEmulator } from "firebase/auth";

import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCnu3kFqiCWsjyKdtlPOZLNPLsnd0FC71s",
    authDomain: "ratrun-master.firebaseapp.com",
    projectId: "ratrun-master",
    storageBucket: "ratrun-master.appspot.com",
    messagingSenderId: "569214282480",
    appId: "1:569214282480:web:26a58626d2b56d28e7f035",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const isEmulating = window.location.hostname === "localhost";
  if (isEmulating) {
    const auth = getAuth();
    connectAuthEmulator(auth, "http://localhost:3000");

    //const storage = getStorage();
    //connectStorageEmulator(storage, "localhost", 9199);

    //const db = getFirestore();
    //connectFirestoreEmulator(db, 'localhost', 8080);

    // const functions = getFunctions();
    // connectFunctionsEmulator(functions, "localhost", 5001);
  }
});
