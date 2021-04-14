import firebase from 'firebase/app';

import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBos2895I9F-NmH0jNSDajfSCXfOUf8kz4",
    authDomain: "yt-clone-11a2e.firebaseapp.com",
    projectId: "yt-clone-11a2e",
    storageBucket: "yt-clone-11a2e.appspot.com",
    messagingSenderId: "297656001157",
    appId: "1:297656001157:web:bad8e61f688c4c77d1bfec",
    measurementId: "G-Q2ZKMYXWEN"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.auth()