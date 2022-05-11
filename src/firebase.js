import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDM4do5CXm6hEEm5bel-uMBo4JaOTeDA_c",
  authDomain: "source-election-voting-s-2d7b5.firebaseapp.com",
  projectId: "source-election-voting-s-2d7b5",
  storageBucket: "source-election-voting-s-2d7b5.appspot.com",
  messagingSenderId: "21074707556",
  appId: "1:21074707556:web:c91695b2188c2d97008b71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app)
export default app;
