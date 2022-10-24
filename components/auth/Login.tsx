import Head from 'next/head'
import { motion } from 'framer-motion'
import { FaGoogle } from 'react-icons/fa'
import Auth_header from '../Auth_header'
import Tradefair_login_form from '../Tradefair_login_form'
import Tradefair_annimation from '../Tradefair_annimation'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useState } from 'react'
import { toast } from 'react-toastify'




interface Props{
}

const Login = ({
  setUser,
  setAuthState
}) => {

    const [email, setEmail ] = useState("")
    const [password, setPassword ] = useState("")

    const handleLogin = () => {
        if(email !== null && password !== null) {
            signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                setUser(email)
                toast.success("Logged in")
                setAuthState('home')
            })
            .catch((err) => {
                toast.error(err)
            })
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
                <div className='w-full flex h-screen lg:w-1/2 bg-gray-100 items-center justify-center'>
                <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-200'>
            <h1 className='text-3xl font-semibold'>Kaduna Markets Traid fair</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please ender your details</p>

            <div className='mt-8'>
                <div>
                    <label htmlFor="email" className='text-lg font-medium'>Email</label>
                    <input type="text"  onChange={(e) => setEmail(e.target.value)} value={email} id='email' className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='Enter your email'/>
                </div> 
                <div>
                    <label htmlFor="password" className='text-lg font-medium'>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} id="password" className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='Enter your password'/>
                </div>
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input type="checkbox" id='remember'/>
                        <label htmlFor="remember" className='ml-2 font-medium text-base'>Remenber for 30 Days</label>
                    </div>
                    <button className='font-medium text-base text-violet-500'>Forgot Password</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button 
                    // onClick={handleLogin}
                    onClick={handleLogin}
                    className='hover:scale-[1.01] active:scale-[.9] active:duration-75 ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-bold text-lg font-bold'>Sign in</button>
                    <button className='flex border-2 p-3 rounded-3xl border-gray-100 items-center justify-center gap-2 hover:scale-[1.01] active:scale-[.98] active:duration-75 ease-in-out transition-all'>
                        <FaGoogle className="w-8 h-8"/>
                        Sign in with Google
                    </button>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>Don't have an account?</p>
                    <button 
                    onClick={() => setAuthState('register')}
                    className='text-violet-500 font-medium ml-2'>Sign up</button>
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

export default Login

// export async function getServerSideProps(context) {
//   // get the user
//   const session = await getSession(context);

//   return {
//     props: {
//       session
//     }
//   }
// }
