import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyC42SODXtQX1aum5iRjXSY-qCPk7GaQdMQ",
    authDomain: "sprint-9.firebaseapp.com",
    projectId: "sprint-9",
    storageBucket: "sprint-9.appspot.com",
    messagingSenderId: "779486060013",
    appId: "1:779486060013:web:cb442d702bc5f5c34ddbe4",
    measurementId: "G-TS46JJ4RYY"
  };
  

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
