import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
// import { Auth, onAuthStateChanged, User } from 'firebase/auth'
import Head from 'next/head'
import Auth_header from '../../components/Auth_header'
import { collection, doc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore'
import { DotLoader, GridLoader } from 'react-spinners'
import { motion } from 'framer-motion'
import Tradefair_annimation from '../../components/Tradefair_annimation'
import { toast } from 'react-toastify'
import { light } from '@mui/material/styles/createPalette'
// import Login from '../../components/auth/Login'
// import Register from '../../components/auth/Register'
// import Home from '../../components/auth/Home'


// type Props = {
// }

function index() {

const [loading, setLoading ] = useState(true)
const [clients, setClients ] = useState([])

const colRef = collection(db, "vendors")

const q = query(colRef, orderBy('timeStamp', "desc"))

const counter = 0
  useEffect(() => 
        // onSnapshot(collection(db, "vendors"), (snapshot) => 
        // setClients(snapshot.docs.map((doc) => doc.data()))
        onSnapshot(q, (snapshot) => {
          setClients(snapshot.docs.map((doc) => doc.data()))

        }), [])

  // if( authState === null ) return <div className='font-bold text-center text-5xl'>Loading...</div>
  // if( authState === 'login' ) return <Login setAuthState={setAuthState} setUser={user} />
  // if( authState === 'register' ) return <Register setAuthState={setAuthState} setUser={user} />
  // if( user ) return <Home setAuthState={setAuthState} setUser={setUser} user={user}/>
   return (
    <motion.div className="">
      <Head>
        <title>Tradefair 3.0</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Auth_header />
         <h1>{clients.length} vendors have registered</h1>
         <div className='flex flex-col w-[80%] p-10 mx-auto'>
         <ul>
            {clients.map(client => (
                <li className='w-80 text-black mx-auto m-5  px-4 py-8 bg-white rounded-lg'>
                        <p>Name: {client.fullname}</p>
                        <p>Age: {client.age}</p>
                        <p>Email: {client.email}</p>
                        <p>Phone: {client.phone}</p>
                        <p>Occupation: {client.occupation}</p>
                        <p>Business name: {client.businessName}</p>
                        <p>Number of stalls: {client.numberOfStalls}</p>
                        <p>Type of trade: {client.typeOfTrade}</p>
                        <p>Number: {counter++} </p>
                </li>
            ))}
         </ul>
         </div>
         
    </motion.div>
  )
}

export default index