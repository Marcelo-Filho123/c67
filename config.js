import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAecHi8-_p1GfWuHfHpm0-ty5sTjTll4ZM",
    authDomain: "cl67-75d71.firebaseapp.com",
    projectId: "cl67-75d71",
    storageBucket: "cl67-75d71.appspot.com",
    messagingSenderId: "620081141834",
    appId: "1:620081141834:web:3469e6eba82c543ca9eeb3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export default firebase.database();