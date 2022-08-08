import { Stack } from '@mui/material'
import Head from 'next/head'
import Dash_header from '../../components/Dash_header'
import Feed from '../../components/Feed'
import Modal from '../../components/Modal'
import Rightbar from '../../components/Rightbar'
import Sidebar from '../../components/Sidebar'
import { modalState } from '../../atoms/Atom'
// import { userState } from '../../atoms/userAtom'
import { useRecoilState } from "recoil"
// import { db, useAuth } from '../../firebase'
import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Dash_body from '../../components/Dash_body'
import { useAuth } from '../../firebase'


const admin = () => {
    const [ currentUser, setCurrentUser ] = useState({
        name: "",
        email: ""
    })
    const auth = getAuth()
    const router = useRouter()

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
          if(user) {
            setCurrentUser({
                name: user.displayName,
                email: user.email
            })
            // console.log(user)
            
          }else {
            setCurrentUser(null)
            router.push("/login")
          }
        })
        return unsub
      }, [])
    // console.log(currentUser)
    return (
        // <Dashboard />
        <>
            <Head>
                <title>Dashboard &nbsp;|&nbsp; KMDMC</title>
                <link rel="icon" href="/logo.png" />
            </Head>
                <div>
                    <Dash_header />
                    <p>Loggedin as: {currentUser?.email}</p>
                    {/* <Dash_body  name="Dre"/> */}
                </div>
            
            </>
          
    )
}

export default admin
