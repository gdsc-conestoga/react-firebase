import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4JfVLXteOWqcQCQD_NZ536os-xNy-SvI",
  authDomain: "fir-react-52d47.firebaseapp.com",
  projectId: "fir-react-52d47",
  storageBucket: "fir-react-52d47.appspot.com",
  messagingSenderId: "413532488125",
  appId: "1:413532488125:web:78ac0c050f3d525d08d2d4",
  measurementId: "G-11402XPVZJ"
};

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);