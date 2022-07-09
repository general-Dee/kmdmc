import { getApp, getApps, initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// import Email from "next-auth/providers/email"
import { useEffect, useState } from "react"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-36GJ-thH5Jb_gLLQvkcpEaywGl7T3uQ",
  authDomain: "kaduna-markets.firebaseapp.com",
  projectId: "kaduna-markets",
  storageBucket: "kaduna-markets.appspot.com",
  messagingSenderId: "804951898792",
  appId: "1:804951898792:web:03425704240f9a7552209d"
};

// Initialize Firebase
// const app = !getApps.length ? initializeApp(firebaseConfig) : getApp
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

// Storage
export const storage = getStorage(app)

// Initialize Firebase Auth
const auth = getAuth()
export { auth } 

export function signUp(email:string, password:string) {
  return createUserWithEmailAndPassword(auth, email, password)
}

export function logIn(email:string, password:string) {
  return signInWithEmailAndPassword(auth, email, password)
}

export function logOut() {
  return signOut(auth)
}

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
    return unsub
  }, [])

  return currentUser
}