import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuv5I89PWdNRygTZe0PrATsZGP8oQdjlA",
    authDomain: "host-4dfe7.firebaseapp.com",
    projectId: "host-4dfe7",
    storageBucket: "host-4dfe7.appspot.com",
    messagingSenderId: "884557550471",
    appId: "1:884557550471:web:4c1d09b8eab0655d557922",
    measurementId: "G-EREPYVX2HQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;