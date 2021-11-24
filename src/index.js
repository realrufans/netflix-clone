import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Globalstyle } from "./GlobalStyle";
import { seedDatabase } from './seed'

// Import the functions you need from the SDKs you need
 
import { FirebaseContext } from './context/firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCwvMLCO6ezis3Ne1H_oDA-lUoPQ0ZtZOM",
  authDomain: "netflix-84a57.firebaseapp.com",
  projectId: "netflix-84a57",
  storageBucket: "netflix-84a57.appspot.com",
  messagingSenderId: "88204343287",
  appId: "1:88204343287:web:dc295baaf476cc7f2720f2"
};

const firebase = window.firebase.initializeApp(config);
seedDatabase(firebase)


console.log('index.js')

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <Globalstyle />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);
