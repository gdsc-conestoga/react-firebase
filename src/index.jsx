import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase'

// Replace with your configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGYGPQ3KFKWqnNp3pEr-G5-aENQB4vwPE",
  authDomain: "react-fire-26529.firebaseapp.com",
  projectId: "react-fire-26529",
  storageBucket: "react-fire-26529.appspot.com",
  messagingSenderId: "788595529485",
  appId: "1:788595529485:web:9816656c39556982eb8244",
  measurementId: "G-LH7FWGM7BQ"
};

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);