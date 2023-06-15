import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBQmVpkx08oaWvUjJJHCYdiPwFH7Ua1liM",
  authDomain: "cinemahood-1bb2a.firebaseapp.com",
  projectId: "cinemahood-1bb2a",
  storageBucket: "cinemahood-1bb2a.appspot.com",
  messagingSenderId: "394843139506",
  appId: "1:394843139506:web:c6b72359101ab13d8348ab",
  measurementId: "G-9LPW8X2BNB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;