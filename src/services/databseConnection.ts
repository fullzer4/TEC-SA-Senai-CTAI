import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

let firebaseConfig = {
  apiKey: "AIzaSyACr2yYDuhVBQbSEHx3mUb8PIMuDr6YDDw",
  authDomain: "testsa2.firebaseapp.com",
  projectId: "testsa2",
  storageBucket: "testsa2.appspot.com",
  messagingSenderId: "708420729541",
  appId: "1:708420729541:web:e65682b9ce5a92a200ceac",
  measurementId: "G-BT3Z6G4286"
};

if(!firebase.apps.length){
  console.log(`Conectando...  Status:${firebase.apps.length}`);
  firebase.initializeApp(firebaseConfig);
  console.log(`Conectado  Status:${firebase.apps.length}`);
}

export default firebase;