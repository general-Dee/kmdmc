import Head from 'next/head'
import { motion } from 'framer-motion'
// import { auth } from '../../firebase'
// import { Auth, onAuthStateChanged, User } from 'firebase/auth'
// import Login from './Login'
// import Register from './register'
// import Home from './home'
import { FaGoogle } from 'react-icons/fa'
import Auth_header from '../Auth_header'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { toast } from 'react-toastify'
// import { useEffect, useState } from 'react'
// import Footer from '../../components/Footer'




interface Props{
}

const Register = ({
  setAuthState,
  setUser
}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onHandleSubmit = () => {
    if(email !== null && password !== null) {
        createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setUser(user.user.email)
        toast.success("Registration Successfull")
        setAuthState('home')
      }).catch((err) => console.log(err))
    }
  }

  return (
    <motion.div className=" " 
    >
      <Head>
        <title>Home &nbsp;|&nbsp; KMDMC</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Auth_header />
    
          <div className='tradefair_container'>
                <div className='w-full flex h-screen bg-gray-100 items-center justify-center'>
                <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-200'>
            <h1 className='text-3xl font-semibold'>Register</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Please ender your details</p>

            <div className='mt-8'>
                <div>
                    <label htmlFor="email" className='text-lg font-medium'>Full Name</label>
                    <input type="text" className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='Enter your Full Name'/>
                </div> 
                <div>
                    <label htmlFor="email" className='text-lg font-medium'>Phone Number</label>
                    <input type="text" className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='Enter your Phone Number'/>
                </div> 
                <div>
                    <label htmlFor="email" className='text-lg font-medium'>Email</label>
                    <input type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='Enter your Email'/>
                </div> 
                <div>
                    <label htmlFor="email" className='text-lg font-medium'>Password</label>
                    <input type="password" 
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='Enter your password'/>
                </div>
                {/* <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input type="checkbox" id='remember'/>
                        <label htmlFor="remember" className='ml-2 font-medium text-base'>Remenber for 30 Days</label>
                    </div>
                    <button className='font-medium text-base text-violet-500'>Forgot Password</button>
                </div> */}
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button 
                    onClick={onHandleSubmit}
                    className='hover:scale-[1.01] active:scale-[.9] active:duration-75 ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-bold text-lg font-bold'>
                      Register
                    </button>
                    <button className='flex border-2 p-3 rounded-3xl border-gray-100 items-center justify-center gap-2 hover:scale-[1.01] active:scale-[.98] active:duration-75 ease-in-out transition-all'>
                        <FaGoogle className="w-8 h-8"/>
                        Sign up with Google
                    </button>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>Already have an account?</p>
                    <button 
                    onClick={() => setAuthState('login')}
                    className='text-violet-500 font-medium ml-2'>Sign In</button>
                </div>
            </div>
        </div>
            </div>
      </div>
      {/* <Footer /> */}
    </motion.div>
  )
}

export default Register

// export async function getServerSideProps(context) {
//   // get the user
//   const session = await getSession(context);

//   return {
//     props: {
//       session
//     }
//   }
// }
