import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

let firebaseConfig = {
  apiKey: "AIzaSyC40eYIM94QWyalRR1p08ZHT1-h6xPXA-Y",
  authDomain: "testsa-7b6ce.firebaseapp.com",
  projectId: "testsa-7b6ce",
  storageBucket: "testsa-7b6ce.appspot.com",
  messagingSenderId: "712203267320",
  appId: "1:712203267320:web:f761f5a0bcd56967299f0d",
  measurementId: "G-WHPLGN0G4L"
};

if(!firebase.apps.length){
  console.log(`Conectando...  Status:${firebase.apps.length}`);
  firebase.initializeApp(firebaseConfig);
  console.log(`Conectado  Status:${firebase.apps.length}`);
}

export default firebase;