import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZjvWRV4HgU4ehn6JfbdxuXnOOsj01nsk",
  authDomain: "messenger-sv-whatsup.firebaseapp.com",
  projectId: "messenger-sv-whatsup",
  storageBucket: "messenger-sv-whatsup.appspot.com",
  messagingSenderId: "397884871292",
  appId: "1:397884871292:web:ae483d6a022a65d8bdeff9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider }