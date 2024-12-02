import firebase from "firebase/compat/auth";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// const API_KEY = import.meta.env.apiKey;
console.log(API_KEY);
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBvcsAtDhnXYgVCbJBtbOGseOpQDWPTkyA",
	authDomain: "e-clone-a249d.firebaseapp.com",
	projectId: "e-clone-a249d",
	storageBucket: "e-clone-a249d.firebasestorage.app",
	messagingSenderId: "403149805287",
	appId: "1:403149805287:web:7fe982448bba817f91b442",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = firebase.firestore();
