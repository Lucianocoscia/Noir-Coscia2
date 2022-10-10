import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '../src/Components/NavBar/NavBar.css';

// Import the functions you need from the SDKs you need FIREBASE  
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALvQ3aChZX2t9uZ3WrlBBsf-xAKtDb-Mc",
  authDomain: "noir-ecommerce.firebaseapp.com",
  projectId: "noir-ecommerce",
  storageBucket: "noir-ecommerce.appspot.com",
  messagingSenderId: "422500972245",
  appId: "1:422500972245:web:fab659630663e7ff81145c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
