import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyA8F2pT3ewELbaitlQDOkZHjBq1Dp86cgU",
    authDomain: "tec-sa-senai-ctai.firebaseapp.com",
    projectId: "tec-sa-senai-ctai",
    storageBucket: "tec-sa-senai-ctai.appspot.com",
    messagingSenderId: "139728122407",
    appId: "1:139728122407:web:d272cef7913fea8aa35402",
    measurementId: "G-T2G5HGPSX6"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;