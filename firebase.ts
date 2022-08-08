import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, updateProfile, onAuthStateChanged, signOut, Auth, signInWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, getDoc, doc, serverTimestamp, setDoc, updateDoc} from "firebase/firestore"
// import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useRecoilState } from "recoil"
// import { userState } from "./atoms/userAtom";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyC-36GJ-thH5Jb_gLLQvkcpEaywGl7T3uQ",
  authDomain: "kaduna-markets.firebaseapp.com",
  projectId: "kaduna-markets",
  storageBucket: "kaduna-markets.appspot.com",
  messagingSenderId: "804951898792",
  appId: "1:804951898792:web:03425704240f9a7552209d"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore handle
export const db = getFirestore()

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth()


// Sign up Functionality
export const signUp = async (name: string, email: string, password: string) => {

  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  
  const user = userCredential.user

  updateProfile(auth.currentUser, {
    displayName: name
  })

  // make copy of form data
  const userStore = {
    name,
    email,
    regTime: serverTimestamp()
  }

  setDoc(doc(db, "users", user.uid), userStore)

  return user
}


// login
export const logIn = async (email: string, password: string) => {

  try {

    const userCredential = await signInWithEmailAndPassword(auth, email, password)

    // setLoggedIn(userCredential)
  
    return userCredential
  
  } catch (error) {

    toast.error("Login failed")

  }

}

// Sign out functionality
export const logOut = async () => {
  // const router = useRouter()

  try {

    await signOut(auth)

  } catch (error) {

    toast.error("Logout failed")

  }

}

// Update user

// export const updateUser = () => {
//   updateProfile()
//   updateDoc()
// }

// Forgot password
export const resetPassword = async (email: any) => {
  // console.log(email)
  try{

    await sendPasswordResetEmail(auth, email)
    toast.success("Reset link has been sent")
    alert("Access login link via your email")

  } catch(error) {

    toast.error("Sorry, Couldn't complete task")
    console.log(error)
  }
}

export const googleLogin = async () => {

  try{
    // const router = useRouter()
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    const user = result.user

    if(user) {
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)
    
    if(!docSnap.exists()){
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        timestamp: serverTimestamp()
      })
    }
    
    }

  } catch(error) {
    toast.error("Could not authorize with Google")
  }
}

// Custom react hook 
export function useAuth() {
  const [currentUser, setCurrentUser] = useState(null)

  // setting current user
  // useEffect(() => {
  //   const unsub = onAuthStateChanged(auth, (user) => {
  //     if(user) {
  //       setCurrentUser(user)
  //       console.log(currentUser)
  //     }else {
  //       setCurrentUser(null)
        
  //     }
  //   })
  //   return unsub
  // }, [])
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user))
    return unsub
  })

  return currentUser
}
