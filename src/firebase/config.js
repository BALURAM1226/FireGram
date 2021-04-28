import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDUqq_zFSM-lmCzq3yN6faWZhX-SbxcBbg",
  authDomain: "bk-firegram.firebaseapp.com",
  projectId: "bk-firegram",
  storageBucket: "bk-firegram.appspot.com",
  messagingSenderId: "759489696337",
  appId: "1:759489696337:web:30a1d94d38cb41d8c31e70"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
export default firebase;
