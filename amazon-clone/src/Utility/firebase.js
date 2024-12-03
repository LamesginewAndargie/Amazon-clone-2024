// import firebase from "firebase/compat/auth";
// import { getAuth } from "firebase/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//Keep the API key in the enviroment variable before keeping firebase in gitHUb
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Resolve the path to the .env file
// const envPath = path.resolve(__dirname, "../../.env");
// dotenv.config({ path: envPath });

// const API_KEY = process.env.VITE_API_KEY;
// const API_KEY = import.meta.env.VITE_API_KEY;
// console.log("API Key:", API_KEY);

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBvcsAtDhnXYgVCbJBtbOGseOpQDWPTkyA",
	authDomain: "e-clone-a249d.firebaseapp.com",
	projectId: "e-clone-a249d",
	storageBucket: "e-clone-a249d.firebasestorage.app",
	messagingSenderId: "403149805287",
	appId: "1:403149805287:web:7fe982448bba817f91b442",
};
// console.log("API Key:", firebaseConfig.apiKey);
// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = firebase.firestore();

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
