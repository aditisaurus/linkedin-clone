import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBv_JQaBCg4zDasdjS2U31pLf90Aueqwoc",
    authDomain: "linkedin-clone-f5def.firebaseapp.com",
    projectId: "linkedin-clone-f5def",
    storageBucket: "linkedin-clone-f5def.appspot.com",
    messagingSenderId: "1083990125084",
    appId: "1:1083990125084:web:089c9297f5fd603b058dd9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export {db, auth};