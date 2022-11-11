import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore'
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUS3u2DjMoCn_QAbzODLuqgQBktnYEIhM",
  authDomain: "frontend-a43b9.firebaseapp.com",
  projectId: "frontend-a43b9",
  storageBucket: "frontend-a43b9.appspot.com",
  messagingSenderId: "861182845860",
  appId: "1:861182845860:web:6c3572e367f3e20a02d731",
  measurementId: "G-N9VNG7EKMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db= getFirestore(app);
export const storage = getStorage(app);