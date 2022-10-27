import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { Auth, onAuthStateChanged, User } from 'firebase/auth'
import Head from 'next/head'
import Auth_header from '../../components/Auth_header'
import { motion } from 'framer-motion'
import Tradefair_annimation from '../../components/Tradefair_annimation'
// import Login from '../../components/auth/Login'
// import Register from '../../components/auth/Register'
// import Home from '../../components/auth/Home'


// type Props = {
// }

function index() {
  const [fullname, setFullname ] = useState("")
  const [phone, setPhone ] = useState("")
  const [email, setEmail ] = useState("")
  const [businessName, setBusinessName] = useState("")
  const [typeOfTrade, setTypeOfTrade] = useState("")
  const [numberOfStalls,  setNumberOfStalls ] = useState("")

    const handleLogin = () => {
      if(email !== null) {
         
      }
  }


  // useEffect(() => {
  //   const unSubscribeAuth = onAuthStateChanged(auth, 
  //     async authenticatedUser => {
  //       if(authenticatedUser) {
  //         setUser(authenticatedUser.email)
  //         setAuthState('home')
  //       } else {
  //         setUser(null)
  //         setAuthState('login')
  //       }
  //     })

  //     return unSubscribeAuth
  // }, [user])

  // if( authState === null ) return <div className='font-bold text-center text-5xl'>Loading...</div>
  // if( authState === 'login' ) return <Login setAuthState={setAuthState} setUser={user} />
  // if( authState === 'register' ) return <Register setAuthState={setAuthState} setUser={user} />
  // if( user ) return <Home setAuthState={setAuthState} setUser={setUser} user={user}/>
   return (
    // <div className='flex justify-center items-center text-5xl font-bold text-center'>
    //   <h1>Tradefair 2.0</h1>
    // </div>

    <motion.div className="">
      <Head>
        <title>Home &nbsp;|&nbsp; KMDMC</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Auth_header />
    
          <div className='tradefair_container'>
                <div className='w-full flex h-screen lg:w-1/2 bg-gray-100 items-center justify-center'>
                <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-200'>
            <h1 className='text-3xl font-semibold'>Kaduna Markets Tradefair</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please ender your details</p>

            <div className='mt-8'>
                <div>
                    <label htmlFor="email" className='text-lg font-medium'>Full Name</label>
                    <input type="text"  onChange={(e) => setFullname(e.target.value)} value={fullname} id='email' className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='Enter your email'/>
                </div> 
                <div>
                    <label htmlFor="phone" className='text-lg font-medium'>Phone Number</label>
                    <input type="number"  onChange={(e) => setFullname(e.target.value)} value={fullname} id='phone' className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='Enter your email'/>
                </div> 
                <div>
                    <label htmlFor="email" className='text-lg font-medium'>Email</label>
                    <input type="email"  onChange={(e) => setEmail(e.target.value)} value={email} id='email' className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='Enter your email'/>
                </div> 
                <div>
                    <label htmlFor="password" className='text-lg font-medium'>Business Name</label>
                    <input type="text" onChange={(e) => setBusinessName(e.target.value)} value={businessName} id="password" className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='Enter your business name'/>
                </div>
                <div>
                    <label htmlFor="typeOfTrade" className='text-lg font-medium'>Type of trade</label>
                    <input type="text" onChange={(e) => setTypeOfTrade(e.target.value)} value={typeOfTrade} id="typeOfTrade" className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='Enter your password'/>
                </div>
                <div>
                    <label htmlFor="numberOfStalls" className='text-lg font-medium'>How many stalls do you require?</label>
                    <input type="number" onChange={(e) => setNumberOfStalls(e.target.value)} value={numberOfStalls} id="numberOfStalls" className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='Enter your password'/>
                </div>
                <div className='mt-5'>
                    <label htmlFor="returningTrader"> Returning Trader? </label>
                    <input type="checkbox" id="returningTrader" className='cursor-pointer h-8 w-16 rounded-full appearance-none bg-gray-200 checked:bg-pink-300 bg-opacity-5 border-2 border-violet-700 transition duration-200 relative'/>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button 
                    onClick={handleLogin}
                    className=''>Register</button>

                </div> 
            </div>
        </div>
            </div>
            <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-50'>
                <Tradefair_annimation />
            </div>
      </div>
      {/* <Footer /> */}
    </motion.div>
  )
}

export default index