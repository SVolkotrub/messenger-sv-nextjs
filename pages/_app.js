import '../styles/globals.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  useEffect } from 'react';
import { auth, db } from "../firebaseConfig";
import Login from '../components/Login';
import {  doc, setDoc, serverTimestamp } from "firebase/firestore"; 


function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (user ) {
  const userRef = doc(db, 'users', user.uid);
      setDoc(userRef, {
        userName: user.displayName,
        email: user.email,
        lastSeen: serverTimestamp(),
        photoURL: user.photoURL,
      }, { merge: true });
    }
  }, [user]);

    if (loading) {
      return (
      <div>Loading</div>
    
    );
  };
  if (!user) {
      return  <Login />
  };

  return <Component {...pageProps} />
}

export default MyApp
