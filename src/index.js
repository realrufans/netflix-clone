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
  apiKey: "AIzaSyAtdALpn1FehPYbeLrtmgsCnfMAcVwn6YA",
  authDomain: "netflix-clone-6309c.firebaseapp.com",
  projectId: "netflix-clone-6309c",
  storageBucket: "netflix-clone-6309c.appspot.com",
  messagingSenderId: "79341524545",
  appId: "1:79341524545:web:eee9971ca4bb773c5898c0",
};

const firebase = window.firebase.initializeApp(config);
seedDatabase(firebase)

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <Globalstyle />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);
