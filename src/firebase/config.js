// import '../index.css'
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';



// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCDvvp84BIW0gZ08iv5O3u2dP_wh-OlcY4",
    authDomain: "nandit-firebase.firebaseapp.com",
    projectId: "nandit-firebase",
    storageBucket: "nandit-firebase.appspot.com",
    messagingSenderId: "900198333344",
    appId: "1:900198333344:web:3ac001d0916dd7b5d5c2c5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage,projectFirestore,timestamp};