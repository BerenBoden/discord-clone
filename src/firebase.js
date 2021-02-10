import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGshVmnQoHM5IK73kaO-u7IHVRaW4TVBo",
    authDomain: "discord-clone-7d2eb.firebaseapp.com",
    projectId: "discord-clone-7d2eb",
    storageBucket: "discord-clone-7d2eb.appspot.com",
    messagingSenderId: "1006075093080",
    appId: "1:1006075093080:web:34b3ad90798290e892aa2d"
};

//Initializing Firebase application. More information: https://firebase.google.com/docs/reference/android/com/google/firebase/FirebaseApp
const firebaseApp = firebase.initializeApp(firebaseConfig);
//Initialize database using Firestore
const db = firebaseApp.firestore();
//Initialize Firebase user authentication
const auth = firebase.auth();
//For setting up Google login functionallity
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;