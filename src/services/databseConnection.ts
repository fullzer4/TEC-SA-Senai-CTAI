import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

let firebaseConfig = {
  apiKey: "AIzaSyA8F2pT3ewELbaitlQDOkZHjBq1Dp86cgU",
  authDomain: "tec-sa-senai-ctai.firebaseapp.com",
  databaseURL: "https://tec-sa-senai-ctai-default-rtdb.firebaseio.com",
  projectId: "tec-sa-senai-ctai",
  storageBucket: "tec-sa-senai-ctai.appspot.com",
  messagingSenderId: "139728122407",
  appId: "1:139728122407:web:e232bf6d54e31f93a35402",
  measurementId: "G-S1ZFLCS9V0"
};

if(!firebase.apps.length){
  console.log(`Conectando...  Status:${firebase.apps.length}`);
  firebase.initializeApp(firebaseConfig);
  console.log(`Conectado  Status:${firebase.apps.length}`);
}

export default firebase;