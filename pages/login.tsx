import Head from 'next/head'
import Image from "next/image"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from "react-hook-form"
import { DotLoader, GridLoader } from 'react-spinners'
import Oauth from '../components/Oauth'
// import Dashboard from '../components/Dashboard'
import { logIn } from '../firebase'
// import router from 'react'


function Login() {   

    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const {email, password } = formData 

    const router = useRouter()

    const onChange = (e: any) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))

        // const formDataCopy = [...formData]
    }

    const handleLogin = async (e: any) => {
        e.preventDefault()
        setLoading(true)

        // Sign up user
        logIn(email, password) 
        setFormData({
            email: "",
            password: ""
        }) 
        router.push("/dashboard")
        setLoading(false)
            
    }

    return (
        <>
            <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
                <Head>
                    <title>KMDMC</title> 
                    <link rel="icon" href="/logo.png" />
                </Head>
                
                <Image 
                src= {"/img/login/login2.jpg"}
                layout= 'fill'
                className='-z-4 !hidden opacity-60 sm:!inline' 
                objectFit='cover'
                />
                    

                <div className="absolute left-4 top-4 cursor-pointer rounded-md mb-3 bg-slate-200 p-3">
                    <img src="/logo.png" 
                    className=" object-contain md:left-10 md:top-6"
                    width={40} 
                    height={50} 
                    />
                </div>

                <form 
                className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14' onSubmit={handleLogin}>
                    <h1 className='text-[#f1f1f1] text-4xl font-semibold'>Login</h1>
                    <div className="space-y-4">
                        <label htmlFor="email" className='inline-block w-full'>
                            <input type="email" id="email" name="email" placeholder="Email" className='input' onChange={onChange} />
                        </label>
                        <label htmlFor="password" className='inline-block w-full'>
                            <input type="password" id="password" name="password" placeholder='Password' className='input' onChange={onChange}/>
                        </label>
                    </div>
                    <button type='submit' className='text-white w-full rounded bg-[#e50914] py-3 font-semibold'>
                        Sign In
                    </button>
                    <div className='text-white flex justify-between'>
                        <Link href={"/forgotPassword"}>
                            <p className='cursor-pointer text-white/40 hover:text-white'> Forgot Password?</p>
                        </Link>
                    </div>
                    {/* OAuth */}
                    <Oauth />
                    
                    <div className="signup text-white">
                        Not a user?{" "}
                        <Link href={"/signup"} >
                            <span className='underline hover:scale-50 hover:text-gray-400 cursor-pointer'>Signup</span>
                        </Link>
                    </div>

            </form>
        </div>
        </> 
    )
     
}

export default Login